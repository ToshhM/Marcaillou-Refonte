import React, { createContext, useContext, useState, useEffect } from 'react';
import { CookiePreferences } from '../types';

interface ConsentContextType {
  preferences: CookiePreferences;
  isBannerOpen: boolean;
  isCustomModalOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveCustom: (choices: { analytics: boolean; marketing: boolean }) => void;
  openPreferencesModal: () => void;
  closePreferencesModal: () => void;
  resetConsent: () => void;
}

const STORAGE_KEY = 'marcaillou_cookie_consent_v2';

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  answered: false,
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed.answered === 'boolean') {
          return parsed;
        }
      }
    } catch {
      // Storage unavailable or blocked
    }
    return DEFAULT_PREFERENCES;
  });

  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  // Banner is shown only if user hasn't answered yet
  const isBannerOpen = !preferences.answered;

  const persistConsent = (newPrefs: CookiePreferences) => {
    setPreferences(newPrefs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    } catch {
      // Ignore
    }

    // Dispatch custom browser event for conditional third-party trackers
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('marcaillou_consent_update', {
          detail: newPrefs,
        })
      );
    }
  };

  const acceptAll = () => {
    const updated: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      answered: true,
      timestamp: new Date().toISOString(),
    };
    persistConsent(updated);
    setIsCustomModalOpen(false);
  };

  const rejectAll = () => {
    const updated: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      answered: true,
      timestamp: new Date().toISOString(),
    };
    persistConsent(updated);
    setIsCustomModalOpen(false);
  };

  const saveCustom = (choices: { analytics: boolean; marketing: boolean }) => {
    const updated: CookiePreferences = {
      necessary: true,
      analytics: choices.analytics,
      marketing: choices.marketing,
      answered: true,
      timestamp: new Date().toISOString(),
    };
    persistConsent(updated);
    setIsCustomModalOpen(false);
  };

  const openPreferencesModal = () => {
    setIsCustomModalOpen(true);
  };

  const closePreferencesModal = () => {
    setIsCustomModalOpen(false);
  };

  const resetConsent = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    setPreferences(DEFAULT_PREFERENCES);
    setIsCustomModalOpen(false);
  };

  // Ensure body scroll is only locked when the modal is open, and cleanly unlocked when closed or unmounted
  useEffect(() => {
    if (isCustomModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isCustomModalOpen]);

  return (
    <ConsentContext.Provider
      value={{
        preferences,
        isBannerOpen,
        isCustomModalOpen,
        acceptAll,
        rejectAll,
        saveCustom,
        openPreferencesModal,
        closePreferencesModal,
        resetConsent,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};
