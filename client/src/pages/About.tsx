/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * About page - The story of Martí 13
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-ink">
        <div className="container">
          <div className="sticker-badge mb-4">Nuestra Historia</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4">
            Sobre<br />
            <span className="text-orange">Nosotros</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            "Cuando en casa del herrero, cuchillo de palo"
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Image */}
            <div className="brutal-card p-2 sticky top-24">
              <img
                src="/images/hero-gathering.jpg"
                alt="Martí 13 gathering"
                className="w-full h-64 md:h-96 object-cover border-4 border-ink"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="brutal-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">El Origen</h2>
                <p className="text-ink/80 leading-relaxed mb-4">
                  Martí 13 nació en 2017 de una idea simple: recuperar la tradición 
                  valenciana del almorzar. Un grupo de amigos que decidieron que 
                  cada viernes sería sagrado, dedicado a la buena comida y la 
                  mejor compañía.
                </p>
                <p className="text-ink/80 leading-relaxed">
                  El nombre viene de la calle donde todo empezó: Calle Martí, 
                  número 13. Un lugar que se convirtió en el cuartel general 
                  de lo que ahora llamamos "El Gremio del Almorzar".
                </p>
              </div>

              <div className="brutal-card-orange p-6 md:p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">La Tradición del Almorzar</h2>
                <p className="text-ink/80 leading-relaxed mb-4">
                  El almorzar valenciano es mucho más que una comida. Es un ritual 
                  social que se practica a media mañana, generalmente entre las 
                  10:00 y las 12:00. Tradicionalmente incluye bocadillos, tortilla, 
                  embutidos y, por supuesto, buen vino.
                </p>
                <p className="text-ink/80 leading-relaxed">
                  En Martí 13 hemos llevado esta tradición al siguiente nivel, 
                  experimentando con nuevos sabores mientras respetamos las raíces.
                </p>
              </div>

              <div className="brutal-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-ink mb-4">El Gremio</h2>
                <p className="text-ink/80 leading-relaxed mb-4">
                  Somos un grupo diverso unido por la pasión por la comida. 
                  Cada miembro aporta algo único: desde la tortilla perfecta 
                  de Óscar hasta las creaciones experimentales de Nero, pasando 
                  por los mariscos frescos que Tyler siempre olvida acompañar 
                  con coleslaw.
                </p>
                <p className="text-ink/80 leading-relaxed">
                  El sistema es simple: cada semana, un miembro diferente se 
                  encarga de la cocina. Esto garantiza variedad y mantiene 
                  viva la competencia amistosa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-ink">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-8 text-center">
            Nuestros <span className="text-orange">Valores</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                emoji: "🍳",
                title: "Cocina con Amor",
                description:
                  "Cada plato se prepara con dedicación. No importa si es una tortilla simple o un plato elaborado.",
              },
              {
                emoji: "👥",
                title: "Comunidad",
                description:
                  "Más que un club gastronómico, somos una familia. Los viernes son sagrados.",
              },
              {
                emoji: "🎨",
                title: "Creatividad",
                description:
                  "Respetamos la tradición pero no tenemos miedo de experimentar. Hamburguesas de potro, ¿por qué no?",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-cream border-4 border-cream p-6 md:p-8"
                style={{ boxShadow: "8px 8px 0 0 #ff6b35" }}
              >
                <span className="text-4xl mb-4 block">{value.emoji}</span>
                <h3 className="text-xl font-bold text-ink mb-2">{value.title}</h3>
                <p className="text-ink/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8 text-center">
            Nuestra <span className="text-orange">Historia</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              { year: "2017", event: "Fundación de Martí 13" },
              { year: "2018", event: "Primera tortilla legendaria de Óscar" },
              { year: "2019", event: "Se introduce la tradición de las hamburguesas de potro" },
              { year: "2020", event: "Almuerzos virtuales durante la pandemia" },
              { year: "2021", event: "Regreso triunfal a los encuentros presenciales" },
              { year: "2022", event: "Expansión del menú con mariscos" },
              { year: "2023", event: "Creación del Hall of Fame" },
              { year: "2024", event: "76+ eventos y contando" },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="sticker-badge shrink-0">{item.year}</div>
                <div className="brutal-card p-4 flex-1">
                  <p className="text-ink font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            ¿Quieres saber más?
          </h2>
          <p className="text-cream/90 text-lg mb-8 max-w-xl mx-auto">
            Martí 13 es un club privado. Si conoces a algún miembro, 
            pregúntale sobre nosotros.
          </p>
          <div className="inline-block bg-cream border-4 border-ink p-6 shadow-brutal">
            <p className="text-ink font-bold text-xl">Solo por Invitación</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
