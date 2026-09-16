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
    Refonte complète du conteneur principal :
    Bascule sur un fond gris technique clair industriel et des textes noirs purs.
    Suppression totale de toute transition douce au profit de blocs stricts et nets.
  -->
  <div class="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-accent selection:text-brand-dark antialiased">
    
    <!-- Panneau de commande de navigation (Sidebar / Bottom bar) -->
    <Navbar />

    <!-- 
      Layout principal Brutaliste :
      - Sur mobile : espace en bas (pb-20) pour ne pas chevaucher le Bottom Nav.
      - Sur desktop : décalage gauche strict (md:ml-64) correspondant aux 4px de bordure + largeur de la Sidebar.
      - Les sections s'empilent sans arrondis avec des séparations nettes via la classe 'tech-blueprint-bg'.
    -->
    <main class="pb-20 md:pb-0 md:ml-64 border-l-0 md:border-l-4 border-brand-dark min-h-screen">
      
      <!-- Conteneur global rectiligne pour le contenu -->
      <div class="divide-y-4 divide-brand-dark">
        <!-- Index d'ancrage 01 -->
        <div id="home">
          <Hero />
        </div>
        
        <!-- Index d'ancrage 02 -->
       <!--- <Services /> -->
        
        <!-- Index d'ancrage 03 -->
        <Experiences />
        
        <!-- Index d'ancrage 04 -->
        <Projects />
        
        <!-- Index d'ancrage 05 -->
        <Competences />
        
        <!-- Index d'ancrage 06 -->
        <Formation />
        
        <!-- Index d'ancrage 07 -->
        <Contact />
      </div>

    </main>
  </div>
</template>

<style>
/* 
  Styles globaux de secours pour sécuriser le rendu brutaliste.
  Force l'affichage rectiligne sur toute la profondeur du DOM de l'application.
*/
* {
  border-radius: 0px !important;
  box-shadow: none;
}

/* Redéfinition brute de la barre de défilement (Scrollbar d'usine Windows 95) */
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: var(--color-brand-light);
  border-left: 2px solid var(--color-brand-dark);
}
::-webkit-scrollbar-thumb {
  background: var(--color-brand-dark);
  border: 2px solid var(--color-brand-light);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-brand-teal);
}
</style>
