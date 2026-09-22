<script setup>
import { skills } from '../data/portfolioData.js'; // Assurez-vous que l'import 'tools' est bien géré ici
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

// Configuration des titres, icônes et couleurs d'accent pour chaque clé
const categoryConfig = {
  frontend: { title: "Front-end & UI", icon: Code2, colorClass: "text-blue-500 bg-blue-50" },
  backend: { title: "Back-end & Serveur", icon: Server, colorClass: "text-indigo-500 bg-indigo-50" },
  cmsLms: { title: "CMS & LMS", icon: Globe, colorClass: "text-teal-500 bg-teal-50" },
  database: { title: "Bases de Données", icon: Database, colorClass: "text-emerald-500 bg-emerald-50" },
  mobile: { title: "Technologies Mobiles", icon: Smartphone, colorClass: "text-purple-500 bg-purple-50" },
  devopsSecurity: { title: "DevOps & Sécurité", icon: ShieldCheck, colorClass: "text-rose-500 bg-rose-50" },
  api: { title: "API & Web Services", icon: Cpu, colorClass: "text-orange-500 bg-orange-50" },
  conception: { title: "Analyse & Méthodes", icon: Layers, colorClass: "text-cyan-500 bg-cyan-50" },
  seo: { title: "SEO & Référencement", icon: Search, colorClass: "text-amber-500 bg-amber-50" }
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
  <section id="competences" dark:bg-[#000000] class="py-20 relative px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      
      <!-- En-tête de section One UI -->
      <div class="mb-14 text-center max-w-2xl mx-auto space-y-3">
        <span class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-700 text-xs font-semibold tracking-wide">
          Expertise Technique
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Compétences & Stack
        </h2>
        <p class="text-slate-500 text-base leading-relaxed">
          Un éventail complet de technologies modernes maîtrisées pour le développement d'applications robustes, la gestion de bases de données et l'administration d'infrastructures CMS/LMS.
        </p>
      </div>

      <!-- Grille Principale (Bento Layout) -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl">
        
        <!-- Cartes Squircles pour chaque catégorie -->
        <div 
          v-for="(skillList, key) in skills" 
          :key="key"
          class="bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-[32px] p-6   hover:shadow-md transition-all duration-300 group"
        >
          <!-- En-tête de carte -->
          <div class="flex items-center gap-4 mb-6">
            <div 
              class="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
              :class="categoryConfig[key]?.colorClass || 'text-slate-500 bg-slate-100'"
            >
              <component :is="categoryConfig[key]?.icon || Code2" class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 tracking-tight">
              {{ categoryConfig[key]?.title || key }}
            </h3>
          </div>

          <!-- Tags (Pills One UI) -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="item in skillList" 
              :key="item"
              class="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors"
            >
              {{ item }}
            </span>
          </div>
        </div>

      </div>

      <!-- Bloc additionnel : Outils & Environnements -->
      <div v-if="tools" class="mt-24 pt-12 border-t border-slate-200">
        
        <!-- Titre Outils -->
        <div class="flex items-center gap-3 mb-8 justify-center sm:justify-start">
          <div class="p-2 rounded-xl bg-blue-50 text-blue-600">
            <Wrench class="w-5 h-5" />
          </div>
          <h3 class="text-2xl font-bold text-slate-900 tracking-tight">Outils & Environnements</h3>
        </div>

        <!-- Grille Secondaire Outils -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <!-- Petites cartes outils -->
          <div 
            v-for="(toolList, key) in tools" 
            :key="key"
            class="bg-white rounded-[24px] border border-slate-200/60 p-5  "
          >
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              {{ toolsConfig[key] || key }}
            </h4>
            
            <div class="flex flex-wrap gap-1.5">
              <span 
                v-for="tool in toolList" 
                :key="tool"
                class="inline-block px-2.5 py-1 bg-slate-50 rounded-lg text-slate-600 text-[13px] font-medium border border-slate-100"
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