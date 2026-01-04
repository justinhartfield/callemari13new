/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Events page - Grid of all events with filtering
 * Now fetches from database to reflect admin changes
 */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { useEvents } from "@/hooks/useEvents";
import { Loader2 } from "lucide-react";

type FilterYear = "all" | "2024" | "2025" | "2026";

export default function Events() {
  const [filterYear, setFilterYear] = useState<FilterYear>("all");
  const { events, isLoading } = useEvents();

  const filteredEvents = events.filter((event) => {
    if (filterYear === "all") return true;
    return event.date.startsWith(filterYear);
  });

  // Get unique years from events for dynamic filter buttons
  const years = Array.from(new Set(events.map(e => e.date.substring(0, 4)))).sort().reverse();

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-ink">
        <div className="container">
          <div className="sticker-badge mb-4">Archivo</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4">
            Todos los<br />
            <span className="text-orange">Eventos</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            Cada viernes es una nueva aventura culinaria. Aquí encontrarás 
            el registro de todos nuestros encuentros gastronómicos.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-cream border-b-4 border-ink sticky top-16 md:top-20 z-40">
        <div className="container">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-ink font-semibold text-sm uppercase tracking-wide shrink-0">
              Filtrar:
            </span>
            <button
              onClick={() => setFilterYear("all")}
              className={`px-4 py-2 font-semibold text-sm uppercase tracking-wide border-2 transition-all duration-100 shrink-0 ${
                filterYear === "all"
                  ? "bg-ink text-cream border-ink"
                  : "bg-transparent text-ink border-ink hover:bg-ink/10"
              }`}
            >
              Todos
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setFilterYear(year as FilterYear)}
                className={`px-4 py-2 font-semibold text-sm uppercase tracking-wide border-2 transition-all duration-100 shrink-0 ${
                  filterYear === year
                    ? "bg-ink text-cream border-ink"
                    : "bg-transparent text-ink border-ink hover:bg-ink/10"
                }`}
              >
                {year}
              </button>
            ))}
            <span className="text-ink/60 text-sm ml-auto shrink-0">
              {filteredEvents.length} eventos
            </span>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-orange" />
              <span className="ml-3 text-ink font-semibold">Cargando eventos...</span>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredEvents.map((event, index) => (
                  <EventCard
                    key={event.id}
                    event={{
                      id: String(event.id),
                      title: event.title,
                      date: event.date,
                      description: event.description || "",
                      image: event.image || "/images/hero-almorzar.jpg",
                      menuItems: event.menuItems || [],
                      gallery: event.gallery || [],
                    }}
                    variant={index === 0 ? "featured" : "default"}
                  />
                ))}
              </div>

              {filteredEvents.length === 0 && (
                <div className="text-center py-16">
                  <div className="brutal-card inline-block p-8">
                    <p className="text-ink font-bold text-xl mb-2">No hay eventos</p>
                    <p className="text-ink/70">Prueba con otro filtro</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
