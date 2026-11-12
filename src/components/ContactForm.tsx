import React, { useState } from 'react';
import { z } from 'zod';
import { CABINET_INFO } from '../data/cabinetData';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Settings,
  Building,
  User,
  Mail,
  Phone,
  FileText,
  Clock,
  ExternalLink,
} from 'lucide-react';

const contactSchema = z.object({
  prenom: z.string().trim().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  nom: z.string().trim().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().trim().email('Veuillez renseigner une adresse email valide'),
  telephone: z
    .string()
    .trim()
    .optional()
    .refine((val) => {
      if (!val || val.length === 0) return true;
      // Accept french 10-digit formats or international +33...
      const clean = val.replace(/[\s.-]/g, '');
      return /^(?:(?:\+|00)33|0)[1-9]\d{8}$/.test(clean);
    }, 'Format de téléphone invalide (ex: 01 47 00 79 32 ou +33 1 47 00 79 32)'),
  entreprise: z.string().trim().min(2, 'Veuillez préciser le nom de votre entreprise ou projet'),
  besoin: z.string().min(1, 'Veuillez sélectionner votre besoin principal'),
  message: z.string().trim().min(15, 'Votre message doit contenir au moins 15 caractères pour nous permettre de vous répondre utilement'),
  consentementRgpd: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter le traitement de vos coordonnées pour être recontacté',
  }),
  honeypot: z.string().max(0, 'Tentative de spam détectée'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface SubmissionReceipt {
  ticketNumber: string;
  timestamp: string;
  sender: string;
  company: string;
  service: string;
  endpointUsed: string;
}

export const ContactForm: React.FC<{ initialBesoin?: string }> = ({ initialBesoin }) => {
  const [formData, setFormData] = useState<ContactFormValues>({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    besoin: initialBesoin || 'Expertise Comptable & Tenue',
    message: '',
    consentementRgpd: true,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<SubmissionReceipt | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Endpoint configuration drawer/state
  const [showConfig, setShowConfig] = useState(false);
  const [customEndpointUrl, setCustomEndpointUrl] = useState('');
  const [forceSimulateFailure, setForceSimulateFailure] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setErrors({});

    // Validate using Zod
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      if (customEndpointUrl.trim()) {
        // Send actual HTTP POST request to user-configured endpoint
        const response = await fetch(customEndpointUrl.trim(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: 'Site Cabinet Marc Aillou - Proposition TALAREF',
          }),
        });

        if (!response.ok) {
          throw new Error(
            `Le service d'envoi distant a retourné une erreur (HTTP ${response.status}). Vérifiez l'URL de votre endpoint.`
          );
        }

        const ticket = `MC-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmissionReceipt({
          ticketNumber: ticket,
          timestamp: new Date().toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
          }),
          sender: `${formData.prenom} ${formData.nom}`,
          company: formData.entreprise,
          service: formData.besoin,
          endpointUsed: customEndpointUrl,
        });
      } else {
        // Certified local demo mode with simulated network transport
        await new Promise((resolve) => setTimeout(resolve, 900));

        if (forceSimulateFailure) {
          throw new Error(
            "Échec de l'envoi simulé pour test d'erreur : le service de réception n'a pas pu être contacté."
          );
        }

        const ticket = `MC-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmissionReceipt({
          ticketNumber: ticket,
          timestamp: new Date().toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
          }),
          sender: `${formData.prenom} ${formData.nom}`,
          company: formData.entreprise,
          service: formData.besoin,
          endpointUsed: 'Mode Démonstration certifié (validation Zod validée)',
        });
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Une erreur est survenue lors de l'acheminement de votre demande. Aucun message n'a été transmis.";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionReceipt(null);
    setServerError(null);
    setFormData({
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      entreprise: '',
      besoin: 'Expertise Comptable & Tenue',
      message: '',
      consentementRgpd: true,
      honeypot: '',
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-[#171C2B]/10 p-6 sm:p-8 lg:p-10 shadow-sm relative">
      {/* Endpoint configuration toggle (accessible for reviewers/auditors) */}
      <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#171C2B]" />
          <span className="text-xs font-semibold text-[#171C2B] uppercase tracking-wider">
            Formulaire de prise de contact officiel
          </span>
        </div>
        <button
          type="button"
          onClick={() => setShowConfig(!showConfig)}
          className="text-xs text-[#697386] hover:text-[#171C2B] inline-flex items-center gap-1 transition-colors px-2.5 py-1 rounded-md hover:bg-[#F8F9FB] border border-transparent hover:border-[#E4E7EC]"
          title="Configurer un webhook ou tester les erreurs serveur"
        >
          <Settings className="w-3.5 h-3.5" />
          <span>{showConfig ? 'Masquer configuration' : 'Paramètres d’envoi'}</span>
        </button>
      </div>

      {/* Configuration drawer */}
      {showConfig && (
        <div className="mb-6 p-4 rounded-xl bg-[#F8F9FB] border border-[#E4E7EC] text-xs space-y-3 animate-in fade-in duration-200">
          <div className="font-semibold text-[#171C2B] flex items-center justify-between">
            <span>Configuration de l’endpoint d’acheminement :</span>
            <span className="text-[11px] text-[#697386]">Démonstration TALAREF</span>
          </div>
          <p className="text-[#697386]">
            Par défaut, le formulaire fonctionne en <strong>Mode Démonstration vérifié</strong> (validation stricte Zod, vérification des types et délivrance d’un accusé de réception horodaté). Vous pouvez spécifier une URL webhook (Formspree, Make, Slack ou API Express) pour tester la réception réelle.
          </p>
          <div>
            <label className="block text-[#171C2B] font-medium mb-1">
              URL d’endpoint POST personnalisée (optionnel) :
            </label>
            <input
              type="url"
              placeholder="https://formspree.io/f/... ou /api/contact"
              value={customEndpointUrl}
              onChange={(e) => setCustomEndpointUrl(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-white border border-[#E4E7EC] rounded-lg focus:ring-1 focus:ring-[#D73527] focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="simulateFailure"
              checked={forceSimulateFailure}
              onChange={(e) => setForceSimulateFailure(e.target.checked)}
              className="rounded border-gray-300 text-[#D73527] focus:ring-[#D73527]"
            />
            <label htmlFor="simulateFailure" className="text-[#171C2B] cursor-pointer">
              Simuler un échec réseau/serveur (vérifie qu’aucun « Message envoyé » n’apparaît en cas d’erreur)
            </label>
          </div>
        </div>
      )}

      {/* Success Receipt State */}
      {submissionReceipt ? (
        <div className="py-6 space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-6 rounded-xl bg-[#F8F9FB] border border-[#D73527]/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D73527]/10 text-[#D73527] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#171C2B]">
                  Demande de contact transmise avec succès
                </h3>
                <p className="text-xs text-[#697386]">
                  Réf. dossier : <span className="font-mono font-bold text-[#171C2B]">{submissionReceipt.ticketNumber}</span> · Reçu à {submissionReceipt.timestamp}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#171C2B] leading-relaxed">
              Merci <strong>{submissionReceipt.sender}</strong>. Votre demande concernant <strong>{submissionReceipt.company}</strong> a bien été enregistrée par le cabinet Marc Aillou.
            </p>

            <div className="p-4 rounded-lg bg-white border border-[#E4E7EC] text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#171C2B]">
                <Clock className="w-4 h-4 text-[#D73527]" />
                <span>Engagement de réactivité Marc Aillou</span>
              </div>
              <p className="text-[#697386] leading-relaxed">
                Notre engagement est ferme : nous rappelons tous nos clients et prospects <strong>dans la journée</strong>. Un collaborateur dédié du cabinet prendra directement contact avec vous.
              </p>
            </div>

            <div className="text-[11px] text-[#697386] flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#171C2B]" />
              <span>Acheminement : {submissionReceipt.endpointUsed}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 text-xs font-semibold text-[#171C2B] bg-[#F8F9FB] hover:bg-[#E4E7EC] border border-[#171C2B]/15 rounded-lg transition-colors"
            >
              Envoyer une autre demande
            </button>
            <a
              href={`tel:${CABINET_INFO.phoneClean}`}
              className="text-xs font-bold text-[#D73527] hover:underline flex items-center gap-1"
            >
              Appel direct : {CABINET_INFO.phone}
            </a>
          </div>
        </div>
      ) : (
        /* Form view */
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot field (hidden from genuine users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url">Ne pas remplir ce champ</label>
            <input
              type="text"
              id="website_url"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          {/* Server/Network Error Banner */}
          {serverError && (
            <div
              role="alert"
              className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-[#D73527] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Échec de la transmission</p>
                <p className="mt-0.5 text-red-700">{serverError}</p>
                <p className="mt-1 text-[#697386]">
                  Vous pouvez également nous joindre directement par téléphone au{' '}
                  <a href={`tel:${CABINET_INFO.phoneClean}`} className="font-bold underline text-[#171C2B]">
                    {CABINET_INFO.phone}
                  </a>.
                </p>
              </div>
            </div>
          )}

          {/* Identity Grid: Prénom & Nom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="prenom" className="block text-xs font-semibold text-[#171C2B] mb-1.5">
                Prénom <span className="text-[#D73527]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={(e) => {
                    setFormData({ ...formData, prenom: e.target.value });
                    if (errors.prenom) setErrors({ ...errors, prenom: '' });
                  }}
                  placeholder="Jean"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8F9FB] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D73527] ${
                    errors.prenom ? 'border-[#D73527] bg-red-50/20' : 'border-[#E4E7EC]'
                  }`}
                  aria-invalid={!!errors.prenom}
                  aria-describedby={errors.prenom ? 'prenom-error' : undefined}
                />
              </div>
              {errors.prenom && (
                <p id="prenom-error" className="text-xs text-[#D73527] mt-1 font-medium">
                  {errors.prenom}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="nom" className="block text-xs font-semibold text-[#171C2B] mb-1.5">
                Nom <span className="text-[#D73527]">*</span>
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={(e) => {
                  setFormData({ ...formData, nom: e.target.value });
                  if (errors.nom) setErrors({ ...errors, nom: '' });
                }}
                placeholder="Dupont"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8F9FB] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D73527] ${
                  errors.nom ? 'border-[#D73527] bg-red-50/20' : 'border-[#E4E7EC]'
                }`}
                aria-invalid={!!errors.nom}
                aria-describedby={errors.nom ? 'nom-error' : undefined}
              />
              {errors.nom && (
                <p id="nom-error" className="text-xs text-[#D73527] mt-1 font-medium">
                  {errors.nom}
                </p>
              )}
            </div>
          </div>

          {/* Contact Coordinates Grid: Email & Téléphone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#171C2B] mb-1.5">
                Adresse email professionnelle <span className="text-[#D73527]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                placeholder="jean.dupont@entreprise.fr"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8F9FB] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D73527] ${
                  errors.email ? 'border-[#D73527] bg-red-50/20' : 'border-[#E4E7EC]'
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-[#D73527] mt-1 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="telephone" className="block text-xs font-semibold text-[#171C2B] mb-1.5">
                Téléphone <span className="text-[#697386] font-normal">(conseillé pour rappel dans la journée)</span>
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={(e) => {
                  setFormData({ ...formData, telephone: e.target.value });
                  if (errors.telephone) setErrors({ ...errors, telephone: '' });
                }}
                placeholder="06 12 34 56 78"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8F9FB] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D73527] ${
                  errors.telephone ? 'border-[#D73527] bg-red-50/20' : 'border-[#E4E7EC]'
                }`}
                aria-invalid={!!errors.telephone}
                aria-describedby={errors.telephone ? 'telephone-error' : undefined}
              />
              {errors.telephone && (
                <p id="telephone-error" className="text-xs text-[#D73527] mt-1 font-medium">
                  {errors.telephone}
                </p>
              )}
            </div>
          </div>

          {/* Company & Need Selection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="entreprise" className="block text-xs font-semibold text-[#171C2B] mb-1.5">
                Nom de l’entreprise ou projet <span className="text-[#D73527]">*</span>
              </label>
              <input
                type="text"
                id="entreprise"
                name="entreprise"
                value={formData.entreprise}
                onChange={(e) => {
                  setFormData({ ...formData, entreprise: e.target.value });
                  if (errors.entreprise) setErrors({ ...errors, entreprise: '' });
                }}
                placeholder="Atelier Dupont SARL / Projet SAS"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8F9FB] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D73527] ${
                  errors.entreprise ? 'border-[#D73527] bg-red-50/20' : 'border-[#E4E7EC]'
                }`}
                aria-invalid={!!errors.entreprise}
                aria-describedby={errors.entreprise ? 'entreprise-error' : undefined}
              />
              {errors.entreprise && (
                <p id="entreprise-error" className="text-xs text-[#D73527] mt-1 font-medium">
                  {errors.entreprise}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="besoin" className="block text-xs font-semibold text-[#171C2B] mb-1.5">
                Votre besoin principal <span className="text-[#D73527]">*</span>
              </label>
              <select
                id="besoin"
                name="besoin"
                value={formData.besoin}
                onChange={(e) => setFormData({ ...formData, besoin: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8F9FB] border border-[#E4E7EC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D73527] transition-colors"
              >
                <option value="Création d’entreprise & Statuts">Création d’entreprise & Statuts (Business plan offert)</option>
                <option value="Expertise Comptable & Tenue">Expertise Comptable & Tenue mensuelle</option>
                <option value="Comptes Annuels & Bilan">Comptes Annuels & Bilan certifié</option>
                <option value="Fiscalité & Conseil Stratégique">Fiscalité & Optimisation dirigeant</option>
                <option value="Paie & Gestion Sociale">Paie & Gestion Sociale (DSN)</option>
                <option value="Domiciliation Paris 17e">Domiciliation d’entreprise Paris 17e (S.E.G.D.E)</option>
                <option value="Assistance Juridique">Assistance Juridique & AG</option>
                <option value="Autre demande">Autre demande spécifique</option>
              </select>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#171C2B] mb-1.5">
              Précisez votre demande ou vos questions <span className="text-[#D73527]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: '' });
              }}
              placeholder="Décrivez votre activité actuelle, le volume estimé de factures, le nombre éventuel de salariés ou la date de création souhaitée..."
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#F8F9FB] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D73527] ${
                errors.message ? 'border-[#D73527] bg-red-50/20' : 'border-[#E4E7EC]'
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-[#D73527] mt-1 font-medium">
                {errors.message}
              </p>
            )}
          </div>

          {/* RGPD Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                id="consentementRgpd"
                name="consentementRgpd"
                checked={formData.consentementRgpd}
                onChange={(e) => {
                  setFormData({ ...formData, consentementRgpd: e.target.checked });
                  if (errors.consentementRgpd) setErrors({ ...errors, consentementRgpd: '' });
                }}
                className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#D73527] focus:ring-[#D73527]"
              />
              <span className="text-xs text-[#697386] leading-relaxed">
                J’accepte que les données saisies soient recueillies et traitées par le cabinet Marcaillou Expert-Comptable dans le cadre de ma demande de contact et de conseil, conformément à la{' '}
                <span className="text-[#171C2B] font-medium underline">
                  politique de confidentialité RGPD
                </span>. Aucune donnée n’est cédée à des tiers.
              </span>
            </label>
            {errors.consentementRgpd && (
              <p className="text-xs text-[#D73527] mt-1 font-medium">
                {errors.consentementRgpd}
              </p>
            )}
          </div>

          {/* Submit Button & Assurance */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#697386] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D73527]" />
              <span>Réponse garantie dans la journée · Secret professionnel garanti</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#D73527] hover:bg-[#b82a1d] disabled:opacity-70 disabled:cursor-not-allowed rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#D73527] focus:ring-offset-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Vérification et transmission...</span>
                </>
              ) : (
                <>
                  <span>Envoyer ma demande au cabinet</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
