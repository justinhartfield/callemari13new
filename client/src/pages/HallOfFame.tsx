/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Hall of Fame page - Legendary dishes and moments
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HallOfFameCard from "@/components/HallOfFameCard";
import { hallOfFame } from "@/data/events";

export default function HallOfFame() {
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
        <div className="absolute inset-0 bg-ink/80" />
        <div className="container relative z-10">
          <div className="sticker-badge mb-4">🏆 Los Mejores</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4">
            Hall of<br />
            <span className="text-orange">Fame</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            Los platos que hicieron historia. Las creaciones que se ganaron 
            un lugar especial en la memoria del gremio.
          </p>
        </div>
      </section>

      {/* Trophy Stats */}
      <section className="py-8 bg-orange border-b-4 border-ink">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cream">{hallOfFame.length}</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Platos Legendarios</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cream">∞</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Recuerdos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cream">1</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Gremio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          {/* Intro */}
          <div className="brutal-card p-6 md:p-8 mb-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-ink mb-4">
              ¿Cómo se entra al Hall of Fame?
            </h2>
            <p className="text-ink/80 leading-relaxed">
              Un plato entra al Hall of Fame cuando se convierte en tema de 
              conversación semanas después de haberlo probado. Cuando alguien 
              pregunta "¿Te acuerdas de aquella tortilla?" o "¿Cuándo vuelven 
              las hamburguesas de potro?". Es el reconocimiento máximo del gremio.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {hallOfFame.map((item, index) => (
              <HallOfFameCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-ink">
        <div className="container">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl text-cream italic mb-6">
              "La mejor comida es la que se comparte con amigos. 
              El mejor recuerdo es el que se crea alrededor de una mesa."
            </p>
            <footer className="text-orange font-bold uppercase tracking-wide">
              — El Gremio del Almorzar
            </footer>
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
}
