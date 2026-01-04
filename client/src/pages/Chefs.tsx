/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Los Cocineros - Chef profiles page with stats and signature dishes
 */

import { useState } from "react";
import { ChefHat, Trophy, Utensils, Calendar, Star, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { chefs, gremioStats, Chef } from "@/data/chefs";

export default function Chefs() {
  const [selectedChef, setSelectedChef] = useState<Chef | null>(null);
  
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero */}
      <section
        className="pt-24 pb-12 md:pt-32 md:pb-16 relative"
        style={{
          backgroundImage: "url('/images/hero-gathering.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-ink/80" />
        <div className="container relative z-10">
          <div className="sticker-badge mb-4">👨‍🍳 El Equipo</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4">
            Los<br />
            <span className="text-orange">Cocineros</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            El gremio está formado por cocineros apasionados, cada uno con su 
            estilo único. Conoce a los maestros detrás de cada almorzar.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-orange border-b-4 border-ink">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-cream">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{gremioStats.totalChefs}</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Cocineros</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{gremioStats.totalEvents}</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Eventos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{gremioStats.totalDishes}</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Platos Creados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{gremioStats.hallOfFameTotal}</div>
              <div className="text-cream/80 text-sm uppercase tracking-wide">Hall of Fame</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          {/* Intro */}
          <div className="brutal-card p-6 md:p-8 mb-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-ink mb-4">
              Cocina Rotativa
            </h2>
            <p className="text-ink/80 leading-relaxed">
              En Martí 13 no hay chef fijo. Cada viernes, un miembro diferente 
              del gremio toma las riendas de la cocina. Esta rotación garantiza 
              variedad, creatividad y la oportunidad de que cada cocinero 
              muestre su estilo único.
            </p>
          </div>

          {/* Chef Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {chefs.map((chef) => (
              <div
                key={chef.id}
                onClick={() => setSelectedChef(chef)}
                className="group brutal-card overflow-hidden hover:shadow-brutal-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              >
                {/* Header with avatar */}
                <div className="relative h-48 bg-ink overflow-hidden">
                  <img
                    src={chef.avatar}
                    alt={chef.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/hero-gathering.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-orange text-cream px-3 py-1 font-bold text-sm inline-block transform -rotate-2 mb-2">
                      {chef.nickname}
                    </div>
                    <h3 className="text-2xl font-bold text-cream">{chef.name}</h3>
                  </div>
                  
                  {/* Hall of Fame badge */}
                  {chef.stats.hallOfFameEntries > 0 && (
                    <div className="absolute top-3 right-3 bg-yellow p-2 transform rotate-12 shadow-brutal-sm">
                      <Trophy className="w-5 h-5 text-ink" />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <p className="text-ink/70 text-sm mb-4 line-clamp-2">
                    {chef.specialty}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-cream p-2 border-2 border-ink">
                      <div className="font-bold text-ink">{chef.stats.eventsCooked}</div>
                      <div className="text-xs text-ink/60">Eventos</div>
                    </div>
                    <div className="bg-cream p-2 border-2 border-ink">
                      <div className="font-bold text-ink">{chef.stats.signatureDishes}</div>
                      <div className="text-xs text-ink/60">Platos</div>
                    </div>
                    <div className="bg-cream p-2 border-2 border-ink">
                      <div className="font-bold text-orange">{chef.stats.hallOfFameEntries}</div>
                      <div className="text-xs text-ink/60">HoF</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Detail Modal */}
      {selectedChef && (
        <div 
          className="fixed inset-0 bg-ink/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedChef(null)}
        >
          <div 
            className="bg-cream border-4 border-ink shadow-brutal-lg max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-64 md:h-80 bg-ink overflow-hidden border-b-4 border-ink">
              <img
                src={selectedChef.avatar}
                alt={selectedChef.name}
                className="w-full h-full object-cover opacity-70"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/hero-gathering.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
              
              <button
                onClick={() => setSelectedChef(null)}
                className="absolute top-4 right-4 bg-ink text-cream p-2 hover:bg-orange transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-orange text-cream px-4 py-1 font-bold inline-block transform -rotate-2 mb-3">
                  {selectedChef.nickname}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-cream mb-2">{selectedChef.name}</h2>
                <p className="text-cream/80 text-lg">{selectedChef.specialty}</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-cream p-4 border-4 border-ink text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-orange" />
                  <div className="text-2xl font-bold text-ink">{selectedChef.stats.eventsCooked}</div>
                  <div className="text-sm text-ink/60">Eventos Cocinados</div>
                </div>
                <div className="bg-cream p-4 border-4 border-ink text-center">
                  <Utensils className="w-6 h-6 mx-auto mb-2 text-orange" />
                  <div className="text-2xl font-bold text-ink">{selectedChef.stats.signatureDishes}</div>
                  <div className="text-sm text-ink/60">Platos Creados</div>
                </div>
                <div className="bg-cream p-4 border-4 border-ink text-center">
                  <Trophy className="w-6 h-6 mx-auto mb-2 text-orange" />
                  <div className="text-2xl font-bold text-ink">{selectedChef.stats.hallOfFameEntries}</div>
                  <div className="text-sm text-ink/60">Hall of Fame</div>
                </div>
              </div>
              
              {/* Bio */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-ink mb-3 flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-orange" />
                  Biografía
                </h3>
                <p className="text-ink/80 leading-relaxed">{selectedChef.bio}</p>
              </div>
              
              {/* Fun Fact */}
              <div className="bg-yellow/30 border-4 border-ink p-4 mb-8">
                <h4 className="font-bold text-ink mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-orange" />
                  Dato Curioso
                </h4>
                <p className="text-ink/80 italic">{selectedChef.funFact}</p>
              </div>
              
              {/* Signature Dishes */}
              <div>
                <h3 className="text-xl font-bold text-ink mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-orange" />
                  Platos Estrella
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedChef.signatureDishes.map((dish, index) => (
                    <div key={index} className="brutal-card overflow-hidden">
                      <div className="aspect-square overflow-hidden border-b-4 border-ink">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/images/hero-almorzar.jpg";
                          }}
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-ink text-sm mb-1">{dish.name}</h4>
                        <p className="text-ink/60 text-xs">{dish.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
