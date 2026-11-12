import React from 'react';
import { PageId } from '../types';
import { CABINET_INFO } from '../data/cabinetData';
import { ArrowLeft, Home, Phone, HelpCircle, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({
  onNavigate,
}) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="max-w-xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-2xl border border-[#171C2B]/10 shadow-sm">
        <div className="inline-flex p-3 rounded-2xl bg-[#D73527]/10 text-[#D73527]">
          <HelpCircle className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D73527]">
            Erreur 404 · Page introuvable
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#171C2B] tracking-tight">
            La page que vous recherchez n’est pas disponible.
          </h1>
          <p className="text-xs sm:text-sm text-[#697386] leading-relaxed max-w-md mx-auto">
            Contrairement à l’ancienne version du site qui affichait des pages introuvables sur le parcours de contact, toutes nos rubriques ont été restaurées et sont pleinement fonctionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="p-4 rounded-xl bg-[#F8F9FB] hover:bg-[#E4E7EC] border border-[#E4E7EC] transition-colors flex items-center justify-between"
          >
            <div>
              <p className="font-bold text-xs text-[#171C2B]">Page Contact fonctionnelle</p>
              <p className="text-[11px] text-[#697386]">Prendre rendez-vous avec le cabinet</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#D73527]" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="p-4 rounded-xl bg-[#F8F9FB] hover:bg-[#E4E7EC] border border-[#E4E7EC] transition-colors flex items-center justify-between"
          >
            <div>
              <p className="font-bold text-xs text-[#171C2B]">Services & Expertises</p>
              <p className="text-[11px] text-[#697386]">Création, bilan, paie & domiciliation</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#D73527]" />
          </button>
        </div>

        <div className="pt-4 border-t border-[#E4E7EC] flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-[#171C2B] hover:bg-black rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            Retour à l’accueil
          </button>
          <a
            href={`tel:${CABINET_INFO.phoneClean}`}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#D73527] hover:bg-[#D73527]/10 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            Appel direct : {CABINET_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
