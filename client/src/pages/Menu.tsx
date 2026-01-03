/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Menu page - Showcasing signature dishes and categories
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { events } from "@/data/events";

// Extract unique menu items from all events
const allMenuItems = events.flatMap((e) => e.menuItems).filter(Boolean);
const uniqueMenuItems = Array.from(new Set(allMenuItems));

// Categorize menu items
const categories = {
  tortillas: uniqueMenuItems.filter(
    (item) => item.toLowerCase().includes("tortilla")
  ),
  hamburguesas: uniqueMenuItems.filter(
    (item) =>
      item.toLowerCase().includes("hamburguesa") ||
      item.toLowerCase().includes("burger")
  ),
  pescados: uniqueMenuItems.filter(
    (item) =>
      item.toLowerCase().includes("salmon") ||
      item.toLowerCase().includes("bacalao") ||
      item.toLowerCase().includes("calamar") ||
      item.toLowerCase().includes("gambas") ||
      item.toLowerCase().includes("marisco")
  ),
  carnes: uniqueMenuItems.filter(
    (item) =>
      item.toLowerCase().includes("pollo") ||
      item.toLowerCase().includes("carne") ||
      item.toLowerCase().includes("chivito") ||
      item.toLowerCase().includes("conejo")
  ),
  especialidades: uniqueMenuItems.filter(
    (item) =>
      item.includes(":") || // Named dishes like "NERO:" or "MOSHE:"
      item.toLowerCase().includes("especial")
  ),
};

// Get remaining items not in any category
const categorizedItems = Object.values(categories).flat();
const otros = uniqueMenuItems.filter(
  (item) => !categorizedItems.includes(item)
);

export default function Menu() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/menu-pattern.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="sticker-badge mb-4">La Carta</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4">
            Nuestro<br />
            <span className="text-orange">Menú</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            Cocina de autor rotativo. Cada viernes, un miembro diferente 
            del gremio toma las riendas de la cocina.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 md:py-16">
        <div className="container">
          {/* Intro Card */}
          <div className="brutal-card-orange p-6 md:p-8 mb-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-ink mb-4">
              Cocina Rotativa
            </h2>
            <p className="text-ink/80 leading-relaxed">
              En Martí 13 no hay chef fijo. Cada semana, un miembro diferente 
              del gremio se encarga de preparar el almuerzo. Esto significa 
              que nuestro menú es tan diverso como nuestros cocineros: desde 
              la tortilla clásica de Óscar hasta las creaciones experimentales 
              de Nero.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Tortillas */}
            <div className="brutal-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🥚</span>
                <h3 className="text-2xl font-bold text-ink">Tortillas</h3>
              </div>
              <p className="text-ink/70 text-sm mb-4">
                El clásico valenciano que nunca falta
              </p>
              <ul className="space-y-2">
                {categories.tortillas.length > 0 ? (
                  categories.tortillas.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 p-2 bg-cream border-l-4 border-orange"
                    >
                      <span className="text-orange">•</span>
                      <span className="text-ink font-medium">{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-ink/60 italic">Tortilla de toda la vida</li>
                )}
              </ul>
            </div>

            {/* Hamburguesas */}
            <div className="brutal-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🍔</span>
                <h3 className="text-2xl font-bold text-ink">Hamburguesas</h3>
              </div>
              <p className="text-ink/70 text-sm mb-4">
                De potro, vaca, conejo y más
              </p>
              <ul className="space-y-2">
                {categories.hamburguesas.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 p-2 bg-cream border-l-4 border-orange"
                  >
                    <span className="text-orange">•</span>
                    <span className="text-ink font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pescados y Mariscos */}
            <div className="brutal-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🐟</span>
                <h3 className="text-2xl font-bold text-ink">Pescados & Mariscos</h3>
              </div>
              <p className="text-ink/70 text-sm mb-4">
                Frescos del Mediterráneo
              </p>
              <ul className="space-y-2">
                {categories.pescados.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 p-2 bg-cream border-l-4 border-orange"
                  >
                    <span className="text-orange">•</span>
                    <span className="text-ink font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Carnes */}
            <div className="brutal-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🥩</span>
                <h3 className="text-2xl font-bold text-ink">Carnes</h3>
              </div>
              <p className="text-ink/70 text-sm mb-4">
                Preparaciones de todo tipo
              </p>
              <ul className="space-y-2">
                {categories.carnes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 p-2 bg-cream border-l-4 border-orange"
                  >
                    <span className="text-orange">•</span>
                    <span className="text-ink font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Especialidades */}
            <div className="brutal-card-orange p-6 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⭐</span>
                <h3 className="text-2xl font-bold text-ink">Especialidades de la Casa</h3>
              </div>
              <p className="text-ink/70 text-sm mb-4">
                Creaciones únicas de nuestros chefs
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {categories.especialidades.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-3 bg-cream border-2 border-ink"
                  >
                    <span className="text-orange font-bold">★</span>
                    <span className="text-ink font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Otros */}
            {otros.length > 0 && (
              <div className="brutal-card p-6 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🍽️</span>
                  <h3 className="text-2xl font-bold text-ink">Otros Platos</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {otros.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-ink/10 border border-ink/30 text-ink text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-ink">
        <div className="container text-center">
          <p className="text-cream/80 text-lg italic max-w-2xl mx-auto">
            "El menú cambia cada semana según el chef de turno. 
            Esto es solo una muestra de lo que hemos servido."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
