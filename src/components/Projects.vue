<script setup>
import { ref, computed } from 'vue';
import { projects } from '../data/portfolioData.js';
import { ExternalLink, Github, FolderGit2, Code2 } from 'lucide-vue-next';

// État de l'onglet actif
const activeTab = ref('Tous');

// Extraction et formatage dynamique des catégories uniques
const categories = computed(() => {
  const rawCategories = projects.map(p => p.category.toLowerCase());
  const uniqueCats = [...new Set(rawCategories)];
  
  // Met la première lettre en majuscule pour l'affichage
  const formattedCats = uniqueCats.map(c => c.charAt(0).toUpperCase() + c.slice(1));
  return ['Tous', ...formattedCats];
});

// Filtrage des projets en fonction de l'onglet sélectionné
const filteredProjects = computed(() => {
  if (activeTab.value === 'Tous') return projects;
  return projects.filter(p => p.category.toLowerCase() === activeTab.value.toLowerCase());
});
</script>

<template>
  <section id="projects" class="py-20 bg-slate-50/50 dark:bg-[#000000] relative px-4 sm:px-6 lg:px-8 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      
      <!-- En-tête de section One UI -->
      <div class="mb-12 text-center max-w-2xl mx-auto space-y-3">
        <span class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wide transition-colors">
          15+ Projets Récents
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
          Portfolio
        </h2>
        <p class="text-slate-500 dark:text-gray-400 text-base transition-colors">
          Une sélection de mes réalisations académiques et professionnelles, conçues avec passion.
        </p>
      </div>

      <!-- Système d'onglets (Pills One UI) -->
      <div class="flex flex-wrap justify-center items-center gap-2 mb-10">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeTab = cat"
          class="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 active:scale-95"
          :class="activeTab === cat 
            ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 shadow-md' 
            : 'bg-white dark:bg-[#1C1C1E] text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-white/10'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grille des Projets (Cartes Bento/Squircles) -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <article 
          v-for="(project, index) in filteredProjects" 
          :key="index"
          class="group flex flex-col bg-white dark:bg-[#1C1C1E] rounded-[28px] border border-slate-200/60 dark:border-white/10 hover:shadow-xl dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden"
        >

          <!-- Zone Image -->
          <div class="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-white/5 transition-colors">
            <img 
              v-if="project.Image" 
              :src="project.Image" 
              :alt="project.title" 
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            <div v-else class="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-gray-500 bg-slate-50 dark:bg-white/5 transition-colors">
              <FolderGit2 class="w-10 h-10 mb-2 opacity-50" />
              <span class="text-xs font-medium">Aucun aperçu visuel</span>
            </div>

            <!-- Badge Projet Critique -->
            <span 
              v-if="project.featured" 
              class="absolute top-4 left-4 bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-sm border border-transparent dark:border-white/10 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
            >
              Mise en avant
            </span>
          </div>

          <!-- Contenu de la carte -->
          <div class="p-6 flex flex-col flex-1">
            
            <!-- Catégorie et Titre -->
            <div class="mb-3">
              <span class="text-blue-500 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block transition-colors">
                {{ project.category }}
              </span>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {{ project.title }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1 transition-colors">
              {{ project.description }}
            </p>

            <!-- Technologies (Chips) -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-slate-600 dark:text-gray-300 text-[11px] font-medium transition-colors"
              >
                <Code2 class="w-3 h-3 text-slate-400 dark:text-gray-500" />
                {{ tech }}
              </span>
            </div>

            <!-- Actions (Boutons One UI) -->
            <div class="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-white/10 transition-colors">
              <a 
                v-if="project.Demo && project.Demo !== '#'" 
                :href="project.Demo" 
                target="_blank" 
                class="flex-1 flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all active:scale-[0.97]"
              >
                <ExternalLink class="w-4 h-4" />
                Ouvrir l'app
              </a>
              
              <a 
                v-if="project.CodeGithub && project.CodeGithub !== '#'" 
                :href="project.CodeGithub" 
                target="_blank" 
                class="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-gray-200 px-4 py-2.5 rounded-full text-sm font-medium transition-all active:scale-[0.97]"
              >
                <Github class="w-4 h-4" />
                Code source
              </a>
            </div>

          </div>
        </article>
      </div>

      <!-- État vide (Empty State One UI) -->
      <div v-if="filteredProjects.length === 0" class="text-center py-24 bg-white dark:bg-[#1C1C1E] rounded-[32px] border border-slate-200/60 dark:border-white/10 max-w-2xl mx-auto mt-8 transition-colors">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 dark:bg-white/5 mb-4 transition-colors">
          <FolderGit2 class="w-8 h-8 text-slate-400 dark:text-gray-500" />
        </div>
        <p class="text-lg font-bold text-slate-900 dark:text-white mb-1 transition-colors">Aucun projet trouvé</p>
        <p class="text-sm text-slate-500 dark:text-gray-400 transition-colors">Essayez de sélectionner une autre catégorie.</p>
        <button 
          @click="activeTab = 'Tous'"
          class="mt-6 px-6 py-2.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 rounded-full text-sm font-medium transition-colors"
        >
          Voir tous les projets
        </button>
      </div>

    </div>
  </section>
</template>