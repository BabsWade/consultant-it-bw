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
  <section id="projects" class="py-20 dark:bg-[#000000] relative px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      
      <!-- En-tête de section One UI -->
      <div class="mb-12 text-center max-w-2xl mx-auto space-y-3">
        <span class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-xs font-semibold tracking-wide">
          15+ Projets Récents
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Portfolio
        </h2>
        <p class="text-slate-500 text-base">
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
            ? 'bg-slate-800 text-white shadow-md' 
            : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900   border border-slate-200/60'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grille des Projets (Cartes Bento/Squircles) -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <article 
          v-for="(project, index) in filteredProjects" 
          :key="index"
          class="group flex flex-col bg-white rounded-[28px] border border-slate-200/60   hover:shadow-xl transition-all duration-300 overflow-hidden"
        >

          <!-- Zone Image -->
          <div class="relative w-full h-48 overflow-hidden bg-slate-100">
            <img 
              v-if="project.Image" 
              :src="project.Image" 
              :alt="project.title" 
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            <div v-else class="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50">
              <FolderGit2 class="w-10 h-10 mb-2 opacity-50" />
              <span class="text-xs font-medium">Aucun aperçu visuel</span>
            </div>

            <!-- Badge Projet Critique -->
            <span 
              v-if="project.featured" 
              class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full  "
            >
              Mise en avant
            </span>
          </div>

          <!-- Contenu de la carte -->
          <div class="p-6 flex flex-col flex-1">
            
            <!-- Catégorie et Titre -->
            <div class="mb-3">
              <span class="text-blue-500 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                {{ project.category }}
              </span>
              <h3 class="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                {{ project.title }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
              {{ project.description }}
            </p>

            <!-- Technologies (Chips) -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-slate-600 text-[11px] font-medium"
              >
                <Code2 class="w-3 h-3 text-slate-400" />
                {{ tech }}
              </span>
            </div>

            <!-- Actions (Boutons One UI) -->
            <div class="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-slate-100">
              <a 
                v-if="project.Demo && project.Demo !== '#'" 
                :href="project.Demo" 
                target="_blank" 
                class="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all active:scale-[0.97]  "
              >
                <ExternalLink class="w-4 h-4" />
                Ouvrir l'app
              </a>
              
              <a 
                v-if="project.CodeGithub && project.CodeGithub !== '#'" 
                :href="project.CodeGithub" 
                target="_blank" 
                class="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-full text-sm font-medium transition-all active:scale-[0.97]"
              >
                <Github class="w-4 h-4" />
                Code source
              </a>
            </div>

          </div>
        </article>
      </div>

      <!-- État vide (Empty State One UI) -->
      <div v-if="filteredProjects.length === 0" class="text-center py-24 bg-white rounded-[32px] border border-slate-200/60   max-w-2xl mx-auto mt-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
          <FolderGit2 class="w-8 h-8 text-slate-400" />
        </div>
        <p class="text-lg font-bold text-slate-900 mb-1">Aucun projet trouvé</p>
        <p class="text-sm text-slate-500">Essayez de sélectionner une autre catégorie.</p>
        <button 
          @click="activeTab = 'Tous'"
          class="mt-6 px-6 py-2.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-full text-sm font-medium transition-colors"
        >
          Voir tous les projets
        </button>
      </div>

    </div>
  </section>
</template>