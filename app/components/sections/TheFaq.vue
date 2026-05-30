<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const faqs = [
  {
    icon: 'fa-screwdriver-wrench',
    q: 'Preciso saber marcenaria ou design de móveis?',
    a: '<strong>Não!</strong> O método foi criado para pessoas comuns, sem experiência nenhuma. Tudo é explicado de forma simples e prática.',
  },
  {
    icon: 'fa-screwdriver',
    q: 'Eu vou conseguir fazer a montagem?',
    a: '<strong>Sim!</strong> Através de vídeo aulas gravadas, ou você pode terceirizar. O método te ensina todas as opções.',
  },
  {
    icon: 'fa-user',
    q: 'Esse método funciona para iniciantes?',
    a: '<strong>Sim!</strong> Ele foi feito para iniciantes. Você recebe o passo a passo completo e todos os mecanismos para começar do zero.',
  },
  {
    icon: 'fa-piggy-bank',
    q: 'Posso usar apenas para economizar no meu próprio móvel?',
    a: '<strong>Com certeza!</strong> O método já te permite economizar até 70% no seu próprio guarda-roupa planejado.',
  },
  {
    icon: 'fa-ruler-combined',
    q: 'As medidas dos projetos já vêm prontas?',
    a: '<strong>Sim!</strong> Você recebe 15 projetos completos dos guarda-roupas planejados, cada um com medidas diferentes, lista de materiais e cortes.',
  },
  {
    icon: 'fa-cloud-arrow-down',
    q: 'Como funciona o acesso?',
    a: 'Após a confirmação, você recebe acesso imediato à plataforma e pode <strong>assistir às aulas na hora.</strong>',
  },
]

const summary = [
  { icon: 'fa-list-check', title: '100% Prático', desc: 'Passo a passo direto ao ponto.' },
  { icon: 'fa-bullseye', title: '100% Objetivo', desc: 'Focado em resultados reais para você.' },
  { icon: 'fa-thumbs-up', title: '100% Comprovado', desc: 'Milhares de pessoas já economizando e lucrando.' },
]

