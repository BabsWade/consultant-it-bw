<script setup>
import { experiences } from '../data/portfolioData.js';
import {
  Briefcase,
  Calendar,
  MapPin,
  Code2,
  FolderGit2,
  UserCheck,
  CheckCircle2,
  ChevronRight
} from 'lucide-vue-next';
</script>

<template>
  <section
    id="experiences"
    class="relative overflow-hidden bg-white dark:bg-[#000000] py-16 md:py-24 transition-colors duration-300"
  >
  
    <!-- Flou d'arrière-plan décoratif -->
    <div
      class="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#e0e7ff] dark:bg-blue-900/20 opacity-50 blur-3xl transition-colors duration-300"
    ></div>

    <div class="relative mx-auto max-w-6xl px-5 md:px-8">

      <!-- HEADER -->
      <div class="mb-12 md:mb-16 max-w-6xl">

        <div
          class="mb-5 inline-flex items-center rounded-full bg-[#e8f1ff] dark:bg-blue-500/10 px-4 py-2 text-sm font-semibold text-[#1677ff] dark:text-blue-400 transition-colors"
        >
          <span class="mr-2 h-2 w-2 rounded-full bg-[#1677ff] dark:bg-blue-400"></span>
          + 4 ANS D'EXPÉRIENCE
        </div>

        <h2
          class="mb-5 text-3xl font-bold tracking-tight text-[#111827] dark:text-white md:text-5xl transition-colors"
        >
          Expériences professionnelles
        </h2>

        <p
          class="max-w-2xl text-base leading-7 text-[#6b7280] dark:text-gray-400 md:text-lg transition-colors"
        >
          Au service d'institutions académiques, d'organisations
          panafricaines et de plateformes web à fort impact.
        </p>
      </div>

      <!-- TIMELINE -->
      <div class="relative">

        <!-- Ligne de timeline -->
        <div
          class="absolute left-[19px] top-5 bottom-5 hidden w-px bg-[#dce1e8] dark:bg-white/10 md:block transition-colors"
        ></div>

        <div class="space-y-6 md:space-y-8">

          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative md:pl-16"
          >

            <!-- NUMÉRO -->
            <div
              class="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border border-[#e1e6ed] dark:border-white/10 bg-white dark:bg-[#1C1C1E] text-xs font-bold text-[#1677ff] dark:text-blue-400 shadow-sm md:flex transition-colors"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </div>

            <!-- CARD -->
            <article
              class="group rounded-[28px] border border-[#e5e9ef] dark:border-white/10 bg-white dark:bg-[#1C1C1E] p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.09)] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] md:p-7"
            >

              <!-- HEADER CARD -->
              <div
                class="mb-6 flex flex-col gap-5 border-b border-[#edf0f4] dark:border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between transition-colors"
              >

                <div class="min-w-0">

                  <div
                    class="mb-3 flex items-center gap-2 text-sm font-medium text-[#1677ff] dark:text-blue-400 transition-colors"
                  >
                    <span
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf2ff] dark:bg-blue-500/10 transition-colors"
                    >
                      <Briefcase class="h-4 w-4" />
                    </span>

                    <span>{{ exp.company }}</span>
                  </div>

                  <h3
                    class="text-xl font-bold tracking-tight text-[#111827] dark:text-white md:text-2xl transition-colors"
                  >
                    {{ exp.role }}
                  </h3>
                </div>

                <!-- INFOS -->
                <div class="flex flex-wrap gap-2">

                  <span
                    class="inline-flex items-center gap-2 rounded-full bg-[#f3f5f7] dark:bg-white/5 px-3.5 py-2 text-xs font-medium text-[#4b5563] dark:text-gray-300 transition-colors"
                  >
                    <Calendar class="h-4 w-4 text-[#6b7280] dark:text-gray-400" />
                    {{ exp.period }}
                  </span>

                  <span
                    class="inline-flex items-center gap-2 rounded-full bg-[#eaf2ff] dark:bg-blue-500/10 px-3.5 py-2 text-xs font-semibold text-[#1677ff] dark:text-blue-400 transition-colors"
                  >
                    <MapPin class="h-4 w-4" />
                    {{ exp.location }}
                  </span>

                </div>
              </div>

              <!-- TECHNOLOGIES -->
              <div
                v-if="exp.technologies && exp.technologies.length"
                class="mb-7"
              >

                <div
                  class="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8b95a5] dark:text-gray-400 transition-colors"
                >
                  <Code2 class="h-4 w-4" />
                  Technologies
                </div>

                <div class="flex flex-wrap gap-2">

                  <span
                    v-for="tech in exp.technologies"
                    :key="tech"
                    class="rounded-full bg-[#f4f6f8] dark:bg-white/5 px-3.5 py-2 text-xs font-medium text-[#374151] dark:text-gray-300 transition-colors duration-200 group-hover:bg-[#eef4ff] dark:group-hover:bg-blue-500/20"
                  >
                    {{ tech }}
                  </span>

                </div>
              </div>

              <!-- MISSIONS -->
              <div class="mb-7">

                <h4
                  class="mb-4 text-xs font-semibold uppercase tracking-wider text-[#8b95a5] dark:text-gray-400 transition-colors"
                >
                  Missions
                </h4>

                <ul class="space-y-3">

                  <li
                    v-for="(mission, mIdx) in exp.missions"
                    :key="mIdx"
                    class="flex items-start gap-3"
                  >

                    <span
                      class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf2ff] dark:bg-blue-500/10 text-[#1677ff] dark:text-blue-400 transition-colors"
                    >
                      <CheckCircle2 class="h-3.5 w-3.5" />
                    </span>

                    <span
                      class="text-[15px] leading-6 text-[#374151] dark:text-gray-300 md:text-base transition-colors"
                    >
                      {{ mission }}
                    </span>

                  </li>

                </ul>
              </div>

              <!-- FOOTER CARD -->
              <div
                class="flex flex-col gap-4 rounded-2xl bg-[#f7f8fa] dark:bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between transition-colors"
              >

                <!-- PROJETS -->
                <div
                  v-if="exp.projects && exp.projects.length"
                  class="flex flex-wrap items-center gap-2"
                >

                  <span
                    class="mr-1 flex items-center gap-1.5 text-xs font-semibold text-[#8b95a5] dark:text-gray-400 transition-colors"
                  >
                    <FolderGit2 class="h-4 w-4" />
                    Projets
                  </span>

                  <span
                    v-for="proj in exp.projects"
                    :key="proj"
                    class="rounded-full bg-white dark:bg-[#1C1C1E] border border-transparent dark:border-white/10 px-3 py-1.5 text-xs font-medium text-[#374151] dark:text-gray-300 transition-colors"
                  >
                    {{ proj }}
                  </span>

                </div>

                <!-- REFERENCE -->
                <div
                  v-if="exp.reference"
                  class="flex items-center gap-2 rounded-full bg-white dark:bg-[#1C1C1E] border border-transparent dark:border-white/10 px-3.5 py-2 sm:ml-auto transition-colors"
                >
                  <span
                    class="flex h-7 w-7 items-center justify-center rounded-full bg-[#eaf2ff] dark:bg-blue-500/10 text-[#1677ff] dark:text-blue-400 transition-colors"
                  >
                    <UserCheck class="h-3.5 w-3.5" />
                  </span>

                  <span class="text-xs text-[#8b95a5] dark:text-gray-400 transition-colors">
                    Référence
                  </span>

                  <span class="text-xs font-semibold text-[#111827] dark:text-white transition-colors">
                    {{ exp.reference }}
                  </span>
                </div>

              </div>

              <!-- INDICATEUR -->
              <div
                class="mt-5 flex items-center justify-end text-xs font-medium text-[#9ca3af] dark:text-gray-500 transition-colors group-hover:text-[#1677ff] dark:group-hover:text-blue-400"
              >
                Voir l'expérience
                <ChevronRight
                  class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>

            </article>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>