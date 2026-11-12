import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { CABINET_INFO } from '../data/cabinetData';
import { Menu, X, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll only when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'cabinet', label: 'Le Cabinet' },
    { id: 'clients', label: 'Nos Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Discreet agency context bar */}
      <div className="bg-[#171C2B] text-white text-[11px] py-1.5 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 text-[#A0AEC0]">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D73527] shrink-0" />
            <span className="truncate">
              Proposition de refonte premium — Démonstration TALAREF · Membre de l’Ordre des Experts-Comptables
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-white font-medium">
            <a
              href={`tel:${CABINET_INFO.phoneClean}`}
              className="hover:text-[#D73527] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#D73527]" />
              {CABINET_INFO.phone}
            </a>
            <span className="text-white/30">|</span>
            <span className="text-white/80">Paris 17e</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar adhering to Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#171C2B]/10'
            : 'bg-white border-b border-[#171C2B]/5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single Text Element with Monogram) */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none focus:ring-2 focus:ring-[#D73527] rounded-lg p-1 shrink-0"
            aria-label="Retour à l'accueil du cabinet Marc Aillou"
          >
            {/* Authentic stylized logo icon based on original mark */}
            <div className="w-9 h-9 rounded-lg bg-[#171C2B] flex items-center justify-center font-bold tracking-tighter text-white text-base shadow-sm shrink-0 border border-[#171C2B]">
              <span className="text-[#D73527]">M</span>
              <span className="text-white text-xs -ml-0.5">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-[#171C2B] leading-none whitespace-nowrap">
                MARCAILLOU
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#697386] mt-0.5 whitespace-nowrap">
                Expert-Comptable · Paris
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (single-line, clean hover underline) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#171C2B]" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 text-sm font-medium ${
                    isActive
                      ? 'text-[#D73527] font-semibold'
                      : 'text-[#171C2B] hover:text-[#D73527]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D73527] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2.5 text-xs font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg transition-all shadow-sm flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#D73527] whitespace-nowrap shrink-0"
            >
              Prendre rendez-vous
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#171C2B] hover:text-[#D73527] focus:outline-none focus:ring-2 focus:ring-[#D73527] rounded-lg"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile slide-down menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-x-0 top-24.5 bottom-0 bg-[#171C2B]/50 backdrop-blur-sm z-50 flex flex-col justify-start"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsMobileMenuOpen(false);
            }}
          >
            <div className="bg-white border-b border-[#171C2B]/10 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-left py-3 px-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#D73527]/10 text-[#D73527]'
                          : 'text-[#171C2B] hover:bg-[#F8F9FB]'
                      }`}
                    >
                      {link.label}
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </button>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-[#E4E7EC] space-y-3">
                <button
                  type="button"
                  onClick={() => handleLinkClick('contact')}
                  className="w-full py-3 text-center text-sm font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg shadow-sm"
                >
                  Prendre rendez-vous avec le cabinet
                </button>

                <div className="flex items-center justify-between text-xs text-[#697386] pt-2">
                  <a
                    href={`tel:${CABINET_INFO.phoneClean}`}
                    className="flex items-center gap-1.5 font-medium text-[#171C2B]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D73527]" />
                    {CABINET_INFO.phone}
                  </a>
                  <span>24 rue Baron, Paris 17e</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
