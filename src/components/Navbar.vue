<script setup>
import { ref } from 'vue';
import { Home, Briefcase, FolderGit2, Code2, GraduationCap, Mail } from 'lucide-vue-next';

const navItems = [
  { name: 'Accueil', href: '#home', icon: Home },
  { name: 'Expériences', href: '#experiences', icon: Briefcase },
  { name: 'Projets', href: '#projects', icon: FolderGit2 },
  { name: 'Compétences', href: '#competences', icon: Code2 },
  { name: 'Formation', href: '#formation', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const activeTab = ref('#home');
</script>

<template>
  <!-- NAVIGATION MOBILE : Barre flottante style Pilule One UI en bas d'écran -->
  <nav class="md:hidden fixed dark:bg-[#000000] bottom-4 left-4 right-4 bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-lg shadow-slate-900/5 z-50 p-1.5">
    <ul class="flex justify-around items-center">
      <li v-for="item in navItems" :key="item.name" class="relative">
        <a 
          :href="item.href"
          @click="activeTab = item.href"
          class="flex flex-col items-center justify-center p-2.5 rounded-full text-xs transition-all duration-200 active:scale-90"
          :class="activeTab === item.href 
            ? 'bg-blue-600 text-white  ' 
            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/70'"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span class="sr-only">{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </nav>

  <!-- NAVIGATION DESKTOP : Panneau latéral flottant (Card Squircle One UI) -->
  <aside class="hidden md:flex flex-col fixed left-6 top-6 bottom-6 w-64 bg-white/90 backdrop-blur-xl border border-slate-200/70 rounded-[32px] z-50 p-6 justify-between  ">
    
    <!-- En-tête : Badge utilisateur & Statut -->
    <div class="space-y-4">
      <div class="flex items-center gap-3 p-3 bg-slate-100/80 rounded-2xl border border-slate-200/60">
        <div class="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm   shrink-0">
          BW
        </div>
        <div class="min-w-0">
          <a href="#home" class="font-bold text-slate-900 text-sm tracking-tight block truncate hover:text-blue-600 transition-colors">
            Babacar WADE
          </a>
          <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-wider truncate">
            Concepteur Système
          </p>
        </div>
      </div>

      <!-- Témoin d'activité -->
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700 w-full">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span class="truncate">Disponible pour missions</span>
      </div>
    </div>

    <!-- Liens de navigation (Pills One UI) -->
    <nav class="my-auto py-4">
      <ul class="space-y-1.5 font-medium text-sm">
        <li v-for="item in navItems" :key="item.name">
          <a 
            :href="item.href"
            @click="activeTab = item.href"
            class="flex items-center gap-3.5 px-4 py-3 rounded-full transition-all duration-200 active:scale-[0.97]"
            :class="activeTab === item.href 
              ? 'bg-blue-600 text-white font-semibold  ' 
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
          >
            <component 
              :is="item.icon" 
              class="w-4 h-4 shrink-0" 
            />
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Pied de panneau -->
    <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
      <span>One UI 8.5</span>
      <span class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono text-[10px]">v2.0</span>
    </div>

  </aside>
</template>

<style scoped>
/* Les animations de pression (scale) et les arrondis Squircles sont gérés nativement par Tailwind */
</style>