/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Próximo Evento countdown component with live timer
 * Now fetches data from database settings
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Calendar, Clock, MapPin, ChefHat, ArrowRight, UtensilsCrossed } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface NextEventData {
  title: string;
  date: string;
  time: string;
  chef: string;
  image?: string;
  menuPreview?: string[];
  description?: string;
}

// Fallback event if no database settings
const fallbackEvent: NextEventData = {
  title: "Próximo Almorzar",
  date: "2026-01-10",
  time: "12:00",
  chef: "TBD",
  description: "Detalles próximamente...",
  image: "/images/hero-almorzar.jpg"
};

function calculateTimeLeft(date: string, time: string): TimeLeft | null {
  const targetDate = new Date(`${date}T${time}:00`);
  const difference = targetDate.getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return null;
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T12:00:00");
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  return date.toLocaleDateString('es-ES', options);
}

export default function NextEventCountdown() {
  const [eventData, setEventData] = useState<NextEventData>(fallbackEvent);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  
  // Fetch settings from database
  const { data: settings } = trpc.settings.get.useQuery({ key: "nextEvent" });
  
  // Parse settings when they load
  useEffect(() => {
    if (settings?.value) {
      try {
        const parsed = JSON.parse(settings.value);
        if (parsed.title && parsed.date) {
          setEventData({
            title: parsed.title,
            date: parsed.date,
            time: parsed.time || "12:00",
            chef: parsed.chef || "TBD",
            image: parsed.image || fallbackEvent.image,
            menuPreview: parsed.menuPreview || [],
            description: parsed.description || "",
          });
        }
      } catch (e) {
        // Use fallback on parse error
      }
    }
  }, [settings]);
  
  // Update countdown timer
  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft(eventData.date, eventData.time));
    };
    
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timer);
  }, [eventData.date, eventData.time]);
  
  // If event has passed, don't show the countdown
  if (!timeLeft) {
    return null;
  }
  
  return (
    <section className="py-12 md:py-16 bg-ink relative overflow-hidden">
      {/* Background pattern */}
      {eventData.image && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("${eventData.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/80" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Event info */}
          <div>
            <div className="sticker-badge mb-4 bg-orange text-cream">
              🗓️ Próximo Evento
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
              {eventData.title}
            </h2>
            
            {eventData.description && (
              <p className="text-cream/70 text-lg mb-6 max-w-lg">
                {eventData.description}
              </p>
            )}
            
            {/* Event details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-cream/80">
                <Calendar className="w-5 h-5 text-orange" />
                <span className="capitalize">{formatDate(eventData.date)}</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <Clock className="w-5 h-5 text-orange" />
                <span>{eventData.time}</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <MapPin className="w-5 h-5 text-orange" />
                <span>Martí 13, Valencia</span>
              </div>
              {eventData.chef && eventData.chef !== "TBD" && (
                <div className="flex items-center gap-3 text-cream/80">
                  <ChefHat className="w-5 h-5 text-orange" />
                  <span>Chef: {eventData.chef}</span>
                </div>
              )}
            </div>
            
            {/* Menu Preview */}
            {eventData.menuPreview && eventData.menuPreview.length > 0 && (
              <div className="mb-8 p-4 bg-cream/10 border-2 border-cream/20 rounded-lg">
                <div className="flex items-center gap-2 text-orange mb-3">
                  <UtensilsCrossed className="w-4 h-4" />
                  <span className="font-bold text-sm uppercase">Menú Previsto</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {eventData.menuPreview.map((item, i) => (
                    <span 
                      key={i} 
                      className="text-sm bg-orange/20 text-cream px-3 py-1 rounded-full border border-orange/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Event image thumbnail */}
            {eventData.image && (
              <div className="mb-8 hidden md:block">
                <img 
                  src={eventData.image} 
                  alt={eventData.title}
                  className="w-48 h-32 object-cover rounded-lg border-4 border-cream/20 shadow-brutal"
                />
              </div>
            )}
            
            <Link 
              href="/eventos"
              className="inline-flex items-center gap-2 bg-orange text-cream px-6 py-3 font-bold border-4 border-cream shadow-brutal hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100"
            >
              Ver Todos los Eventos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Right side - Countdown */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-cream border-4 border-ink shadow-brutal-lg p-6 md:p-8 max-w-md w-full">
              <h3 className="text-center text-ink font-bold text-lg mb-6 uppercase tracking-wide">
                Cuenta Atrás
              </h3>
              
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {/* Days */}
                <div className="text-center">
                  <div className="bg-ink text-cream p-3 md:p-4 border-4 border-ink mb-2">
                    <span className="text-2xl md:text-4xl font-bold block">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-ink/70 text-xs md:text-sm font-semibold uppercase">
                    Días
                  </span>
                </div>
                
                {/* Hours */}
                <div className="text-center">
                  <div className="bg-orange text-cream p-3 md:p-4 border-4 border-ink mb-2">
                    <span className="text-2xl md:text-4xl font-bold block">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-ink/70 text-xs md:text-sm font-semibold uppercase">
                    Horas
                  </span>
                </div>
                
                {/* Minutes */}
                <div className="text-center">
                  <div className="bg-ink text-cream p-3 md:p-4 border-4 border-ink mb-2">
                    <span className="text-2xl md:text-4xl font-bold block">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-ink/70 text-xs md:text-sm font-semibold uppercase">
                    Min
                  </span>
                </div>
                
                {/* Seconds */}
                <div className="text-center">
                  <div className="bg-yellow text-ink p-3 md:p-4 border-4 border-ink mb-2 relative overflow-hidden">
                    <span className="text-2xl md:text-4xl font-bold block relative z-10">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    {/* Pulse animation */}
                    <div className="absolute inset-0 bg-orange/20 animate-pulse" />
                  </div>
                  <span className="text-ink/70 text-xs md:text-sm font-semibold uppercase">
                    Seg
                  </span>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="mt-6 pt-6 border-t-4 border-ink/20 text-center">
                <p className="text-ink/60 text-sm italic">
                  "El almorzar no espera a nadie"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
