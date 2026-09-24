<script setup>
import { skills, tools } from '../data/portfolioData.js'; // Import de 'tools' ajouté
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

// Configuration des titres, icônes et couleurs d'accent (Clair + Sombre)
const categoryConfig = {
  frontend: { title: "Front-end & UI", icon: Code2, colorClass: "text-blue-500 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10" },
  backend: { title: "Back-end & Serveur", icon: Server, colorClass: "text-indigo-500 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-500/10" },
  cmsLms: { title: "CMS & LMS", icon: Globe, colorClass: "text-teal-500 bg-teal-50 dark:text-teal-400 dark:bg-teal-500/10" },
  database: { title: "Bases de Données", icon: Database, colorClass: "text-emerald-500 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10" },
  mobile: { title: "Technologies Mobiles", icon: Smartphone, colorClass: "text-purple-500 bg-purple-50 dark:text-purple-400 dark:bg-purple-500/10" },
  devopsSecurity: { title: "DevOps & Sécurité", icon: ShieldCheck, colorClass: "text-rose-500 bg-rose-50 dark:text-rose-400 dark:bg-rose-500/10" },
  api: { title: "API & Web Services", icon: Cpu, colorClass: "text-orange-500 bg-orange-50 dark:text-orange-400 dark:bg-orange-500/10" },
  conception: { title: "Analyse & Méthodes", icon: Layers, colorClass: "text-cyan-500 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-500/10" },
  seo: { title: "SEO & Référencement", icon: Search, colorClass: "text-amber-500 bg-amber-50 dark:text-amber-400 dark:bg-amber-500/10" }
};

// Configuration pour les outils (traduction des clés)
const toolsConfig = {
  projectManagement: "Gestion de Projet",
  designUI: "UI/UX & Design",
  officeAndGoogle: "Bureautique & Google",
  ide: "IDE & Éditeurs",
  os: "Systèmes d'Exploitation"
};
</script>

<template>
  <section id="competences" class="py-20 bg-white dark:bg-[#000000] relative px-4 sm:px-6 lg:px-8 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      
      <!-- En-tête de section One UI -->
      <div class="mb-14 text-center max-w-2xl mx-auto space-y-3">
        <span class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/10 text-slate-700 dark:text-gray-300 text-xs font-semibold tracking-wide transition-colors">
          Expertise Technique
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
          Compétences & Stack
        </h2>
        <p class="text-slate-500 dark:text-gray-400 text-base leading-relaxed transition-colors">
          Un éventail complet de technologies modernes maîtrisées pour le développement d'applications robustes, la gestion de bases de données et l'administration d'infrastructures CMS/LMS.
        </p>
      </div>

      <!-- Grille Principale (Bento Layout) -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl">
        
        <!-- Cartes Squircles pour chaque catégorie -->
        <div 
          v-for="(skillList, key) in skills" 
          :key="key"
          class="bg-white/90 dark:bg-[#1C1C1E] backdrop-blur-xl border border-slate-200/60 dark:border-white/10 rounded-[32px] p-6 hover:shadow-md dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 group"
        >
          <!-- En-tête de carte -->
          <div class="flex items-center gap-4 mb-6">
            <div 
              class="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
              :class="categoryConfig[key]?.colorClass || 'text-slate-500 bg-slate-100 dark:text-gray-400 dark:bg-white/10'"
            >
              <component :is="categoryConfig[key]?.icon || Code2" class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white tracking-tight transition-colors">
              {{ categoryConfig[key]?.title || key }}
            </h3>
          </div>

          <!-- Tags (Pills One UI) -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="item in skillList" 
              :key="item"
              class="px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-slate-700 dark:text-gray-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {{ item }}
            </span>
          </div>
        </div>

      </div>

      <!-- Bloc additionnel : Outils & Environnements -->
      <div v-if="tools" class="mt-24 pt-12 border-t border-slate-200 dark:border-white/10 transition-colors">
        
        <!-- Titre Outils -->
        <div class="flex items-center gap-3 mb-8 justify-center sm:justify-start">
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 transition-colors">
            <Wrench class="w-5 h-5" />
          </div>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors">Outils & Environnements</h3>
        </div>

        <!-- Grille Secondaire Outils -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <!-- Petites cartes outils -->
          <div 
            v-for="(toolList, key) in tools" 
            :key="key"
            class="bg-white dark:bg-[#1C1C1E] rounded-[24px] border border-slate-200/60 dark:border-white/10 p-5 transition-colors"
          >
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-3 transition-colors">
              {{ toolsConfig[key] || key }}
            </h4>
            
            <div class="flex flex-wrap gap-1.5">
              <span 
                v-for="tool in toolList" 
                :key="tool"
                class="inline-block px-2.5 py-1 bg-slate-50 dark:bg-white/5 rounded-lg text-slate-600 dark:text-gray-300 text-[13px] font-medium border border-slate-100 dark:border-white/5 transition-colors"
              >
                {{ tool }}
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>