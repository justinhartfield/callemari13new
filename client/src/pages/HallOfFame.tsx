/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Hall of Fame page - All food items organized by category
 * With like functionality - items sorted by most likes
 */

import { useState, useMemo } from "react";
import { Search, X, Trophy, Loader2, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useFoodItems, FoodItem } from "@/hooks/useFoodItems";

// Category definitions with icons
const menuCategories = [
  { name: "Bocadillos", icon: "🥖", description: "Los clásicos bocadillos del gremio" },
  { name: "Tortillas", icon: "🍳", description: "Tortillas de patatas y más" },
  { name: "Bandejas", icon: "🍽️", description: "Platos combinados y bandejas" },
  { name: "Hamburguesas", icon: "🍔", description: "Hamburguesas artesanales" },
  { name: "Pescados", icon: "🐟", description: "Mariscos y pescados frescos" },
  { name: "Carnes", icon: "🥩", description: "Carnes a la brasa y guisos" },
  { name: "Ensaladas", icon: "🥗", description: "Ensaladas frescas" },
  { name: "Mains", icon: "🍖", description: "Platos principales" },
];

export default function HallOfFame() {
  const { foodItems, isLoading, toggleLike } = useFoodItems();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  
  // Filter items based on category and search
  const filteredItems = useMemo(() => {
    return foodItems.filter(item => {
      const matchesCategory = activeCategory === null || item.category === activeCategory;
      const matchesSearch = searchQuery === "" || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description || "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [foodItems, activeCategory, searchQuery]);
  
  // Get unique categories from database items
  const availableCategories = useMemo(() => {
    const cats = new Set(foodItems.map(item => item.category).filter(Boolean));
    return menuCategories.filter(cat => cats.has(cat.name));
  }, [foodItems]);
  
  // Group by category for display
  const groupedItems = useMemo(() => {
    return availableCategories.map(cat => ({
      ...cat,
      items: filteredItems.filter(item => item.category === cat.name)
    })).filter(cat => cat.items.length > 0);
  }, [availableCategories, filteredItems]);

  // Handle like click
  const handleLike = (e: React.MouseEvent, itemId: number) => {
    e.stopPropagation();
    toggleLike(itemId);
  };

  // Render a food item card
  const renderFoodCard = (item: FoodItem, index: number, showRank: boolean = true) => (
    <div
      key={item.id}
      onClick={() => setSelectedItem(item)}
      className="group brutal-card overflow-hidden hover:shadow-brutal-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer relative"
    >
      {/* Rank badge for first 3 */}
      {showRank && index < 3 && (
        <div className="absolute top-2 left-2 z-10 bg-yellow text-ink px-2 py-1 font-bold text-xs border-2 border-ink rotate-sticker">
          <Trophy className="w-3 h-3 inline mr-1" />
          #{index + 1}
        </div>
      )}
      
      {/* Like button */}
      <button
        onClick={(e) => handleLike(e, item.id)}
        className={`absolute top-2 right-2 z-10 p-2 border-2 border-ink transition-all ${
          item.isLiked 
            ? "bg-red-500 text-white" 
            : "bg-cream text-ink hover:bg-red-100"
        }`}
      >
        <Heart className={`w-4 h-4 ${item.isLiked ? "fill-current" : ""}`} />
      </button>

      <div className="relative aspect-square overflow-hidden border-b-4 border-ink">
        <img
          src={item.image || "/images/hero-almorzar.jpg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/hero-almorzar.jpg";
          }}
        />
      </div>
      <div className="p-3 md:p-4">
        <h3 className="font-bold text-ink text-sm md:text-base line-clamp-2">
          {item.name}
        </h3>
        <p className="text-ink/60 text-xs mt-1 line-clamp-2">
          {item.description || ""}
        </p>
        <div className="flex items-center justify-between mt-2">
          {item.chef && (
            <p className="text-orange text-xs font-semibold">
              Chef: {item.chef}
            </p>
          )}
          {item.likes > 0 && (
            <span className="text-xs text-red-500 font-bold flex items-center gap-1">
              <Heart className="w-3 h-3 fill-current" />
              {item.likes}
            </span>
          )}
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero */}
      <section
        className="pt-24 pb-12 md:pt-32 md:pb-16 relative"
        style={{
          backgroundImage: "url('/images/hall-of-fame-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-ink/85" />
        <div className="container relative z-10">
          <div className="sticker-badge mb-4">🏆 Los Mejores</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4">
            Hall of<br />
            <span className="text-orange">Fame</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            Más de {foodItems.length} platos creados por el gremio. Desde bocadillos legendarios 
            hasta bandejas épicas, cada plato cuenta una historia. ¡Dale like a tus favoritos!
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-orange border-b-4 border-ink">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-cream">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{foodItems.length}</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Platos Legendarios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{availableCategories.length}</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Categorías</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-1">
                <Heart className="w-6 h-6 fill-current" />
                {foodItems.reduce((sum, item) => sum + item.likes, 0)}
              </div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Likes Totales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 bg-cream border-b-4 border-ink sticky top-16 md:top-20 z-40">
        <div className="container">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/50" />
            <input
              type="text"
              placeholder="Buscar platos legendarios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-4 border-ink bg-white font-bold placeholder:text-ink/50 focus:outline-none focus:shadow-brutal"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X className="w-5 h-5 text-ink/50 hover:text-ink" />
              </button>
            )}
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 font-bold text-sm transition-all ${
                activeCategory === null
                  ? "bg-ink text-cream shadow-brutal"
                  : "bg-cream text-ink border-2 border-ink hover:bg-ink hover:text-cream"
              }`}
            >
              Todos ({foodItems.length})
            </button>
            {availableCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 font-bold text-sm transition-all flex items-center gap-1 ${
                  activeCategory === category.name
                    ? "bg-ink text-cream shadow-brutal"
                    : "bg-cream text-ink border-2 border-ink hover:bg-ink hover:text-cream"
                }`}
              >
                <span>{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="text-xs opacity-70">
                  ({foodItems.filter(i => i.category === category.name).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          {isLoading ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="w-12 h-12 animate-spin text-orange" />
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl font-bold text-ink/50">
                {searchQuery ? `No se encontraron platos con "${searchQuery}"` : "No hay platos disponibles"}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory(null);
                }}
                className="mt-4 text-orange font-bold hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          ) : activeCategory ? (
            // Single category view - sorted by likes
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {filteredItems.map((item, index) => renderFoodCard(item, index, true))}
            </div>
          ) : (
            // All categories view
            groupedItems.map((category) => (
              <div key={category.name} className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl md:text-4xl">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-ink">{category.name}</h2>
                    <p className="text-ink/60 text-sm">{category.description}</p>
                  </div>
                  <div className="flex-1 h-1 bg-ink/20 hidden md:block" />
                  <span className="bg-orange text-cream px-3 py-1 font-bold text-sm">
                    {category.items.length} platos
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {category.items.slice(0, 10).map((item, index) => renderFoodCard(item, index, true))}
                </div>
                
                {category.items.length > 10 && (
                  <button
                    onClick={() => setActiveCategory(category.name)}
                    className="mt-6 text-orange font-bold hover:underline flex items-center gap-2"
                  >
                    Ver todos los {category.items.length} platos de {category.name} →
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-ink/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-cream border-4 border-ink shadow-brutal-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden border-b-4 border-ink">
              <img
                src={selectedItem.image || "/images/hero-almorzar.jpg"}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/hero-almorzar.jpg";
                }}
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-ink text-cream p-2 hover:bg-orange transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4 bg-orange text-cream px-3 py-1 font-bold">
                {selectedItem.category}
              </div>
              {/* Like button in modal */}
              <button
                onClick={(e) => handleLike(e, selectedItem.id)}
                className={`absolute bottom-4 right-4 px-4 py-2 border-2 border-ink font-bold flex items-center gap-2 transition-all ${
                  selectedItem.isLiked 
                    ? "bg-red-500 text-white" 
                    : "bg-cream text-ink hover:bg-red-100"
                }`}
              >
                <Heart className={`w-5 h-5 ${selectedItem.isLiked ? "fill-current" : ""}`} />
                {selectedItem.likes > 0 ? selectedItem.likes : "Like"}
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-3 mb-4">
                <Trophy className="w-8 h-8 text-orange flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  {selectedItem.name}
                </h2>
              </div>
              <p className="text-ink/80 text-lg leading-relaxed mb-4">
                {selectedItem.description || "Un plato legendario del gremio."}
              </p>
              {selectedItem.chef && (
                <p className="text-orange font-bold">
                  Creado por: {selectedItem.chef}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
