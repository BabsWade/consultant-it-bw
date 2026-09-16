
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
  title: "Concepteur & Développeur Web/Mobile | Consultant CMS & LMS",
  location: "Thiès, Sénégal",
  email: "wadebabacar52@gmail.com",
  phone: "(+221) 77 868 79 66",
  website: "https://babacarwade.online",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  bio: "Passionné par l'ingénierie logicielle et la transformation digitale, j'accompagne les institutions, universités et entreprises dans la conception d'architectures web robustes, l'intégration de systèmes complexes (CMS/LMS) et la gestion de plateformes à fort impact.",
  stats: [
    { label: "Années d'expérience", value: "4+" },
    { label: "Plateformes gérées", value: "10+" },
    { label: "Diplôme", value: "Master Full-Stack" }
  ]
};


// ============================================================
// PROJETS
// ============================================================

export const projects = [
  {
    Image: reesaoImage,
    title: "Portail Web du REESAO",
    category: "Web",
    description:
      "Développement et administration du portail web du Réseau pour l’Excellence de l’Enseignement Supérieur en Afrique de l’Ouest.",
    technologies: [
      "Vue.js 3",
      "Vite",
      "Tailwind CSS",
      "D3.js",
      "REST API"
    ],
    Demo: "https://reesao.org",
    CodeGithub: "https://github.com/"
  },

  {
    Image: knowledgeHubImage,
    title: "Knowledge Hub - ADEA (BAD)",
    category: "Web",
    description:
      "Contribution au développement de la plateforme de librairie électronique du Knowledge Hub pour l'ADEA (Banque Africaine de Développement).",
    technologies: [
      "Drupal",
      "PHP",
      "MySQL",
      "CSS3"
    ],
    Demo: "https://knowledgehub.adeanet.org/",
    featured: true
  },

  {
    Image: unchkImage,
    title: "Écosystème Digital UN-CHK",
    category: "Web",
    description:
      "Conception, développement et maintenance de +8 sites institutionnels (Portail UN-CHK, École Doctorale, Legaltech Forum, Formation continue).",
    technologies: [
      "WordPress",
      "Elementor",
      "PHP",
      "SEO"
    ],
    Demo: "https://www.unchk.sn/",
    CodeGithub: "https://github.com/"
  },

  {
    Image: gestionEtablissementImage,
    title: "Application Gestion Établissement",
    category: "Full-Stack Web App",
    description:
      "Conception et développement complet d'une application de gestion d'école avec tableau de bord complet.",
    technologies: [
      "React.js",
      "Material UI",
      "PHP",
      "MySQL"
    ],
    Demo: "#",
    CodeGithub: "https://github.com/"
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
