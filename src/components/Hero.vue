<script setup>
// Tes données personnelles exactes conservées
const personalInfo = {
  name: "Babacar WADE",
  title: "Concepteur & Développeur Web/Mobile | Consultant CMS & LMS",
  location: "Thiès, Sénégal",
  email: "wadebabacar52@gmail.com",
  phone: "(+221) 77 868 79 66",
  website: "https://babacarwade.online",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  bio: "Passionné par l'ingénierie logicielle et la transformation digitale, j'accompagne les institutions, universités et entreprises dans la conception d'architectures web robustes, l'intégration de systèmes complexes (CMS/LMS) et la gestion de plateformes à fort impact.",
  stats: [
    { label: "Expérience", value: "04 ans" },
    { label: "Systèmes LMS/CMS", value: "10 plf" },
    { label: "Niveau", value: "Master" }
  ]
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-12 tech-blueprint-bg select-none">
    
    <!-- Ligne d'horizon technique qui traverse l'écran -->
    <div class="absolute top-1/3 left-0 w-full h-[2px] bg-brand-dark/20 pointer-events-none"></div>
    <div class="absolute left-1/4 top-0 w-[2px] h-full bg-brand-dark/20 pointer-events-none"></div>

    <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-brand-dark bg-white brutal-shadow relative z-10">
      
      <!-- BLOC 1 : INDEX & LOCALISATION (Bandeau supérieur gauche) -->
      <div class="lg:col-span-8 border-b-2 border-r-0 lg:border-r-2 border-brand-dark p-6 bg-brand-accent flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div class="font-mono text-xs font-bold tracking-widest text-brand-dark uppercase">
          [ ARCHITECTURE_REPORT // REF: INGENIERO-2026 ]
        </div>
        <div class="bg-black text-white px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider">
          LOC: {{ personalInfo.location }} // NODE_ACTIVE
        </div>
      </div>

      <!-- BLOC 2 : STATUT SYSTÈME (Bandeau supérieur droit) -->
      <div class="lg:col-span-4 border-b-2 border-brand-dark p-6 bg-white flex items-center">
        <div class="flex items-center gap-3 font-mono text-xs font-bold text-brand-teal">
          <span class="w-3 h-3 bg-brand-teal inline-block animate-pulse"></span>
          SYSTEM STATUS: STABLE & DEPLOYED
        </div>
      </div>

      <!-- BLOC 3 : LE NOM ET TITRE (Section principale gauche) -->
      <div class="lg:col-span-8 border-r-0 lg:border-r-2 border-b-2 lg:border-b-0 border-brand-dark p-8 md:p-12 space-y-8 bg-white">
        <div class="space-y-4">
          <span class="text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-0.5">NOM DU CONSULTANT :</span>
          <h1 class="text-4xl md:text-7xl font-black text-brand-dark tracking-tighter uppercase leading-none">
            {{ personalInfo.name }}
          </h1>
          <div class="w-20 h-3 bg-brand-dark"></div> <!-- Barre de séparation brute -->
          <h2 class="text-xl md:text-2xl font-bold text-brand-navy font-mono border-l-4 border-brand-dark pl-4 py-1">
            {{ personalInfo.title }}
          </h2>
        </div>

        <!-- BLOC INCLUS : FICHE TECHNIQUE / BIO -->
        <div class="border-2 border-brand-dark p-6 bg-brand-light brutal-shadow-sm font-mono text-sm text-brand-dark space-y-4">
          <div class="font-bold text-xs uppercase tracking-wider text-brand-muted border-b border-brand-dark/20 pb-2">// DOSSIER_BIO.TXT</div>
          <p class="leading-relaxed font-sans font-medium text-base">
            {{ personalInfo.bio }}
          </p>
        </div>

        <!-- ACTIONS RECTILIGNES -->
        <div class="flex flex-col sm:flex-row gap-4 pt-2">
          <a :href="'mailto:' + personalInfo.email" 
             class="px-8 py-4 bg-black text-white font-bold text-center font-mono uppercase tracking-wider border-2 border-black transition-all brutal-shadow-btn">
            [ CONTACT_DIRECT ]
          </a>
          <a :href="personalInfo.website" 
             class="px-8 py-4 bg-white text-brand-dark font-bold text-center font-mono uppercase tracking-wider border-2 border-black transition-all brutal-shadow-btn">
            [ PARCOURIR_PROJETS ]
          </a>
        </div>
      </div>

      <!-- BLOC 4 : DONNÉES MÉTRIQUES & ACTIONS (Section droite) -->
      <div class="lg:col-span-4 flex flex-col justify-between bg-brand-light">
        
        <!-- Les stats découpées en compartiments étanches -->
        <div class="divide-y-2 divide-brand-dark border-b-2 lg:border-b-0 border-brand-dark">
          <div v-for="(stat, i) in personalInfo.stats" :key="i" class="p-8 bg-white space-y-2">
            <div class="text-xs font-mono uppercase tracking-wider text-brand-muted">// METRIC_0{{i+1}}</div>
            <div class="text-4xl font-black text-brand-dark font-mono leading-none tracking-tight">{{ stat.value }}</div>
            <div class="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Pied de carte réseau / Faux code-barres -->
        <div class="p-6 bg-white border-t-2 border-brand-dark flex flex-col gap-2 font-mono text-[10px] text-brand-muted">
          <div>DATA_INTEGRITY_VERIFIED_BY_WADE</div>
          <!-- Faux code-barres CSS -->
          <div class="flex h-8 bg-brand-dark w-full opacity-80">
            <div class="w-1 bg-white h-full mr-1"></div>
            <div class="w-3 bg-white h-full mr-2"></div>
            <div class="w-1 bg-white h-full mr-0.5"></div>
            <div class="w-2 bg-white h-full mr-3"></div>
            <div class="w-4 bg-white h-full mr-1"></div>
            <div class="w-1 bg-white h-full mr-1"></div>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>
