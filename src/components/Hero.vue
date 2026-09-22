<script setup>
import { personalInfo } from '../data/portfolioData.js';

</script>

<template>
  <section class="min-h-screen text-slate-800 dark:bg-[#000000] font-sans py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
    <div class="max-w-6xl w-full space-y-5">
      
      <!-- Carte Principale (Style One UI Squircle Card) -->
      <div class="bg-white/90 backdrop-blur-xl border border-slate-200/70 rounded-[32px] p-8 sm:p-10   transition-all duration-300 hover:shadow-md">
        
        <!-- En-tête : Localisation & Badge statut -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/60 text-xs font-semibold text-slate-600">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{{ personalInfo.location }}</span>
          </div>

          <a 
            :href="personalInfo.website" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-3.5 py-1.5 rounded-full transition-colors"
          >
            <span>babacarwade.online</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>

        <!-- Identité & Bio -->
        <div class="space-y-4">
          <div>
            <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-2">
              {{ personalInfo.name }}
            </h1>
            <p class="text-base sm:text-lg font-semibold text-blue-600">
              {{ personalInfo.title }}
            </p>
          </div>

          <p class="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl pt-2">
            {{ personalInfo.bio }}
          </p>
        </div>

        <!-- Boutons d'Action (One UI Pill Buttons) -->
        <div class="flex flex-wrap items-center gap-3 pt-8 border-t border-slate-100 mt-8">
          <!-- Email / Contact principal -->
          <a 
            :href="`mailto:${personalInfo.email}`"
            class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-[0.97] text-white font-medium text-sm transition-all   gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>Me contacter</span>
          </a>

          <!-- Téléphone -->
          <a 
            :href="`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`"
            class="inline-flex items-center justify-center px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200/80 active:scale-[0.97] text-slate-700 font-medium text-sm transition-all gap-2"
          >
            <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>{{ personalInfo.phone }}</span>
          </a>

          <!-- Socials Icons (Squircle buttons) -->
          <div class="flex items-center gap-2 sm:ml-auto">
            <a 
              :href="personalInfo.github" 
              target="_blank"
              aria-label="GitHub"
              class="inline-flex items-center justify-center p-3 rounded-full bg-slate-100 hover:bg-slate-200/80 active:scale-[0.97] text-slate-700 transition-all"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>

            <a 
              :href="personalInfo.linkedin" 
              target="_blank"
              aria-label="LinkedIn"
              class="inline-flex items-center justify-center p-3 rounded-full bg-slate-100 hover:bg-slate-200/80 active:scale-[0.97] text-slate-700 transition-all"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Grille de Stats (Widgets Bento One UI) -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div 
          v-for="(stat, index) in personalInfo.stats" 
          :key="index"
          class="bg-white/90 backdrop-blur-xl border border-slate-200/70 rounded-[28px] p-6   hover:shadow-md transition-all duration-200 group"
        >
          <span class="text-3xl sm:text-4xl font-extrabold text-slate-900 block tracking-tight group-hover:text-blue-600 transition-colors">
            {{ stat.value }}
          </span>
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1 block">
            {{ stat.label }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>