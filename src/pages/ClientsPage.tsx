import React, { useState } from 'react';
import { PageId } from '../types';
import { CLIENT_SECTORS, VERIFIED_TESTIMONIALS, CABINET_INFO } from '../data/cabinetData';
import {
  CheckCircle2,
  Building2,
  Store,
  Hammer,
  Home,
  Laptop,
  Utensils,
  Video,
  Plane,
  Briefcase,
  Users2,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

interface ClientsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForContact: (besoin: string) => void;
}

const SECTOR_ICONS: Record<string, React.ReactNode> = {
  artisan: <Hammer className="w-5 h-5 text-[#D73527]" />,
  commercant: <Store className="w-5 h-5 text-[#D73527]" />,
  btp: <Building2 className="w-5 h-5 text-[#D73527]" />,
  immobilier: <Home className="w-5 h-5 text-[#D73527]" />,
  services: <Laptop className="w-5 h-5 text-[#D73527]" />,
  restauration: <Utensils className="w-5 h-5 text-[#D73527]" />,
  audiovisuel: <Video className="w-5 h-5 text-[#D73527]" />,
  tourisme: <Plane className="w-5 h-5 text-[#D73527]" />,
  'profession-liberale': <Briefcase className="w-5 h-5 text-[#D73527]" />,
  association: <Users2 className="w-5 h-5 text-[#D73527]" />,
};

export const ClientsPage: React.FC<ClientsPageProps> = ({
  onNavigate,
  onSelectServiceForContact,
}) => {
  const [activeSector, setActiveSector] = useState<string>(CLIENT_SECTORS[0].id);

  const selectedSectorData = CLIENT_SECTORS.find((s) => s.id === activeSector) || CLIENT_SECTORS[0];

  const handleContactForSector = (sectorTitle: string) => {
    onSelectServiceForContact(`Accompagnement secteur : ${sectorTitle}`);
    onNavigate('contact');
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header Banner */}
      <section className="bg-white border-b border-[#171C2B]/10 pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F9FB] border border-[#171C2B]/10 rounded-full text-xs font-semibold text-[#171C2B]">
            <span className="w-2 h-2 rounded-full bg-[#D73527]" />
            <span>Plus d’une centaine de clients accompagnés en Île-de-France</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171C2B] tracking-tight max-w-4xl">
            Artisans, commerçants, créateurs et PME-TPE : une écoute sur-mesure pour chaque métier.
          </h1>

          <p className="text-base sm:text-lg text-[#697386] max-w-3xl leading-relaxed">
            Une parfaite maîtrise des spécificités réglementaires et fiscales de votre profession est la condition première d’une gestion sereine. 
            Découvrez nos expertises sectorielles adaptées au tissu économique francilien.
          </p>
        </div>
      </section>

      {/* The 10 Authentic Sectors Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
            Secteurs d’activité vérifiés
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171C2B] tracking-tight">
            10 secteurs d’activité au cœur de notre pratique quotidienne
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {CLIENT_SECTORS.map((sector) => {
            const isCurrent = sector.id === activeSector;
            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => setActiveSector(sector.id)}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between gap-3 ${
                  isCurrent
                    ? 'bg-[#171C2B] text-white border-[#171C2B] shadow-md'
                    : 'bg-white text-[#171C2B] border-[#E4E7EC] hover:border-[#D73527]/30'
                }`}
              >
                <div className="p-2 rounded-lg bg-[#F8F9FB] self-start inline-flex">
                  {SECTOR_ICONS[sector.id]}
                </div>
                <div>
                  <h3 className={`font-bold text-xs sm:text-sm leading-snug ${isCurrent ? 'text-white' : 'text-[#171C2B]'}`}>
                    {sector.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Deep-Dive Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#171C2B]/10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E7EC] pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#D73527]/10">
                {SECTOR_ICONS[selectedSectorData.id]}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#171C2B]">
                  {selectedSectorData.title}
                </h3>
                <p className="text-xs text-[#697386]">
                  {selectedSectorData.description}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleContactForSector(selectedSectorData.title)}
              className="self-start sm:self-auto px-4 py-2 text-xs font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
            >
              Échanger sur mon activité
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#697386]">
                Enjeux comptables & fiscaux majeurs :
              </span>
              <p className="text-xs sm:text-sm text-[#171C2B] leading-relaxed p-4 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC]">
                {selectedSectorData.challenges}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#697386]">
                Solutions déployées par le cabinet :
              </span>
              <ul className="space-y-2">
                {selectedSectorData.keyServices.map((ks, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#171C2B]">
                    <CheckCircle2 className="w-4 h-4 text-[#D73527] shrink-0" />
                    <span>{ks}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Testimonial from Original Site & Code de déontologie */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-7 bg-[#171C2B] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
                Témoignage vérifié
              </span>
              <blockquote className="text-base sm:text-lg italic font-medium leading-relaxed">
                « {VERIFIED_TESTIMONIALS[0].quote} »
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#D73527] flex items-center justify-center font-bold text-white text-sm">
                MG
              </div>
              <div>
                <p className="text-sm font-bold text-white">{VERIFIED_TESTIMONIALS[0].author}</p>
                <p className="text-xs text-[#A0AEC0]">{VERIFIED_TESTIMONIALS[0].role}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#171C2B]/10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171C2B]">
                <ShieldAlert className="w-4 h-4 text-[#D73527]" />
                <span>Secret professionnel & Déontologie</span>
              </div>
              <h3 className="text-base font-bold text-[#171C2B]">
                Pourquoi nos références ne sont pas étalées publiquement
              </h3>
              <p className="text-xs text-[#697386] leading-relaxed">
                Conformément à l’article 21 du Code de déontologie des professionnels de l’expertise comptable, le secret professionnel interdit la divulgation nominative de nos clients ou de leurs bilans financiers sans accord formel.
              </p>
              <p className="text-xs text-[#697386] leading-relaxed">
                Votre comptabilité, vos marges et votre stratégie patrimoniale demeurent en toutes circonstances strictement confidentielles.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 px-4 text-xs font-bold text-[#171C2B] hover:text-[#D73527] bg-[#F8F9FB] hover:bg-[#E4E7EC] border border-[#171C2B]/15 rounded-lg transition-colors text-center"
              >
                Discuter de votre projet en toute confidentialité
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
