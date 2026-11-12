import React from 'react';
import { PageId } from '../types';
import { CABINET_INFO } from '../data/cabinetData';
import { ArrowLeft, Shield, Scale, Building, UserCheck } from 'lucide-react';

export const LegalPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="text-xs font-semibold text-[#697386] hover:text-[#D73527] inline-flex items-center gap-1.5 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour à l’accueil
      </button>

      <div className="space-y-3 border-b border-[#E4E7EC] pb-6">
        <span className="text-xs uppercase tracking-wider font-bold text-[#D73527]">
          Informations légales & Déontologie
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#171C2B] tracking-tight">
          Mentions Légales
        </h1>
        <p className="text-xs text-[#697386]">
          Dernière mise à jour : Novembre 2024 · Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-[#171C2B] leading-relaxed">
        {/* Éditeur */}
        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-[#171C2B]">
            <Building className="w-4 h-4 text-[#D73527]" />
            <h2>1. Éditeur du site internet</h2>
          </div>
          <ul className="space-y-1.5 text-[#697386]">
            <li><strong>Dénomination sociale :</strong> {CABINET_INFO.name}</li>
            <li><strong>Forme juridique :</strong> {CABINET_INFO.companyForm}</li>
            <li><strong>Numéro d’immatriculation :</strong> {CABINET_INFO.rcs}</li>
            <li><strong>Siège social :</strong> {CABINET_INFO.address.street}, {CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}</li>
            <li><strong>Numéro de téléphone :</strong> {CABINET_INFO.phone}</li>
            <li><strong>Numéro de télécopie :</strong> {CABINET_INFO.fax}</li>
            <li><strong>Courrier électronique :</strong> {CABINET_INFO.email}</li>
          </ul>
        </section>

        {/* Direction de la publication & Ordre */}
        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-[#171C2B]">
            <UserCheck className="w-4 h-4 text-[#D73527]" />
            <h2>2. Direction de la publication & Ordre professionnel</h2>
          </div>
          <div className="space-y-2 text-[#697386]">
            <p>
              <strong>Directeur de la publication :</strong> M. Ghislain Marcaillou, en sa qualité de gérant et d’Expert-Comptable / Commissaire aux Comptes.
            </p>
            <p>
              <strong>Réglementation professionnelle :</strong> Le cabinet est membre inscrit au tableau de <strong>l’Ordre des Experts-Comptables de la Région Paris Île-de-France</strong> et à la Compagnie Régionale des Commissaires aux Comptes (CRCC).
            </p>
            <p>
              L’activité est régie par l'ordonnance n° 45-2138 du 19 septembre 1945 et le Code de déontologie des professionnels de l'expertise comptable (décret n° 2012-432 du 30 mars 2012).
            </p>
          </div>
        </section>

        {/* Hébergement */}
        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-[#171C2B]">
            <Shield className="w-4 h-4 text-[#D73527]" />
            <h2>3. Hébergement de la plateforme</h2>
          </div>
          <div className="space-y-1.5 text-[#697386]">
            <p>
              Le site est hébergé sur des infrastructures cloud sécurisées conformes aux normes européennes ISO 27001 et RGPD.
            </p>
            <p>
              Prestataire d’infrastructure : Google Cloud France / Europe West (serveurs situés au sein de l’Union Européenne).
            </p>
          </div>
        </section>

        {/* Propriété intellectuelle & Mention TALAREF */}
        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-[#171C2B]">
            <Scale className="w-4 h-4 text-[#D73527]" />
            <h2>4. Propriété intellectuelle & Notice de refonte TALAREF</h2>
          </div>
          <div className="space-y-2 text-[#697386]">
            <p>
              Les textes, éléments graphiques, photographies et logos reproduits sur ce site sont protégés par le droit de la propriété intellectuelle.
            </p>
            <p className="bg-[#F8F9FB] p-3 rounded-lg border border-[#E4E7EC] text-xs text-[#171C2B]">
              <strong>Notice relative à cette démonstration :</strong> Ce projet constitue une proposition de refonte ergonomique et technique réalisée par l’agence <strong>TALAREF</strong> à titre de démonstration non officielle, sans lien d’affiliation contractuelle revendiqué avec le cabinet Marcaillou.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
