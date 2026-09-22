<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Services from './components/Services.vue';
import Experiences from './components/Experiences.vue';
import Projects from './components/Projects.vue';
import Competences from './components/Competences.vue';
import Formation from './components/Formation.vue';
import Contact from './components/Contact.vue';
</script>

<template>
  <!-- 
    Refonte One UI :
    Fonds dynamiques clairs/sombres, textes adaptés, et transitions fluides.
    Suppression des bordures massives.
  -->
  <div class="min-h-screen bg-[#F2F2F7] dark:bg-[#000000] text-gray-900 dark:text-white selection:bg-blue-200 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 antialiased transition-colors duration-300">
    
    <!-- Panneau de commande de navigation (Sidebar / Bottom bar) -->
    <Navbar />

    <!-- 
      Layout principal One UI :
      - Sur mobile : espace en bas (pb-24) pour aérer au-dessus du Bottom Nav.
      - Sur desktop : décalage gauche doux (md:ml-64).
      - Finies les séparations agressives entre les sections, elles respirent naturellement.
    -->
    <main class="pb-24 md:pb-0 md:ml-64 min-h-screen">
      
      <!-- Conteneur global fluide -->
      <div class="flex flex-col w-full">
        <div id="home">
          <Hero />
        </div>
        
        <!-- <Services /> -->
        
        <Experiences />
        
        <Projects />
        
        <Competences />
        
        <Formation />
        
        <Contact />
      </div>

    </main>
  </div>
</template>

<style>
/* 
  Réinitialisation globale pour la fluidité One UI 
  (Suppression DÉFINITIVE du border-radius: 0px !important)
*/
html {
  scroll-behavior: smooth; /* Défilement doux entre les ancres */
  -webkit-tap-highlight-color: transparent; /* Retire le clignotement bleu au clic sur mobile */
}

/* 
  Refonte de la barre de défilement (Scrollbar One UI / Android)
  Design minimaliste, fin et arrondi
*/
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.4); /* Gris doux semi-transparent */
  border-radius: 10px; /* Bords parfaitement arrondis */
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.7);
}

/* Adaptation de la scrollbar en Dark Mode */
@media (prefers-color-scheme: dark) {
  ::-webkit-scrollbar-thumb {
    background: rgba(107, 114, 128, 0.4);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(107, 114, 128, 0.7);
  }
}
</style>