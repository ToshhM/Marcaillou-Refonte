import React from 'react';
import { PageId } from '../types';
import { CABINET_INFO } from '../data/cabinetData';
import { ContactForm } from '../components/ContactForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Train,
  Building,
} from 'lucide-react';

interface ContactPageProps {
  initialBesoin?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialBesoin, onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-white border-b border-[#171C2B]/10 pt-12 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F9FB] border border-[#171C2B]/10 rounded-full text-xs font-semibold text-[#171C2B]">
            <span className="w-2 h-2 rounded-full bg-[#D73527]" />
            <span>Prise de contact & Prise de rendez-vous</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171C2B] tracking-tight">
            Contacter le cabinet Marcaillou
          </h1>

          <p className="text-base sm:text-lg text-[#697386] max-w-3xl leading-relaxed">
            Vous avez une question comptable, un projet de création d’entreprise ou un besoin de domiciliation à Paris 17e ? 
            Nous vous garantissons une écoute attentive et un <strong>rappel dans la journée</strong> par un interlocuteur qualifié.
          </p>
        </div>
      </section>

      {/* Main Grid: Form (left) + Coordinates & Access (right) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Functional Contact Form */}
          <div className="lg:col-span-7 space-y-4">
            <ContactForm initialBesoin={initialBesoin} />
          </div>

          {/* Right Column: Verified Coordinates, Hours & Transportation */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Coordinates Card */}
            <div className="bg-white rounded-2xl border border-[#171C2B]/10 p-6 sm:p-7 shadow-2xs space-y-5">
              <h2 className="text-base font-bold text-[#171C2B] border-b border-[#E4E7EC] pb-3">
                Coordonnées du cabinet
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#171C2B]">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#D73527]/10 text-[#D73527] rounded-lg shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#171C2B]">{CABINET_INFO.name}</p>
                    <p>{CABINET_INFO.address.street}</p>
                    <p className="font-medium text-[#171C2B]">
                      {CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}
                    </p>
                    <p className="text-[11px] text-[#697386] mt-0.5">
                      {CABINET_INFO.address.district}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#D73527]/10 text-[#D73527] rounded-lg shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#697386]">Ligne directe :</p>
                    <a
                      href={`tel:${CABINET_INFO.phoneClean}`}
                      className="font-bold text-[#171C2B] hover:text-[#D73527] transition-colors"
                    >
                      {CABINET_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F8F9FB] text-[#697386] rounded-lg shrink-0 border border-[#E4E7EC]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#697386]">Email professionnel :</p>
                    <a
                      href={`mailto:${CABINET_INFO.email}`}
                      className="font-medium text-[#171C2B] hover:text-[#D73527] transition-colors"
                    >
                      {CABINET_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#697386] pt-1">
                  <span className="font-semibold text-[#171C2B]">Fax :</span>
                  <span>{CABINET_INFO.fax}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC] space-y-1.5 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#171C2B]">
                  <Clock className="w-4 h-4 text-[#D73527]" />
                  <span>Horaires d’accueil & standard</span>
                </div>
                <p className="text-[#697386]">
                  Du Lundi au Vendredi : 9h00 – 12h30 / 14h00 – 18h30
                </p>
                <p className="text-[11px] text-[#D73527] font-semibold">
                  Rappel assuré dans la journée pour les messages déposés avant 17h.
                </p>
              </div>
            </div>

            {/* Access & Transports Card */}
            <div className="bg-white rounded-2xl border border-[#171C2B]/10 p-6 sm:p-7 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#171C2B]">
                <Train className="w-4 h-4 text-[#D73527]" />
                <span>Accès & Transports en commun</span>
              </div>

              <ul className="space-y-2 text-xs text-[#697386]">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#171C2B] shrink-0">Métro 13 :</span>
                  <span>Stations La Fourche ou Brochant (3 min à pied)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#171C2B] shrink-0">Métro 14 :</span>
                  <span>Station Pont Cardinet (accès direct Gare Saint-Lazare)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#171C2B] shrink-0">Bus :</span>
                  <span>Lignes 54, 74, 21 (Arrêt La Fourche)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#171C2B] shrink-0">Stationnement :</span>
                  <span>Parkings publics Batignolles et Clichy à proximité</span>
                </li>
              </ul>
            </div>

            {/* Domiciliation Reminder */}
            <div className="p-5 rounded-2xl bg-[#171C2B] text-white space-y-3">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#D73527]">
                Siège Social & Domiciliation
              </span>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Vous souhaitez déclarer votre société au 24 rue Baron et profiter de notre tri de courrier express ?
              </p>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-white hover:text-[#D73527] inline-flex items-center gap-1 transition-colors"
              >
                Découvrir l’offre Domiciliation S.E.G.D.E →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
