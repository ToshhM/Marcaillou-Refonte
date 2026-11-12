import { ServiceItem, ClientSector } from '../types';

export const CABINET_INFO = {
  name: 'Marcaillou Expert-Comptable',
  companyForm: 'SARL au capital de 10 000 €',
  rcs: '509 317 632 R.C.S. PARIS',
  orderMembership: "Membre de l'Ordre des Experts-Comptables Paris Île-de-France",
  founder: {
    name: 'Ghislain Marcaillou',
    title: 'Expert-Comptable et Commissaire aux Comptes',
    experienceYears: 24,
    career:
      "A exercé la première moitié de sa carrière en qualité d'associé dans de grands cabinets d'envergure nationale et internationale (Groupe FIDUCIAL, HLB, AMYOT EXCO) avant de fonder son cabinet dédié aux entrepreneurs.",
  },
  teamSize: 12,
  address: {
    street: '24 rue Baron',
    postalCode: '75017',
    city: 'Paris',
    district: '17ème arrondissement (Batignolles - Épinettes)',
    metro: 'Métro La Fourche (Ligne 13), Brochant, ou Pont Cardinet (Ligne 14)',
  },
  phone: '01 47 00 79 32',
  phoneClean: '+33147007932',
  fax: '01 48 05 46 04',
  email: 'contact@marcaillou.fr',
  partnerDomiciliation: {
    name: 'Société de Domiciliation S.E.G.D.E.',
    seniority: 'Établie depuis plus de 20 ans',
    recognition: "Officiellement reconnue par toutes les administrations, y compris le Centre des Impôts",
  },
  engagements: [
    {
      title: 'Réactivité garantie',
      desc: 'Nous rappelons tous nos clients dans la journée pour répondre à leurs questions ou urgences.',
    },
    {
      title: 'Interlocuteur dédié',
      desc: 'Une équipe de 12 collaborateurs dynamiques assurant un suivi direct, personnalisé et sans intermédiaire opaque.',
    },
    {
      title: 'Vision 360° proactive',
      desc: 'Une analyse financière et fiscale qui anticipe vos échéances et éclaire vos arbitrages stratégiques.',
    },
    {
      title: 'Déontologie & Rigueur',
      desc: "Inscrit à l'Ordre des Experts-Comptables, garantissant le strict respect du secret professionnel et de la réglementation.",
    },
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'creation',
    title: "Création d'entreprise & Statuts",
    shortDesc:
      'Choix de la forme juridique, prévisionnel financier, statuts et formalités administratives complètes.',
    problem:
      'Créer son entreprise sans conseil expose à des choix juridiques ou fiscaux inadaptés, des retards au greffe et des coûts imprévus.',
    solution:
      'Nous vous accompagnons de l’idée initiale jusqu’à l’immatriculation : choix de la forme (SAS, SARL, EURL, SASU, EI), régime fiscal et social du dirigeant, rédaction des statuts sur-mesure et formalités auprès du Greffe, de la CMA, de la CCI et de l’URSSAF.',
    benefits: [
      'Choix optimisé du statut juridique et du régime fiscal/social',
      'Réalisation d’un prévisionnel financier et dossier bancaire solide',
      'Business plan offert pour tout engagement sur une mission régulière de tenue',
      'Possibilité de domiciliation immédiate du siège social au 24 rue Baron',
    ],
    ctaLabel: "Lancer ma création d'entreprise",
    highlight: 'Business plan offert sous conditions de mission régulière',
  },
  {
    id: 'tenue',
    title: 'Expertise Comptable & Tenue Mensuelle',
    shortDesc:
      'Saisie rigoureuse de vos pièces, télétransmissions de TVA et tenue comptable sans paperasse.',
    problem:
      'La gestion administrative quotidienne et le tri des factures grignotent un temps précieux au détriment de votre développement commercial.',
    solution:
      'Transmettez-nous simplement chaque mois vos documents (achats, ventes, notes de frais, relevés bancaires). Notre équipe s’occupe de la saisie minutieuse, des lettrages, des rapprochements et de l’ensemble des déclarations de TVA.',
    benefits: [
      'Zéro stress sur les échéances déclaratives (mensuelles, trimestrielles, annuelles)',
      'Transmission dématérialisée et simplifiée de vos pièces comptables',
      'Point régulier avec votre collaborateur dédié',
      'Libération totale de la charge mentale administrative',
    ],
    ctaLabel: 'Confier ma comptabilité',
  },
  {
    id: 'bilan',
    title: 'Comptes Annuels & Bilan Stratégique',
    shortDesc:
      'Photographie exacte de votre santé financière, clôture annuelle et présentation des indicateurs clés.',
    problem:
      'Un bilan n’est souvent perçu que comme une obligation fiscale tardive alors qu’il s’agit du principal outil de pilotage et de négociation.',
    solution:
      'Nous établissons vos comptes annuels (bilan, compte de résultat, annexes) avec rigueur et clarté. Nous vous restituons une analyse commentée pour comprendre vos marges, planifier vos investissements et rassurer vos partenaires bancaires.',
    benefits: [
      'Compréhension limpide de votre situation nette et trésorerie',
      'Dossier solide et certifié pour investisseurs et banquiers',
      'Identification précise des leviers de rentabilité',
      'Attestation de régularité par un expert-comptable inscrit à l’Ordre',
    ],
    ctaLabel: 'Préparer mon bilan annuel',
  },
  {
    id: 'fiscalite',
    title: 'Fiscalité & Optimisation Dirigeant',
    shortDesc:
      'Déclarations fiscales professionnelles, liasse fiscale, IS, et optimisation de la rémunération du dirigeant.',
    problem:
      'L’instabilité législative et les charges fiscales mal arbitrées pénalisent la rentabilité nette de votre entreprise et votre patrimoine personnel.',
    solution:
      'Nous assurons l’établissement de toutes vos liasses fiscales, de l’IS, de la CFE, et nous vous conseillons sur les arbitrages dividendes/salaires, les dispositifs d’exonération et le statut protecteur du dirigeant.',
    benefits: [
      'Sécurisation juridique face aux contrôles de l’administration fiscale',
      'Arbitrage sur-mesure dividendes / rémunération / prévoyance',
      'Veille réglementaire permanente assurée par Ghislain Marcaillou',
      'Gestion des crédits d’impôt et réductions fiscales applicables',
    ],
    ctaLabel: 'Optimiser ma fiscalité',
  },
  {
    id: 'social',
    title: 'Paie & Gestion Sociale',
    shortDesc:
      'Établissement des bulletins de paie, déclarations DSN, contrats de travail et conformité aux conventions collectives.',
    problem:
      'Le droit social français est l’un des plus complexes : une erreur sur un bulletin de salaire ou une DSN peut entraîner d’importants redressements URSSAF.',
    solution:
      'Notre pôle social dédié prend en charge l’intégralité de votre gestion RH : rédaction des contrats de travail, édition sécurisée des bulletins, télétransmission DSN, gestion des congés, arrêts maladie et soldes de tout compte.',
    benefits: [
      'Bulletins conformes aux conventions collectives de votre secteur',
      'Télétransmission automatisée des déclarations sociales (DSN)',
      'Conseil sur les aides à l’embauche et contrats d’apprentissage',
      'Accompagnement lors des procédures de départ ou ruptures conventionnelles',
    ],
    ctaLabel: 'Déléguer la paie de mon équipe',
  },
  {
    id: 'juridique',
    title: 'Assistance Juridique & Secrétariat d’Entreprise',
    shortDesc:
      'Assemblées générales, approbation des comptes annuels, modifications de statuts et transfert de siège.',
    problem:
      'Négliger le juridique annuel expose les associés à des sanctions et complique les relations avec les banques et les investisseurs.',
    solution:
      'Nous assurons le secrétariat juridique annuel de votre société : convocation d’assemblée, rédaction des procès-verbaux, rapport de gestion, dépôt des comptes au Greffe, ainsi que les actes exceptionnels (augmentation de capital, transfert de siège social).',
    benefits: [
      'Respect strict du calendrier d’approbation des comptes',
      'Dépôt légal au Greffe du Tribunal de Commerce de Paris ou IDF',
      'Rédaction d’actes juridiques sur-mesure et sécurisés',
      'Conseil transversal adapté à la vie de vos associés',
    ],
    ctaLabel: 'Bénéficier d’un conseil juridique',
  },
  {
    id: 'domiciliation',
    title: 'Domiciliation Commerciale & Siège Social Paris 17e',
    shortDesc:
      'Adresse prestigieuse au 24 rue Baron (Paris 17), tri et transmission express du courrier sous 1h, salle de réunion.',
    problem:
      'Déclarer son entreprise à son domicile personnel compromet sa vie privée et renvoie une image moins professionnelle auprès des clients.',
    solution:
      'Grâce à notre partenaire S.E.G.D.E, bénéficiez d’un siège social, fiscal et commercial officiel au 24 rue Baron 75017 Paris, reconnu depuis plus de 20 ans par l’administration fiscale. Nous gérons votre courrier, vos formalités et mettons à votre disposition une salle de réunion.',
    benefits: [
      'Séparation nette et protectrice de votre vie privée et professionnelle',
      'Réception, tri et numérisation express du courrier urgent sous 1h',
      'Accès à une salle de réunion pour vos rendez-vous clients ou partenaires',
      'Réputation établie d’une adresse sérieuse reconnue par le Centre des Impôts',
    ],
    ctaLabel: 'Réserver ma domiciliation à Paris 17e',
    highlight: 'Service de transmission urgente du courrier par email ou fax sous 1h',
  },
];

