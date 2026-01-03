/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Event card with hard shadow, lifts on hover
 * Photo card style with tape effect
 * Clickable to navigate to event detail page
 */

import { Link } from "wouter";
import { Event } from "@/data/events";

// Format date for display
const formatEventDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).toUpperCase();
};

interface EventCardProps {
  event: Event;
  variant?: "default" | "featured";
}

export default function EventCard({ event, variant = "default" }: EventCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link href={`/evento/${event.id}`}>
      <article
        className={`brutal-card overflow-hidden group cursor-pointer ${
          isFeatured ? "md:col-span-2" : ""
        }`}
      >
        {/* Image Container */}
        <div className={`relative overflow-hidden ${isFeatured ? "h-64 md:h-80" : "h-48 md:h-56"}`}>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
          />
          {/* Date Badge */}
          <div className="absolute top-4 left-4 sticker-badge">
            {formatEventDate(event.date)}
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-200" />
          
          {/* View indicator */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="bg-orange text-cream px-3 py-1 text-xs font-bold uppercase border-2 border-ink">
              Ver Evento →
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <h3 className={`font-bold text-ink mb-2 group-hover:text-orange transition-colors ${isFeatured ? "text-xl md:text-2xl" : "text-lg"}`}>
            {event.title}
          </h3>
          
          <p className="text-ink/70 text-sm mb-4 line-clamp-2">
            {event.description}
          </p>

          {/* Menu Items */}
          {event.menuItems.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {event.menuItems.slice(0, isFeatured ? 4 : 2).map((item, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-ink/10 border border-ink/30 text-ink font-medium"
                >
                  {item}
                </span>
              ))}
              {event.menuItems.length > (isFeatured ? 4 : 2) && (
                <span className="text-xs px-2 py-1 text-ink/60">
                  +{event.menuItems.length - (isFeatured ? 4 : 2)} más
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
