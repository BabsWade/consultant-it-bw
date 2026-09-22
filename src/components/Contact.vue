<script setup>
import { 
  Mail, 
  Phone, 
  Globe, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Sparkles, 
  MapPin, 
  Clock 
} from 'lucide-vue-next';

// Utilisation stricte de tes données personnelles de contact
const personalInfo = {
  name: "Babacar WADE",
  email: "wadebabacar52@gmail.com",
  phone: "(+221) 77 868 79 66",
  website: "https://babacarwade.online",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/"
};
</script>

<template>
  <!-- Fond doux et épuré typique de One UI -->
  <section id="contact" class="py-24 bg-[#F2F2F7] dark:bg-[#000000] relative font-sans transition-colors duration-300">
    
    <!-- En-tête de section style One UI -->
    <div class="max-w-7xl mx-auto px-6 mb-12">
      <div class="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
        <MessageSquare class="w-4 h-4" />
        <span>Prêt à collaborer</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
        Établir une Connexion
      </h2>
      <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
        Canaux officiels pour planifier une consultation, soumettre un projet d'architecture web ou engager une collaboration technique.
      </p>
    </div>

    <!-- Grille des cartes de contact -->
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
      
      <!-- BLOC GAUCHE : CANAUX DIRECTS DE CONTACT (7 colonnes) -->
      <div class="lg:col-span-7 space-y-4 md:space-y-6">
        
        <!-- Canal E-mail -->
        <a :href="'mailto:' + personalInfo.email" 
           class="block bg-white dark:bg-[#1C1C1E] rounded-[28px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-none hover:scale-[1.01] transition-all duration-300 group">
          <div class="flex items-center justify-between mb-3 text-xs font-semibold text-gray-400 dark:text-gray-500">
            <span>CANAL 01</span>
            <span class="text-blue-600 dark:text-blue-400 font-bold">E-mail direct</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Mail class="w-6 h-6" />
            </div>
            <div class="overflow-hidden">
              <span class="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">Adresse Courriel</span>
              <span class="block text-base sm:text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {{ personalInfo.email }}
              </span>
            </div>
          </div>
        </a>

        <!-- Canal Téléphonique -->
        <a :href="'tel:' + personalInfo.phone.replace(/\s+/g, '')" 
           class="block bg-white dark:bg-[#1C1C1E] rounded-[28px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-none hover:scale-[1.01] transition-all duration-300 group">
          <div class="flex items-center justify-between mb-3 text-xs font-semibold text-gray-400 dark:text-gray-500">
            <span>CANAL 02</span>
            <span class="text-emerald-600 dark:text-emerald-400 font-bold">Ligne GSM</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone class="w-6 h-6" />
            </div>
            <div class="overflow-hidden">
              <span class="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">Ligne Directe</span>
              <span class="block text-base sm:text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {{ personalInfo.phone }}
              </span>
            </div>
          </div>
        </a>

        <!-- Site Web / Domaine -->
        <a :href="personalInfo.website" 
           target="_blank"
           class="block bg-white dark:bg-[#1C1C1E] rounded-[28px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-none hover:scale-[1.01] transition-all duration-300 group">
          <div class="flex items-center justify-between mb-3 text-xs font-semibold text-gray-400 dark:text-gray-500">
            <span>CANAL 03</span>
            <span class="text-purple-600 dark:text-purple-400 font-bold">Plateforme Web</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Globe class="w-6 h-6" />
            </div>
            <div class="overflow-hidden">
              <span class="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">Site Officiel</span>
              <span class="block text-base sm:text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {{ personalInfo.website }}
              </span>
            </div>
          </div>
        </a>

      </div>

      <!-- BLOC DROIT : PROFILES SOCIAUX & STATUT (5 colonnes) -->
      <div class="lg:col-span-5 space-y-4 md:space-y-6 w-full">
        
        <!-- Cartes Réseaux / Repères GitHub & LinkedIn -->
        <div class="bg-white dark:bg-[#1C1C1E] rounded-[32px] p-6 md:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Sparkles class="w-4 h-4" />
            </div>
            Réseaux & Code
          </h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- GitHub Link -->
            <a :href="personalInfo.github" 
               target="_blank"
               class="flex items-center gap-3.5 p-4 bg-gray-50 dark:bg-[#2C2C2E] rounded-2xl hover:bg-gray-100 dark:hover:bg-[#3A3A3C] transition-colors group">
              <div class="w-10 h-10 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black flex items-center justify-center shrink-0">
                <Github class="w-5 h-5" />
              </div>
              <div class="overflow-hidden">
                <span class="block text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">GitHub</span>
                <span class="text-sm font-bold text-gray-900 dark:text-white truncate block">Repositories</span>
              </div>
            </a>
            
            <!-- LinkedIn Link -->
            <a :href="personalInfo.linkedin" 
               target="_blank"
               class="flex items-center gap-3.5 p-4 bg-gray-50 dark:bg-[#2C2C2E] rounded-2xl hover:bg-gray-100 dark:hover:bg-[#3A3A3C] transition-colors group">
              <div class="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shrink-0">
                <Linkedin class="w-5 h-5" />
              </div>
              <div class="overflow-hidden">
                <span class="block text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">LinkedIn</span>
                <span class="text-sm font-bold text-gray-900 dark:text-white truncate block">Profil Pro</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Widget de Statut Système / Disponibilité -->
        <div class="bg-white dark:bg-[#1C1C1E] rounded-[32px] p-6 md:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-none">
          <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
            <div class="flex items-center gap-2.5">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span class="text-sm font-bold text-gray-900 dark:text-white">Statut Réseau</span>
            </div>
            <span class="text-xs font-semibold px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 rounded-full">
              Disponible
            </span>
          </div>

          <div class="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <div class="flex items-center gap-3">
              <MapPin class="w-4 h-4 text-gray-400 shrink-0" />
              <span>Thiès / Dakar, Sénégal</span>
            </div>
            <div class="flex items-center gap-3">
              <Clock class="w-4 h-4 text-gray-400 shrink-0" />
              <span>Réponse sous 24 heures ouvrées</span>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- Zone de Pied de Page / Signature -->
    <div class="mt-20 max-w-7xl mx-auto px-6 pt-8 border-t border-gray-200/60 dark:border-gray-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-400 dark:text-gray-500">
      <div>Conçu pour une fiabilité maximale</div>
      <div class="px-4 py-1.5 bg-gray-100 dark:bg-[#1C1C1E] text-gray-700 dark:text-gray-300 rounded-full font-semibold">
        © {{ personalInfo.name }} • Tous droits réservés
      </div>
    </div>

  </section>
</template>