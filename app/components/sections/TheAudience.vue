<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const cards = [
  {
    icon: 'fa-house',
    title: 'Quer economizar<br>no seu guarda-roupa?',
    html: 'Tenha um guarda-roupa planejado com acabamento profissional gastando até <strong>70% menos.</strong>',
    img: '/sessao6.4.png',
  },
  {
    icon: 'fa-box-open',
    title: 'Quer praticidade<br>e segurança?',
    html: 'Receba projetos, medidas, listas de materiais e cortes prontos para comprar, montar ou terceirizar.',
    img: '/sessao6.5.png',
  },
  {
    icon: 'fa-dollar-sign',
    title: 'Quer gerar<br>renda extra?',
    html: 'Aprenda o método e use para criar projetos para outras pessoas e lucrar com isso.',
    img: '/sessao6.2.png',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Quer fugir de<br>preços abusivos?',
    html: 'Negocie direto com as melhores fábricas e madeireiras e compre com muito mais inteligência.',
    img: '/sessao6.3.png',
  },
]

// ── Reveal on scroll ──
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
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  els.forEach((el) => observer?.observe(el))
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section
    id="publico"
    ref="root"
    aria-labelledby="publico-title"
    class="w-full overflow-hidden"
    style="background:#F4EFE6; color:#06231A;"
  >
    <!-- ── TOPO VERDE COM LOGO ── -->
    <header class="flex justify-center px-5 py-6 md:py-7" style="background:#06291D;">
      <img
        src="/logo.png"
        alt="MGR — Manual do Guarda Roupa"
        width="1563"
        height="1006"
        class="h-auto"
        style="width:clamp(190px,40vw,230px); mix-blend-mode:lighten;"
      />
    </header>

    <div class="mx-auto w-full max-w-6xl px-4 pb-2 pt-8 sm:px-6 md:px-8">
      <!-- ── TÍTULO ── -->
      <div class="mb-9 text-center" data-reveal>
        <span
          class="mb-4 inline-flex items-center gap-2 rounded-full border-2 px-5 py-1.5 font-extrabold uppercase tracking-wide"
          style="border-color:#356F43; color:#356F43; background:#F7F1E8; font-size:clamp(0.8rem,1.5vw,1.25rem);"
        >
          <i class="fa-solid fa-users" aria-hidden="true"></i>
          Pra quem é o método MGR?
        </span>

        <h1
          id="publico-title"
          class="font-extrabold uppercase leading-[0.98] tracking-tight text-black"
          style="font-family:'Montserrat',sans-serif; font-size:clamp(1.7rem,4.6vw,3.4rem); letter-spacing:-1px;"
        >
          Este método foi feito para
          <span class="my-0.5 block" style="color:#0B1B14; font-size:1.2em; letter-spacing:-2px;">Pessoas Comuns</span>
          que querem pagar muito menos —
          <span class="block" style="color:#2F7B2C;">mesmo sem experiência.</span>
        </h1>

        <p class="mx-auto mt-4 max-w-2xl leading-snug text-[#1C1C1C]" style="font-size:clamp(1.05rem,2vw,1.5rem);">
          Você não precisa entender de marcenaria para
          <strong class="font-extrabold" style="color:#0F6B2F;">economizar</strong> ou
          <strong class="font-extrabold" style="color:#0F6B2F;">transformar isso em renda.</strong>
        </p>
      </div>

      <!-- ── CARDS ── -->
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <article
          v-for="(c, i) in cards"
          :key="i"
          data-reveal
          :style="`--d:${(i % 2) * 90}ms`"
          class="flex flex-col overflow-hidden rounded-2xl border"
          style="background:#FBF7EE; border-color:#CDBB9A; box-shadow:0 6px 18px -10px rgba(0,0,0,0.18);"
        >
          <div class="flex items-start gap-4 p-5">
            <div
              class="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-xl text-white sm:h-[74px] sm:w-[74px]"
              style="background:#0B1B14;"
            >
              <i :class="`fa-solid ${c.icon}`" class="text-2xl sm:text-3xl" aria-hidden="true"></i>
            </div>
            <div class="min-w-0">
              <h3
                class="mb-2 font-extrabold uppercase leading-[1.05]"
                style="font-family:'Montserrat',sans-serif; color:#003522; font-size:clamp(1.15rem,1.9vw,1.6rem);"
                v-html="c.title"
              ></h3>
              <p class="leading-snug text-[#1A1A1A]" style="font-size:clamp(0.92rem,1.3vw,1.08rem);" v-html="c.html"></p>
            </div>
          </div>

          <!-- imagem do card (esfumada na base para fundir no card) -->
          <div class="mt-auto border-t" style="border-color:#E0D2BC;">
            <img
              v-if="c.img"
              :src="c.img"
              alt=""
              loading="lazy"
              class="block w-full object-cover"
              style="height:clamp(180px,26vw,230px);"
            />
            <div
              v-else
              class="flex w-full flex-col items-center justify-center gap-2 text-[#7C8A7E]"
              style="height:clamp(180px,26vw,230px); background:linear-gradient(135deg,#EFE9DC,#E5DECF);"
            >
              <i class="fa-solid fa-laptop text-4xl" aria-hidden="true"></i>
              <span class="text-xs font-bold uppercase tracking-wide">Imagem do computador/projeto</span>
            </div>
          </div>
        </article>
      </div>

      <!-- ── BLOCO DOS SONHOS ── -->
      <div class="mt-8 grid grid-cols-1 items-center gap-5 md:grid-cols-[38%_1fr] md:gap-7" data-reveal>
        <div class="text-center md:text-left">
          <h2
            class="font-extrabold uppercase leading-[1.0] tracking-tight text-black"
            style="font-family:'Montserrat',sans-serif; font-size:clamp(1.35rem,2.5vw,2rem); letter-spacing:-0.5px;"
          >
            Seu guarda-roupa
            <span class="block" style="color:#003522;">dos sonhos</span>
            pode ser mais
            <span class="block" style="color:#003522;">acessível</span>
            do que você imagina!
          </h2>
          <p class="mx-auto mt-3 max-w-md leading-snug text-[#1A1A1A] md:mx-0" style="font-size:clamp(0.92rem,1.3vw,1.1rem);">
            O método MGR coloca o poder de
            <strong class="font-extrabold" style="color:#0F6B2F;">economizar</strong> e
            <strong class="font-extrabold" style="color:#0F6B2F;">lucrar</strong> nas suas mãos.
          </p>
        </div>
        <div class="overflow-hidden rounded-2xl">
          <img
            src="/sessao6.1.png"
            alt="Família feliz em frente a um guarda-roupa planejado"
            width="1916"
            height="821"
            loading="lazy"
            class="block w-full object-cover"
          />
        </div>
      </div>

      <!-- ── CHAMADA FINAL ── -->
      <div
        class="mt-8 flex flex-col items-center gap-4 rounded-t-2xl border-2 border-dashed border-b-0 px-6 py-6 text-center sm:flex-row sm:gap-6 sm:text-left"
        style="border-color:#3C7A4D; background:#FBF7EE;"
        data-reveal
      >
        <div class="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full text-white" style="background:#0B1B14;">
          <i class="fa-solid fa-bullseye text-4xl" aria-hidden="true"></i>
        </div>
        <p class="flex-1 font-extrabold uppercase leading-tight text-black" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.2rem,2.6vw,2.1rem);">
          Se você quer pagar menos ou lucrar mais,
          <span class="block" style="color:#2F7B2C;">esse método foi feito para você!</span>
        </p>
        <svg class="hidden shrink-0 sm:block" width="86" height="70" viewBox="0 0 86 70" fill="none" aria-hidden="true">
          <path d="M6 60 C 30 64, 58 56, 70 24" stroke="#FF5700" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M58 26 L72 20 L74 36" stroke="#FF5700" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
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