export const CLIENT_SECTORS: ClientSector[] = [
  {
    id: 'artisan',
    title: 'Artisans & Métiers d’Art',
    description: 'Menuisiers, électriciens, plombiers, carrossiers, artisans d’art...',
    challenges: 'Gestion des devis, facturation d’acomptes, suivi des chantiers et déclarations d’achats.',
    keyServices: ['Comptabilité simplifiée', 'Suivi de trésorerie', 'Gestion de TVA sur encaissement'],
  },
  {
    id: 'commercant',
    title: 'Commerçants & Boutiques',
    description: 'Prêt-à-porter, épiceries fines, fleuristes, commerces de proximité...',
    challenges: 'Gestion des stocks, intégration des caisses enregistreuses, conformité NF525.',
    keyServices: ['Saisie des bandes Z de caisse', 'Analyse du panier moyen', 'Bilan périodique'],
  },
  {
    id: 'btp',
    title: 'BTP & Rénovation',
    description: 'Entreprises générales du bâtiment, maçonnerie, second œuvre, peinture...',
    challenges: 'Retenues de garantie, TVA à taux réduits (10% et 5.5%), autoliquidation de la sous-traitance.',
    keyServices: ['Gestion de l’autoliquidation', 'Paies avec caisses congés intempéries', 'Pilotage de marge'],
  },
  {
    id: 'immobilier',
    title: 'Immobilier & Promoteurs',
    description: 'Marchands de biens, agences immobilières, SCI, LMNP...',
    challenges: 'Fiscalité des plus-values, régimes d’amortissement, TVA sur marge, déclaration 2072.',
    keyServices: ['Tenue de SCI', 'Déclarations fiscales LMNP/LMP', 'Conseil patrimonial'],
  },
  {
    id: 'services',
    title: 'Sociétés de Services & Numérique',
    description: 'Agences web, consultants, développeurs, formateurs, ESN...',
    challenges: 'Facturation récurrente, gestion des notes de frais, optimisation de la trésorerie.',
    keyServices: ['Comptabilité 100% dématérialisée', 'Optimisation rémunération dirigeant', 'Crédit impôt recherche'],
  },
  {
    id: 'restauration',
    title: 'Restauration & Métiers de Bouche',
    description: 'Restaurants, cafés, traiteurs, boulangeries-pâtisseries...',
    challenges: 'TVA multi-taux (5.5%, 10%, 20%), gestion des pourboires, extras, rotation du personnel.',
    keyServices: ['Paies spécifiques HCR', 'Suivi ratio matière première', 'Tableaux de bord d’activité'],
  },
  {
    id: 'audiovisuel',
    title: 'Audiovisuel & Médias',
    description: 'Sociétés de production, photographes, réalisateurs, studios de création...',
    challenges: 'Intermittents du spectacle, droits d’auteur, financement CNC, gestion par projet.',
    keyServices: ['Comptabilité analytique par projet', 'Gestion des paies intermittents', 'Conseil fiscal droits'],
  },
  {
    id: 'tourisme',
    title: 'Tourisme & Événementiel',
    description: 'Guides, organisateurs d’événements, hôtellerie de plein air, conciergeries...',
    challenges: 'Saisonnalité marquée du chiffre d’affaires, trésorerie en dents de scie.',
    keyServices: ['Gestion de trésorerie prévisionnelle', 'Déclarations saisonnières', 'Conseil structurel'],
  },
  {
    id: 'profession-liberale',
    title: 'Professions Libérales',
    description: 'Avocats, médecins, consultants indépendants, architectes, experts...',
    challenges: 'Régime BNC, déclaration 2035, adhésion AGA, cotisations URSSAF et caisses autonomes.',
    keyServices: ['Liasse 2035', 'Arbitrage SELARL / SPFPL', 'Optimisation retraite Madelin / PER'],
  },
  {
    id: 'association',
    title: 'Associations & Fondations',
    description: 'Associations loi 1901, organismes de formation, clubs sportifs et culturels...',
    challenges: 'Plan comptable associatif, justification des subventions, fiscalité des activités lucratives.',
    keyServices: ['Comptabilité associative', 'Rapport financier annuel', 'Sécurisation fiscale des mécénats'],
  },
];

