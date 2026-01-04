/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Hall of Fame page - Legendary dishes organized by category
 */

import { useState } from "react";
import { Link } from "wouter";
import { Trophy, ChefHat, Calendar, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { expandedHallOfFame } from "@/data/hallOfFameExpanded";

export default function HallOfFame() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Calculate total items
  const totalItems = expandedHallOfFame.reduce((acc, cat) => acc + cat.items.length, 0);
  
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
              <div className="text-4xl md:text-5xl font-bold text-cream">{totalItems}</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Platos Legendarios</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cream">{expandedHallOfFame.length}</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Categorías</div>
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

      {/* Category Navigation */}
      <section className="py-6 bg-cream border-b-4 border-ink">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 font-bold transition-all ${
                activeCategory === null
                  ? "bg-ink text-cream shadow-brutal"
                  : "bg-cream text-ink border-2 border-ink hover:bg-ink hover:text-cream"
              }`}
            >
              Todos
            </button>
            {expandedHallOfFame.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-5 py-2 font-bold transition-all flex items-center gap-2 ${
                  activeCategory === category.name
                    ? "bg-ink text-cream shadow-brutal"
                    : "bg-cream text-ink border-2 border-ink hover:bg-ink hover:text-cream"
                }`}
              >
                <span>{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame Content */}
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

          {/* Categories */}
          {expandedHallOfFame
            .filter(cat => activeCategory === null || cat.name === activeCategory)
            .map((category) => (
            <div key={category.name} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl md:text-4xl">{category.icon}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">{category.name}</h2>
                <div className="flex-1 h-1 bg-ink/20 hidden md:block" />
                <span className="bg-orange text-cream px-3 py-1 font-bold text-sm">
                  {category.items.length} platos
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="group brutal-card overflow-hidden hover:shadow-brutal-lg transition-all duration-200 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden border-b-4 border-ink">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/hero-almorzar.jpg";
                        }}
                      />
                      {/* Trophy badge */}
                      <div className="absolute top-2 right-2 bg-yellow p-1.5 transform rotate-12 shadow-brutal-sm">
                        <Trophy className="w-4 h-4 text-ink" />
                      </div>
                      {/* Rank badge */}
                      <div className="absolute top-2 left-2 bg-orange text-cream px-2 py-0.5 font-bold text-sm transform -rotate-3 shadow-brutal-sm">
                        #{item.id}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-3 md:p-4">
                      <h3 className="font-bold text-ink text-sm md:text-base mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      
                      <div className="flex items-center gap-1 text-orange text-xs md:text-sm mb-1">
                        <ChefHat className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="font-medium">{item.chef}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-ink/60 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span className="line-clamp-1">{item.eventTitle}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

      {/* CTA Section */}
      <section className="py-12 bg-cream">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
            ¿Quieres ver más platos?
          </h2>
          <p className="text-ink/70 mb-8">
            Explora nuestro menú completo con más de 120 creaciones del gremio.
          </p>
          <Link href="/menu">
            <button className="bg-orange text-cream px-8 py-4 font-bold text-lg shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-1 inline-flex items-center gap-2">
              Ver Menú Completo
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
