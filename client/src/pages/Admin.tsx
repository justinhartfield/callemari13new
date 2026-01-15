/**
 * Admin Panel for Martí 13
 * Access code: 420
 * 
 * Features:
 * - Event management (create, edit, delete)
 * - Food item management (Hall of Fame)
 * - Chef profile management
 * - Site settings
 */

import { useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import {
  Calendar,
  UtensilsCrossed,
  Users,
  Settings,
  Plus,
  Edit,
  Trash2,
  ArrowLeft,
  Lock,
  Image,
  Save,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Search,
  Home,
  Clock,
  Sparkles,
  Loader2,
  Wand2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { ImageUpload, GalleryUpload } from "@/components/ImageUpload";
import { AIImageGenerator } from "@/components/AIImageGenerator";
import { events as staticEvents } from "@/data/events";
import { allFoodItems } from "@/data/allFoodItems";

const ADMIN_CODE = "420";

// Utility to get next Friday at 11AM
function getNextFriday11AM(): { date: string; time: string } {
  const now = new Date();
  const dayOfWeek = now.getDay();
  // Calculate days until next Friday (0=Sun, 5=Fri)
  let daysUntilFriday = (5 - dayOfWeek + 7) % 7;
  // If today is Friday, get next Friday
  if (daysUntilFriday === 0) daysUntilFriday = 7;
  const nextFriday = new Date(now);
  nextFriday.setDate(now.getDate() + daysUntilFriday);
  return {
    date: nextFriday.toISOString().split('T')[0],
    time: "11:00"
  };
}

// Food item categories for grouping
const FOOD_CATEGORIES = [
  "Bocadillos",
  "Tortillas",
  "Hamburguesas",
  "Bandejas",
  "Pescados",
  "Carnes",
  "Otros"
] as const;

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState("");
  const [activeTab, setActiveTab] = useState("events");

  // Check if already authenticated (stored in sessionStorage)
  useEffect(() => {
    const storedAuth = sessionStorage.getItem("marti13_admin_auth");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (code === ADMIN_CODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem("marti13_admin_auth", "true");
      toast.success("¡Bienvenido al panel de administración!");
    } else {
      toast.error("Código incorrecto");
      setCode("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("marti13_admin_auth");
    setCode("");
  };

  if (!isAuthenticated) {
    return <LoginScreen code={code} setCode={setCode} onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-ink text-cream border-b-4 border-orange">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors">
                <ArrowLeft size={20} />
                <span>Volver al sitio</span>
              </Link>
              <div className="h-6 w-px bg-cream/30" />
              <h1 className="text-xl font-bold">Panel de Administración</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="border-cream/30 text-cream hover:bg-cream/10"
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-cream border-4 border-ink">
            <TabsTrigger 
              value="events" 
              className="flex items-center gap-2 data-[state=active]:bg-orange data-[state=active]:text-cream"
            >
              <Calendar size={18} />
              Eventos
            </TabsTrigger>
            <TabsTrigger 
              value="homepage" 
              className="flex items-center gap-2 data-[state=active]:bg-orange data-[state=active]:text-cream"
            >
              <Home size={18} />
              Inicio
            </TabsTrigger>
            <TabsTrigger 
              value="food" 
              className="flex items-center gap-2 data-[state=active]:bg-orange data-[state=active]:text-cream"
            >
              <UtensilsCrossed size={18} />
              Hall of Fame
            </TabsTrigger>
            <TabsTrigger 
              value="chefs" 
              className="flex items-center gap-2 data-[state=active]:bg-orange data-[state=active]:text-cream"
            >
              <Users size={18} />
              Cocineros
            </TabsTrigger>
            <TabsTrigger 
              value="settings" 
              className="flex items-center gap-2 data-[state=active]:bg-orange data-[state=active]:text-cream"
            >
              <Settings size={18} />
              Ajustes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            <EventsManager />
          </TabsContent>

          <TabsContent value="homepage">
            <HomepageManager />
          </TabsContent>

          <TabsContent value="food">
            <FoodItemsManager />
          </TabsContent>

          <TabsContent value="chefs">
            <ChefsManager />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

// Login Screen Component
function LoginScreen({ 
  code, 
  setCode, 
  onLogin 
}: { 
  code: string; 
  setCode: (code: string) => void; 
  onLogin: () => void;
}) {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-4 border-orange shadow-brutal bg-cream">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-cream" />
          </div>
          <CardTitle className="text-2xl font-bold text-ink">Panel de Administración</CardTitle>
          <p className="text-ink/70">Introduce el código de acceso</p>
        </CardHeader>
        <CardContent>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              onLogin();
            }}
            className="space-y-4"
          >
            <Input
              type="password"
              placeholder="Código de acceso"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="text-center text-2xl tracking-widest border-2 border-ink"
              maxLength={10}
            />
            <Button 
              type="submit" 
              className="w-full bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink"
            >
              Entrar
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/" className="text-ink/70 hover:text-ink text-sm">
              ← Volver al sitio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Events Manager Component
function EventsManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);

  // Fetch nextEvent settings to pre-fill new event form
  const { data: nextEventSettings } = trpc.settings.get.useQuery({ key: "nextEvent" });
  
  // Parse nextEvent data for pre-filling
  const nextEventData = useMemo(() => {
    if (nextEventSettings?.value) {
      try {
        const parsed = JSON.parse(nextEventSettings.value);
        return {
          title: parsed.title || "",
          date: parsed.date || "",
          description: parsed.description || "",
          image: parsed.image || "",
          chef: parsed.chef || "",
          menuItems: parsed.menuPreview || [],
          gallery: [],
        };
      } catch (e) {
        return null;
      }
    }
    return null;
  }, [nextEventSettings]);

  // Fetch events from API, fallback to static data
  const { data: dbEvents, isLoading: dbLoading, refetch } = trpc.events.list.useQuery();
  
  // Use database events if available, otherwise use static data
  const events = (dbEvents && dbEvents.length > 0) ? dbEvents : staticEvents.map((e, i) => ({
    id: parseInt(e.id) || i + 1,
    title: e.title,
    date: e.date,
    description: e.description,
    image: e.image,
    chef: (e as any).chef || null,
    menuItems: e.menuItems || [],
    gallery: e.gallery || [],
    isPublished: true
  }));
  const isLoading = dbLoading && (!staticEvents || staticEvents.length === 0);
  
  // Mutations
  const createEvent = trpc.events.create.useMutation({
    onSuccess: () => {
      toast.success("Evento creado correctamente");
      setIsCreateDialogOpen(false);
      refetch();
    },
    onError: (error) => {
      toast.error("Error al crear evento: " + error.message);
    }
  });

  const updateEvent = trpc.events.update.useMutation({
    onSuccess: () => {
      toast.success("Evento actualizado correctamente");
      setEditingEvent(null);
      refetch();
    },
    onError: (error) => {
      toast.error("Error al actualizar evento: " + error.message);
    }
  });

  const deleteEvent = trpc.events.delete.useMutation({
    onSuccess: () => {
      toast.success("Evento eliminado correctamente");
      refetch();
    },
    onError: (error) => {
      toast.error("Error al eliminar evento: " + error.message);
    }
  });

  const filteredEvents = events?.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.date.includes(searchTerm)
  ) || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-ink">Gestión de Eventos</h2>
          <p className="text-ink/70">Crea, edita y elimina eventos del almorzar</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink">
              <Plus size={18} className="mr-2" />
              Nuevo Evento
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Crear Nuevo Evento</DialogTitle>
            </DialogHeader>
            <EventForm 
              initialData={nextEventData}
              onSubmit={(data) => createEvent.mutate(data)} 
              isLoading={createEvent.isPending}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/50" size={20} />
        <Input
          placeholder="Buscar eventos por título o fecha..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-2 border-ink"
        />
      </div>

      {/* Events List */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin w-8 h-8 border-4 border-orange border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-ink/70">Cargando eventos...</p>
        </div>
      ) : filteredEvents.length === 0 ? (
        <Card className="border-2 border-ink">
          <CardContent className="py-12 text-center">
            <Calendar className="w-12 h-12 mx-auto text-ink/30 mb-4" />
            <p className="text-ink/70">No hay eventos que mostrar</p>
            <p className="text-ink/50 text-sm">Crea tu primer evento usando el botón de arriba</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="border-2 border-ink hover:shadow-brutal transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {/* Event Image */}
                  <div className="w-24 h-24 bg-ink/10 rounded border-2 border-ink overflow-hidden flex-shrink-0">
                    {event.image ? (
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Image className="w-8 h-8 text-ink/30" />
                      </div>
                    )}
                  </div>

                  {/* Event Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-ink truncate">{event.title}</h3>
                        <p className="text-sm text-ink/70">{event.date}</p>
                        {event.chef && (
                          <p className="text-sm text-orange">Chef: {event.chef}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingEvent(event)}
                          className="border-ink"
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            if (confirm("¿Estás seguro de eliminar este evento?")) {
                              deleteEvent.mutate({ id: event.id });
                            }
                          }}
                          className="border-red-500 text-red-500 hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                    {event.description && (
                      <p className="text-sm text-ink/60 mt-2 line-clamp-2">{event.description}</p>
                    )}
                    {event.menuItems && event.menuItems.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {event.menuItems.slice(0, 3).map((item, i) => (
                          <span key={i} className="text-xs bg-orange/20 text-orange px-2 py-0.5 rounded">
                            {item}
                          </span>
                        ))}
                        {event.menuItems.length > 3 && (
                          <span className="text-xs text-ink/50">+{event.menuItems.length - 3} más</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={!!editingEvent} onOpenChange={(open) => !open && setEditingEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Evento</DialogTitle>
          </DialogHeader>
          {editingEvent && (
            <EventForm 
              initialData={editingEvent}
              onSubmit={(data) => updateEvent.mutate({ id: editingEvent.id, ...data })} 
              isLoading={updateEvent.isPending}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Event Form Component
function EventForm({ 
  initialData, 
  onSubmit, 
  isLoading 
}: { 
  initialData?: any; 
  onSubmit: (data: any) => void; 
  isLoading: boolean;
}) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    date: initialData?.date || "",
    description: initialData?.description || "",
    image: initialData?.image || "",
    chef: initialData?.chef || "",
    menuItems: initialData?.menuItems?.join("\n") || "",
    gallery: initialData?.gallery || [],
  });
  const [useUrlInput, setUseUrlInput] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      menuItems: formData.menuItems.split("\n").filter((item: string) => item.trim()),
      gallery: Array.isArray(formData.gallery) ? formData.gallery : [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Título del Evento *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="ej: Almorzar de Reyes"
            required
            className="border-2 border-ink"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Fecha *</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
            className="border-2 border-ink"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="chef">Chef</Label>
        <Input
          id="chef"
          value={formData.chef}
          onChange={(e) => setFormData({ ...formData, chef: e.target.value })}
          placeholder="ej: Justin"
          className="border-2 border-ink"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Descripción del evento..."
          rows={3}
          className="border-2 border-ink"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Imagen Principal</Label>
          <button
            type="button"
            onClick={() => setUseUrlInput(!useUrlInput)}
            className="text-xs text-orange hover:underline"
          >
            {useUrlInput ? "Subir archivo" : "Usar URL"}
          </button>
        </div>
        {useUrlInput ? (
          <>
            <Input
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://..."
              className="border-2 border-ink"
            />
            {formData.image && (
              <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded border-2 border-ink mt-2" />
            )}
          </>
        ) : (
          <ImageUpload
            value={formData.image}
            onChange={(url) => setFormData({ ...formData, image: url })}
            placeholder="Arrastra o haz clic para subir imagen principal"
          />
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="menuItems">Menú del Día (uno por línea)</Label>
        <Textarea
          id="menuItems"
          value={formData.menuItems}
          onChange={(e) => setFormData({ ...formData, menuItems: e.target.value })}
          placeholder="Tortilla de patatas&#10;Bocadillo de jamón&#10;Ensalada mixta"
          rows={4}
          className="border-2 border-ink"
        />
      </div>

      <div className="space-y-2">
        <Label>Galería de Fotos</Label>
        <GalleryUpload
          value={Array.isArray(formData.gallery) ? formData.gallery : []}
          onChange={(urls) => setFormData({ ...formData, gallery: urls })}
          maxImages={120}
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="submit" disabled={isLoading} className="bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink">
          {isLoading ? (
            <>
              <div className="animate-spin w-4 h-4 border-2 border-cream border-t-transparent rounded-full mr-2" />
              Guardando...
            </>
          ) : (
            <>
              <Save size={18} className="mr-2" />
              Guardar Evento
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

// Food Items Manager Component
function FoodItemsManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Fetch food items from API, fallback to static data
  const { data: dbFoodItems, isLoading: dbLoading, refetch } = trpc.foodItems.list.useQuery();
  
  // Use database food items if available, otherwise use static data
  const foodItems = (dbFoodItems && dbFoodItems.length > 0) ? dbFoodItems : allFoodItems.map((item, i) => ({
    id: i + 1,
    name: item.name,
    description: item.description || null,
    image: item.image || null,
    chef: item.chef || null,
    category: item.category || null,
    rank: item.rank || null,
    isPublished: true
  }));
  const isLoading = dbLoading && (!allFoodItems || allFoodItems.length === 0);

  const createFoodItem = trpc.foodItems.create.useMutation({
    onSuccess: () => {
      toast.success("Plato creado correctamente");
      setIsCreateDialogOpen(false);
      refetch();
    },
    onError: (error) => {
      toast.error("Error al crear plato: " + error.message);
    }
  });

  const updateFoodItem = trpc.foodItems.update.useMutation({
    onSuccess: () => {
      toast.success("Plato actualizado correctamente");
      setEditingItem(null);
      refetch();
    },
    onError: (error) => {
      toast.error("Error al actualizar plato: " + error.message);
    }
  });

  const deleteFoodItem = trpc.foodItems.delete.useMutation({
    onSuccess: () => {
      toast.success("Plato eliminado correctamente");
      refetch();
    },
    onError: (error) => {
      toast.error("Error al eliminar plato: " + error.message);
    }
  });

  const categories = ["Bocadillos", "Tortillas", "Hamburguesas", "Bandejas", "Ensaladas", "Carnes", "Pescados y Mariscos", "Especialidades"];

  const filteredItems = foodItems?.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-ink">Hall of Fame</h2>
          <p className="text-ink/70">Gestiona los platos legendarios del gremio</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink">
              <Plus size={18} className="mr-2" />
              Nuevo Plato
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Crear Nuevo Plato</DialogTitle>
            </DialogHeader>
            <FoodItemForm 
              categories={categories}
              onSubmit={(data) => createFoodItem.mutate(data)} 
              isLoading={createFoodItem.isPending}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/50" size={20} />
          <Input
            placeholder="Buscar platos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-2 border-ink"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-48 border-2 border-ink">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Food Items Grid */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin w-8 h-8 border-4 border-orange border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-ink/70">Cargando platos...</p>
        </div>
      ) : filteredItems.length === 0 ? (
        <Card className="border-2 border-ink">
          <CardContent className="py-12 text-center">
            <UtensilsCrossed className="w-12 h-12 mx-auto text-ink/30 mb-4" />
            <p className="text-ink/70">No hay platos que mostrar</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="border-2 border-ink hover:shadow-brutal transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-video bg-ink/10 rounded border-2 border-ink overflow-hidden mb-3">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image className="w-8 h-8 text-ink/30" />
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-ink line-clamp-1">{item.name}</h3>
                    {item.rank && (
                      <span className="bg-yellow text-ink text-xs font-bold px-2 py-0.5 rounded">
                        #{item.rank}
                      </span>
                    )}
                  </div>
                  {item.category && (
                    <span className="text-xs bg-orange/20 text-orange px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  )}
                  {item.description && (
                    <p className="text-sm text-ink/60 line-clamp-2">{item.description}</p>
                  )}
                  <div className="flex justify-end gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingItem(item)}
                      className="border-ink"
                    >
                      <Edit size={14} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (confirm("¿Estás seguro de eliminar este plato?")) {
                          deleteFoodItem.mutate({ id: item.id });
                        }
                      }}
                      className="border-red-500 text-red-500 hover:bg-red-50"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={!!editingItem} onOpenChange={(open) => !open && setEditingItem(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Editar Plato</DialogTitle>
          </DialogHeader>
          {editingItem && (
            <FoodItemForm 
              categories={categories}
              initialData={editingItem}
              onSubmit={(data) => updateFoodItem.mutate({ id: editingItem.id, ...data })} 
              isLoading={updateFoodItem.isPending}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Food Item Form Component
function FoodItemForm({ 
  categories,
  initialData, 
  onSubmit, 
  isLoading 
}: { 
  categories: string[];
  initialData?: any; 
  onSubmit: (data: any) => void; 
  isLoading: boolean;
}) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    image: initialData?.image || "",
    category: initialData?.category || "",
    chef: initialData?.chef || "",
    rank: initialData?.rank || null,
  });
  const [useUrlInput, setUseUrlInput] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre del Plato *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="ej: Tortilla de Bar Pizcueta"
          required
          className="border-2 border-ink"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Categoría</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger className="border-2 border-ink">
              <SelectValue placeholder="Seleccionar..." />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="rank">Ranking</Label>
          <Select 
            value={formData.rank?.toString() || "none"} 
            onValueChange={(value) => setFormData({ ...formData, rank: value && value !== 'none' ? parseInt(value) : null })}
          >
            <SelectTrigger className="border-2 border-ink">
              <SelectValue placeholder="Sin ranking" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Sin ranking</SelectItem>
              <SelectItem value="1">#1</SelectItem>
              <SelectItem value="2">#2</SelectItem>
              <SelectItem value="3">#3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="chef">Chef</Label>
        <Input
          id="chef"
          value={formData.chef}
          onChange={(e) => setFormData({ ...formData, chef: e.target.value })}
          placeholder="ej: Justin"
          className="border-2 border-ink"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Descripción del plato..."
          rows={3}
          className="border-2 border-ink"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Imagen del Plato</Label>
          <button
            type="button"
            onClick={() => setUseUrlInput(!useUrlInput)}
            className="text-xs text-orange hover:underline"
          >
            {useUrlInput ? "Subir archivo" : "Usar URL"}
          </button>
        </div>
        {useUrlInput ? (
          <>
            <Input
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://..."
              className="border-2 border-ink"
            />
            {formData.image && (
              <img src={formData.image} alt="Preview" className="w-24 h-24 object-cover rounded border-2 border-ink mt-2" />
            )}
          </>
        ) : (
          <ImageUpload
            value={formData.image}
            onChange={(url) => setFormData({ ...formData, image: url })}
            placeholder="Arrastra o haz clic para subir imagen"
          />
        )}
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="submit" disabled={isLoading} className="bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink">
          {isLoading ? "Guardando..." : "Guardar Plato"}
        </Button>
      </div>
    </form>
  );
}

// Chefs Manager Component
function ChefsManager() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingChef, setEditingChef] = useState<any>(null);

  const { data: chefs, isLoading, refetch } = trpc.chefs.list.useQuery();

  const createChef = trpc.chefs.create.useMutation({
    onSuccess: () => {
      toast.success("Cocinero creado correctamente");
      setIsCreateDialogOpen(false);
      refetch();
    },
    onError: (error) => {
      toast.error("Error al crear cocinero: " + error.message);
    }
  });

  const updateChef = trpc.chefs.update.useMutation({
    onSuccess: () => {
      toast.success("Cocinero actualizado correctamente");
      setEditingChef(null);
      refetch();
    },
    onError: (error) => {
      toast.error("Error al actualizar cocinero: " + error.message);
    }
  });

  const deleteChef = trpc.chefs.delete.useMutation({
    onSuccess: () => {
      toast.success("Cocinero eliminado correctamente");
      refetch();
    },
    onError: (error) => {
      toast.error("Error al eliminar cocinero: " + error.message);
    }
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-ink">Los Cocineros</h2>
          <p className="text-ink/70">Gestiona los perfiles de los chefs del gremio</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink">
              <Plus size={18} className="mr-2" />
              Nuevo Cocinero
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Crear Nuevo Cocinero</DialogTitle>
            </DialogHeader>
            <ChefForm 
              onSubmit={(data) => createChef.mutate(data)} 
              isLoading={createChef.isPending}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Chefs Grid */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin w-8 h-8 border-4 border-orange border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-ink/70">Cargando cocineros...</p>
        </div>
      ) : !chefs || chefs.length === 0 ? (
        <Card className="border-2 border-ink">
          <CardContent className="py-12 text-center">
            <Users className="w-12 h-12 mx-auto text-ink/30 mb-4" />
            <p className="text-ink/70">No hay cocineros registrados</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefs.map((chef) => (
            <Card key={chef.id} className="border-2 border-ink hover:shadow-brutal transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-ink/10 border-2 border-ink overflow-hidden flex-shrink-0">
                    {chef.avatar ? (
                      <img src={chef.avatar} alt={chef.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-ink/30">
                        {chef.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-ink">{chef.name}</h3>
                    {chef.nickname && (
                      <p className="text-sm text-orange">"{chef.nickname}"</p>
                    )}
                    {chef.specialty && (
                      <p className="text-sm text-ink/60 mt-1">{chef.specialty}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4 text-center">
                  <div className="bg-ink/5 p-2 rounded">
                    <div className="text-xl font-bold text-ink">{chef.eventsHosted || 0}</div>
                    <div className="text-xs text-ink/60">Eventos</div>
                  </div>
                  <div className="bg-ink/5 p-2 rounded">
                    <div className="text-xl font-bold text-ink">{chef.dishesCreated || 0}</div>
                    <div className="text-xs text-ink/60">Platos</div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingChef(chef)}
                    className="border-ink"
                  >
                    <Edit size={14} className="mr-1" />
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (confirm("¿Estás seguro de eliminar este cocinero?")) {
                        deleteChef.mutate({ id: chef.id });
                      }
                    }}
                    className="border-red-500 text-red-500 hover:bg-red-50"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={!!editingChef} onOpenChange={(open) => !open && setEditingChef(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Editar Cocinero</DialogTitle>
          </DialogHeader>
          {editingChef && (
            <ChefForm 
              initialData={editingChef}
              onSubmit={(data) => updateChef.mutate({ id: editingChef.id, ...data })} 
              isLoading={updateChef.isPending}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Chef Form Component
function ChefForm({ 
  initialData, 
  onSubmit, 
  isLoading 
}: { 
  initialData?: any; 
  onSubmit: (data: any) => void; 
  isLoading: boolean;
}) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    nickname: initialData?.nickname || "",
    avatar: initialData?.avatar || "",
    bio: initialData?.bio || "",
    specialty: initialData?.specialty || "",
    signatureDishes: initialData?.signatureDishes?.join("\n") || "",
    eventsHosted: initialData?.eventsHosted || 0,
    dishesCreated: initialData?.dishesCreated || 0,
  });
  const [useUrlInput, setUseUrlInput] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      signatureDishes: formData.signatureDishes.split("\n").filter((dish: string) => dish.trim()),
      eventsHosted: parseInt(formData.eventsHosted.toString()) || 0,
      dishesCreated: parseInt(formData.dishesCreated.toString()) || 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="ej: Justin"
            required
            className="border-2 border-ink"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nickname">Apodo</Label>
          <Input
            id="nickname"
            value={formData.nickname}
            onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
            placeholder="ej: El Arquitecto"
            className="border-2 border-ink"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialty">Especialidad</Label>
        <Input
          id="specialty"
          value={formData.specialty}
          onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
          placeholder="ej: Cocina Mediterránea"
          className="border-2 border-ink"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Biografía</Label>
        <Textarea
          id="bio"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          placeholder="Breve descripción del cocinero..."
          rows={3}
          className="border-2 border-ink"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Avatar del Cocinero</Label>
          <button
            type="button"
            onClick={() => setUseUrlInput(!useUrlInput)}
            className="text-xs text-orange hover:underline"
          >
            {useUrlInput ? "Subir archivo" : "Usar URL"}
          </button>
        </div>
        {useUrlInput ? (
          <>
            <Input
              value={formData.avatar}
              onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
              placeholder="https://..."
              className="border-2 border-ink"
            />
            {formData.avatar && (
              <img src={formData.avatar} alt="Preview" className="w-16 h-16 object-cover rounded-full border-2 border-ink mt-2" />
            )}
          </>
        ) : (
          <ImageUpload
            value={formData.avatar}
            onChange={(url) => setFormData({ ...formData, avatar: url })}
            placeholder="Subir foto del cocinero"
          />
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="signatureDishes">Platos Estrella (uno por línea)</Label>
        <Textarea
          id="signatureDishes"
          value={formData.signatureDishes}
          onChange={(e) => setFormData({ ...formData, signatureDishes: e.target.value })}
          placeholder="Tortilla de patatas&#10;Bocadillo especial"
          rows={3}
          className="border-2 border-ink"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="eventsHosted">Eventos Organizados</Label>
          <Input
            id="eventsHosted"
            type="number"
            value={formData.eventsHosted}
            onChange={(e) => setFormData({ ...formData, eventsHosted: parseInt(e.target.value) || 0 })}
            min={0}
            className="border-2 border-ink"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dishesCreated">Platos Creados</Label>
          <Input
            id="dishesCreated"
            type="number"
            value={formData.dishesCreated}
            onChange={(e) => setFormData({ ...formData, dishesCreated: parseInt(e.target.value) || 0 })}
            min={0}
            className="border-2 border-ink"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="submit" disabled={isLoading} className="bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink">
          {isLoading ? "Guardando..." : "Guardar Cocinero"}
        </Button>
      </div>
    </form>
  );
}

// Homepage Manager Component
interface MenuImage {
  menuItem: string;
  imageUrl: string;
}

function HomepageManager() {
  // Get default next Friday at 11AM
  const defaultDateTime = getNextFriday11AM();

  const [nextEventData, setNextEventData] = useState({
    title: "",
    date: defaultDateTime.date,
    time: defaultDateTime.time,
    chef: "",
    image: "",
    menuImages: [] as MenuImage[],
    menuPreview: [] as string[],
    description: "",
  });
  const [selectedMenuItems, setSelectedMenuItems] = useState<string[]>([]);
  const [menuSearch, setMenuSearch] = useState("");
  const [useUrlInput, setUseUrlInput] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isGeneratingTitle, setIsGeneratingTitle] = useState(false);
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(FOOD_CATEGORIES.map(c => c));
  const [showNewHofDialog, setShowNewHofDialog] = useState(false);
  const [newHofData, setNewHofData] = useState({
    name: "",
    category: "Bocadillos",
    chef: "",
    description: "",
    image: "",
  });
  const [isGeneratingHofImage, setIsGeneratingHofImage] = useState(false);

  // Fetch data
  const { data: settings, refetch } = trpc.settings.get.useQuery({ key: "nextEvent" });
  const { data: chefs } = trpc.chefs.list.useQuery();
  const { data: foodItems, refetch: refetchFoodItems } = trpc.foodItems.list.useQuery();

  // Mutations
  const updateSetting = trpc.settings.set.useMutation({
    onSuccess: () => {
      toast.success("Página de inicio actualizada correctamente");
      refetch();
    },
    onError: (error) => {
      toast.error("Error al guardar: " + error.message);
    }
  });

  const suggestTitleMutation = trpc.ai.suggestTitle.useMutation({
    onSuccess: (data) => {
      setNextEventData(prev => ({ ...prev, title: data.title }));
      toast.success("Título generado con IA");
      setIsGeneratingTitle(false);
    },
    onError: (error) => {
      toast.error("Error al generar título: " + error.message);
      setIsGeneratingTitle(false);
    }
  });

  const generateDescriptionMutation = trpc.ai.generateDescription.useMutation({
    onSuccess: (data) => {
      setNextEventData(prev => ({ ...prev, description: data.description }));
      toast.success("Descripción generada con IA");
      setIsGeneratingDescription(false);
    },
    onError: (error) => {
      toast.error("Error al generar descripción: " + error.message);
      setIsGeneratingDescription(false);
    }
  });

  const createFoodItemMutation = trpc.foodItems.create.useMutation({
    onSuccess: () => {
      toast.success("Plato añadido al Hall of Fame");
      refetchFoodItems();
      setShowNewHofDialog(false);
      setNewHofData({ name: "", category: "Bocadillos", chef: "", description: "", image: "" });
    },
    onError: (error) => {
      toast.error("Error al crear plato: " + error.message);
    }
  });

  const generateHofImageMutation = trpc.ideogram.generateMultiple.useMutation({
    onSuccess: (data) => {
      if (data.images.length > 0) {
        setNewHofData(prev => ({ ...prev, image: data.images[0].imageUrl }));
        toast.success("Imagen generada con IA");
      }
      setIsGeneratingHofImage(false);
    },
    onError: (error) => {
      toast.error("Error al generar imagen: " + error.message);
      setIsGeneratingHofImage(false);
    }
  });

  // Load saved settings
  useEffect(() => {
    if (settings?.value) {
      try {
        const parsed = JSON.parse(settings.value);
        setNextEventData({
          title: parsed.title || "",
          date: parsed.date || defaultDateTime.date,
          time: parsed.time || defaultDateTime.time,
          chef: parsed.chef || "",
          image: parsed.image || "",
          menuImages: parsed.menuImages || [],
          menuPreview: parsed.menuPreview || [],
          description: parsed.description || "",
        });
        setSelectedMenuItems(parsed.menuPreview || []);
      } catch (e) {
        // ignore parse errors
      }
    }
  }, [settings]);

  // Group food items by category
  const groupedFoodItems = useMemo(() => {
    if (!foodItems) return {};
    const grouped: Record<string, typeof foodItems> = {};
    FOOD_CATEGORIES.forEach(cat => {
      grouped[cat] = [];
    });
    foodItems.forEach(item => {
      const category = item.category || "Otros";
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(item);
    });
    return grouped;
  }, [foodItems]);

  // Filter food items by search
  const filteredGroupedItems = useMemo(() => {
    if (!menuSearch.trim()) return groupedFoodItems;
    const search = menuSearch.toLowerCase();
    const filtered: Record<string, typeof foodItems> = {};
    Object.entries(groupedFoodItems).forEach(([cat, items]) => {
      const matchingItems = items?.filter(item =>
        item.name.toLowerCase().includes(search)
      ) || [];
      if (matchingItems.length > 0) {
        filtered[cat] = matchingItems;
      }
    });
    return filtered;
  }, [groupedFoodItems, menuSearch]);

  const handleSave = () => {
    updateSetting.mutate({
      key: "nextEvent",
      value: JSON.stringify({
        ...nextEventData,
        menuPreview: selectedMenuItems,
      }),
    });
  };

  const handleSuggestTitle = () => {
    if (!nextEventData.date) {
      toast.error("Por favor, selecciona una fecha primero");
      return;
    }
    setIsGeneratingTitle(true);
    suggestTitleMutation.mutate({
      date: nextEventData.date,
      menuItems: selectedMenuItems,
    });
  };

  const handleGenerateDescription = () => {
    if (!nextEventData.title) {
      toast.error("Por favor, introduce un título primero");
      return;
    }
    setIsGeneratingDescription(true);
    generateDescriptionMutation.mutate({
      title: nextEventData.title,
      menuItems: selectedMenuItems,
      chef: nextEventData.chef || undefined,
    });
  };

  const toggleMenuItem = (itemName: string) => {
    setSelectedMenuItems(prev => {
      if (prev.includes(itemName)) {
        return prev.filter(n => n !== itemName);
      }
      if (prev.length >= 4) {
        toast.error("Máximo 4 platos en el menú");
        return prev;
      }
      return [...prev, itemName];
    });
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleGenerateHofImage = () => {
    if (!newHofData.name) {
      toast.error("Por favor, introduce el nombre del plato");
      return;
    }
    setIsGeneratingHofImage(true);
    generateHofImageMutation.mutate({
      title: "Hall of Fame",
      menuItems: [newHofData.name],
      chef: newHofData.chef || undefined,
    });
  };

  const handleCreateHof = () => {
    if (!newHofData.name) {
      toast.error("Por favor, introduce el nombre del plato");
      return;
    }
    createFoodItemMutation.mutate({
      name: newHofData.name,
      category: newHofData.category,
      chef: newHofData.chef || undefined,
      description: newHofData.description || undefined,
      image: newHofData.image || undefined,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-ink">Editor de Página de Inicio</h2>
        <p className="text-ink/70">Configura el contenido que aparece en la página principal</p>
      </div>

      {/* Next Event Countdown */}
      <Card className="border-4 border-ink shadow-brutal">
        <CardHeader className="bg-orange text-cream">
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Próximo Almorzar (Countdown)
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Event Details */}
            <div className="space-y-4">
              {/* Title with AI button */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="eventTitle" className="font-bold">Título del Evento *</Label>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={handleSuggestTitle}
                    disabled={isGeneratingTitle}
                    className="h-7 px-2 text-xs border-ink hover:bg-orange hover:text-cream"
                  >
                    {isGeneratingTitle ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Sparkles size={14} />
                    )}
                    <span className="ml-1">IA</span>
                  </Button>
                </div>
                <Input
                  id="eventTitle"
                  value={nextEventData.title}
                  onChange={(e) => setNextEventData({ ...nextEventData, title: e.target.value })}
                  placeholder="ej: Almorzar de Reyes"
                  className="border-2 border-ink"
                />
              </div>

              {/* Advanced Options (Date/Time) - Collapsible */}
              <Collapsible open={showAdvanced} onOpenChange={setShowAdvanced}>
                <CollapsibleTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full justify-between p-2 h-auto text-sm text-ink/70 hover:text-ink hover:bg-ink/5"
                  >
                    <span className="flex items-center gap-2">
                      {showAdvanced ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      Opciones Avanzadas
                    </span>
                    <span className="text-xs text-ink/50">
                      {nextEventData.date && new Date(nextEventData.date).toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" })}
                      {" "}{nextEventData.time}
                    </span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2">
                  <div className="grid grid-cols-2 gap-4 p-3 bg-ink/5 rounded-lg border border-ink/20">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate" className="font-bold text-sm">Fecha</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={nextEventData.date}
                        onChange={(e) => setNextEventData({ ...nextEventData, date: e.target.value })}
                        className="border-2 border-ink"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventTime" className="font-bold text-sm">Hora</Label>
                      <Input
                        id="eventTime"
                        type="time"
                        value={nextEventData.time}
                        onChange={(e) => setNextEventData({ ...nextEventData, time: e.target.value })}
                        className="border-2 border-ink"
                      />
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Chef Dropdown */}
              <div className="space-y-2">
                <Label htmlFor="eventChef" className="font-bold">Chef del Día</Label>
                <Select
                  value={nextEventData.chef}
                  onValueChange={(value) => setNextEventData({ ...nextEventData, chef: value })}
                >
                  <SelectTrigger className="border-2 border-ink">
                    <SelectValue placeholder="Seleccionar chef..." />
                  </SelectTrigger>
                  <SelectContent>
                    {chefs?.map((chef) => (
                      <SelectItem key={chef.id} value={chef.name}>
                        {chef.name} {chef.nickname && `"${chef.nickname}"`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Description with AI button */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="eventDescription" className="font-bold">Descripción</Label>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={handleGenerateDescription}
                    disabled={isGeneratingDescription || !nextEventData.title}
                    className="h-7 px-2 text-xs border-ink hover:bg-orange hover:text-cream"
                  >
                    {isGeneratingDescription ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Wand2 size={14} />
                    )}
                    <span className="ml-1">IA</span>
                  </Button>
                </div>
                <Textarea
                  id="eventDescription"
                  value={nextEventData.description}
                  onChange={(e) => setNextEventData({ ...nextEventData, description: e.target.value })}
                  placeholder="Descripción breve del próximo almorzar..."
                  rows={3}
                  className="border-2 border-ink"
                />
              </div>
            </div>

            {/* Right Column - Image & Menu */}
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="font-bold">Imagen de Vista Previa</Label>
                  <button
                    type="button"
                    onClick={() => setUseUrlInput(!useUrlInput)}
                    className="text-xs text-orange hover:underline"
                  >
                    {useUrlInput ? "Subir archivo" : "Usar URL"}
                  </button>
                </div>
                {useUrlInput ? (
                  <>
                    <Input
                      value={nextEventData.image}
                      onChange={(e) => setNextEventData({ ...nextEventData, image: e.target.value })}
                      placeholder="https://..."
                      className="border-2 border-ink"
                    />
                    {nextEventData.image && (
                      <img src={nextEventData.image} alt="Preview" className="w-full h-32 object-cover rounded border-2 border-ink mt-2" />
                    )}
                  </>
                ) : (
                  <ImageUpload
                    value={nextEventData.image}
                    onChange={(url) => setNextEventData({ ...nextEventData, image: url })}
                    placeholder="Subir imagen del próximo almorzar"
                  />
                )}
              </div>

              {/* Menu Items Selector */}
              <div className="space-y-2">
                <Label className="font-bold">Menú Previsto (máx. 4)</Label>

                {/* Selected items as tags */}
                {selectedMenuItems.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {selectedMenuItems.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs bg-orange text-cream px-2 py-1 rounded-full"
                      >
                        {item}
                        <button
                          type="button"
                          onClick={() => toggleMenuItem(item)}
                          className="hover:bg-cream/20 rounded-full p-0.5"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Search input */}
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-ink/40" size={16} />
                  <Input
                    value={menuSearch}
                    onChange={(e) => setMenuSearch(e.target.value)}
                    placeholder="Buscar platos..."
                    className="pl-8 border-2 border-ink"
                  />
                </div>

                {/* Grouped checkboxes */}
                <ScrollArea className="h-48 border-2 border-ink rounded-lg">
                  <div className="p-2 space-y-1">
                    {Object.entries(filteredGroupedItems).map(([category, items]) => (
                      items && items.length > 0 && (
                        <Collapsible
                          key={category}
                          open={expandedCategories.includes(category)}
                          onOpenChange={() => toggleCategory(category)}
                        >
                          <CollapsibleTrigger className="flex items-center gap-2 w-full p-1 hover:bg-ink/5 rounded text-sm font-semibold text-ink">
                            {expandedCategories.includes(category) ? (
                              <ChevronDown size={14} />
                            ) : (
                              <ChevronRight size={14} />
                            )}
                            {category} ({items.length})
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 space-y-1">
                            {items.map((item) => (
                              <label
                                key={item.id}
                                className="flex items-center gap-2 p-1 hover:bg-ink/5 rounded cursor-pointer"
                              >
                                <Checkbox
                                  checked={selectedMenuItems.includes(item.name)}
                                  onCheckedChange={() => toggleMenuItem(item.name)}
                                  disabled={!selectedMenuItems.includes(item.name) && selectedMenuItems.length >= 4}
                                />
                                <span className="text-sm truncate">{item.name}</span>
                              </label>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      )
                    ))}
                  </div>
                </ScrollArea>

                {/* Add new Hall of Fame button */}
                <Dialog open={showNewHofDialog} onOpenChange={setShowNewHofDialog}>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full border-2 border-dashed border-ink/50 text-ink/70 hover:border-ink hover:text-ink"
                    >
                      <Plus size={16} className="mr-1" />
                      Añadir nuevo plato al Hall of Fame
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="border-4 border-ink">
                    <DialogHeader>
                      <DialogTitle>Nuevo Plato para Hall of Fame</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="hofName">Nombre del Plato *</Label>
                        <Input
                          id="hofName"
                          value={newHofData.name}
                          onChange={(e) => setNewHofData({ ...newHofData, name: e.target.value })}
                          placeholder="ej: Bocadillo de calamares"
                          className="border-2 border-ink"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hofCategory">Categoría</Label>
                        <Select
                          value={newHofData.category}
                          onValueChange={(value) => setNewHofData({ ...newHofData, category: value })}
                        >
                          <SelectTrigger className="border-2 border-ink">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {FOOD_CATEGORIES.map((cat) => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hofChef">Chef Creador</Label>
                        <Select
                          value={newHofData.chef}
                          onValueChange={(value) => setNewHofData({ ...newHofData, chef: value })}
                        >
                          <SelectTrigger className="border-2 border-ink">
                            <SelectValue placeholder="Seleccionar chef..." />
                          </SelectTrigger>
                          <SelectContent>
                            {chefs?.map((chef) => (
                              <SelectItem key={chef.id} value={chef.name}>
                                {chef.name} {chef.nickname && `"${chef.nickname}"`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hofDescription">Descripción</Label>
                        <Textarea
                          id="hofDescription"
                          value={newHofData.description}
                          onChange={(e) => setNewHofData({ ...newHofData, description: e.target.value })}
                          placeholder="Descripción del plato..."
                          rows={2}
                          className="border-2 border-ink"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>Imagen</Label>
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            onClick={handleGenerateHofImage}
                            disabled={isGeneratingHofImage || !newHofData.name}
                            className="h-7 px-2 text-xs border-ink"
                          >
                            {isGeneratingHofImage ? (
                              <Loader2 size={14} className="animate-spin mr-1" />
                            ) : (
                              <Sparkles size={14} className="mr-1" />
                            )}
                            Generar con IA
                          </Button>
                        </div>
                        {newHofData.image ? (
                          <div className="relative">
                            <img
                              src={newHofData.image}
                              alt="Preview"
                              className="w-full h-32 object-cover rounded border-2 border-ink"
                            />
                            <Button
                              type="button"
                              size="sm"
                              variant="destructive"
                              onClick={() => setNewHofData({ ...newHofData, image: "" })}
                              className="absolute top-1 right-1 h-6 w-6 p-0"
                            >
                              <X size={14} />
                            </Button>
                          </div>
                        ) : (
                          <ImageUpload
                            value=""
                            onChange={(url) => setNewHofData({ ...newHofData, image: url })}
                            placeholder="Subir imagen del plato"
                          />
                        )}
                      </div>
                      <Button
                        onClick={handleCreateHof}
                        disabled={createFoodItemMutation.isPending || !newHofData.name}
                        className="w-full bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink"
                      >
                        {createFoodItemMutation.isPending ? (
                          <Loader2 size={18} className="animate-spin mr-2" />
                        ) : (
                          <Plus size={18} className="mr-2" />
                        )}
                        Añadir al Hall of Fame
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <p className="text-xs text-ink/60">Estos platos aparecerán en la sección de countdown con imágenes generadas por IA</p>

                {/* AI Image Generation Button */}
                <AIImageGenerator
                  title={nextEventData.title}
                  menuItems={selectedMenuItems}
                  chef={nextEventData.chef}
                  existingImages={nextEventData.menuImages}
                  onImagesGenerated={(images) => setNextEventData({ ...nextEventData, menuImages: images })}
                />
              </div>
            </div>
          </div>

          {/* Preview */}
          {(nextEventData.title || nextEventData.date) && (
            <div className="border-t-2 border-ink pt-6">
              <h4 className="font-bold text-ink mb-3">Vista Previa:</h4>
              <div className="bg-ink text-cream p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-orange">{nextEventData.title || "Título del evento"}</h3>
                    <p className="text-cream/70">
                      {nextEventData.date ? new Date(nextEventData.date + "T" + nextEventData.time).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) : "Fecha"}
                      {nextEventData.time && " a las " + nextEventData.time}
                    </p>
                    {nextEventData.chef && <p className="text-cream/70">Chef: {nextEventData.chef}</p>}
                    {nextEventData.description && <p className="text-cream/80 text-sm mt-2">{nextEventData.description}</p>}
                  </div>

                  {/* Menu Images Grid */}
                  {nextEventData.menuImages.length > 0 && (
                    <div>
                      <p className="text-xs text-cream/50 mb-2">Platos de la semana:</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {nextEventData.menuImages.map((img, i) => (
                          <div key={i} className="relative">
                            <img
                              src={img.imageUrl}
                              alt={img.menuItem}
                              className="w-full aspect-square object-cover rounded border-2 border-orange"
                            />
                            <p className="text-xs text-center text-cream/80 mt-1 truncate">{img.menuItem}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Fallback to text menu if no images */}
                  {nextEventData.menuImages.length === 0 && selectedMenuItems.length > 0 && (
                    <div>
                      <p className="text-xs text-cream/50 mb-1">Menú previsto:</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedMenuItems.slice(0, 4).map((item, i) => (
                          <span key={i} className="text-xs bg-orange/20 text-orange px-2 py-0.5 rounded">{item}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              disabled={updateSetting.isPending}
              className="bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink shadow-brutal"
            >
              <Save size={18} className="mr-2" />
              {updateSetting.isPending ? "Guardando..." : "Guardar Cambios"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card className="border-2 border-ink">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-orange" />
            Consejos
          </CardTitle>
        </CardHeader>
        <CardContent className="text-ink/70 text-sm space-y-2">
          <p>• El countdown aparecerá automáticamente en la página de inicio cuando configures un evento futuro.</p>
          <p>• La fecha se configura automáticamente para el próximo viernes a las 11:00. Usa "Opciones Avanzadas" para cambiarla.</p>
          <p>• Usa los botones de IA para generar títulos creativos y descripciones apetitosas.</p>
          <p>• Selecciona platos del Hall of Fame o añade nuevos directamente desde aquí.</p>
        </CardContent>
      </Card>
    </div>
  );
}

// Settings Manager Component
function SettingsManager() {
  const [nextEventData, setNextEventData] = useState({
    title: "",
    date: "",
    time: "12:00",
    chef: "",
  });
  const [isSeeding, setIsSeeding] = useState(false);

  const seedMutation = trpc.seed.run.useMutation({
    onSuccess: (data) => {
      toast.success(`Base de datos inicializada: ${data.events} eventos, ${data.foodItems} platos, ${data.chefs} cocineros`);
      setIsSeeding(false);
    },
    onError: (error) => {
      toast.error("Error al inicializar: " + error.message);
      setIsSeeding(false);
    }
  });

  const { data: settings, refetch } = trpc.settings.get.useQuery({ key: "nextEvent" });

  const updateSetting = trpc.settings.set.useMutation({
    onSuccess: () => {
      toast.success("Ajustes guardados correctamente");
      refetch();
    },
    onError: (error) => {
      toast.error("Error al guardar ajustes: " + error.message);
    }
  });

  useEffect(() => {
    if (settings?.value) {
      try {
        const parsed = JSON.parse(settings.value);
        setNextEventData(parsed);
      } catch (e) {
        // ignore parse errors
      }
    }
  }, [settings]);

  const handleSaveNextEvent = () => {
    updateSetting.mutate({
      key: "nextEvent",
      value: JSON.stringify(nextEventData),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-ink">Ajustes del Sitio</h2>
        <p className="text-ink/70">Configura el contenido dinámico del sitio</p>
      </div>

      {/* Next Event Settings */}
      <Card className="border-2 border-ink">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange" />
            Próximo Evento (Countdown)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nextEventTitle">Título del Evento</Label>
              <Input
                id="nextEventTitle"
                value={nextEventData.title}
                onChange={(e) => setNextEventData({ ...nextEventData, title: e.target.value })}
                placeholder="ej: Almorzar de Reyes"
                className="border-2 border-ink"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nextEventChef">Chef</Label>
              <Input
                id="nextEventChef"
                value={nextEventData.chef}
                onChange={(e) => setNextEventData({ ...nextEventData, chef: e.target.value })}
                placeholder="ej: Justin"
                className="border-2 border-ink"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nextEventDate">Fecha</Label>
              <Input
                id="nextEventDate"
                type="date"
                value={nextEventData.date}
                onChange={(e) => setNextEventData({ ...nextEventData, date: e.target.value })}
                className="border-2 border-ink"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nextEventTime">Hora</Label>
              <Input
                id="nextEventTime"
                type="time"
                value={nextEventData.time}
                onChange={(e) => setNextEventData({ ...nextEventData, time: e.target.value })}
                className="border-2 border-ink"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button 
              onClick={handleSaveNextEvent}
              disabled={updateSetting.isPending}
              className="bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink"
            >
              {updateSetting.isPending ? "Guardando..." : "Guardar Próximo Evento"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Seed Database */}
      <Card className="border-2 border-ink">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-orange" />
            Inicializar Base de Datos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-ink/70 text-sm">
            Carga los datos iniciales (eventos de ejemplo, platos del Hall of Fame, y perfiles de cocineros) 
            en la base de datos. Solo necesitas hacer esto una vez.
          </p>
          <Button 
            onClick={() => {
              setIsSeeding(true);
              seedMutation.mutate();
            }}
            disabled={isSeeding || seedMutation.isPending}
            className="bg-orange hover:bg-orange/90 text-cream font-bold border-2 border-ink"
          >
            {isSeeding ? "Inicializando..." : "Inicializar Datos"}
          </Button>
        </CardContent>
      </Card>

      {/* Site Info */}
      <Card className="border-2 border-ink">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-orange" />
            Información del Sitio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-ink/70 text-sm">
            Más ajustes del sitio estarán disponibles próximamente. Por ahora puedes gestionar 
            eventos, platos y cocineros desde las pestañas correspondientes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
