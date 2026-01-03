/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Hall of Fame card - polaroid/photo style with tape
 * Slight rotation for hand-placed feel
 */

import { HallOfFameItem } from "@/data/events";

interface HallOfFameCardProps {
  item: HallOfFameItem;
  index: number;
}

export default function HallOfFameCard({ item, index }: HallOfFameCardProps) {
  // Alternate rotation for organic feel
  const rotations = ["-2deg", "1deg", "-1deg", "2deg", "-1.5deg", "1.5deg"];
  const rotation = rotations[index % rotations.length];

  return (
    <article
      className="relative bg-cream p-3 border-4 border-ink group cursor-pointer"
      style={{
        transform: `rotate(${rotation})`,
        boxShadow: "8px 8px 0 0 #1a1a1a",
        transition: "transform 0.1s, box-shadow 0.1s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(0deg) translate(-4px, -4px)`;
        e.currentTarget.style.boxShadow = "12px 12px 0 0 #ff6b35";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation})`;
        e.currentTarget.style.boxShadow = "8px 8px 0 0 #1a1a1a";
      }}
    >
      {/* Tape Effect */}
      <div
        className="absolute -top-3 left-1/2 w-14 h-5 bg-yellow/90 border-2 border-ink z-10"
        style={{ transform: "translateX(-50%) rotate(2deg)" }}
      />

      {/* Image */}
      <div className="relative h-32 md:h-40 overflow-hidden border-2 border-ink mb-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Trophy Badge */}
        <div className="absolute top-2 right-2 w-7 h-7 bg-orange border-2 border-ink flex items-center justify-center text-sm">
          🏆
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="font-bold text-ink text-xs md:text-sm leading-tight line-clamp-2">
          {item.name}
        </h3>
        {item.chef && (
          <p className="text-orange text-xs font-semibold uppercase">
            Chef: {item.chef}
          </p>
        )}
        <p className="text-ink/60 text-xs truncate">
          {item.eventTitle}
        </p>
      </div>
    </article>
  );
}
