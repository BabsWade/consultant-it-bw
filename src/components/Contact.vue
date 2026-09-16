<script setup>
import { Mail, Phone, Globe, Github, Linkedin, Terminal, Radio } from 'lucide-vue-next';

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
  <!-- Fond clair, grille industrielle et bordure haute massive -->
  <section id="contact" class="py-20 border-t-4 border-brand-dark bg-brand-light relative tech-blueprint-bg">
    
    <!-- En-tête de section style Fiche d'Établissement de Liaison -->
    <div class="mb-16 border-2 border-brand-dark bg-white p-8 brutal-shadow max-w-3xl mx-auto lg:mx-0">
      <div class="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-4">
        PRET A COLLABORER
      </div>
      <h2 class="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-4">
        Établir une Connexion
      </h2>
      <div class="w-16 h-2 bg-brand-dark mb-4"></div>
      <p class="text-brand-muted font-mono text-sm leading-relaxed">
        Canaux officiels pour planifier une consultation, soumettre un cahier des charges d'architecture web ou engager une collaboration technique.
      </p>
    </div>

    <!-- Grille des terminaux de contact (Sans formulaire, disposition asymétrique) -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- BLOC GAUCHE : CANAUX DIRECTS DE SÉCURITÉ (7 colonnes) -->
      <div class="lg:col-span-7 space-y-6">
        
        <!-- Canal E-mail -->
        <a :href="'mailto:' + personalInfo.email" 
           class="block border-2 border-brand-dark bg-white p-6 brutal-shadow group transition-transform duration-200 hover:translate-x-1 hover:translate-y-1">
          <div class="flex items-center justify-between border-b border-brand-dark/10 pb-3 mb-4 font-mono text-xs font-bold text-brand-muted">
            <span>[ CHANNEL_01 // SECURE_MAIL ]</span>
            <span class="text-brand-teal font-black">>> OVER_SMTP</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 border-2 border-brand-dark bg-brand-accent flex items-center justify-center text-brand-dark shrink-0">
              <Mail class="w-6 h-6" />
            </div>
            <div class="overflow-hidden">
              <span class="block font-mono text-[10px] uppercase font-black text-brand-muted">Adresse Courriel :</span>
              <span class="block font-mono text-base md:text-xl font-black text-brand-dark break-all group-hover:text-brand-teal transition-colors">
                {{ personalInfo.email }}
              </span>
            </div>
          </div>
        </a>

        <!-- Canal Téléphonique -->
        <a :href="'tel:' + personalInfo.phone.replace(/\s+/g, '')" 
           class="block border-2 border-brand-dark bg-white p-6 brutal-shadow group transition-transform duration-200 hover:translate-x-1 hover:translate-y-1">
          <div class="flex items-center justify-between border-b border-brand-dark/10 pb-3 mb-4 font-mono text-xs font-bold text-brand-muted">
            <span>[ CHANNEL_02 // TELEPHONY_NODE ]</span>
            <span class="text-brand-teal font-black">>> GSM_ROUTING</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 border-2 border-brand-dark bg-brand-light flex items-center justify-center text-brand-dark shrink-0 group-hover:bg-brand-accent transition-colors">
              <Phone class="w-6 h-6" />
            </div>
            <div>
              <span class="block font-mono text-[10px] uppercase font-black text-brand-muted">Ligne Directe :</span>
              <span class="block font-mono text-base md:text-xl font-black text-brand-dark group-hover:text-brand-teal transition-colors">
                {{ personalInfo.phone }}
              </span>
            </div>
          </div>
        </a>

        <!-- Site Web / Domaine -->
        <a :href="personalInfo.website" 
           target="_blank"
           class="block border-2 border-brand-dark bg-white p-6 brutal-shadow group transition-transform duration-200 hover:translate-x-1 hover:translate-y-1">
          <div class="flex items-center justify-between border-b border-brand-dark/10 pb-3 mb-4 font-mono text-xs font-bold text-brand-muted">
            <span>[ CHANNEL_03 // WEB_HOST ]</span>
            <span class="text-brand-teal font-black">>> HTTPS_LIVE</span>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 border-2 border-brand-dark bg-brand-light flex items-center justify-center text-brand-dark shrink-0 group-hover:bg-brand-accent transition-colors">
              <Globe class="w-6 h-6" />
            </div>
            <div class="overflow-hidden">
              <span class="block font-mono text-[10px] uppercase font-black text-brand-muted">Serveur Personnel :</span>
              <span class="block font-mono text-base md:text-xl font-black text-brand-dark break-all group-hover:text-brand-teal transition-colors">
                {{ personalInfo.website }}
              </span>
            </div>
          </div>
        </a>

      </div>

      <!-- BLOC DROIT : MATRICE SOCIALE & PING RÉSEAU (5 colonnes) -->
      <div class="lg:col-span-5 space-y-6 w-full">
        
        <!-- Console Réseaux / Repères Git & LinkedIn -->
        <div class="border-2 border-brand-dark bg-white brutal-shadow p-6">
          <div class="font-mono text-sm font-black text-brand-dark uppercase tracking-wider mb-5 pb-2 border-b-2 border-brand-dark flex items-center gap-2">
            <Terminal class="w-4 h-4 text-brand-teal" />
            [ REMOTE_INDEXES ]
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs font-bold">
            <!-- GitHub Link -->
            <a :href="personalInfo.github" 
               target="_blank"
               class="flex items-center gap-3 p-4 bg-brand-light border border-brand-dark text-brand-dark hover:bg-black hover:text-white transition-all">
              <Github class="w-5 h-5 shrink-0" />
              <div class="overflow-hidden">
                <span class="block text-[9px] uppercase tracking-wider opacity-60">REPOSITORIES</span>
                <span class="font-black uppercase">GITHUB // CODE</span>
              </div>
            </a>
            
            <!-- LinkedIn Link -->
            <a :href="personalInfo.linkedin" 
               target="_blank"
               class="flex items-center gap-3 p-4 bg-brand-light border border-brand-dark text-brand-dark hover:bg-black hover:text-white transition-all">
              <Linkedin class="w-5 h-5 shrink-0" />
              <div class="overflow-hidden">
                <span class="block text-[9px] uppercase tracking-wider opacity-60">NETWORK</span>
                <span class="font-black uppercase">LINKEDIN // PROFILE</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Faux terminal de log d'intégrité de connexion -->
        <div class="bg-black text-white p-5 border-2 border-brand-dark font-mono text-[11px] leading-relaxed brutal-shadow-sm">
          <div class="flex items-center gap-2 text-brand-accent font-black uppercase tracking-widest border-b border-white/20 pb-2 mb-3">
            <Radio class="w-3.5 h-3.5 animate-pulse text-brand-accent" />
            LIVE_TRANSMISSION_STATUS
          </div>
          <div class="space-y-1 text-white/70">
            <div><span class="text-brand-accent">[READY]</span> Awaiting system requests from external hosts.</div>
            <div><span class="text-brand-accent">[NODES]</span> Primary link route set via Thiès, Senegal.</div>
            <div><span class="text-brand-accent">[INFO]</span> E-mail responses processed within 24 standard hours.</div>
          </div>
          <!-- Fausse ligne d'état technique -->
          <div class="mt-4 pt-2 border-t border-white/10 text-[9px] text-white/40 uppercase tracking-widest text-right">
            WADE_CORE_NET_v4.0
          </div>
        </div>

      </div>

    </div>

    <!-- Zone de Pied de Page / Signature intégrée au bloc contact -->
    <div class="mt-20 max-w-7xl mx-auto pt-8 border-t-2 border-brand-dark text-center font-mono text-xs font-bold text-brand-muted flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>[ DESIGNED_FOR_EXTREME_RELIABILITY // 2026 ]</div>
      <div class="uppercase text-brand-dark bg-brand-accent px-3 py-0.5 border border-brand-dark shadow-[1px_1px_0px_#000]">
        © {{ personalInfo.name }} // TOUS DROITS RESERVES.
      </div>
    </div>

  </section>
</template>

<style scoped>
/* L'intégrité de la charte graphique 0px border-radius est maintenue par style.css */
</style>
