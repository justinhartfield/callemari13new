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
  { label: "DESDE", value: "2017" },
  { label: "PLATOS SERVIDOS", value: "+500" },
  { label: "EVENTOS", value: "76+" },
  { label: "TRADICIÓN", value: "ALMORZAR" },
];

export default function MarketTicker() {
  return (
    <div className="bg-ink text-cream py-2 overflow-hidden">
      <div 
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: "marquee 30s linear infinite",
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-orange font-bold uppercase text-sm">{item.label}:</span>
            <span className="text-cream font-semibold text-sm">{item.value}</span>
            <span className="text-orange mx-4">◆</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
