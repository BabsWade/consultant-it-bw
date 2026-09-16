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
  <section id="projects" class="py-20 border-t-4 border-brand-dark bg-brand-light relative tech-blueprint-bg">
    
    <!-- En-tête de section style Fiche d'Inventaire -->
    <div class="mb-12 border-2 border-brand-dark bg-white p-8 brutal-shadow max-w-3xl">
      <div class="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-4">
        SECTION_03 // REPERTOIRE_APPLICATIONS
      </div>
      <h2 class="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-4">
        Mes Projets Récents
      </h2>
      <div class="w-16 h-2 bg-brand-dark mb-4"></div>
      <p class="text-brand-muted font-mono text-sm leading-relaxed">
        Une sélection de mes réalisations, allant des portails institutionnels complexes aux applications web et plateformes mobiles. Registre d'intégrité logicielle.
      </p>
    </div>

    <!-- Système d'onglets (Filtres style Tableau de Commande Industriel) -->
    <div class="flex flex-wrap items-center gap-2 mb-12">
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="activeTab = cat"
        :class="[
          'px-6 py-2.5 font-mono text-xs font-black uppercase tracking-wider border-2 border-brand-dark transition-all',
          activeTab === cat 
            ? 'bg-black text-white brutal-shadow-sm -translate-x-0.5 -translate-y-0.5' 
            : 'bg-white text-brand-dark hover:bg-brand-accent hover:brutal-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5'
        ]"
      >
        [ {{ cat }} ]
      </button>
    </div>

    <!-- Grille des Projets -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
      <article 
        v-for="(project, index) in filteredProjects" 
        :key="index"
        class="group flex flex-col bg-white border-2 border-brand-dark brutal-shadow transition-transform duration-200"
      >
        <!-- Encart Image du projet avec bordure basse rigide -->
        <div class="relative w-full aspect-video overflow-hidden bg-brand-light border-b-2 border-brand-dark">
          <img 
            v-if="project.Image" 
            :src="project.Image" 
            :alt="project.title" 
            class="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
          <!-- Placeholder Brut si pas d'image -->
          <div v-else class="w-full h-full flex items-center justify-center text-brand-dark bg-brand-light font-mono text-xs">
            <div class="text-center p-4 border border-dashed border-brand-dark/40">
              <FolderGit2 class="w-8 h-8 mx-auto mb-2 text-brand-dark" />
              NO_PREVIEW_AVAILABLE.RAW
            </div>
          </div>

          <!-- Badge "Featured" rectiligne type étiquette d'alerte -->
          <span 
            v-if="project.featured" 
            class="absolute top-4 left-4 bg-brand-accent text-brand-dark text-xs font-black uppercase tracking-wider px-3 py-1 border-2 border-brand-dark shadow-[2px_2px_0px_#000]"
          >
            CRITICAL_PROJECT
          </span>
        </div>

        <!-- Contenu du projet -->
        <div class="p-6 md:p-8 flex flex-col flex-1 bg-white">
          <div class="flex justify-between items-start mb-4">
            <div>
              <span class="text-brand-teal font-mono text-xs font-black uppercase tracking-widest mb-1 block">
                // {{ project.category }}
              </span>
              <h3 class="text-2xl font-black text-brand-dark uppercase tracking-tight group-hover:text-brand-teal transition-colors">
                {{ project.title }}
              </h3>
            </div>
          </div>

          <p class="text-brand-navy font-sans font-medium text-base leading-relaxed mb-6 flex-1">
            {{ project.description }}
          </p>

          <!-- Stack technologique (Format étiquettes de composants de serveur) -->
          <div class="flex flex-wrap gap-2 mb-8 pt-4 border-t border-brand-dark/10">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="flex items-center gap-1.5 px-2.5 py-1 bg-brand-light text-brand-dark font-mono text-xs font-bold border border-brand-dark"
            >
              <Code2 class="w-3.5 h-3.5 text-brand-dark" />
              {{ tech }}
            </span>
          </div>

          <!-- Liens d'action Brutalistes (Boutons carrés à ombres brutes) -->
          <div class="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-brand-dark mt-auto font-mono text-xs font-bold">
            <a 
              v-if="project.Demo && project.Demo !== '#'" 
              :href="project.Demo" 
              target="_blank" 
              class="flex items-center gap-2 text-white bg-black border-2 border-black px-4 py-3 uppercase tracking-wider transition-all brutal-shadow-btn"
            >
              <ExternalLink class="w-4 h-4" />
              LAUNCH_APP
            </a>
            <a 
              v-if="project.CodeGithub && project.CodeGithub !== '#'" 
              :href="project.CodeGithub" 
              target="_blank" 
              class="flex items-center gap-2 text-brand-dark bg-white border-2 border-brand-dark px-4 py-3 uppercase tracking-wider transition-all brutal-shadow-btn"
            >
              <Github class="w-4 h-4" />
              GET_SOURCE
            </a>
          </div>
        </div>
      </article>
    </div>

    <!-- État vide technique (No Data Log) -->
    <div v-if="filteredProjects.length === 0" class="text-center py-20 border-2 border-brand-dark bg-white brutal-shadow max-w-xl mx-auto font-mono text-sm text-brand-dark">
      <FolderGit2 class="w-10 h-10 mx-auto mb-4 text-brand-dark animate-pulse" />
      <p class="font-bold">[ ERROR: NO_DATA_FOUND_FOR_THIS_CATEGORY ]</p>
      <p class="text-xs text-brand-muted mt-1">Veuillez réinitialiser les filtres du tableau de contrôle.</p>
    </div>
  </section>
</template>
