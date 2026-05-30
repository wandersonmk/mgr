<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

// ── Os 4 itens principais ──
const items = [
  {
    icon: 'fa-layer-group',
    img: '/madeira.png',
    scale: 1.2,
    title: 'Madeira',
    desc: 'MDF, chapa e acabamentos.',
    note: 'Custo muito menor do que o preço cobrado.',
  },
  {
    icon: 'fa-gears',
    img: '/ferragens.png',
    scale: 1.33,
    title: 'Ferragens',
    desc: 'Dobradiças, corrediças, puxadores e sistemas.',
    note: 'A diferença de preço é absurda entre loja e custo real.',
  },
  {
    icon: 'fa-scissors',
    img: '/serra.png',
    scale: 1.12,
    title: 'Corte',
    desc: 'Serviço de corte e furação das chapas de MDF.',
    note: 'Você paga caro por algo que custa muito pouco.',
  },
  {
    icon: 'fa-screwdriver-wrench',
    img: '/furadeira.png',
    scale: 1.21,
    title: 'Montagem',
    desc: 'Mão de obra especializada.',
    note: 'O valor cobrado é muito acima do necessário.',
  },
]

// ── Linhas do comparativo ──
const tradicional = [
  ['Madeira', '7.800,00'],
  ['Ferragens', '4.350,00'],
  ['Corte', '2.950,00'],
  ['Montagem', '3.650,00'],
]
const real = [
  ['Madeira', '3.175,00'],
  ['Ferragens', '1.050,00'],
  ['Corte', '750,00'],
  ['Montagem', '650,00'],
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
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
  )
  els.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section
    id="verdade"
    ref="root"
    aria-labelledby="verdade-title"
    class="relative w-full overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10"
    style="background:
      radial-gradient(80% 50% at 50% 0%, rgba(127,181,43,0.16) 0%, rgba(127,181,43,0) 55%),
      linear-gradient(180deg, #052016 0%, #07291D 45%, #051D15 100%);
      color:#ffffff;"
  >
    <div class="relative mx-auto flex w-full max-w-6xl flex-col">
      <!-- ── LOGO ── (sem reveal: opacity<1 isolaria o mix-blend e mostraria o fundo preto) -->
      <header class="mb-6 flex justify-center md:mb-8">
        <img
          src="/logo.png"
          alt="MGR — Manual do Guarda Roupa"
          width="1563"
          height="1006"
          class="h-auto"
          style="width:clamp(176px,38vw,224px); mix-blend-mode:lighten;"
        />
      </header>

      <!-- ── TÍTULO ── -->
      <div class="mb-9 text-center md:mb-12" data-reveal>
        <h2
          id="verdade-title"
          class="font-extrabold tracking-tight"
          style="font-family:'Montserrat',sans-serif; font-size:clamp(2rem,5vw,3.6rem); line-height:1.02; letter-spacing:-1.5px;"
        >
          A verdade que as lojas
          <span class="block" style="color:#8CC63F;">não querem que você descubra.</span>
        </h2>
        <p
          class="mx-auto mt-5 max-w-2xl font-medium leading-relaxed text-white/90"
          style="font-size:clamp(1.02rem,1.9vw,1.4rem);"
        >
          O <strong class="font-extrabold" style="color:#D4AF37;">custo real</strong>
          de um guarda-roupa pode ser drasticamente menor quando você entende o processo.
        </p>
      </div>

      <!-- ── INTRO DOS ITENS ── -->
      <p
        class="mb-5 text-center font-extrabold uppercase tracking-wide"
        style="font-family:'Montserrat',sans-serif; font-size:clamp(1rem,1.9vw,1.4rem);"
        data-reveal
      >
        Todo guarda-roupa é feito de
        <span style="color:#8CC63F;">4 itens principais:</span>
      </p>

      <!-- ── GRID DE ITENS ── -->
      <div class="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <div
          v-for="(item, i) in items"
          :key="item.title"
          data-reveal
          :style="`--d:${i * 90}ms`"
          class="flex flex-col items-center rounded-xl border px-5 pb-6 pt-7 text-center transition-transform duration-300 hover:-translate-y-1"
          style="border-color:rgba(140,198,63,0.55); background:rgba(6,40,28,0.6); box-shadow:inset 0 0 22px rgba(127,181,43,0.08);"
        >
          <div
            v-if="item.img"
            class="relative mb-4 flex h-[78px] w-[78px] items-center justify-center overflow-hidden rounded-full"
            style="filter:drop-shadow(0 10px 16px rgba(127,181,43,0.4));"
          >
            <!-- círculo branco atrás: aparece nos desenhos com miolo transparente (ex.: serra) -->
            <span class="absolute h-[90%] w-[90%] rounded-full bg-white" aria-hidden="true"></span>
            <!-- escala normaliza o disco verde de cada PNG ao mesmo tamanho -->
            <img
              :src="item.img"
              alt=""
              width="500"
              height="500"
              class="relative h-full w-full object-contain"
              :style="`transform:scale(${item.scale ?? 1});`"
            />
          </div>
          <div
            v-else
            class="mb-4 flex h-[78px] w-[78px] items-center justify-center rounded-full text-white"
            style="background:radial-gradient(circle at 38% 32%, #8FCB3A 0%, #3F7D1D 100%); box-shadow:0 10px 24px -10px rgba(127,181,43,0.6);"
          >
            <i :class="`fa-solid ${item.icon}`" class="text-3xl" aria-hidden="true"></i>
          </div>
          <h3
            class="mb-2 font-extrabold uppercase tracking-wide text-white"
            style="font-family:'Montserrat',sans-serif; font-size:clamp(1.1rem,1.5vw,1.35rem);"
          >
            {{ item.title }}
          </h3>
          <p class="mb-3 text-[0.92rem] leading-snug text-white/85">{{ item.desc }}</p>
          <small class="mt-auto block text-[0.85rem] font-semibold leading-snug" style="color:#9BD342;">
            {{ item.note }}
          </small>
        </div>
      </div>

      <!-- ── TÍTULO EXEMPLO ── -->
      <div
        class="mb-5 flex items-center justify-center gap-3 text-center font-extrabold uppercase"
        style="font-family:'Montserrat',sans-serif; font-size:clamp(1.25rem,2.4vw,1.9rem);"
        data-reveal
      >
        <i class="fa-solid fa-receipt" style="color:#8CC63F;" aria-hidden="true"></i>
        <span>Veja um <span style="color:#8CC63F;">exemplo real:</span></span>
      </div>

      <!-- ── COMPARATIVO ── -->
      <div
        class="relative mx-auto flex w-full max-w-4xl flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-12"
        data-reveal
      >
        <!-- LOJA TRADICIONAL -->
        <div
          class="overflow-hidden rounded-xl border bg-[#eee] text-[#111] lg:flex-1"
          style="border-color:#8CC63F; box-shadow:0 14px 36px -16px rgba(0,0,0,0.55);"
        >
          <div class="flex h-[70px] items-center justify-center gap-3 text-white" style="background:#30302D;">
            <i class="fa-solid fa-store text-xl" aria-hidden="true"></i>
            <h3 class="font-extrabold uppercase" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.1rem,1.6vw,1.5rem);">
              Loja Tradicional
            </h3>
          </div>
          <div class="px-6 pb-4 pt-5" style="background:linear-gradient(180deg,#f4f4f4,#e7e7e7);">
            <p class="mb-0.5 text-center text-[0.95rem] text-[#444]">Orçamento apresentado</p>
            <div
              class="mb-4 text-center font-extrabold tabular-nums"
              style="font-family:'Montserrat',sans-serif; color:#E64E00; font-size:clamp(2rem,3.6vw,3rem);"
            >
              R$ 18.750,00
            </div>
            <div
              v-for="row in tradicional"
              :key="row[0]"
              class="flex items-center justify-between border-b py-1.5 text-[0.95rem]"
              style="border-color:#cfcfcf;"
            >
              <span class="text-[#333]">{{ row[0] }}</span>
              <strong class="font-bold tabular-nums text-[#111]">R$ {{ row[1] }}</strong>
            </div>
          </div>
          <div
            class="flex items-center justify-between px-6 py-4 text-white"
            style="background:#1D1D1B;"
          >
            <span class="font-extrabold uppercase" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.1rem,1.6vw,1.45rem);">Total</span>
            <strong class="font-extrabold tabular-nums" style="font-family:'Montserrat',sans-serif; color:#FF5700; font-size:clamp(1.1rem,1.6vw,1.45rem);">R$ 18.750,00</strong>
          </div>
        </div>

        <!-- VS (entre as caixas no mobile / sobreposto no desktop) -->
        <div
          class="z-10 mx-auto -my-2 flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-4 border-white font-black text-white lg:absolute lg:left-1/2 lg:top-1/2 lg:my-0 lg:h-[68px] lg:w-[68px] lg:-translate-x-1/2 lg:-translate-y-1/2"
          style="background:#1F3B2E; box-shadow:0 8px 20px -6px rgba(0,0,0,0.6); font-size:1.3rem;"
          aria-hidden="true"
        >
          VS
        </div>

        <!-- CUSTO REAL -->
        <div
          class="overflow-hidden rounded-xl border bg-[#eee] text-[#111] lg:flex-1"
          style="border-color:#8CC63F; box-shadow:0 14px 36px -16px rgba(0,0,0,0.55);"
        >
          <div
            class="flex h-[70px] items-center justify-center gap-3 text-white"
            style="background:linear-gradient(90deg,#477819,#86A823);"
          >
            <i class="fa-solid fa-circle-check text-xl" aria-hidden="true"></i>
            <h3 class="font-extrabold uppercase" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.1rem,1.6vw,1.5rem);">
              Custo Real
            </h3>
          </div>
          <div class="px-6 pb-4 pt-5" style="background:linear-gradient(180deg,#f4f4f4,#e7e7e7);">
            <p class="mb-0.5 text-center text-[0.95rem] text-[#444]">Custo dos mesmos itens</p>
            <div
              class="mb-4 text-center font-extrabold tabular-nums"
              style="font-family:'Montserrat',sans-serif; color:#2F6E22; font-size:clamp(2rem,3.6vw,3rem);"
            >
              R$ 5.625,00
            </div>
            <div
              v-for="row in real"
              :key="row[0]"
              class="flex items-center justify-between border-b py-1.5 text-[0.95rem]"
              style="border-color:#cfcfcf;"
            >
              <span class="text-[#333]">{{ row[0] }}</span>
              <strong class="font-bold tabular-nums text-[#111]">R$ {{ row[1] }}</strong>
            </div>
          </div>
          <div
            class="flex items-center justify-between px-6 py-4 text-white"
            style="background:#163914;"
          >
            <span class="font-extrabold uppercase" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.1rem,1.6vw,1.45rem);">Total</span>
            <strong class="font-extrabold tabular-nums" style="font-family:'Montserrat',sans-serif; color:#8CC63F; font-size:clamp(1.1rem,1.6vw,1.45rem);">R$ 5.625,00</strong>
          </div>
        </div>
      </div>

      <!-- ── ECONOMIA ── -->
      <div
        class="mx-auto mt-7 grid w-full max-w-4xl grid-cols-1 items-center gap-5 rounded-2xl border-2 border-dashed px-6 py-6 text-center md:grid-cols-[auto_1fr_auto_1fr] md:gap-7 md:text-left"
        style="border-color:#D4AF37; background:rgba(5,32,22,0.72);"
        data-reveal
      >
        <div
          class="mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-full md:mx-0"
          style="background:radial-gradient(circle at 38% 32%, #8FCB3A, #3D751B);"
        >
          <i class="fa-solid fa-arrow-trend-up text-4xl text-white" aria-hidden="true"></i>
        </div>

        <div class="min-w-0">
          <span class="block font-extrabold uppercase tracking-wide" style="font-size:clamp(0.95rem,1.5vw,1.3rem);">Economia Possível</span>
          <strong
            class="block whitespace-nowrap tabular-nums"
            style="font-family:'Montserrat',sans-serif; color:#E2C45C; font-size:clamp(1.7rem,3.4vw,2.7rem); line-height:1.05;"
          >
            R$ 13.125,00
          </strong>
        </div>

        <div class="mx-auto hidden h-20 w-px md:block" style="background:rgba(255,255,255,0.45);" aria-hidden="true"></div>
        <div class="h-px w-full bg-white/30 md:hidden" aria-hidden="true"></div>

        <div class="min-w-0 md:text-left">
          <div class="flex items-end justify-center gap-2 md:justify-start">
            <span class="pb-1 font-extrabold uppercase" style="font-size:clamp(0.95rem,1.5vw,1.3rem);">Até</span>
            <strong
              style="font-family:'Montserrat',sans-serif; color:#E2C45C; font-size:clamp(2.6rem,5vw,4rem); line-height:0.9; font-weight:900;"
            >
              70%
            </strong>
          </div>
          <p class="font-extrabold uppercase" style="font-size:clamp(0.95rem,1.5vw,1.3rem);">De Desconto</p>
        </div>
      </div>

      <!-- ── FRASE FINAL ── -->
      <div
        class="mx-auto mt-5 flex w-full max-w-4xl flex-col items-center gap-4 rounded-xl border px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-5"
        style="border-color:#7FB52B; background:rgba(5,32,22,0.75);"
        data-reveal
      >
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2"
          style="border-color:#7FB52B; color:#7FB52B;"
        >
          <i class="fa-solid fa-shield-halved text-2xl" aria-hidden="true"></i>
        </div>
        <p class="font-bold leading-snug text-white" style="font-size:clamp(1.05rem,1.9vw,1.5rem);">
          Não é sorte. É método, informação e estratégia.
          <strong class="font-extrabold" style="color:#8CC63F;">É exatamente isso que você vai aprender no MGR.</strong>
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
