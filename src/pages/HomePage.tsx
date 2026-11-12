import React, { useState } from 'react';
import { PageId } from '../types';
import { CABINET_INFO, SERVICES_LIST, CLIENT_SECTORS, VERIFIED_TESTIMONIALS, FAQS } from '../data/cabinetData';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  Clock,
  Users,
  Award,
  ChevronDown,
  Building2,
  FileCheck2,
  TrendingUp,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 sm:pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#171C2B]/10 rounded-full text-xs font-semibold text-[#171C2B] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#D73527]" />
                <span>Cabinet d’Expertise Comptable · Paris 17e</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171C2B] tracking-tight leading-[1.15] text-balance">
                L’expertise comptable et le conseil stratégique dédiés aux{' '}
                <span className="text-[#D73527]">entrepreneurs exigeants.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#697386] leading-relaxed max-w-2xl">
                Création d’entreprise, tenue rigoureuse, comptes annuels, gestion sociale et domiciliation au 24 rue Baron. 
                Profitez d’un accompagnement à 360° avec <strong>rappel garanti dans la journée</strong> par une équipe de 12 collaborateurs sous la direction de Ghislain Marcaillou.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 text-sm font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#D73527]"
                >
                  <span>Prendre rendez-vous avec le cabinet</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 text-sm font-bold text-[#171C2B] bg-white hover:bg-[#F8F9FB] border border-[#171C2B]/15 rounded-lg transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#171C2B]"
                >
                  <span>Découvrir nos expertises</span>
                </button>
              </div>

              {/* Trust proof inline */}
              <div className="pt-4 border-t border-[#E4E7EC] flex flex-wrap items-center gap-6 text-xs text-[#697386]">
                <div className="flex items-center gap-1.5 text-[#171C2B] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D73527]" />
                  <span>24 ans de pratique</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#171C2B] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D73527]" />
                  <span>Rappel dans la journée</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#171C2B] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D73527]" />
                  <span>Inscrit à l’Ordre</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Parisian Corporate Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#171C2B]/10 shadow-xl bg-white aspect-4/3 lg:aspect-auto lg:h-[480px]">
                <img
                  src="/src/assets/images/hero_paris_firm_1794498345382.jpg"
                  alt="Salle de conférence du cabinet d'expertise comptable dans un immeuble haussmannien à Paris"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171C2B]/70 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid proof badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-md flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-[#171C2B]">Cabinet Marc Aillou</p>
                    <p className="text-[#697386]">24 rue Baron · 75017 Paris</p>
                  </div>
                  <a
                    href={`tel:${CABINET_INFO.phoneClean}`}
                    className="font-bold text-[#D73527] hover:underline flex items-center gap-1 shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {CABINET_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY FIGURES & ACCREDITATIONS STRIP */}
      <section className="bg-[#171C2B] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0 md:px-4 text-center md:text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#D73527] font-mono tabular-nums">24 ans</p>
              <p className="text-xs text-[#CBD5E1] mt-1 font-medium">d’expérience & d’expertise fiscale</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-4 text-center md:text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">12</p>
              <p className="text-xs text-[#CBD5E1] mt-1 font-medium">collaborateurs dévoués & réactifs</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-4 text-center md:text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">100+</p>
              <p className="text-xs text-[#CBD5E1] mt-1 font-medium">clients fidélisés en Île-de-France</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-4 text-center md:text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#D73527] font-mono tabular-nums">1 jour</p>
              <p className="text-xs text-[#CBD5E1] mt-1 font-medium">délai de rappel garanti pour chaque client</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CABINET OVERVIEW & GHISLAIN MARCAILLOU */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#171C2B]/10 shadow-lg aspect-4/3">
              <img
                src="/src/assets/images/advisory_meeting_1794498346024.jpg"
                alt="Entretien de conseil stratégique entre Ghislain Marcaillou et un dirigeant d'entreprise"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl border border-[#171C2B]/10 shadow-md hidden sm:block max-w-[240px]">
              <p className="text-xs font-bold text-[#171C2B]">Ghislain Marcaillou</p>
              <p className="text-[11px] text-[#697386] mt-0.5">
                Expert-Comptable & Commissaire aux Comptes
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
                Le mot de la direction
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171C2B] tracking-tight">
                Une relation humaine et un engagement sans faille à vos côtés.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#697386] leading-relaxed">
              Dirigé par <strong>Ghislain Marcaillou</strong>, Expert-Comptable et Commissaire aux Comptes fort de 24 ans de pratique, le cabinet a été pensé pour rompre avec la froideur des structures impersonnelles.
            </p>

            <p className="text-sm sm:text-base text-[#697386] leading-relaxed">
              Après une première partie de carrière comme associé au sein de cabinets d'envergure (Groupe FIDUCIAL, HLB, AMYOT EXCO), Ghislain Marcaillou a fait le choix de mettre la richesse de cette exigence technique au service direct des <strong>artisans, commerçants, créateurs et PME-TPE</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {CABINET_INFO.engagements.slice(0, 2).map((eng, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#E4E7EC]">
                  <p className="font-bold text-sm text-[#171C2B]">{eng.title}</p>
                  <p className="text-xs text-[#697386] mt-1">{eng.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('cabinet')}
                className="text-xs font-bold text-[#D73527] hover:underline inline-flex items-center gap-1"
              >
                <span>En savoir plus sur l’histoire et l’équipe du cabinet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES À LA CARTE (Bento-style clean cards) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
              Nos expertises
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171C2B] tracking-tight">
              Vos services à la carte : un choix complet et coordonné.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="text-xs font-bold text-[#171C2B] hover:text-[#D73527] inline-flex items-center gap-1 transition-colors self-start md:self-auto"
          >
            <span>Voir l’intégralité des 7 expertises</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.slice(0, 6).map((service, index) => {
            const isMarquee = service.id === 'creation' || service.id === 'domiciliation';
            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-[#171C2B]/10 hover:border-[#D73527]/40 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between ${
                  isMarquee ? 'relative ring-1 ring-[#D73527]/20 bg-gradient-to-b from-white to-[#F8F9FB]' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#697386]">
                      0{index + 1}.
                    </span>
                    {service.highlight && (
                      <span className="text-[10px] font-bold text-[#D73527] bg-[#D73527]/10 px-2 py-0.5 rounded">
                        Offre phare
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#171C2B]">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#697386] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#171C2B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D73527] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#E4E7EC] mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="text-xs font-bold text-[#171C2B] hover:text-[#D73527] transition-colors inline-flex items-center gap-1"
                  >
                    Détails de l’accompagnement
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="p-1.5 text-[#D73527] hover:bg-[#D73527]/10 rounded-lg transition-colors"
                    title="Contacter le cabinet à propos de ce service"
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. METHODOLOGY (4-STEP EDITORIAL WORKFLOW) */}
      <section className="bg-white border-y border-[#171C2B]/10 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
              Notre méthode de travail
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171C2B] tracking-tight">
              Un processus transparent, fluide et libérateur.
            </h2>
            <p className="text-xs sm:text-sm text-[#697386]">
              Comment nous collaborons au quotidien pour vous délester de la contrainte administrative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC] space-y-3">
              <span className="text-sm font-mono font-bold text-[#D73527]">Étape 01</span>
              <h3 className="font-bold text-base text-[#171C2B]">Audit & Cadrage Initial</h3>
              <p className="text-xs text-[#697386] leading-relaxed">
                Entretien individuel avec Ghislain Marcaillou pour comprendre votre modèle, votre statut et vos objectifs de rémunération.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC] space-y-3">
              <span className="text-sm font-mono font-bold text-[#D73527]">Étape 02</span>
              <h3 className="font-bold text-base text-[#171C2B]">Dépôt Dématérialisé</h3>
              <p className="text-xs text-[#697386] leading-relaxed">
                Chaque mois, transmettez vos factures et relevés en quelques clics. Fini les classeurs et le tri de reçus papier.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC] space-y-3">
              <span className="text-sm font-mono font-bold text-[#D73527]">Étape 03</span>
              <h3 className="font-bold text-base text-[#171C2B]">Tenue & Réactivité</h3>
              <p className="text-xs text-[#697386] leading-relaxed">
                Saisie minutieuse, déclarations de TVA toujours ponctuelles, et réponse immédiate à vos interrogations dans la journée.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC] space-y-3">
              <span className="text-sm font-mono font-bold text-[#D73527]">Étape 04</span>
              <h3 className="font-bold text-base text-[#171C2B]">Bilan & Optimisation</h3>
              <p className="text-xs text-[#697386] leading-relaxed">
                Clôture commentée, restitution stratégique de votre situation financière et arbitrage de vos dividendes et investissements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED TESTIMONIAL & PROFILES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#171C2B] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
              Témoignage authentique
            </span>

            <blockquote className="text-lg sm:text-xl font-medium text-white/95 leading-relaxed italic">
              « {VERIFIED_TESTIMONIALS[0].quote} »
            </blockquote>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-[#D73527]">
                MG
              </div>
              <div>
                <p className="font-bold text-sm text-white">{VERIFIED_TESTIMONIALS[0].author}</p>
                <p className="text-xs text-[#A0AEC0]">{VERIFIED_TESTIMONIALS[0].role}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#CBD5E1]">
              <span className="text-[#A0AEC0]">
                Avis réel issu du site d’origine · Fidélité vérifiée
              </span>
              <button
                type="button"
                onClick={() => onNavigate('clients')}
                className="font-bold text-white hover:text-[#D73527] inline-flex items-center gap-1 transition-colors"
              >
                <span>Découvrir les 10 secteurs accompagnés</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
            Foire aux questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171C2B] tracking-tight">
            Tout ce que vous devez savoir pour démarrer.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-[#171C2B]/10 bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#171C2B] hover:text-[#D73527] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D73527]' : 'text-[#697386]'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#697386] leading-relaxed border-t border-[#E4E7EC] pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. FINAL CTA STRIP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#171C2B] to-[#252C3D] text-white rounded-2xl p-8 sm:p-12 text-center space-y-6 border border-white/10 shadow-lg">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Prêt à piloter votre entreprise en toute sérénité ?
            </h2>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Discutez directement de votre projet avec Ghislain Marcaillou et son équipe. 
              Diagnostic préliminaire sans engagement et réponse dans la journée.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              Prendre rendez-vous avec un expert
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${CABINET_INFO.phoneClean}`}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D73527]" />
              Appeler le {CABINET_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
