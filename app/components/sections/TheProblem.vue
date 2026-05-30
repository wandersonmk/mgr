<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

// ── Dores (coluna esquerda) ──
const pains = [
  {
    icon: 'fa-money-bill-wave',
    title: 'Preços Inflados',
    text: 'Você vê um orçamento de R$15.000, R$20.000 ou mais, mas quase nunca sabe quanto disso é custo real… e quanto é margem exagerada.',
    highlight: 'margem exagerada',
  },
  {
    icon: 'fa-circle-question',
    title: 'Falta de Transparência',
    text: 'Materiais, ferragens, corte e montagem costumam vir em pacotes confusos — dificultando entender o verdadeiro valor.',
    highlight: 'verdadeiro valor',
  },
  {
    icon: 'fa-masks-theater',
    title: 'Confusão Proposital',
    text: 'Termos técnicos, projetos complexos e excesso de detalhes fazem muita gente aceitar preços abusivos sem questionar.',
    highlight: 'sem questionar',
  },
  {
    icon: 'fa-link',
    title: 'Dependência Total',
    text: 'Sem acesso ao processo real, você fica preso à loja, sem controle, sem comparação e sem alternativas.',
    highlight: 'sem alternativas',
  },
]

// ── Reveal on scroll (respeita prefers-reduced-motion via CSS) ──
const root = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!root.value || typeof IntersectionObserver === 'undefined') return
  const els = Array.from(root.value.querySelectorAll<HTMLElement>('[data-reveal]'))
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer?.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
  )
  els.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section
    id="problema"
    ref="root"
    aria-labelledby="problema-title"
    class="relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
    style="background: linear-gradient(to bottom, #FAF7F2 0%, #F7F4EF 55%, #F3EFE7 100%);"
  >
    <!-- brilho ambiente quente -->
    <div
      class="pointer-events-none absolute -top-20 left-1/2 h-72 w-[130%] -translate-x-1/2"
      style="background: radial-gradient(55% 100% at 50% 0%, rgba(255,87,0,0.06) 0%, rgba(255,87,0,0) 72%);"
      aria-hidden="true"
    />

    <div class="relative mx-auto flex w-full max-w-6xl flex-col">
      <!-- ── LOGO (versão verde sobre o creme) ── -->
      <header class="mb-7 flex justify-center md:mb-9" data-reveal>
        <img
          src="/logo%20verde.png"
          alt="MGR — Manual do Guarda Roupa"
          width="1448"
          height="1086"
          class="h-auto"
          style="width:clamp(176px,32vw,234px); mix-blend-mode:multiply;"
        />
      </header>

      <!-- ── CONTEÚDO (grid 2 colunas) ── -->
      <div
        class="grid grid-cols-1 gap-y-7 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:items-start lg:gap-x-10 lg:gap-y-7"
      >
        <!-- ░ Bloco título (col 1 / linha 1) ░ -->
        <div class="lg:col-start-1 lg:row-start-1" data-reveal>
          <span
            class="mb-3.5 block h-[5px] w-10 rounded-full"
            style="background:#FF5A00;"
            aria-hidden="true"
          />
          <h2
            id="problema-title"
            class="font-extrabold leading-[1.12] tracking-tight"
            style="font-family:'Montserrat',sans-serif; color:#003321; font-size:clamp(1.55rem,3.4vw,2.5rem); letter-spacing:-0.5px;"
          >
            Você já percebeu por que um guarda-roupa planejado custa
            <span style="color:#FF5A00;">tão caro?</span>
          </h2>
          <p
            class="mt-3.5 font-medium leading-relaxed"
            style="color:#1F1F1F; font-size:clamp(0.98rem,1.6vw,1.2rem);"
          >
            A maioria das pessoas paga
            <span class="font-extrabold" style="color:#FF5A00;">milhares a mais</span>
            sem saber onde realmente está o abuso.
          </p>
        </div>

        <!-- ░ Bloco cena: casal + card de preço (col 2 / abrange as 2 linhas) ░ -->
        <div
          class="relative mx-auto w-full max-w-[340px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mx-0 lg:max-w-none"
          data-reveal
          style="--d:120ms"
        >
          <!-- Foto do casal segurando o orçamento -->
          <div
            class="relative overflow-hidden rounded-3xl border bg-[#EADCC4]"
            style="border-color:rgba(11,27,20,0.10); box-shadow:0 26px 56px -30px rgba(11,27,20,0.5);"
          >
            <img
              src="/casal.png"
              alt="Casal surpreso segurando o orçamento de R$ 18.750,00 de um guarda-roupa planejado dentro de uma loja"
              class="block w-full"
              width="1086"
              height="1448"
              loading="lazy"
              style="aspect-ratio:4/5; object-fit:cover; object-position:50% 58%;"
            />
            <div
              class="pointer-events-none absolute inset-0 rounded-3xl"
              style="box-shadow:inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 -48px 64px -46px rgba(11,27,20,0.32);"
              aria-hidden="true"
            />
          </div>

          <!-- CARD COMPARATIVO — abaixo da imagem no mobile; sobreposto no canto (desktop) -->
          <div
            class="relative z-10 mx-auto mt-4 w-[88%] max-w-[270px] overflow-hidden rounded-xl border bg-white lg:absolute lg:bottom-3 lg:right-2 lg:mx-0 lg:mt-0 lg:w-[208px]"
            style="border-color:rgba(255,255,255,0.9); box-shadow:0 16px 40px -14px rgba(11,27,20,0.6);"
          >
            <!-- Loja tradicional -->
            <div class="px-3 pb-3 pt-2.5 text-center" style="background:linear-gradient(150deg,#005232,#003822);">
              <p class="text-[0.6rem] font-extrabold uppercase tracking-[0.12em]" style="color:#C8D6CF;">
                Loja Tradicional
              </p>
              <strong
                class="block tabular-nums text-white line-through decoration-[#E25A12] decoration-2"
                style="font-family:'Montserrat',sans-serif; font-size:clamp(1.15rem,1.5vw,1.35rem);"
              >
                R$ 18.750,00
              </strong>
            </div>

            <!-- Custo real (com selo VS sobreposto) -->
            <div class="relative px-3 pb-2.5 pt-5 text-center" style="background:#F7F2E9;">
              <span
                class="absolute left-1/2 top-0 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-[0.62rem] font-black uppercase text-white"
                style="background:linear-gradient(150deg,#005232,#003822); box-shadow:0 5px 14px -5px rgba(11,27,20,0.65);"
              >
                vs
              </span>
              <p class="text-[0.6rem] font-extrabold uppercase tracking-[0.12em]" style="color:#003321;">
                Custo Real
              </p>
              <strong
                class="block tabular-nums"
                style="font-family:'Montserrat',sans-serif; color:#003321; font-size:clamp(1.4rem,1.9vw,1.65rem);"
              >
                R$ 5.625,00
              </strong>
            </div>

            <!-- Economia (faixa laranja) -->
            <div class="px-3 pb-2.5 pt-2 text-center" style="background:linear-gradient(150deg,#FF5B00,#E04E00);">
              <p class="text-[0.6rem] font-extrabold uppercase tracking-[0.1em] text-white/90">
                Economia Possível
              </p>
              <strong
                class="block tabular-nums text-white"
                style="font-family:'Montserrat',sans-serif; font-size:clamp(1.4rem,1.9vw,1.65rem); text-shadow:0 2px 8px rgba(0,0,0,0.22);"
              >
                R$ 13.125,00
              </strong>
              <span class="mt-0.5 inline-block text-[0.62rem] font-extrabold uppercase tracking-wide text-white">
                Até 70% de desconto
              </span>
            </div>
          </div>
        </div>

        <!-- ░ Bloco dores (col 1 / linha 2) ░ -->
        <ul class="flex flex-col gap-3.5 lg:col-start-1 lg:row-start-2">
          <li
            v-for="(pain, i) in pains"
            :key="pain.title"
            data-reveal
            :style="`--d:${i * 100}ms`"
            class="group grid grid-cols-[54px_1fr] items-stretch gap-3.5 rounded-xl border p-3 transition-all duration-300 hover:-translate-y-0.5 sm:grid-cols-[62px_1fr] sm:gap-4"
            style="background:#FFFFFF; border-color:#E7E1D8; box-shadow:0 10px 26px -20px #D8D3CC;"
          >
            <!-- ícone (caixa verde alta) -->
            <div
              class="flex items-center justify-center rounded-lg"
              style="background:linear-gradient(160deg,#005A38,#003D28); color:#E8D2A6; min-height:70px; box-shadow:inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 16px -10px rgba(11,27,20,0.6);"
            >
              <i :class="`fa-solid ${pain.icon}`" class="text-2xl sm:text-[1.7rem]" aria-hidden="true"></i>
            </div>
            <!-- texto -->
            <div class="min-w-0 self-center">
              <h3
                class="mb-1 font-extrabold uppercase leading-tight tracking-wide"
                style="font-family:'Montserrat',sans-serif; color:#003321; font-size:clamp(0.92rem,1.4vw,1.08rem);"
              >
                {{ pain.title }}
              </h3>
              <p class="leading-snug" style="color:#2B2B2B; font-size:clamp(0.82rem,1.1vw,0.93rem);">
                <template v-for="(part, idx) in pain.text.split(pain.highlight)" :key="idx">
                  {{ part }}<strong
                    v-if="idx === 0"
                    class="font-extrabold"
                    style="color:#003321;"
                  >{{ pain.highlight }}</strong>
                </template>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- ── BANNER DE ALERTA ── -->
      <div
        data-reveal
        class="mt-10 flex flex-col items-center gap-3.5 rounded-t-2xl border-2 border-b-0 px-5 py-5 text-center sm:flex-row sm:gap-5 sm:px-8 sm:text-left md:mt-12"
        style="border-color:#FF5A00; background:#FAF4EC;"
      >
        <i
          class="fa-solid fa-triangle-exclamation shrink-0"
          style="color:#F05A00; font-size:clamp(2.2rem,4.5vw,2.9rem);"
          aria-hidden="true"
        ></i>
        <p class="leading-tight" style="color:#1F1F1F;">
          <span class="font-bold" style="font-size:clamp(0.98rem,1.9vw,1.25rem);">A verdade é simples:</span>
          <span class="font-medium" style="font-size:clamp(0.98rem,1.9vw,1.25rem);"> você pode estar pagando </span>
          <span
            class="mt-1 block font-extrabold"
            style="font-family:'Montserrat',sans-serif; color:#FF5A00; font-size:clamp(1.3rem,3vw,1.9rem);"
          >
            até 5x mais caro do que deveria.
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--d, 0ms);
}
[data-reveal].in {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