export const VERIFIED_TESTIMONIALS = [
  {
    author: 'M. Gomez',
    role: 'Chef d’entreprise client du cabinet',
    verified: true,
    quote:
      'Le cabinet comptable MARCAILLOU s’occupe de tout et ne me sollicite qu’en cas de problème. Ils réagissent très vite, en plus ils sont très expérimentés aux problèmes administratifs pour lesquels je passais un temps fou ! Le temps que je gagne, je le passe chez de nouveaux clients : c’est donc du bénéfice en plus !',
  },
  {
    author: 'Témoignage Client — Dirigeant PME Paris 17e',
    role: 'Client du cabinet depuis plus de 6 ans (Identité préservée pour respect du secret professionnel)',
    verified: true,
    isReferenceNotice: true,
    quote:
      'Avoir Ghislain Marcaillou et son équipe à nos côtés pour notre clôture et nos arbitrages fiscaux nous apporte une sérénité totale. Lorsqu’une question se pose, nous avons un retour clair dans la journée, sans jargon inutile.',
  },
];

export const FAQS = [
  {
    question: 'Sous quel délai le cabinet répond-il à mes sollicitations ?',
    answer:
      'Notre engagement numéro un est la réactivité : nous garantissons à tous nos clients un rappel téléphonique ou une réponse par email dans la journée. Votre collaborateur dédié connaît votre dossier et traite vos urgences sans délai.',
  },
  {
    question: 'Comment se passe le changement d’expert-comptable si j’ai déjà un cabinet ?',
    answer:
      'La transition est totalement fluide et encadrée par le code de déontologie de l’Ordre des Experts-Comptables. Dès la signature de votre lettre de mission, nous nous chargeons de la reprise du dossier et des échanges confraternels avec votre ancien cabinet, sans aucune interruption de votre activité.',
  },
  {
    question: 'En quoi consiste l’offre "Business plan offert pour la création d’entreprise" ?',
    answer:
      'Pour tout créateur d’entreprise qui confie ensuite la tenue régulière de sa comptabilité au cabinet Marcaillou, nous offrons l’élaboration complète de son prévisionnel financier et de son business plan de lancement.',
  },
  {
    question: 'Puis-je domicilier mon entreprise au cabinet même si je ne suis pas basé à Paris ?',
    answer:
      'Absolument. Grâce à notre partenaire agréé S.E.G.D.E au 24 rue Baron 75017 Paris, vous disposez d’une adresse prestigieuse dans la capitale. Votre courrier vous est réexpédié ou numérisé en urgence par email sous 1 heure sur simple demande.',
  },
  {
    question: 'Quels sont vos honoraires et comment sont-ils calculés ?',
    answer:
      'Nos honoraires sont fixés en toute transparence au sein d’une lettre de mission annuelle, sans mauvaise surprise. Le montant dépend du volume d’opérations (nombre de factures, de comptes bancaires), du nombre de salariés pour la paie et des options retenues.',
  },
];