const trust = [
  { icon: 'fa-shield-halved', title: 'Compra 100% Segura', desc: 'Seus dados protegidos' },
  { icon: 'fa-award', title: 'Garantia de 7 dias', desc: 'Risco zero para você' },
  { icon: 'fa-circle-check', title: '100% Validado', desc: 'Método testado e aprovado' },
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
    { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
  )
  els.forEach((el) => observer?.observe(el))
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section
    id="faq"
    ref="root"
    aria-labelledby="faq-title"
    class="relative w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10"
    style="background:
      radial-gradient(80% 50% at 50% 0%, rgba(127,181,43,0.16) 0%, rgba(127,181,43,0) 55%),
      linear-gradient(180deg, #07291D 0%, #052016 50%, #03150E 100%);
      color:#ffffff;"
  >
    <div class="relative mx-auto flex w-full max-w-5xl flex-col">
      <!-- ── CABEÇALHO ── -->
      <header class="flex flex-col items-center text-center">
        <img
          src="/logo.png"
          alt="MGR — Manual do Guarda Roupa"
          width="1563"
          height="1006"
          class="mb-5 h-auto"
          style="width:clamp(185px,38vw,230px); mix-blend-mode:lighten;"
        />

        <span
          data-reveal
          class="mb-5 inline-flex items-center gap-3 rounded-xl px-5 py-2.5 font-extrabold uppercase tracking-wide"
          style="background:linear-gradient(180deg,#9BCE37,#75A91F); color:#06210F; font-size:clamp(0.9rem,1.8vw,1.45rem);"
        >
          <span class="flex h-8 w-8 items-center justify-center rounded-full text-sm" style="background:#06291D; color:#9BCE37;">
            <i class="fa-solid fa-question" aria-hidden="true"></i>
          </span>
          Ainda está com dúvida?
        </span>

        <h1
          id="faq-title"
          data-reveal
          class="font-extrabold uppercase leading-[1.0] tracking-tight"
          style="font-family:'Montserrat',sans-serif; font-size:clamp(1.9rem,5vw,3.6rem); letter-spacing:-1px;"
        >
          Veja como é simples
          <span class="block" style="color:#8CC63F; font-size:1.04em;">e descomplique de vez!</span>
        </h1>

        <p data-reveal class="mx-auto mt-4 max-w-2xl leading-snug text-white/90" style="font-size:clamp(1rem,1.9vw,1.4rem);">
          Reunimos as principais dúvidas de quem está começando ou quer
          <strong class="font-extrabold" style="color:#8CC63F;">economizar muito mais</strong>
          com guarda-roupas planejados.
        </p>
      </header>

      <!-- ── LISTA DE DÚVIDAS ── -->
      <div class="mt-9 flex flex-col gap-3">
        <article
          v-for="(f, i) in faqs"
          :key="i"
          data-reveal
          :style="`--d:${i * 70}ms`"
          class="grid grid-cols-1 overflow-hidden rounded-2xl border-4 border-white bg-[#F7F4EF] text-[#141414] md:grid-cols-[150px_1fr] lg:grid-cols-[180px_1fr_1.35fr]"
          style="box-shadow:0 10px 26px -14px rgba(0,0,0,0.5);"
        >
          <!-- ícone -->
          <div class="flex items-center justify-center px-4 py-6" style="background:#052318;">
            <div
              class="flex h-[84px] w-[84px] items-center justify-center rounded-full text-white"
              style="background:radial-gradient(circle at 38% 32%, #82BB2E, #4A7D1A); box-shadow:0 8px 20px -8px rgba(0,0,0,0.5);"
            >
              <i :class="`fa-solid ${f.icon}`" class="text-4xl" aria-hidden="true"></i>
            </div>
          </div>

          <!-- pergunta -->
          <div class="flex items-center px-6 py-4">
            <h3 class="font-bold leading-snug text-[#151515]" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.15rem,1.9vw,1.5rem);">
              {{ f.q }}
            </h3>
          </div>

          <!-- resposta -->
          <div
            class="flex items-start gap-3.5 border-t border-[#D5D0C8] px-6 py-4 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0"
          >
            <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white" style="background:#6DA51E;">
              <i class="fa-solid fa-check text-base" aria-hidden="true"></i>
            </span>
            <p class="leading-snug text-[#2A2A2A]" style="font-size:clamp(0.98rem,1.5vw,1.2rem);" v-html="f.a"></p>
          </div>
        </article>
      </div>

      <!-- ── RESUMO DO MÉTODO ── -->
      <div
        class="mt-5 grid grid-cols-1 items-center gap-6 rounded-2xl border px-6 py-6 md:grid-cols-[auto_1fr]"
        style="border-color:#6DA51E; background:rgba(5,32,22,0.86);"
        data-reveal
      >
        <div class="mx-auto flex h-[96px] w-[96px] items-center justify-center rounded-2xl bg-white md:mx-0">
          <i class="fa-solid fa-shield-halved text-5xl" style="color:#4A7D1A;" aria-hidden="true"></i>
        </div>
        <div>
          <h2 class="text-center font-extrabold uppercase leading-tight text-white" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.3rem,2.6vw,2rem);">
            O método foi criado para
            <span style="color:#8FC63D;">simplificar, não complicar!</span>
          </h2>
          <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div v-for="s in summary" :key="s.title" class="flex items-start gap-3">
              <i :class="`fa-solid ${s.icon}`" class="mt-0.5 text-2xl" style="color:#8FC63D;" aria-hidden="true"></i>
              <div>
                <strong class="block font-extrabold uppercase text-white" style="font-size:0.92rem;">{{ s.title }}</strong>
                <p class="text-[0.82rem] leading-snug text-white/85">{{ s.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── RODAPÉ DE CONFIANÇA ── -->
      <div class="mt-6 grid grid-cols-1 gap-y-4 border-t pt-5 sm:grid-cols-3" style="border-color:rgba(143,198,61,0.45);" data-reveal>
        <div
          v-for="t in trust"
          :key="t.title"
          class="flex items-center justify-center gap-3 sm:[&:not(:last-child)]:border-r"
          style="border-color:rgba(143,198,61,0.45);"
        >
          <i :class="`fa-solid ${t.icon}`" class="text-2xl" style="color:#8FC63D;" aria-hidden="true"></i>
          <div class="text-left">
            <strong class="block text-[0.82rem] font-extrabold uppercase text-white">{{ t.title }}</strong>
            <small class="block text-[0.72rem] text-white/70">{{ t.desc }}</small>
          </div>
        </div>
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
