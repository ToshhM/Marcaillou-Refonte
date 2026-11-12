export type PageId =
  | 'home'
  | 'services'
  | 'cabinet'
  | 'clients'
  | 'contact'
  | 'mentions-legales'
  | 'confidentialite'
  | 'cookies'
  | '404';

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
  answered: boolean;
  timestamp?: string;
}

export type ServiceCategory =
  | 'creation'
  | 'tenue'
  | 'bilan'
  | 'fiscalite'
  | 'social'
  | 'juridique'
  | 'domiciliation';

export interface ServiceItem {
  id: ServiceCategory;
  title: string;
  shortDesc: string;
  problem: string;
  solution: string;
  benefits: string[];
  ctaLabel: string;
  highlight?: string;
}

export interface ClientSector {
  id: string;
  title: string;
  description: string;
  challenges: string;
  keyServices: string[];
}

export interface ContactFormData {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string;
  entreprise: string;
  besoin: string;
  message: string;
  consentementRgpd: boolean;
  honeypot?: string;
}
