
// ============================================================
// IMAGES DES PROJETS
// ============================================================

import reesaoImage from "../assets/hero.png";
import knowledgeHubImage from "../assets/hero.png";
import unchkImage from "../assets/hero.png";
import gestionEtablissementImage from "../assets/hero.png";


// ============================================================
// INFORMATIONS PERSONNELLES
// ============================================================

export const personalInfo = {
  name: "Babacar WADE",
  title: "Concepteur & Développeur d'Applications Web & Mobile Full Stack",
  location: "Thiès, Sénégal",
  email: "wadebabacar52@gmail.com",
  phone: "(+221) 77 868 79 66",
  website: "https://babacarwade.online",
  github: "https://github.com/BabsWade",
  linkedin: "https://linkedin.com/babacar-wade",
  bio: "Passionné par l'ingénierie logicielle et la transformation digitale, j'accompagne les institutions, universités et entreprises dans la conception d'architectures web robustes, l'intégration de systèmes complexes (CMS/LMS) et la gestion de plateformes à fort impact.",
  stats: [
    { label: "Expérience", value: "4+" },
    { label: "Projets", value: "10+" },
    { label: "Diplôme", value: "Master 2" }
  ]
};


// ============================================================
// PROJETS
// ============================================================

export const projects = [
  {
    id: 1,
    title: "Application Mobile de Gestion de Produits",
    category: "Mobile",
    description: "Application mobile cross-platform avec authentification sécurisée par Token JWT et backend RESTful.",
    technologies: ["Flutter", "Laravel", "JWT", "REST API"],
    featured: true,
    Image: null, // Ajoutez le chemin de votre image (ex: '/images/flutter-app.png')
    CodeGithub: "https://github.com/votre-user/nom-du-repo", // Remplacez par votre lien GitHub
    Demo: "#" // Remplacez par le lien démo/APK ou laissez "#" s'il n'y en a pas
  },
  {
    id: 2,
    title: "Plateforme GAR (Gestion Axée sur les Résultats)",
    category: "Web",
    description: "Système web complet de suivi et d'évaluation des performances institutionnelles en mode GAR.",
    technologies: ["React.js", "Django", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    Image: null,
    CodeGithub: "https://github.com/votre-user/nom-du-repo",
    Demo: "https://votre-demo.com"
  },
  {
    id: 3,
    title: "Application Web d’Épicerie",
    category: "Web",
    description: "Plateforme web de commerce de proximité avec gestion de panier, catalogue produits et interface dynamique.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    featured: false,
    Image: null,
    CodeGithub: "https://github.com/votre-user/nom-du-repo",
    Demo: "#"
  },
  {
    id: 4,
    title: "Système de Réservation de Billets Desktop",
    category: "Desktop",
    description: "Logiciel client lourd permettant la réservation, le suivi des billets et la gestion des passagers.",
    technologies: ["Java Swing", "MySQL", "JDBC"],
    featured: false,
    Image: null,
    CodeGithub: "https://github.com/votre-user/nom-du-repo",
    Demo: "#"
  },
  {
    id: 5,
    title: "Gestion de Jardin Potager",
    category: "Web",
    description: "Plateforme web interactive de planification des cultures, suivi d'arrosage et gestion des récoltes.",
    technologies: ["React.js", "Spring Boot", "REST API"],
    featured: false,
    Image: null,
    CodeGithub: "https://github.com/votre-user/nom-du-repo",
    Demo: "#"
  },
  {
    id: 6,
    title: "Webservice RESTful de Gestion Bancaire",
    category: "Backend",
    description: "API REST sécurisée pour opérations bancaires (création de comptes, virements, relevés et transactions).",
    technologies: ["Spring Boot", "Maven", "Postman", "REST API"],
    featured: false,
    Image: null,
    CodeGithub: "https://github.com/votre-user/nom-du-repo",
    Demo: "#"
  },
  {
    id: 7,
    title: "Journal du Développeur (Blog)",
    category: "Web",
    description: "Plateforme de blogging technique avec système d'articles, gestion des catégories et espace commentaires.",
    technologies: ["Django", "Python", "SQLite", "Bootstrap"],
    featured: false,
    Image: null,
    CodeGithub: "https://github.com/votre-user/nom-du-repo",
    Demo: "#"
  },
  {
    id: 8,
    title: "Site Vitrine Services Informatiques",
    category: "Web",
    description: "Site responsive de présentation de prestations informatiques avec formulaire de contact interactif.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    featured: false,
    Image: null,
    CodeGithub: "https://github.com/votre-user/nom-du-repo",
    Demo: "https://votre-demo.com"
  },
  {
    id: 9,
    title: "Application Chat en Temps Réel",
    category: "Web",
    description: "Application de messagerie instantanée utilisant les WebSockets pour la communication bidirectionnelle.",
    technologies: ["Node.js", "Socket.io", "Express.js"],
    featured: true,
    Image: null,
    CodeGithub: "https://github.com/votre-user/nom-du-repo",
    Demo: "#"
  },
  {
    id: 10,
    title: "UI/UX Plateforme Gestion d'Événements",
    category: "Design",
    description: "Maquettage UI/UX haute fidélité pour une application de réservation et gestion d'événements.",
    technologies: ["Figma", "UI/UX", "Prototypage"],
    featured: false,
    Image: null,
    CodeGithub: "#",
    Demo: "https://www.figma.com/file/votre-lien-figma" // Lien Figma dans Demo
  },
  {
    id: 11,
    title: "UI/UX Application Jardin Potager",
    category: "Design",
    description: "Design d'interface utilisateur et parcours client optimisé pour la gestion de potager.",
    technologies: ["Figma", "Design System"],
    featured: false,
    Image: null,
    CodeGithub: "#",
    Demo: "https://www.figma.com/file/votre-lien-figma"
  },
  {
    id: 12,
    title: "Portfolio Infographiste",
    category: "CMS",
    description: "Site web personnel sur-mesure mettant en valeur des créations graphiques et visuelles.",
    technologies: ["WordPress", "Elementor", "CSS Custom"],
    featured: false,
    Image: null,
    CodeGithub: "#",
    Demo: "https://votre-site-wordpress.com"
  },
  {
    id: 13,
    title: "Application Mobile de Gestion de Recettes",
    category: "Mobile",
    description: "Application mobile de recherche de recettes avec sauvegarde locale hors-ligne via AsyncStorage.",
    technologies: ["React Native", "TypeScript", "AsyncStorage"],
    featured: false,
    Image: null,
    CodeGithub: "https://github.com/votre-user/nom-du-repo",
    Demo: "#"
  },
  {
    id: 14,
    title: "Scénarisation de Cours LMS Moodle",
    category: "E-Learning",
    description: "Conception pédagogique, intégration de contenus interactifs et scénarisation de parcours d'apprentissage.",
    technologies: ["Moodle", "Ingénierie Pédagogique", "H5P"],
    featured: false,
    Image: null,
    CodeGithub: "#",
    Demo: "https://votre-moodle.com"
  }
];


// ============================================================
// SERVICES
// ============================================================

export const services = [
  {
    icon: "Code",
    title: "Ingénierie & Dévelopement Full-Stack",
    description:
      "Conception d'applications web et mobiles sur-mesure performantes et scalables avec Vue.js, React, Node.js, Laravel et Flutter."
  },
  {
    icon: "Server",
    title: "Consulting CMS, LMS & Webmastering",
    description:
      "Administration, sécurisation et maintenance d'écosystèmes institutionnels sous WordPress, Drupal et Moodle."
  },
  {
    icon: "BarChart3",
    title: "Data Visualization & Cartographie",
    description:
      "Création d'interfaces interactives et de tableaux de bord de données géographiques/statistiques (D3.js, d3-geo)."
  },
  {
    icon: "ShieldCheck",
    title: "Cybersécurité & SEO",
    description:
      "Audit d'applications, sécurisation (OAuth2, JWT), optimisation des temps de chargement et référencement naturel."
  }
];


// ============================================================
// COMPÉTENCES
// ============================================================

export const skills = {
  frontend: [
    "Vue.js 3",
    "React.js",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "HTML5/CSS3",
    "D3.js"
  ],

  backend: [
    "Node.js",
    "PHP",
    "Laravel",
    "Python",
    "Django",
    "Java / Spring"
  ],

  cmsLms: [
    "WordPress",
    "Drupal",
    "Moodle",
    "cPanel / FTP"
  ],

  database: [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Oracle",
    "SQL"
  ],

  mobile: [
    "Flutter",
    "React Native",
    "Ionic",
    "Android"
  ],

  devopsSecurity: [
    "Git / GitHub / GitLab",
    "Docker",
    "CI/CD (Jenkins/Maven)",
    "OAuth2 / JWT",
    "Cybersécurité"
  ]
};


// ============================================================
// EXPÉRIENCES
// ============================================================

export const experiences = [
  {
    period: "Mai 2025 – Présent",
    role: "Responsable des TIC",
    company:
      "Réseau pour l’Excellence de l’Enseignement Supérieur en Afrique de l’Ouest (REESAO)",
    location: "À distance",
    technologies: [
      "Vue.js",
      "Vite",
      "Tailwind CSS",
      "D3.js / d3-geo",
      "REST API"
    ],
    missions: [
      "Développement, administration et maintenance des supports digitaux.",
      "Conception et intégration du portail web officiel du REESAO.",
      "Collaboration avec les communautés académiques, experts et participation aux réseaux stratégiques en Afrique de l'Ouest."
    ],
    projects: [
      "Portail web du REESAO"
    ],
    reference: "Pr Ch. SARR"
  },

  {
    period: "Mars 2023 – Fév. 2025 (2 ans)",
    role:
      "Assistant en Développement web (Stages pédagogique et professionnel)",
    company:
      "UN-CHK – Direction Communication et Marketing (DCM)",
    location: "Siège administratif UN-CHK, Sénégal",
    technologies: [
      "CMS WordPress",
      "Elementor",
      "PHP",
      "SEO"
    ],
    missions: [
      "Participation à la conception et au développement des sites web institutionnels et partenaires.",
      "Intégration, mise à jour des contenus et développement de nouvelles fonctionnalités.",
      "Réalisation des tests fonctionnels, correction des dysfonctionnements et optimisation des performances (responsive & mobile-friendly).",
      "Prise en charge de dossiers de communication (Brief et PDC) et rédaction de contenus."
    ],
    projects: [
      "Portail web de l'UN-CHK",
      "École doctorale",
      "Unité de la Formation continue",
      "Master LEPRAD",
      "Coupe du Recteur de l'UN-CHK",
      "Colloques (Dakar Legaltech Forum, DICO, Secteur informel, Sociologie)",
      "AfDigitalEdu"
    ],
    reference: "M. M. SARR"
  },

  {
    period: "Juil. 2024 – Déc. 2024 (6 mois)",
    role: "Assistant Webmaster Service IT",
    company:
      "Association pour le Développement de l’Education en Afrique (ADEA / Groupe BAD)",
    location: "À distance",
    technologies: [
      "CMS Drupal"
    ],
    missions: [
      "Contribution au développement de la plateforme de librairie électronique du Knowledge Hub pour cette institution panafricaine."
    ],
    projects: [
      "Knowledge Hub E-Library"
    ],
    reference: "M. RIJASON"
  },

  {
    period: "14 Mars – 14 Mai 2022 (2 mois)",
    role: "Stage pédagogique en Développement web",
    company: "École de codage Bakeli (Volkeno)",
    location: "À distance",
    technologies: [
      "React.js",
      "Material UI",
      "PHP",
      "MySQL",
      "Trello",
      "GitLab"
    ],
    missions: [
      "Conception et développement d'une application de gestion d'établissement scolaire."
    ],
    projects: [
      "Application Gestion Établissement scolaire"
    ],
    reference: "M. BA"
  }
];


// ============================================================
// FORMATION
// ============================================================

export const education = [
  {
    degree: "Master Informatique (Mention Bien)",
    specialty:
      "Conception et Développement d'Applications web & mobile, Full Stack",
    school:
      "Université numérique Cheikh Hamidou KANE (UN-CHK, ex UVS)",
    period: "2023 - 2025",
    thesis:
      "Conception et développement d'une plateforme de gestion et d’évaluation de la performance des agents publics dans une logique de Gestion Axée sur les Résultats (GAR)"
  },

  {
    degree: "Licence Informatique (Mention Bien)",
    specialty: "Développement d'Applications web & mobile",
    school:
      "Université numérique Cheikh Hamidou KANE (UN-CHK, ex UVS)",
    period: "2018 - 2022"
  }
];


// ============================================================
// CERTIFICATIONS
// ============================================================

export const certifications = [
  {
    title:
      "Moodle - Informatique & internet - Création de contenus & OBS",
    issuer:
      "Programme FORCE-N (Mastercard Foundation)"
  },

  {
    title: "Analyste Junior en Cybersécurité",
    issuer:
      "Programme FORCE-N (Mastercard Foundation)"
  },

  {
    title: "WEB3",
    issuer:
      "Programme FORCE-N (Mastercard Foundation)"
  },

  {
    title: "Traitement de données",
    issuer:
      "Programme FORCE-N (Mastercard Foundation)"
  }
];
