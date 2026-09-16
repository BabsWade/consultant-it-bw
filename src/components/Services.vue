<script setup>
import { services } from '../data/portfolioData.js';
import { Code, Server, BarChart3, ShieldCheck } from 'lucide-vue-next';

// Dictionnaire pour associer le nom de l'icône dans portfolioData.js au composant Lucide
const iconMap = {
  Code,
  Server,
  BarChart3,
  ShieldCheck
};
</script>

<template>
  <section id="services" class="py-20 border-t border-brand-card/40">
    <!-- En-tête de section -->
    <div class="mb-16">
      <span class="text-brand-accent text-sm font-semibold uppercase tracking-wider block mb-2">
        Ce que je propose
      </span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-brand-light mb-4">
        Pôles d'Expertise & Services
      </h2>
      <p class="text-brand-muted max-w-2xl text-base md:text-lg">
        Un positionnement stratégique alliant ingénierie d'applications modernes, consulting digital et gestion de systèmes complexes pour institutions et entreprises.
      </p>
    </div>

    <!-- Grille des services -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div 
        v-for="(service, index) in services" 
        :key="index"
        class="group p-8 rounded-2xl bg-brand-navy/40 border border-brand-card hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
      >
        <!-- Halot lumineux discret au survol -->
        <div class="absolute -right-10 -bottom-10 w-36 h-36 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/15 transition-all duration-500"></div>

        <!-- Icône du service -->
        <div class="w-14 h-14 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
          <component :is="iconMap[service.icon]" class="w-7 h-7" />
        </div>

        <!-- Titre et Description -->
        <h3 class="text-xl font-bold text-brand-light mb-3 group-hover:text-brand-accent transition-colors duration-200">
          {{ service.title }}
        </h3>
        <p class="text-brand-muted leading-relaxed text-sm md:text-base">
          {{ service.description }}
        </p>
      </div>
    </div>
  </section>
</template>