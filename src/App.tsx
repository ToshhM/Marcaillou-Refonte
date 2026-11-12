/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { ConsentProvider } from './context/ConsentContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CabinetPage } from './pages/CabinetPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  // Sync page state with browser history / hash
  const getInitialPage = (): PageId => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.replace(/^\//, '');
    const hash = window.location.hash.replace(/^#/, '');

    const target = path || hash;
    if (['home', 'services', 'cabinet', 'clients', 'contact', 'mentions-legales', 'confidentialite', 'cookies'].includes(target)) {
      return target as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [selectedBesoin, setSelectedBesoin] = useState<string | undefined>(undefined);

  const navigateTo = (page: PageId, besoinPreselect?: string) => {
    setCurrentPage(page);
    if (besoinPreselect) {
      setSelectedBesoin(besoinPreselect);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash for easy sharing and back button support
    try {
      window.history.pushState(null, '', page === 'home' ? '/' : `#${page}`);
    } catch {
      // Ignore
    }
  };

  // Listen to popstate (browser back/forward button)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash && ['home', 'services', 'cabinet', 'clients', 'contact', 'mentions-legales', 'confidentialite', 'cookies'].includes(hash)) {
        setCurrentPage(hash as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onSelectService={(srvTitle) => navigateTo('services', srvTitle)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onNavigate={navigateTo}
            onSelectServiceForContact={(title) => navigateTo('contact', title)}
          />
        );
      case 'cabinet':
        return <CabinetPage onNavigate={navigateTo} />;
      case 'clients':
        return (
          <ClientsPage
            onNavigate={navigateTo}
            onSelectServiceForContact={(besoin) => navigateTo('contact', besoin)}
          />
        );
      case 'contact':
        return <ContactPage initialBesoin={selectedBesoin} onNavigate={navigateTo} />;
      case 'mentions-legales':
        return <LegalPage onNavigate={navigateTo} />;
      case 'confidentialite':
        return <PrivacyPage onNavigate={navigateTo} />;
      case 'cookies':
        return <CookiePolicyPage onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <ConsentProvider>
      <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#171C2B] antialiased selection:bg-[#D73527]/15 selection:text-[#D73527]">
        {/* Navigation Bar */}
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />

        {/* Main Content Area */}
        <main className="flex-1 w-full" id="main-content">
          {renderContent()}
        </main>

        {/* Footer */}
        <Footer onNavigate={navigateTo} />

        {/* RGPD Cookie Banner & Custom Preferences Modal */}
        <CookieConsent />
      </div>
    </ConsentProvider>
  );
}
