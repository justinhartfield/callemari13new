/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Glass navigation with backdrop blur, thick border bottom
 * Fast transitions, no easing curves
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/eventos", label: "Eventos" },
  { href: "/menu", label: "Menú" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange border-[3px] border-ink flex items-center justify-center shadow-brutal transition-all duration-100 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-brutal-lg">
              <span className="text-cream font-bold text-lg md:text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg md:text-xl text-ink tracking-tight">MARTÍ 13</span>
              <span className="block text-xs text-ink/70 uppercase tracking-widest">El Gremio del Almorzar</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-semibold text-sm uppercase tracking-wide transition-all duration-100 border-2 ${
                  location === link.href
                    ? "bg-ink text-cream border-ink"
                    : "bg-transparent text-ink border-transparent hover:border-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 bg-ink text-cream border-2 border-ink flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-t-4 border-ink">
          <div className="container py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 font-semibold uppercase tracking-wide border-b-2 border-ink/20 last:border-b-0 ${
                  location === link.href
                    ? "bg-ink text-cream"
                    : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
