import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_LIST, CABINET_INFO } from '../data/cabinetData';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Phone,
  Calculator,
  Building,
  FileSpreadsheet,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForContact,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'Toutes les expertises' },
    { id: 'creation', label: 'Création d’entreprise' },
    { id: 'tenue', label: 'Comptabilité & Bilan' },
    { id: 'social', label: 'Paie & Social' },
    { id: 'domiciliation', label: 'Domiciliation Paris 17e' },
  ];

  const filteredServices = SERVICES_LIST.filter((srv) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'creation') return srv.id === 'creation';
    if (selectedFilter === 'tenue') return srv.id === 'tenue' || srv.id === 'bilan' || srv.id === 'fiscalite';
    if (selectedFilter === 'social') return srv.id === 'social' || srv.id === 'juridique';
    if (selectedFilter === 'domiciliation') return srv.id === 'domiciliation';
    return true;
  });

  const handleServiceSelect = (title: string) => {
    onSelectServiceForContact(title);
    onNavigate('contact');
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header Banner */}
      <section className="bg-white border-b border-[#171C2B]/10 pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F9FB] border border-[#171C2B]/10 rounded-full text-xs font-semibold text-[#171C2B]">
            <span className="w-2 h-2 rounded-full bg-[#D73527]" />
            <span>Prestations certifiées par l’Ordre des Experts-Comptables</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171C2B] tracking-tight">
            Vos services à la carte : un choix complet et coordonné.
          </h1>

          <p className="text-base sm:text-lg text-[#697386] max-w-3xl leading-relaxed">
            Marcaillou Expert-Comptable vous offre un service global d’aide au pilotage de votre entreprise. 
            De la création de vos statuts à la clôture de vos comptes, chaque mission est taillée sur-mesure pour vous garantir sécurité juridique et sérénité opérationnelle.
          </p>

          {/* Filter Bar (Segmented Controls) */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedFilter === opt.id
                    ? 'bg-[#171C2B] text-white shadow-xs'
                    : 'bg-[#F8F9FB] text-[#697386] hover:text-[#171C2B] border border-[#E4E7EC]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List (with Problem / Solution / Concrete Benefits / CTA) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="space-y-10">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl border border-[#171C2B]/10 overflow-hidden shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                {/* Header of the service card */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#E4E7EC] pb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#D73527]">
                        Expertise 0{index + 1}
                      </span>
                      {service.highlight && (
                        <span className="text-[11px] font-bold text-[#D73527] bg-[#D73527]/10 px-2.5 py-0.5 rounded-full">
                          {service.highlight}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#171C2B] tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleServiceSelect(service.title)}
                    className="self-start px-4 py-2 text-xs font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Grid: Problématique vs Accompagnement proposé */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-5 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#171C2B] uppercase tracking-wider">
                      <AlertCircle className="w-4 h-4 text-[#D73527]" />
                      <span>Votre problématique</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#697386] leading-relaxed">
                      {service.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#171C2B] uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-[#171C2B]" />
                      <span>L’accompagnement Marcaillou</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#171C2B] leading-relaxed">
                      {service.solution}
                    </p>
                  </div>
                </div>

                {/* Bénéfices concrets */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#171C2B]">
                    Bénéfices concrets pour votre entreprise :
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171C2B] p-2.5 rounded-lg bg-white border border-[#E4E7EC]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D73527] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Domiciliation Focus Section (Paris 17e & S.E.G.D.E) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#171C2B]/10 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-8 sm:p-10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
                  Adresse de prestige & Domiciliation
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171C2B] tracking-tight">
                  24 rue Baron — 75017 Paris
                </h2>
                <p className="text-xs sm:text-sm text-[#697386]">
                  Partenariat exclusif avec la société S.E.G.D.E, établie depuis plus de 20 ans.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#171C2B]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D73527] shrink-0 mt-0.5" />
                  <span>Adresse officielle reconnue par le Centre des Impôts et le Greffe</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D73527] shrink-0 mt-0.5" />
                  <span>Réception, tri et ouverture du courrier à votre demande</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D73527] shrink-0 mt-0.5" />
                  <span>Transmission du courrier urgent par email ou fax sous 1 heure avec alerte téléphonique</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D73527] shrink-0 mt-0.5" />
                  <span>Mise à disposition d’une salle de réunion pour vos réceptions professionnelles</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleServiceSelect('Domiciliation Paris 17e')}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg shadow-sm transition-colors"
                >
                  Réserver ma domiciliation à Paris 17e
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-4/3 lg:aspect-auto lg:h-full">
              <img
                src="/src/assets/images/paris_17_facade_1794498345816.jpg"
                alt="Immeuble en pierre de taille haussmannien du 24 rue Baron dans le 17ème arrondissement de Paris"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#171C2B] text-white space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            Besoin d’une lettre de mission ou d’un devis personnalisé ?
          </h2>
          <p className="text-xs sm:text-sm text-[#A0AEC0] max-w-xl mx-auto">
            Nous étudions votre volumétrie sans frais pour vous proposer un forfait clair et sans surprise.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg shadow-sm transition-colors"
            >
              Demander un chiffrage personnalisé
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
