import React from 'react';
import { PageId } from '../types';
import { useConsent } from '../context/ConsentContext';
import { ArrowLeft, Cookie, Sliders, ShieldCheck, Check, RotateCcw } from 'lucide-react';

export const CookiePolicyPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({
  onNavigate,
}) => {
  const { preferences, openPreferencesModal, resetConsent } = useConsent();

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
          Gestion des traceurs et respect du consentement
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#171C2B] tracking-tight">
          Politique relative aux Cookies
        </h1>
        <p className="text-xs text-[#697386]">
          Conforme aux recommandations de la CNIL et à la directive européenne ePrivacy.
        </p>
      </div>

      {/* Current status banner */}
      <div className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E7EC] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D73527]/10 text-[#D73527]">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#171C2B]">
                État actuel de vos consentements sur ce navigateur
              </h2>
              <p className="text-xs text-[#697386]">
                {preferences.answered
                  ? `Choix enregistrés le ${preferences.timestamp ? new Date(preferences.timestamp).toLocaleDateString('fr-FR') : 'récemment'}`
                  : 'Aucun choix enregistré pour le moment (bannière en attente)'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openPreferencesModal}
              className="px-4 py-2 text-xs font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5" />
              Modifier mes choix
            </button>
            <button
              type="button"
              onClick={resetConsent}
              className="px-3 py-2 text-xs font-semibold text-[#697386] hover:text-[#171C2B] bg-[#F8F9FB] hover:bg-[#E4E7EC] border border-[#E4E7EC] rounded-lg transition-colors flex items-center gap-1.5"
              title="Réinitialiser pour revoir le bandeau initial"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Réinitialiser
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-[#F8F9FB] border border-[#E4E7EC]">
            <span className="font-semibold text-[#171C2B] block">Cookies nécessaires :</span>
            <span className="text-[#D73527] font-bold">Actifs (Obligatoires)</span>
          </div>
          <div className="p-3 rounded-lg bg-[#F8F9FB] border border-[#E4E7EC]">
            <span className="font-semibold text-[#171C2B] block">Mesure d’audience :</span>
            <span className={preferences.analytics ? 'text-green-700 font-bold' : 'text-gray-500'}>
              {preferences.analytics ? 'Autorisés' : 'Refusés / Non déposés'}
            </span>
          </div>
          <div className="p-3 rounded-lg bg-[#F8F9FB] border border-[#E4E7EC]">
            <span className="font-semibold text-[#171C2B] block">Marketing & Médias :</span>
            <span className={preferences.marketing ? 'text-green-700 font-bold' : 'text-gray-500'}>
              {preferences.marketing ? 'Autorisés' : 'Refusés / Non déposés'}
            </span>
          </div>
        </div>
      </div>

      {/* Explanations of cookie categories */}
      <div className="space-y-6 text-xs sm:text-sm text-[#171C2B] leading-relaxed">
        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <h2 className="font-bold text-base text-[#171C2B]">Qu’est-ce qu’un traceur ou cookie ?</h2>
          <p className="text-[#697386]">
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou smartphone) lors de la consultation d'un site internet. Il permet à son émetteur de reconnaître votre terminal pendant sa durée de validité.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white border border-[#171C2B]/10 space-y-3">
          <h2 className="font-bold text-base text-[#171C2B]">Détail des catégories utilisées</h2>
          <div className="space-y-4 pt-2">
            <div>
              <h3 className="font-semibold text-[#171C2B]">1. Cookies strictement nécessaires (exemptés de consentement)</h3>
              <p className="text-[#697386] mt-1">
                Ils garantissent la navigation de base, la sécurité du formulaire de contact et la mémorisation de votre choix de consentement. Durée de validité : 6 à 13 mois maximum.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#171C2B]">2. Cookies statistiques et de mesure d'audience (soumis à accord)</h3>
              <p className="text-[#697386] mt-1">
                Ils permettent d’évaluer la fréquentation du site de façon anonymisée (taux de rebond, pages les plus lues). Ils ne permettent en aucun cas de suivre votre navigation en dehors de ce site.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#171C2B]">3. Cookies de partage et de contenus externes</h3>
              <p className="text-[#697386] mt-1">
                Destinés aux fonctionnalités de localisation ou de partage de documents. Aucun cookie publicitaire n’est exploité sans votre autorisation préalable.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
