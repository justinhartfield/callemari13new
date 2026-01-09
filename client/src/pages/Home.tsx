/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * 
 * Home page featuring:
 * - Hero section with generated image
 * - Market ticker
 * - Featured events
 * - Hall of Fame preview
 * - About section
 */

import { Link } from "wouter";
import { ArrowRight, Calendar, Trophy, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MarketTicker from "@/components/MarketTicker";
import EventCard from "@/components/EventCard";
import HallOfFameCard from "@/components/HallOfFameCard";
import { hallOfFame } from "@/data/events";
import { useEvents } from "@/hooks/useEvents";
import NextEventCountdown from "@/components/NextEventCountdown";

export default function Home() {
  const { events, isLoading } = useEvents();
  const featuredEvents = events.slice(0, 4);
  const featuredHallOfFame = hallOfFame.slice(0, 4);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-almorzar.jpg"
            alt="Almorzar spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="sticker-badge mb-6">
              Club Social Privado • Valencia
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-4 leading-none">
              MARTÍ
              <span className="block text-orange">13</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-cream/90 font-semibold mb-2">
              El Gremio del Almorzar
            </p>
            <p className="text-lg text-cream/70 italic mb-8">
              "Cuando en casa del herrero, cuchillo de palo"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/eventos" className="brutal-btn-orange inline-flex items-center gap-2">
                Ver Eventos
                <ArrowRight size={18} />
              </Link>
              <Link href="/nosotros" className="brutal-btn inline-flex items-center gap-2 bg-cream text-ink">
                Conócenos
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-ink" />
      </section>

      {/* Market Ticker */}
      <MarketTicker />

      {/* Next Event Countdown */}
      <NextEventCountdown />

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-cream border-b-4 border-ink">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Calendar, value: "76+", label: "Eventos" },
              { icon: Users, value: "∞", label: "Amigos" },
              { icon: Trophy, value: "12", label: "Platos Legendarios" },
              { icon: Calendar, value: "2024", label: "Desde" },
            ].map((stat, index) => (
              <div
                key={index}
                className="brutal-card p-4 md:p-6 text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-orange" />
                <div className="text-3xl md:text-4xl font-bold text-ink">{stat.value}</div>
                <div className="text-sm text-ink/70 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
            <div>
              <div className="sticker-badge-orange mb-4">Últimos Encuentros</div>
              <h2 className="text-3xl md:text-5xl font-bold text-ink">
                Eventos Recientes
              </h2>
            </div>
            <Link
              href="/eventos"
              className="brutal-btn inline-flex items-center gap-2 self-start md:self-auto"
            >
              Ver Todos
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredEvents.map((event, index) => (
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
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-ink text-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="brutal-card-orange p-2 bg-cream">
                <img
                  src="/images/hero-gathering.jpg"
                  alt="Martí 13 gathering"
                  className="w-full h-64 md:h-96 object-cover border-4 border-ink"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-yellow border-4 border-ink p-4 md:p-6 shadow-brutal rotate-sticker-alt">
                <span className="text-ink font-bold text-lg md:text-xl">Est. 2024</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="sticker-badge mb-6">Nuestra Historia</div>
              <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6">
                Más que un almuerzo,<br />
                <span className="text-orange">una tradición</span>
              </h2>
              <p className="text-cream/80 text-lg mb-6 leading-relaxed">
                Martí 13 nació de la pasión por la tradición valenciana del almorzar. 
                Un grupo de amigos que decidieron convertir cada viernes en una 
                celebración de la buena comida, la mejor compañía y las conversaciones 
                que nunca terminan.
              </p>
              <p className="text-cream/80 text-lg mb-8 leading-relaxed">
                Cada semana, un miembro diferente toma las riendas de la cocina, 
                creando platos que van desde la tortilla clásica hasta 
                hamburguesas de potro y mariscos frescos del día.
              </p>
              <Link href="/nosotros" className="brutal-btn-orange inline-flex items-center gap-2">
                Conoce Más
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame Preview */}
      <section 
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: "url('/images/hall-of-fame-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-cream/80" />
        <div className="container relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
            <div>
              <div className="sticker-badge mb-4">🏆 Los Mejores</div>
              <h2 className="text-3xl md:text-5xl font-bold text-ink">
                Hall of Fame
              </h2>
              <p className="text-ink/70 mt-2">Los platos que hicieron historia</p>
            </div>
            <Link
              href="/hall-of-fame"
              className="brutal-btn inline-flex items-center gap-2 self-start md:self-auto"
            >
              Ver Todos
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Hall of Fame Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featuredHallOfFame.map((item, index) => (
              <HallOfFameCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 md:py-24 bg-cream border-t-4 border-ink">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div>
              <div className="sticker-badge-orange mb-6">La Carta</div>
              <h2 className="text-3xl md:text-5xl font-bold text-ink mb-6">
                Cocina de<br />
                <span className="text-orange">Autor Rotativo</span>
              </h2>
              <p className="text-ink/80 text-lg mb-6 leading-relaxed">
                Cada viernes, un miembro diferente del gremio toma el control 
                de la cocina. Desde tortillas clásicas hasta creaciones 
                experimentales, nuestro menú es tan diverso como nuestros cocineros.
              </p>
              
              {/* Sample Menu Items */}
              <div className="space-y-3 mb-8">
                {[
                  "Tortilla de toda la vida",
                  "Hamburguesas de Potro",
                  "Bacalao con Pesto Alioli",
                  "NERO: Bocadillo especial",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-cream border-2 border-ink"
                  >
                    <span className="w-2 h-2 bg-orange" />
                    <span className="font-semibold text-ink">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/hall-of-fame" className="brutal-btn inline-flex items-center gap-2">
                Ver Hall of Fame
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="brutal-card p-2">
                <img
                  src="/images/hero-kitchen.jpg"
                  alt="Cooking at Martí 13"
                  className="w-full h-64 md:h-96 object-cover border-4 border-ink"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-cream mb-4">
            ¿Quieres formar parte?
          </h2>
          <p className="text-cream/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Martí 13 es un club privado. El acceso es solo por invitación 
            de un miembro existente.
          </p>
          <div className="inline-block bg-cream border-4 border-ink p-6 md:p-8 shadow-brutal">
            <p className="text-ink font-bold text-xl md:text-2xl mb-2">Solo Miembros</p>
            <p className="text-ink/70">Pregunta a un amigo que ya sea parte del gremio</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
