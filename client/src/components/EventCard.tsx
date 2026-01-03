/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Event card with hard shadow, lifts on hover
 * Photo card style with tape effect
 */

import { Event, formatEventDate } from "@/data/events";

interface EventCardProps {
  event: Event;
  variant?: "default" | "featured";
}

export default function EventCard({ event, variant = "default" }: EventCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`brutal-card overflow-hidden group ${
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
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className={`font-bold text-ink mb-2 ${isFeatured ? "text-xl md:text-2xl" : "text-lg"}`}>
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
  );
}
