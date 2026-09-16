<script setup>
import { ref } from 'vue';
import { Home, Briefcase, FolderGit2, Code2, GraduationCap, Mail } from 'lucide-vue-next';

const navItems = [
  { name: 'Accueil', href: '#home', icon: Home },
  { name: 'Experiences', href: '#experiences', icon: Briefcase },
  { name: 'Projets', href: '#projects', icon: FolderGit2 },
  { name: 'Competences', href: '#competences', icon: Code2 },
  { name: 'Formation', href: '#formation', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const activeTab = ref('#home');
</script>

<template>
  <!-- NAVIGATION MOBILE (Barre fixe en bas de l'écran, pas d'arrondis, bordure supérieure noire épaisse) -->
  <nav class="md:hidden fixed bottom-0 left-0 w-full bg-white border-t-4 border-brand-dark z-50">
    <ul class="flex justify-around items-center h-16 px-1 divide-x divide-brand-dark/20">
      <li v-for="item in navItems" :key="item.name" class="flex-1 text-center h-full">
        <a 
          :href="item.href"
          @click="activeTab = item.href"
          class="flex flex-col items-center justify-center h-full text-xs font-mono font-black uppercase tracking-wider transition-colors duration-150"
          :class="activeTab === item.href ? 'bg-brand-accent text-brand-dark' : 'text-brand-muted hover:bg-brand-light hover:text-brand-dark'"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span class="sr-only">{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </nav>

  <!-- NAVIGATION DESKTOP (Panneau latéral fixe d'ingénierie brute, angles stricts) -->
  <aside class="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-white border-r-4 border-brand-dark z-50 py-8 px-4 justify-between">
    
    <!-- En-tête du Panneau / Identifiants -->
    <div class="space-y-4">
      <div class="border-2 border-brand-dark bg-brand-accent p-4 brutal-shadow-sm text-center">
        <a href="#home" class="text-3xl font-black text-brand-dark tracking-tighter uppercase block leading-none">
          B.WADE
        </a>
        <div class="w-full h-[1px] bg-brand-dark my-2"></div>
        <p class="text-[9px] font-mono font-black text-brand-dark uppercase tracking-widest leading-none">
          [ CONCEPTEUR_SYSTEMES ]
        </p>
      </div>
      
      <!-- Témoin d'activité matériel -->
      <div class="bg-brand-light border border-brand-dark px-3 py-1.5 font-mono text-[10px] font-bold text-brand-teal flex items-center gap-2">
        <span class="w-2.5 h-2.5 bg-brand-teal inline-block animate-pulse"></span>
        DISPONIBLE
      </div>
    </div>

    <!-- Liens de contrôle de l'application -->
    <ul class="space-y-2 flex-1 pt-10 font-mono text-xs font-black uppercase tracking-wider">
      <li v-for="item in navItems" :key="item.name">
        <a 
          :href="item.href"
          @click="activeTab = item.href"
          class="flex items-center gap-4 px-4 py-3 border-2 transition-all"
          :class="activeTab === item.href 
            ? 'bg-black text-white border-black brutal-shadow-sm -translate-x-0.5 -translate-y-0.5' 
            : 'bg-white text-brand-dark border-transparent hover:bg-brand-light hover:border-brand-dark'"
        >
          <component 
            :is="item.icon" 
            class="w-4 h-4 shrink-0" 
          />
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>

    <!-- Pied de carte / Signature Matrice -->
    <div class="pt-6 border-t-2 border-brand-dark font-mono text-[10px] text-brand-muted space-y-2">
      <div>VERSION 15/09/2026</div>
      
    </div>
  </aside>
</template>

<style scoped>
/* L'intégralité des angles droits stricts (0px) est assurée nativement par la structure globale */
</style>
