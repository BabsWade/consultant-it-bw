<script setup>
import { education, certifications } from '../data/portfolioData.js';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  Building2, 
  ShieldCheck, 
  Users, 
  Languages 
} from 'lucide-vue-next';
</script>

<template>
  <!-- Arrière-plan doux et épuré typique de One UI -->
  <section id="formation" class="py-24 bg-[#F2F2F7] dark:bg-[#000000] relative font-sans transition-colors duration-300">
    
    <!-- En-tête de section style One UI (Grand titre, alignement clair) -->
    <div class="max-w-6xl mx-auto px-6 mb-12">
      <div class="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
        <GraduationCap class="w-4 h-4" />
        <span>BAC + 5</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
        Formation & Certifications
      </h2>
      <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
        Doublement diplômé avec Mention Bien de l'UN-CHK, avec une spécialisation Full Stack approfondie par des certifications professionnelles. Registre académique officiel.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-6">
      
      <!-- Colonne Principale : Diplômes Universitaires (2/3) -->
      <div class="lg:col-span-2 space-y-6 md:space-y-8">
        
        <!-- Cartes de diplôme (Style Widget One UI) -->
        <div 
          v-for="(item, index) in education" 
          :key="index"
          class="bg-white dark:bg-[#1C1C1E] rounded-[32px] p-6 md:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-none hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between"
        >
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div class="flex-1">
              <h4 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
                {{ item.degree }}
              </h4>
              <p class="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base mb-3">
                {{ item.specialty }}
              </p>
              
              <!-- Encart de Thèse adouci (Bubble style) -->
              <div v-if="item.thesis" class="mt-5 p-5 bg-gray-50 dark:bg-[#2C2C2E] rounded-2xl">
                <span class="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                  Sujet d'étude
                </span>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                  « {{ item.thesis }} »
                </p>
              </div>
            </div>

            <!-- Badge Année style Pill -->
            <span class="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 dark:bg-[#2C2C2E] text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold shrink-0">
              <Calendar class="w-4 h-4" />
              {{ item.period }}
            </span>
          </div>

          <!-- Université -->
          <div class="flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-400 pt-5 mt-5 border-t border-gray-100 dark:border-gray-800">
            <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-[#2C2C2E] flex items-center justify-center shrink-0">
              <Building2 class="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </div>
            <span>{{ item.school }}</span>
          </div>
        </div>
      </div>

      <!-- Colonne Secondaire : Certifications, Engagement & Langues (1/3) -->
      <div class="space-y-6 md:space-y-8">
        
        <!-- Bloc Certifications -->
        <div class="bg-white dark:bg-[#1C1C1E] rounded-[32px] p-6 md:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Award class="w-4 h-4" />
            </div>
            Certifications
          </h3>

          <div class="space-y-4">
            <div 
              v-for="(cert, cIdx) in certifications" 
              :key="cIdx"
              class="flex items-start gap-4 p-4 bg-gray-50 dark:bg-[#2C2C2E] rounded-2xl"
            >
              <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shrink-0 flex items-center justify-center mt-0.5">
                <ShieldCheck class="w-4 h-4" />
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                  {{ typeof cert === 'string' ? cert : cert.title }}
                </p>
                <p v-if="cert.issuer" class="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1.5">
                  {{ cert.issuer }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bloc Leadership & Associations -->
        <div v-if="associations && associations.length" class="bg-white dark:bg-[#1C1C1E] rounded-[32px] p-6 md:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Users class="w-4 h-4" />
            </div>
            Engagement
          </h3>

          <div class="space-y-6">
            <div v-for="(assoc, aIdx) in associations" :key="aIdx" class="relative">
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-sm font-bold text-gray-900 dark:text-white">{{ assoc.role }}</span>
                <span class="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-[#2C2C2E] text-gray-600 dark:text-gray-300 rounded-full shrink-0">
                  {{ assoc.period }}
                </span>
              </div>
              <p class="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">{{ assoc.organization }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ assoc.details }}</p>
            </div>
          </div>
        </div>

        <!-- Bloc Langues -->
        <div v-if="languages && languages.length" class="bg-white dark:bg-[#1C1C1E] rounded-[32px] p-6 md:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 flex items-center justify-center">
              <Languages class="w-4 h-4" />
            </div>
            Langues
          </h3>

          <div class="grid grid-cols-2 gap-4">
            <div v-for="(lang, lIdx) in languages" :key="lIdx" class="p-4 bg-gray-50 dark:bg-[#2C2C2E] rounded-2xl flex flex-col items-center text-center justify-center">
              <span class="block text-sm font-bold text-gray-900 dark:text-white mb-1">{{ lang.language }}</span>
              <span class="block text-xs font-medium text-gray-500 dark:text-gray-400">{{ lang.level }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>