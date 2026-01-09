/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Market ticker - scrolling announcements like stock prices
 * Black background, cream text, continuous scroll
 */

interface TickerItem {
  label: string;
  value: string;
}

const tickerItems: TickerItem[] = [
  { label: "PRÓXIMO EVENTO", value: "VIERNES" },
  { label: "ESPECIALIDAD", value: "TORTILLA DE ÓSCAR" },
  { label: "MIEMBROS", value: "SOLO INVITACIÓN" },
  { label: "UBICACIÓN", value: "VALENCIA" },
  { label: "DESDE", value: "2024" },
  { label: "PLATOS SERVIDOS", value: "+500" },
  { label: "EVENTOS", value: "76+" },
  { label: "TRADICIÓN", value: "ALMORZAR" },
];

export default function MarketTicker() {
  return (
    <div className="bg-ink text-cream py-3 overflow-hidden border-y-2 border-cream/20">
      <div className="relative flex">
        {/* First set of items */}
        <div 
          className="flex shrink-0 animate-marquee"
          style={{ gap: '2rem' }}
        >
          {tickerItems.map((item, index) => (
            <div key={`a-${index}`} className="flex items-center shrink-0" style={{ gap: '0.5rem' }}>
              <span className="text-orange font-bold uppercase text-sm tracking-wide">{item.label}:</span>
              <span className="text-cream font-semibold text-sm">{item.value}</span>
              <span className="text-orange ml-6">◆</span>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div 
          className="flex shrink-0 animate-marquee"
          style={{ gap: '2rem' }}
        >
          {tickerItems.map((item, index) => (
            <div key={`b-${index}`} className="flex items-center shrink-0" style={{ gap: '0.5rem' }}>
              <span className="text-orange font-bold uppercase text-sm tracking-wide">{item.label}:</span>
              <span className="text-cream font-semibold text-sm">{item.value}</span>
              <span className="text-orange ml-6">◆</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
