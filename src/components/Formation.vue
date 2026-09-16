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
  <!-- Remplacement des bordures et arrières-plans par le thème clair technique -->
  <section id="formation" class="py-20 border-t-4 border-brand-dark bg-brand-light relative tech-blueprint-bg">
    
    <!-- En-tête de section style Dossier d'Accréditation -->
    <div class="mb-16 border-2 border-brand-dark bg-white p-8 brutal-shadow max-w-3xl">
      <div class="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-4">
        SECTION_05 // TITRES_&_ACCREDITATIONS
      </div>
      <h2 class="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-4">
        Formation & Certifications
      </h2>
      <div class="w-16 h-2 bg-brand-dark mb-4"></div>
      <p class="text-brand-muted font-mono text-sm leading-relaxed">
        Doublement diplômé avec Mention Bien de l'UN-CHK, avec une spécialisation Full Stack approfondie par des certifications professionnelles (FORCE-N / Mastercard Foundation). Registre académique officiel.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      
      <!-- Colonne Principale : Diplômes Universitaires (2/3) -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Titre de catégorie Brutaliste -->
        <div class="inline-flex items-center gap-3 bg-black text-white px-4 py-2 border-2 border-black font-mono text-sm font-black uppercase tracking-wider mb-2">
          <GraduationCap class="w-4 h-4 text-brand-accent" />
          // CURRICULUM_ACADEMIQUE.LOG
        </div>

        <div 
          v-for="(item, index) in education" 
          :key="index"
          class="border-2 border-brand-dark bg-white brutal-shadow p-6 md:p-8 flex flex-col justify-between group transition-transform duration-200"
        >
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div class="flex-1">
              <h4 class="text-xl md:text-2xl font-black text-brand-dark uppercase tracking-tight group-hover:text-brand-teal transition-colors duration-200 mb-1">
                {{ item.degree }}
              </h4>
              <p class="text-brand-teal font-mono text-xs font-black uppercase tracking-widest mb-3">
                >> SPECIALITE // {{ item.specialty }}
              </p>
              
              <!-- Affichage conditionnel du Sujet de Master style Encart de Thèse -->
              <div v-if="item.thesis" class="mt-4 p-4 bg-brand-light border-2 border-brand-dark border-l-8 border-l-brand-dark">
                <span class="block font-mono text-xs font-black text-brand-dark uppercase tracking-wider mb-2">
                  [ SUJET_D_ETUDE_TRAITE ] :
                </span>
                <p class="font-mono text-xs font-bold text-brand-muted italic leading-relaxed">
                  « {{ item.thesis }} »
                </p>
              </div>
            </div>

            <!-- Badge Année Rectiligne -->
            <span class="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-bold bg-brand-accent text-brand-dark border-2 border-brand-dark tracking-wider shrink-0 self-start sm:self-auto">
              <Calendar class="w-3.5 h-3.5 text-brand-dark" />
              {{ item.period }}
            </span>
          </div>

          <!-- Université / École d'ingénierie -->
          <div class="flex items-center gap-2 font-mono text-xs font-bold text-brand-muted pt-4 mt-4 border-t border-brand-dark/15">
            <Building2 class="w-4 h-4 text-brand-dark shrink-0" />
            <span>INSTITUTION : <span class="text-brand-dark uppercase">{{ item.school }}</span></span>
          </div>
        </div>
      </div>

      <!-- Colonne Secondaire : Certifications, Engagement & Langues (1/3) -->
      <div class="space-y-10">
        
        <!-- Bloc Certifications (Compartiment d'usine) -->
        <div class="border-2 border-brand-dark bg-white brutal-shadow p-6">
          <h3 class="font-mono text-sm font-black text-brand-dark uppercase tracking-wider mb-5 pb-2 border-b-2 border-brand-dark flex items-center gap-2">
            <Award class="w-4 h-4 text-brand-teal" />
            [ CERTIFICATIONS_LIST ]
          </h3>

          <div class="space-y-3">
            <div 
              v-for="(cert, cIdx) in certifications" 
              :key="cIdx"
              class="p-4 bg-brand-light border border-brand-dark flex items-start gap-3"
            >
              <span class="w-5 h-5 border border-brand-dark bg-brand-accent shrink-0 flex items-center justify-center mt-0.5">
                <ShieldCheck class="w-3 h-3 text-brand-dark" />
              </span>
              <div>
                <p class="font-mono text-xs font-black text-brand-dark leading-tight">
                  {{ typeof cert === 'string' ? cert : cert.title }}
                </p>
                <p v-if="cert.issuer" class="font-mono text-[10px] font-black text-brand-teal uppercase tracking-widest mt-1">
                  >> {{ cert.issuer }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bloc Leadership & Associations (Engagement Industriel) -->
        <div v-if="associations && associations.length" class="border-2 border-brand-dark bg-white brutal-shadow p-6">
          <h3 class="font-mono text-sm font-black text-brand-dark uppercase tracking-wider mb-5 pb-2 border-b-2 border-brand-dark flex items-center gap-2">
            <Users class="w-4 h-4 text-brand-teal" />
            [ LEAD_&_ENGAGEMENT ]
          </h3>

          <div v-for="(assoc, aIdx) in associations" :key="aIdx" class="mb-5 last:mb-0 pb-4 last:pb-0 border-b last:border-b-0 border-brand-dark/15">
            <div class="flex items-center justify-between gap-2 mb-1">
              <span class="font-mono text-xs font-black text-brand-dark uppercase tracking-tight">{{ assoc.role }}</span>
              <span class="font-mono text-[10px] font-black px-2 py-0.5 bg-black text-white shrink-0">{{ assoc.period }}</span>
            </div>
            <p class="font-mono text-[10px] font-bold text-brand-teal uppercase tracking-wider mb-2">// {{ assoc.organization }}</p>
            <p class="font-sans font-medium text-xs text-brand-muted leading-relaxed">{{ assoc.details }}</p>
          </div>
        </div>

        <!-- Bloc Langues (Matrice de communication) -->
        <div v-if="languages && languages.length" class="border-2 border-brand-dark bg-white brutal-shadow p-6">
          <h3 class="font-mono text-sm font-black text-brand-dark uppercase tracking-wider mb-5 pb-2 border-b-2 border-brand-dark flex items-center gap-2">
            <Languages class="w-4 h-4 text-brand-teal" />
            [ LANGUAGES_BAR ]
          </h3>

          <div class="grid grid-cols-2 gap-3">
            <div v-for="(lang, lIdx) in languages" :key="lIdx" class="p-3 bg-brand-light border border-brand-dark font-mono">
              <span class="block text-xs font-black text-brand-dark uppercase tracking-wide">{{ lang.language }}</span>
              <span class="block text-[10px] font-bold text-brand-muted uppercase tracking-widest mt-1 border-t border-brand-dark/10 pt-1">>> {{ lang.level }}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
