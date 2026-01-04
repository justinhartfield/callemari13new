/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Próximo Evento countdown component with live timer
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Calendar, Clock, MapPin, ChefHat, ArrowRight } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Next scheduled event - update this for each new almorzar
const nextEvent = {
  title: "Almorzar de Reyes",
  date: "2026-01-10T12:00:00", // Friday January 10, 2026 at noon
  chef: "Justin",
  location: "Martí 13, Valencia",
  description: "Primer almorzar del año nuevo. Empezamos el 2026 con fuerza.",
  image: "http://marti13.es/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-10-at-16.39.28-2.jpeg"
};

function calculateTimeLeft(targetDate: string): TimeLeft | null {
  const difference = new Date(targetDate).getTime() - new Date().getTime();
  
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
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  return date.toLocaleDateString('es-ES', options);
}

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
}

export default function NextEventCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(nextEvent.date));
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(nextEvent.date));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // If event has passed, don't show the countdown
  if (!timeLeft) {
    return null;
  }
  
  return (
    <section className="py-12 md:py-16 bg-ink relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("${nextEvent.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/80" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Event info */}
          <div>
            <div className="sticker-badge mb-4 bg-orange text-cream">
              🗓️ Próximo Evento
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
              {nextEvent.title}
            </h2>
            
            <p className="text-cream/70 text-lg mb-6 max-w-lg">
              {nextEvent.description}
            </p>
            
            {/* Event details */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-cream/80">
                <Calendar className="w-5 h-5 text-orange" />
                <span className="capitalize">{formatDate(nextEvent.date)}</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <Clock className="w-5 h-5 text-orange" />
                <span>{formatTime(nextEvent.date)}</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <MapPin className="w-5 h-5 text-orange" />
                <span>{nextEvent.location}</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <ChefHat className="w-5 h-5 text-orange" />
                <span>Chef: {nextEvent.chef}</span>
              </div>
            </div>
            
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
