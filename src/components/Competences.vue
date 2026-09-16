<script setup>
import { skills } from '../data/portfolioData.js';

import { 
  Code2, 
  Server, 
  Globe, 
  Database, 
  Smartphone, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Wrench,
  Search
} from 'lucide-vue-next';

// Configuration des titres et icônes pour chaque clé de skills
const categoryConfig = {
  frontend: { title: "Front-end & UI", icon: Code2 },
  backend: { title: "Back-end & Serveur", icon: Server },
  cmsLms: { title: "CMS & LMS", icon: Globe },
  database: { title: "Bases de Données", icon: Database },
  mobile: { title: "Technologies Mobiles", icon: Smartphone },
  devopsSecurity: { title: "DevOps, CI/CD & Sécurité", icon: ShieldCheck },
  api: { title: "API & Web Services", icon: Cpu },
  conception: { title: "Analyse & Méthodologies", icon: Layers },
  seo: { title: "SEO & Référencement", icon: Search }
};

// Configuration pour les outils
const toolsConfig = {
  projectManagement: "Gestion de Projet",
  designUI: "UI/UX & Design",
  officeAndGoogle: "Bureautique & Google",
  ide: "IDE & Éditeurs",
  os: "Systèmes d'Exploitation"
};
</script>

<template>
  <!-- Remplacement des bordures et arrières-plans par le thème clair technique -->
  <section id="competences" class="py-20 border-t-4 border-brand-dark bg-brand-light relative tech-blueprint-bg">
    
    <!-- En-tête de section style Rapport d'Ingénierie -->
    <div class="mb-16 border-2 border-brand-dark bg-white p-8 brutal-shadow max-w-3xl">
      <div class="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-4">
        +5
      </div>
      <h2 class="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-4">
        Compétences & Stack
      </h2>
      <div class="w-16 h-2 bg-brand-dark mb-4"></div>
      <p class="text-brand-muted font-mono text-sm leading-relaxed">
        Un éventail complet de technologies modernes maîtrisées pour le développement d'applications web/mobile robustes, la gestion de bases de données et l'administration d'infrastructures CMS/LMS.
      </p>
    </div>

    <!-- Grille des modules de compétences (Matrice de contrôle) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div 
        v-for="(skillList, key, index) in skills" 
        :key="key"
        class="border-2 border-brand-dark bg-white brutal-shadow flex flex-col group transition-transform duration-200"
      >
        <!-- En-tête de carte style "Registre de Matériel" -->
        <div class="flex items-center justify-between border-b-2 border-brand-dark p-4 bg-brand-light font-mono">
          <div class="flex items-center gap-3">
            <!-- Boîtier icône carré rigide -->
            <div class="w-10 h-10 border-2 border-brand-dark bg-white flex items-center justify-center text-brand-dark group-hover:bg-brand-accent transition-colors duration-200">
              <component :is="categoryConfig[key]?.icon || Code2" class="w-5 h-5" />
            </div>
            <h3 class="text-sm font-black text-brand-dark uppercase tracking-tight">
              {{ categoryConfig[key]?.title || key }}
            </h3>
          </div>
          <div class="text-[10px] font-black text-brand-muted opacity-50">
            [M_{{ index + 1 }}]
          </div>
        </div>

        <!-- Zone des Badges Brutalistes (Chaque étiquette ressemble à un commutateur ou un plot de circuit) -->
        <div class="p-6 flex flex-wrap gap-2 bg-white flex-1">
          <span 
            v-for="item in skillList" 
            :key="item"
            class="px-3 py-1.5 font-mono text-xs font-bold border-2 border-brand-dark bg-white text-brand-dark shadow-[2px_2px_0px_#000] hover:bg-brand-teal hover:text-white transition-colors cursor-default"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>

    <!-- Bloc additionnel : Outils & Environnements de Travail -->
    <div v-if="tools" class="mt-20 pt-12 border-t-2 border-brand-dark/30 max-w-7xl mx-auto">
      
      <!-- Titre secondaire Brutaliste -->
      <div class="inline-flex items-center gap-3 bg-black text-white px-4 py-2 border-2 border-black font-mono text-sm font-black uppercase tracking-wider mb-8">
        <Wrench class="w-4 h-4 text-brand-accent" />
        // ENVIRONNEMENTS_&_OUTILLAGES.TXT
      </div>

      <!-- Grille des outillages sous forme de casiers de rangement techniques -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(toolList, key) in tools" 
          :key="key"
          class="border border-brand-dark bg-white p-5 hover:bg-brand-light/40 transition-colors duration-200"
        >
          <!-- Intitulé d'armoire réseau -->
          <h4 class="text-xs font-mono font-black text-brand-teal uppercase tracking-widest mb-3 border-b border-brand-dark/15 pb-1">
            >> {{ toolsConfig[key] || key }}
          </h4>
          
          <!-- Liste brute découpée par des séparateurs verticaux industriels -->
          <p class="font-mono text-xs font-bold text-brand-dark leading-relaxed">
            <span v-for="(tool, tIdx) in toolList" :key="tool">
              <span class="bg-brand-light text-brand-dark px-1.5 py-0.5 border border-brand-dark/20 inline-block mb-1 mr-1">
                {{ tool }}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Les règles globales appliquent déjà le "border-radius: 0px !important" */
</style>
