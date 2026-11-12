import React from 'react';
import { PageId } from '../types';
import { CABINET_INFO } from '../data/cabinetData';
import { ArrowLeft, ShieldCheck, Lock, FileText, UserX, Clock } from 'lucide-react';

export const PrivacyPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
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
          Protection des données personnelles
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#171C2B] tracking-tight">
          Politique de Confidentialité (RGPD)
        </h1>
        <p className="text-xs text-[#697386]">
          Conforme au Règlement Général sur la Protection des Données (RGPD 2016/679) et à la loi Informatique et Libertés modifiée.
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-[#171C2B] leading-relaxed">
        {/* Responsable de traitement */}
        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-[#171C2B]">
            <ShieldCheck className="w-4 h-4 text-[#D73527]" />
            <h2>1. Responsable du traitement des données</h2>
          </div>
          <p className="text-[#697386]">
            Le responsable du traitement des données collectées sur le site est la société <strong>{CABINET_INFO.name}</strong>, domiciliée au {CABINET_INFO.address.street}, {CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}, représentée par M. Ghislain Marcaillou.
          </p>
        </section>

        {/* Données collectées & Finalités */}
        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-[#171C2B]">
            <FileText className="w-4 h-4 text-[#D73527]" />
            <h2>2. Données collectées et finalités</h2>
          </div>
          <div className="space-y-3 text-[#697386]">
            <p>
              Dans le cadre de l’utilisation de notre formulaire de contact ou d’une demande de devis, les informations suivantes sont recueillies :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identité : nom, prénom.</li>
              <li>Coordonnées : adresse e-mail professionnelle, numéro de téléphone.</li>
              <li>Informations professionnelles : dénomination de l’entreprise ou projet, type de besoin comptable ou fiscal.</li>
              <li>Contenu de votre message.</li>
            </ul>
            <p>
              <strong>Finalité :</strong> Ces données sont exclusivement collectées pour assurer le traitement de votre demande de mise en relation, l'établissement d'une proposition de mission ou la réponse à vos sollicitations par Ghislain Marcaillou et son équipe.
            </p>
          </div>
        </section>

        {/* Durée de conservation */}
        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-[#171C2B]">
            <Clock className="w-4 h-4 text-[#D73527]" />
            <h2>3. Durée de conservation des données</h2>
          </div>
          <p className="text-[#697386]">
            Pour les prospects n’ayant pas conclu de lettre de mission : les données sont conservées pour une durée maximale de <strong>3 ans</strong> à compter du dernier contact émanant du prospect. Pour les clients du cabinet : les données sont conservées pendant toute la durée contractuelle puis archivées conformément aux délais légaux de prescription comptable et fiscale (10 ans).
          </p>
        </section>

        {/* Sécurité et Secret Professionnel */}
        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-[#171C2B]">
            <Lock className="w-4 h-4 text-[#D73527]" />
            <h2>4. Sécurité & Secret professionnel</h2>
          </div>
          <p className="text-[#697386]">
            En tant que membres de l'Ordre des Experts-Comptables, tous nos collaborateurs sont tenus au <strong>secret professionnel absolu</strong>. Aucune donnée à caractère personnel n’est vendue, louée ou cédée à des fins commerciales ou publicitaires à des tiers.
          </p>
        </section>

        {/* Droits des utilisateurs */}
        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-[#171C2B]">
            <UserX className="w-4 h-4 text-[#D73527]" />
            <h2>5. Vos droits et exercice auprès du cabinet</h2>
          </div>
          <p className="text-[#697386]">
            Conformément à la réglementation européenne, vous disposez d'un droit d'accès, de rectification, d'effacement (« droit à l'oubli »), de limitation du traitement et de portabilité de vos données.
          </p>
          <p className="text-[#697386]">
            Pour exercer vos droits, vous pouvez nous adresser un courrier par voie postale à l'attention de M. Ghislain Marcaillou au <strong>24 rue Baron, 75017 Paris</strong> ou par email à <strong>{CABINET_INFO.email}</strong> en justifiant de votre identité.
          </p>
        </section>
      </div>
    </div>
  );
};
