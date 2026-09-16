<script setup>
import { experiences } from '../data/portfolioData.js';
import { Briefcase, Calendar, MapPin, Code2, FolderGit2, UserCheck, CheckCircle2 } from 'lucide-vue-next';
</script>

<template>
  <!-- Remplacement des bordures diffuses par des lignes pleines épaisses et fond clair -->
  <section id="experiences" class="py-20 border-t-4 border-brand-dark bg-brand-light relative tech-blueprint-bg">
    
    <!-- En-tête de section style Fiche d'Inventaire -->
    <div class="mb-16 border-2 border-brand-dark bg-white p-8 brutal-shadow max-w-3xl">
      <div class="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-4">
        + 4 ANS
      </div>
      <h2 class="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-4">
        Expériences Professionnelles
      </h2>
      <div class="w-16 h-2 bg-brand-dark mb-4"></div>
      <p class="text-brand-muted font-mono text-sm leading-relaxed">
        Au service d'institutions académiques, d'organisations panafricaines et de plateformes web à fort impact.
      </p>
    </div>

    <!-- Timeline des expériences : Ligne verticale noire épaisse sans fioritures -->
    <div class="relative border-l-4 border-brand-dark ml-4 md:ml-8 space-y-12 max-w-5xl">
      <div 
        v-for="(exp, index) in experiences" 
        :key="index"
        class="relative pl-8 md:pl-12 group"
      >
        <!-- Marqueur de timeline : Carré brutal, pas de cercle, pas d'arrondi -->
        <div class="absolute -left-[14px] top-2 w-6 h-6 border-2 border-brand-dark bg-white group-hover:bg-brand-accent transition-colors duration-200 z-10 flex items-center justify-center font-mono text-[10px] font-black text-brand-dark">
          0{{ index + 1 }}
        </div>

        <!-- Carte de l'expérience : Style Brutaliste Angulaire -->
        <div class="p-6 md:p-8 border-2 border-brand-dark bg-white brutal-shadow group-hover:translate-x-1 transition-transform duration-200">
          
          <!-- En-tête : Rôle, Entreprise, Période & Lieu -->
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 pb-4 border-b border-brand-dark/20">
            <div>
              <h3 class="text-xl md:text-3xl font-black text-brand-dark uppercase tracking-tight group-hover:text-brand-teal transition-colors duration-200">
                {{ exp.role }}
              </h3>
              <p class="text-brand-muted font-mono font-bold text-sm mt-1 flex items-center gap-2">
                <Briefcase class="w-4 h-4 shrink-0 text-brand-dark" />
                // INSTITUTION : {{ exp.company }}
              </p>
            </div>
            
            <!-- Badges d'information rectilignes -->
            <div class="flex flex-wrap items-center gap-2.5 font-mono text-xs font-bold text-brand-dark">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-light border border-brand-dark">
                <Calendar class="w-3.5 h-3.5 text-brand-dark" />
                {{ exp.period }}
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white">
                <MapPin class="w-3.5 h-3.5 text-white" />
                {{ exp.location }}
              </span>
            </div>
          </div>

          <!-- Technologies utilisées (Style étiquettes d'usine) -->
          <div v-if="exp.technologies && exp.technologies.length" class="flex flex-wrap items-center gap-2 mb-6">
            <span class="text-xs font-mono font-black uppercase tracking-wider text-brand-dark flex items-center gap-1 mr-1">
              <Code2 class="w-3.5 h-3.5 text-brand-dark" /> [TECH_STACK] :
            </span>
            <span 
              v-for="tech in exp.technologies" 
              :key="tech"
              class="px-2.5 py-1 text-xs font-mono font-bold bg-brand-light text-brand-dark border border-brand-dark"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Liste des missions (Puces carrées brutales) -->
          <div class="mb-6">
            <h4 class="text-xs font-mono font-black uppercase tracking-widest text-brand-muted mb-3">// MISSIONS :</h4>
            <ul class="space-y-3 text-sm text-brand-dark font-mono">
              <li v-for="(mission, mIdx) in exp.missions" :key="mIdx" class="flex items-start gap-3 pl-1">
                <!-- Encart de validation carré et brut -->
                <span class="w-4 h-4 border border-brand-dark bg-brand-accent shrink-0 flex items-center justify-center mt-0.5">
                  <CheckCircle2 class="w-3 h-3 text-brand-dark" />
                </span>
                <span class="font-sans font-medium text-base text-brand-navy">{{ mission }}</span>
              </li>
            </ul>
          </div>

          <!-- Footer : Projets associés & Référence (Compartimenté de manière brute) -->
          <div class="pt-4 border-t-2 border-brand-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
            <!-- Badges des projets -->
            <div v-if="exp.projects && exp.projects.length" class="flex flex-wrap items-center gap-2">
              <span class="text-brand-muted font-black uppercase tracking-wider flex items-center gap-1">
                <FolderGit2 class="w-3.5 h-3.5 text-brand-dark" /> PROJETS :
              </span>
              <span 
                v-for="proj in exp.projects" 
                :key="proj"
                class="px-2 py-0.5 bg-black text-white font-bold"
              >
                {{ proj }}
              </span>
            </div>

            <!-- Référence professionnelle -->
            <div v-if="exp.reference" class="flex items-center gap-2 border border-brand-dark px-3 py-1 bg-brand-light sm:ml-auto">
              <UserCheck class="w-3.5 h-3.5 text-brand-teal" />
              <span class="font-bold text-brand-muted">REF: <span class="text-brand-dark uppercase">{{ exp.reference }}</span></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
