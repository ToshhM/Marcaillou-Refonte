import React from 'react';
import { PageId } from '../types';
import { CABINET_INFO } from '../data/cabinetData';
import { useConsent } from '../context/ConsentContext';
import { Phone, Mail, MapPin, Shield, Award, ArrowUpRight, Sliders } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { openPreferencesModal } = useConsent();

  return (
    <footer className="bg-[#171C2B] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Ordre */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#D73527] flex items-center justify-center font-bold tracking-tighter text-white text-sm">
                <span>MA</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                MARCAILLOU
              </span>
            </div>
            <p className="text-xs text-[#A0AEC0] leading-relaxed">
              Cabinet d’expertise comptable et de commissariat aux comptes au service des artisans, commerçants, créateurs et PME depuis 24 ans.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-[#CBD5E1]">
              <div className="flex items-center gap-2 text-white/90">
                <Award className="w-4 h-4 text-[#D73527] shrink-0" />
                <span className="font-medium">{CABINET_INFO.orderMembership}</span>
              </div>
              <p className="text-[11px] text-[#A0AEC0]">
                {CABINET_INFO.rcs} · {CABINET_INFO.companyForm}
              </p>
            </div>
          </div>

          {/* Col 2: Services à la carte */}
          <div className="space-y-3.5">
            <h3 className="text-xs uppercase tracking-wider font-bold text-white/90">
              Expertises
            </h3>
            <ul className="space-y-2 text-xs text-[#A0AEC0]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Création d’entreprise & Statuts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Tenue comptable & Déclarations TVA
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Comptes & Bilan annuel
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Fiscalité & Optimisation dirigeant
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Paie & Gestion sociale
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Domiciliation Paris 17e (S.E.G.D.E)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Règlementaire */}
          <div className="space-y-3.5">
            <h3 className="text-xs uppercase tracking-wider font-bold text-white/90">
              Accès rapide
            </h3>
            <ul className="space-y-2 text-xs text-[#A0AEC0]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('cabinet')}
                  className="hover:text-white transition-colors"
                >
                  Le Cabinet & Ghislain Marcaillou
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('clients')}
                  className="hover:text-white transition-colors"
                >
                  Nos Clients & Secteurs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Prise de rendez-vous
                </button>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('mentions-legales')}
                  className="hover:text-white transition-colors"
                >
                  Mentions légales
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('confidentialite')}
                  className="hover:text-white transition-colors"
                >
                  Politique de confidentialité (RGPD)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('cookies')}
                  className="hover:text-white transition-colors"
                >
                  Politique relative aux cookies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openPreferencesModal}
                  className="inline-flex items-center gap-1.5 text-[#D73527] hover:underline font-semibold"
                >
                  <Sliders className="w-3 h-3" />
                  Gérer mes préférences cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Coordonnées vérifiées Paris 17e */}
          <div className="space-y-3.5">
            <h3 className="text-xs uppercase tracking-wider font-bold text-white/90">
              Coordonnées Paris 17e
            </h3>
            <div className="space-y-2.5 text-xs text-[#CBD5E1]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D73527] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{CABINET_INFO.address.street}</p>
                  <p>{CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}</p>
                  <p className="text-[11px] text-[#A0AEC0] mt-0.5">{CABINET_INFO.address.district}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#D73527] shrink-0" />
                <a
                  href={`tel:${CABINET_INFO.phoneClean}`}
                  className="text-white hover:text-[#D73527] font-semibold transition-colors"
                >
                  {CABINET_INFO.phone}
                </a>
              </div>

              <div className="text-[11px] text-[#A0AEC0] pl-6">
                Fax : {CABINET_INFO.fax}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-[#D73527] shrink-0" />
                <a
                  href={`mailto:${CABINET_INFO.email}`}
                  className="text-[#CBD5E1] hover:text-white transition-colors"
                >
                  {CABINET_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full py-2 px-3 text-xs font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                Demander un rappel
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & TALAREF disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0AEC0]">
          <p>© {new Date().getFullYear()} Marcaillou Expert-Comptable. Tous droits réservés.</p>
          <p className="text-[11px] text-[#CBD5E1]/70 text-center sm:text-right">
            Proposition de refonte non officielle réalisée par l’agence <span className="text-white font-medium">TALAREF</span> · Démonstration d’ingénierie web & UX
          </p>
        </div>
      </div>
    </footer>
  );
};
