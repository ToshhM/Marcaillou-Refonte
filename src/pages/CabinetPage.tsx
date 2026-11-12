import React from 'react';
import { PageId } from '../types';
import { CABINET_INFO } from '../data/cabinetData';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  Clock,
  Award,
  Users,
  Compass,
  Building2,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

interface CabinetPageProps {
  onNavigate: (page: PageId) => void;
}

export const CabinetPage: React.FC<CabinetPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Banner Cabinet */}
      <section className="bg-white border-b border-[#171C2B]/10 pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F9FB] border border-[#171C2B]/10 rounded-full text-xs font-semibold text-[#171C2B]">
            <span className="w-2 h-2 rounded-full bg-[#D73527]" />
            <span>24 ans d’expérience au service des chefs d’entreprise</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171C2B] tracking-tight max-w-4xl">
            L’exigence des grands cabinets, la proximité d’une équipe à taille humaine.
          </h1>

          <p className="text-base sm:text-lg text-[#697386] max-w-3xl leading-relaxed">
            Fondé et dirigé par <strong>Ghislain Marcaillou</strong>, Expert-Comptable et Commissaire aux Comptes, le cabinet Marcaillou conjugue rigueur institutionnelle, veille fiscale de pointe et disponibilité permanente pour les artisans, commerçants et dirigeants de PME-TPE.
          </p>
        </div>
      </section>

      {/* Leadership Profile: Ghislain Marcaillou */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#171C2B]/10 overflow-hidden shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-4/3 lg:aspect-auto lg:h-[450px]">
              <img
                src="/src/assets/images/advisory_meeting_1794498346024.jpg"
                alt="Ghislain Marcaillou en entretien de conseil financier et fiscal"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171C2B]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/40 text-xs">
                <p className="font-bold text-[#171C2B]">{CABINET_INFO.founder.name}</p>
                <p className="text-[#697386]">{CABINET_INFO.founder.title}</p>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
                  Parcours & Leadership
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171C2B] tracking-tight">
                  Ghislain Marcaillou
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-[#697386]">
                  Expert-Comptable et Commissaire aux Comptes · Pratique depuis 24 ans
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#171C2B] leading-relaxed">
                Ghislain Marcaillou a exercé la première moitié de sa carrière en qualité d'associé au sein de grands cabinets d'envergure internationale et nationale : <strong>Groupe FIDUCIAL</strong>, cabinets d’audit <strong>HLB</strong>, et <strong>AMYOT EXCO</strong>.
              </p>

              <p className="text-xs sm:text-sm text-[#697386] leading-relaxed">
                Fort de ces acquis et de cette rigueur méthodologique, il a créé son propre cabinet à Paris afin d’apporter aux dirigeants de proximité un conseil de très haute valeur ajoutée, sans la déperdition humaine souvent observée dans les grands réseaux.
              </p>

              <div className="p-4 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC] space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#171C2B]">
                  <Users className="w-4 h-4 text-[#D73527]" />
                  <span>Une équipe dévouée de 12 collaborateurs dynamiques</span>
                </div>
                <p className="text-[#697386] leading-relaxed">
                  Assisté de collaborateurs spécialisés en tenue de comptes, fiscalité et gestion sociale, Ghislain Marcaillou supervise personnellement chaque dossier pour garantir un niveau de qualité constant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 Piliers Déontologiques & Opérationnels */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
            Nos engagements fermes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171C2B] tracking-tight">
            Pourquoi nos clients renouvellent leur confiance chaque année.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CABINET_INFO.engagements.map((eng, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#171C2B]/10 hover:border-[#D73527]/30 transition-colors shadow-2xs space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D73527]/10 text-[#D73527] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#171C2B]">{eng.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#697386] leading-relaxed">
                {eng.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cadre Légal & Implantation Paris 17e */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#171C2B] text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
              Sécurité institutionnelle
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              Inscrit à l’Ordre des Experts-Comptables
            </h2>
            <p className="text-xs sm:text-sm text-[#A0AEC0] leading-relaxed">
              Le cabinet Marc Aillou est soumis au respect strict du code de déontologie de la profession, garantissant le secret professionnel le plus rigoureux, la mise à jour constante des compétences techniques et l’assurance responsabilité civile professionnelle obligatoire.
            </p>
            <div className="text-xs text-[#CBD5E1] space-y-1 font-mono pt-2">
              <p>{CABINET_INFO.companyForm}</p>
              <p>{CABINET_INFO.rcs}</p>
              <p>Siège : {CABINET_INFO.address.street}, {CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}</p>
            </div>
          </div>

          <div className="space-y-4 md:border-l md:border-white/10 md:pl-8">
            <h3 className="text-base font-bold text-white">
              Une question ? Un rendez-vous au cabinet ?
            </h3>
            <p className="text-xs text-[#A0AEC0] leading-relaxed">
              Venez nous rencontrer à notre siège au 24 rue Baron dans le 17e arrondissement, ou convenons d’un échange téléphonique préliminaire.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Prendre rendez-vous
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`tel:${CABINET_INFO.phoneClean}`}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center"
              >
                Appeler le {CABINET_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
