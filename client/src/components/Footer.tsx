/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Footer with thick borders, hard shadows
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream border-t-8 border-orange">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange border-[3px] border-cream flex items-center justify-center">
                <span className="text-cream font-bold text-xl">M</span>
              </div>
              <div>
                <span className="font-bold text-xl text-cream tracking-tight">MARTÍ 13</span>
                <span className="block text-xs text-cream/70 uppercase tracking-widest">El Gremio del Almorzar</span>
              </div>
            </div>
            <p className="text-cream/80 text-sm italic">
              "Cuando en casa del herrero, cuchillo de palo"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg uppercase tracking-wide mb-4 text-orange">Navegación</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-cream/80 hover:text-orange transition-colors">Inicio</Link></li>
              <li><Link href="/eventos" className="text-cream/80 hover:text-orange transition-colors">Eventos</Link></li>
              <li><Link href="/menu" className="text-cream/80 hover:text-orange transition-colors">Menú</Link></li>
              <li><Link href="/hall-of-fame" className="text-cream/80 hover:text-orange transition-colors">Hall of Fame</Link></li>
              <li><Link href="/nosotros" className="text-cream/80 hover:text-orange transition-colors">Nosotros</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg uppercase tracking-wide mb-4 text-orange">Contacto</h3>
            <p className="text-cream/80 text-sm mb-2">Valencia, España</p>
            <p className="text-cream/80 text-sm mb-4">Club Social Privado</p>
            <div className="sticker-badge-orange inline-block">
              Solo Miembros
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-cream/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Martí 13. Todos los derechos reservados.
          </p>
          <p className="text-cream/60 text-sm">
            Hecho con ❤️ en Valencia
          </p>
        </div>
      </div>
    </footer>
  );
}
