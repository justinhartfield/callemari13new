/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Event Detail page - Full event information with photos and menu
 */

import { useParams, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { events } from "@/data/events";
import { ArrowLeft, Calendar, ChefHat } from "lucide-react";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-cream">
        <Navigation />
        <div className="container py-32 text-center">
          <div className="brutal-card inline-block p-8">
            <h1 className="text-3xl font-bold text-ink mb-4">Evento no encontrado</h1>
            <p className="text-ink/70 mb-6">Este evento no existe o ha sido eliminado.</p>
            <Link
              href="/eventos"
              className="inline-flex items-center gap-2 bg-orange text-cream px-6 py-3 font-bold border-4 border-ink shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-100"
            >
              <ArrowLeft size={20} />
              Volver a Eventos
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Format short date for badge
  const formatShortDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero with Event Image */}
      <section className="pt-20 md:pt-24 relative">
        {/* Back Button */}
        <div className="absolute top-24 md:top-28 left-4 md:left-8 z-20">
          <Link
            href="/eventos"
            className="inline-flex items-center gap-2 bg-cream text-ink px-4 py-2 font-bold border-4 border-ink shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-100"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Volver</span>
          </Link>
        </div>

        {/* Main Image */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          
          {/* Date Badge */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <div className="sticker-badge text-sm md:text-base">
              {formatShortDate(event.date)}
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 max-w-4xl">
                {event.title}
              </h1>
              <div className="flex items-center gap-2 text-cream/80">
                <Calendar size={18} />
                <span className="capitalize">{formatDate(event.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="brutal-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">Sobre este evento</h2>
                <p className="text-ink/80 text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Photo Gallery */}
              <div className="brutal-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-ink mb-6">Fotos del Evento</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Main photo */}
                  <div className="md:col-span-2 relative group">
                    <div className="border-4 border-ink overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-yellow text-ink px-3 py-1 text-xs font-bold uppercase border-2 border-ink">
                        Foto Principal
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-ink/60 text-sm mt-4 italic">
                  * Las fotos adicionales del evento se añadirán próximamente
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Menu Card */}
              <div className="brutal-card-orange p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-4">
                  <ChefHat size={24} className="text-ink" />
                  <h2 className="text-xl font-bold text-ink">Menú del Día</h2>
                </div>
                
                {event.menuItems.length > 0 ? (
                  <ul className="space-y-3">
                    {event.menuItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 bg-cream border-2 border-ink"
                      >
                        <span className="text-orange font-bold text-lg">•</span>
                        <span className="text-ink font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-ink/70 italic">
                    No hay información del menú disponible
                  </p>
                )}

                {/* Stats */}
                <div className="mt-6 pt-6 border-t-2 border-ink/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-ink">
                        {event.menuItems.length}
                      </div>
                      <div className="text-xs text-ink/70 uppercase tracking-wide">
                        Platos
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-ink">∞</div>
                      <div className="text-xs text-ink/70 uppercase tracking-wide">
                        Risas
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Card */}
              <div className="brutal-card p-6">
                <h3 className="font-bold text-ink mb-3">Compartir</h3>
                <p className="text-ink/70 text-sm">
                  Martí 13 es un club privado. Los eventos son solo para miembros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other events */}
      <section className="py-12 bg-ink">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-cream mb-2">
                ¿Quieres ver más eventos?
              </h2>
              <p className="text-cream/70">
                Explora todos los encuentros del gremio
              </p>
            </div>
            <Link
              href="/eventos"
              className="inline-flex items-center gap-2 bg-orange text-cream px-8 py-4 font-bold border-4 border-cream shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-100"
            >
              Ver Todos los Eventos
              <ArrowLeft size={20} className="rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
