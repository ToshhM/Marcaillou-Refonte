import React, { useState, useEffect, useRef } from 'react';
import { useConsent } from '../context/ConsentContext';
import { Shield, Check, X, Sliders, ChevronRight } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const {
    isBannerOpen,
    isCustomModalOpen,
    preferences,
    acceptAll,
    rejectAll,
    saveCustom,
    openPreferencesModal,
    closePreferencesModal,
  } = useConsent();

  // Local state for modal toggles
  const [customAnalytics, setCustomAnalytics] = useState(preferences.analytics);
  const [customMarketing, setCustomMarketing] = useState(preferences.marketing);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Sync state when modal opens
  useEffect(() => {
    if (isCustomModalOpen) {
      setCustomAnalytics(preferences.analytics);
      setCustomMarketing(preferences.marketing);
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 50);
    }
  }, [isCustomModalOpen, preferences]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCustomModalOpen) {
        closePreferencesModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCustomModalOpen, closePreferencesModal]);

  return (
    <>
      {/* 1. Compact Responsive Cookie Banner */}
      {isBannerOpen && !isCustomModalOpen && (
        <aside
          role="region"
          aria-label="Gestion des cookies et respect de la vie privée"
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5 bg-white/95 backdrop-blur-md border-t border-[#171C2B]/10 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 max-w-3xl">
              <div className="p-2 bg-[#D73527]/10 text-[#D73527] rounded-lg shrink-0 mt-0.5">
                <Shield className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-sm text-[#171C2B]">
                <p className="font-semibold text-[#171C2B] leading-snug">
                  Respect de votre vie privée et gestion des cookies
                </p>
                <p className="text-xs sm:text-sm text-[#697386] mt-1 leading-relaxed">
                  Le cabinet Marc Aillou utilise des traceurs essentiels au bon fonctionnement du site. Avec votre accord, nous pouvons utiliser des traceurs d’audience anonymes pour améliorer votre navigation. Aucun traceur marketing n’est déposé sans votre consentement exprès.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0 justify-end pt-1 lg:pt-0">
              <button
                type="button"
                onClick={openPreferencesModal}
                className="px-3.5 py-2 text-xs font-semibold text-[#171C2B] bg-[#F8F9FB] hover:bg-[#E4E7EC] border border-[#171C2B]/15 rounded-lg transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#D73527]"
              >
                <Sliders className="w-3.5 h-3.5" aria-hidden="true" />
                Personnaliser
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="px-4 py-2 text-xs font-semibold text-[#171C2B] hover:text-[#D73527] bg-white border border-[#171C2B]/20 rounded-lg hover:border-[#D73527]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D73527]"
              >
                Tout refuser
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-5 py-2 text-xs font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#D73527] focus:ring-offset-2"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Custom Preferences Modal */}
      {isCustomModalOpen && (
        <div
          className="fixed inset-0 z-60 bg-[#171C2B]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closePreferencesModal();
            }
          }}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-2xl border border-[#171C2B]/10 shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 my-auto text-[#171C2B]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E4E7EC] pb-4">
              <div>
                <h2 id="cookie-modal-title" className="text-xl font-bold tracking-tight text-[#171C2B]">
                  Centre de préférences de confidentialité
                </h2>
                <p className="text-xs sm:text-sm text-[#697386] mt-1">
                  Personnalisez l’activation des cookies selon vos préférences. Vous pouvez modifier ces choix à tout moment depuis le pied de page.
                </p>
              </div>
              <button
                ref={firstFocusableRef}
                type="button"
                onClick={closePreferencesModal}
                className="p-1.5 text-[#697386] hover:text-[#171C2B] rounded-lg hover:bg-[#F8F9FB] transition-colors"
                aria-label="Fermer la boîte de dialogue des cookies"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {/* Essential cookies */}
              <div className="p-4 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-[#171C2B]">Cookies strictement nécessaires</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D73527] bg-[#D73527]/10 px-2 py-0.5 rounded">
                      Toujours actif
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    aria-label="Cookies strictement nécessaires (obligatoires)"
                    className="w-4 h-4 text-[#D73527] rounded border-gray-300 cursor-not-allowed opacity-80"
                  />
                </div>
                <p className="text-xs text-[#697386] mt-2 leading-relaxed">
                  Ces traceurs sont requis pour le fonctionnement technique du site, la mémorisation de vos consentements et la sécurité de vos échanges sur le formulaire de contact. Ils ne peuvent pas être désactivés.
                </p>
              </div>

              {/* Analytics cookies */}
              <div className="p-4 rounded-xl bg-white border border-[#E4E7EC] hover:border-[#171C2B]/20 transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-sm text-[#171C2B]">Mesure d’audience & Statistiques</span>
                    <p className="text-xs text-[#697386]">
                      Analyse anonyme des pages consultées et du temps de visite.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={customAnalytics}
                      onChange={(e) => setCustomAnalytics(e.target.checked)}
                      aria-label="Autoriser les cookies de mesure d'audience"
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#D73527] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D73527]"></div>
                  </label>
                </div>
                <p className="text-xs text-[#697386] mt-2 leading-relaxed">
                  Nous aident à comprendre comment les visiteurs naviguent afin d’améliorer l’ergonomie et la rapidité des pages. Les données récoltées restent agrégées et strictement confidentielles.
                </p>
              </div>

              {/* Marketing & external media cookies */}
              <div className="p-4 rounded-xl bg-white border border-[#E4E7EC] hover:border-[#171C2B]/20 transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-sm text-[#171C2B]">Contenus enrichis & Réseaux</span>
                    <p className="text-xs text-[#697386]">
                      Cartes interactives, intégrations professionnelles externes.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={customMarketing}
                      onChange={(e) => setCustomMarketing(e.target.checked)}
                      aria-label="Autoriser les cookies marketing et multimédia"
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#D73527] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D73527]"></div>
                  </label>
                </div>
                <p className="text-xs text-[#697386] mt-2 leading-relaxed">
                  Permettent d’afficher des éléments de localisation interactifs et facilitent le partage sur les réseaux professionnels sans profilage publicitaire invasif.
                </p>
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#E4E7EC]">
              <button
                type="button"
                onClick={rejectAll}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#697386] hover:text-[#171C2B] transition-colors"
              >
                Tout refuser
              </button>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() =>
                    saveCustom({
                      analytics: customAnalytics,
                      marketing: customMarketing,
                    })
                  }
                  className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-[#171C2B] bg-[#F8F9FB] hover:bg-[#E4E7EC] border border-[#171C2B]/15 rounded-lg transition-colors"
                >
                  Enregistrer mes choix
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="flex-1 sm:flex-initial px-4 py-2 text-xs font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] rounded-lg transition-colors"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
