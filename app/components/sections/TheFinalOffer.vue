<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const receive = [
  { icon: 'fa-box-archive', title: '15 Projetos<br>Completos', desc: 'Guarda-roupas planejados prontos para usar.' },
  { icon: 'fa-clapperboard', title: 'Vídeo Aulas<br>Passo a Passo', desc: 'Aprenda do zero e domine todas as etapas.' },
  { icon: 'fa-clipboard-check', title: 'Lista Completa<br>de Materiais', desc: 'Todas as medidas, cortes, ferragens e acabamentos.' },
]

const bonus = [
  { icon: 'fa-industry', n: 'Bônus 1', title: 'Onde encontrar<br>as fábricas', desc: 'Lista das melhores fábricas com ótimo custo-benefício.' },
  { icon: 'fa-screwdriver', n: 'Bônus 2', title: 'Acessórios<br>usados', desc: 'Quais acessórios usar em cada projeto e onde encontrar.' },
  { icon: 'fa-file-lines', n: 'Bônus 3', title: 'Planilhas com mais<br>de 80 pçs', desc: 'Planilhas completas com todos os 15 guarda-roupas planejados.' },
]

const trust = [
  { icon: 'fa-lock', title: 'Compra 100% Segura', desc: 'Seus dados protegidos' },
  { icon: 'fa-shield-halved', title: 'Método Testado e Aprovado', desc: 'Por milhares de pessoas' },
  { icon: 'fa-award', title: 'Satisfação Garantida', desc: 'Ou seu dinheiro de volta' },
]

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
    id="oferta-final"
    ref="root"
    aria-labelledby="oferta-final-title"
    class="relative w-full overflow-hidden px-4 py-9 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10"
    style="background: linear-gradient(180deg, #FAF6EE 0%, #F4EEE2 55%, #EFE7D9 100%); color:#06231A;"
  >
    <div class="relative mx-auto flex w-full max-w-5xl flex-col">
      <!-- ── CABEÇALHO ── -->
      <header class="flex flex-col items-center text-center">
        <img
          src="/logo%20verde.png"
          alt="MGR — Manual do Guarda Roupa"
          width="1448"
          height="1086"
          class="mb-5 h-auto"
          style="width:clamp(190px,36vw,250px); mix-blend-mode:multiply;"
        />
        <h1
          id="oferta-final-title"
          data-reveal
          class="font-extrabold uppercase leading-[1.0] tracking-tight"
          style="font-family:'Montserrat',sans-serif; color:#0B1B14; font-size:clamp(1.5rem,3.9vw,2.9rem); letter-spacing:-1px;"
        >
          Ou você continua pagando caro…
          <span class="mt-1 block" style="color:#2C641F;">ou começa agora pagando muito menos.</span>
        </h1>
        <p data-reveal class="mx-auto mt-4 max-w-2xl leading-snug text-[#1D1D1D]" style="font-size:clamp(1.05rem,1.9vw,1.45rem);">
          Chegou a hora de
          <strong class="font-extrabold" style="color:#2C641F;">economizar até 70%</strong>
          no seu guarda-roupa planejado e aumentar o seu lucro com segurança.
        </p>
      </header>

      <!-- ── O QUE RECEBE ── -->
      <section
        class="relative mt-9 rounded-2xl border-2 px-5 pb-5 pt-9 sm:px-7"
        style="border-color:#A6B398; background:rgba(255,255,255,0.35);"
        data-reveal
      >
        <span
          class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg px-5 py-2 font-extrabold uppercase tracking-wide text-[#0B1B14] sm:px-8"
          style="background:linear-gradient(180deg,#9BB866,#78984A); font-family:'Montserrat',sans-serif; font-size:clamp(0.85rem,1.7vw,1.3rem);"
        >
          Com o método MGR você recebe:
        </span>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div
            v-for="(r, i) in receive"
            :key="i"
            class="px-2 text-center sm:[&:not(:last-child)]:border-r"
            style="border-color:#C8BCA7;"
          >
            <i :class="`fa-solid ${r.icon}`" class="text-5xl" style="color:#0B1B14;" aria-hidden="true"></i>
            <h3 class="mt-3 font-extrabold uppercase leading-tight text-[#111]" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.1rem,1.9vw,1.4rem);" v-html="r.title"></h3>
            <p class="mt-2 leading-snug text-[#1D1D1D]" style="font-size:clamp(0.9rem,1.4vw,1.05rem);">{{ r.desc }}</p>
          </div>
        </div>
      </section>

      <!-- ── PREÇO + BÔNUS ── -->
      <div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2" data-reveal>
        <!-- PREÇO -->
        <div class="flex flex-col items-center justify-center rounded-2xl border px-6 py-6 text-center" style="border-color:#DDD1BD; background:rgba(255,255,255,0.45);">
          <p class="text-3xl font-extrabold text-[#3a3a3a] line-through decoration-[#E64E00] decoration-[3px] sm:text-4xl" style="font-family:'Montserrat',sans-serif;">DE R$ 1.900,00</p>
          <p class="mt-3 font-extrabold uppercase" style="color:#2C641F; font-size:clamp(1.4rem,3vw,2.2rem);">Por apenas</p>
          <div class="tabular-nums font-black" style="font-family:'Montserrat',sans-serif; color:#2C641F; font-size:clamp(4rem,11vw,6.6rem); line-height:0.88; letter-spacing:-4px;">
            <span style="font-size:0.4em; letter-spacing:0; vertical-align:0.35em;">R$</span>397<span style="font-size:0.28em; letter-spacing:0; vertical-align:0.9em;">,00</span>
          </div>
          <p class="mt-4 font-bold text-[#111]" style="font-size:clamp(1.2rem,2.4vw,1.8rem);">
            ou <strong style="color:#2C641F;">12x</strong> de <strong style="color:#2C641F;">R$ 41,06</strong>
            <span class="block text-base font-medium text-[#555] sm:text-lg">no cartão de crédito</span>
          </p>
        </div>

        <!-- BÔNUS -->
        <div class="rounded-2xl border px-5 py-6 sm:px-6" style="border-color:#DDD1BD; background:rgba(255,255,255,0.45);">
          <h2 class="mb-4 text-center font-extrabold uppercase" style="font-family:'Montserrat',sans-serif; color:#2C641F; font-size:clamp(1.3rem,2.6vw,1.9rem);">
            + 3 Bônus Exclusivos
          </h2>
          <div class="flex flex-col gap-3">
            <div v-for="(b, i) in bonus" :key="i" class="flex items-start gap-3.5 rounded-xl px-4 py-3.5" style="background:rgba(255,255,255,0.65);">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white" style="background:#0B1B14;">
                <i :class="`fa-solid ${b.icon}`" class="text-lg" aria-hidden="true"></i>
              </div>
              <div class="min-w-0">
                <span class="text-[0.68rem] font-extrabold uppercase tracking-[0.08em]" style="color:#2C641F;">{{ b.n }}</span>
                <h3 class="font-extrabold uppercase leading-[1.1] text-[#111]" style="font-family:'Montserrat',sans-serif; font-size:clamp(0.95rem,1.5vw,1.18rem);" v-html="b.title"></h3>
                <p class="mt-0.5 text-[0.82rem] leading-snug text-[#555]">{{ b.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── GARANTIA ── -->
      <div class="mt-4 grid grid-cols-1 items-center gap-4 rounded-2xl border px-5 py-4 text-center md:grid-cols-[auto_1fr_auto] md:gap-6 md:text-left" style="border-color:#DDD1BD; background:rgba(255,255,255,0.4);" data-reveal>
        <img
          src="/selo-7dias.png"
          alt="Selo de garantia incondicional de 7 dias"
          width="1493"
          height="1053"
          class="mx-auto w-[118px] shrink-0 sm:w-[138px]"
          style="filter:drop-shadow(0 8px 14px rgba(11,27,20,0.2));"
        />
        <div class="md:px-1">
          <h3 class="font-extrabold uppercase leading-tight" style="font-family:'Montserrat',sans-serif; color:#2C641F; font-size:clamp(1.05rem,1.9vw,1.5rem);">Garantia Incondicional</h3>
          <p class="mt-1 leading-snug text-[#222]" style="font-size:clamp(0.85rem,1.3vw,1.05rem);">
            Você tem 7 dias para testar o método. Se por qualquer motivo não ficar satisfeito,
            <strong class="font-extrabold">devolvemos 100% do seu dinheiro.</strong>
          </p>
        </div>
        <img
          src="/selo-garantia.png"
          alt="Selo Risco Zero — 7 dias de garantia"
          width="1254"
          height="1254"
          class="mx-auto w-[94px] shrink-0 sm:w-[108px]"
          style="filter:drop-shadow(0 8px 14px rgba(11,27,20,0.2));"
        />
      </div>

      <!-- ── URGÊNCIA ── -->
      <div class="mt-4 grid grid-cols-1 items-center gap-4 rounded-2xl border px-6 py-5 text-center md:grid-cols-[1fr_1px_1fr] md:gap-7 md:text-left" style="border-color:#DDD1BD; background:rgba(255,255,255,0.4);" data-reveal>
        <div class="flex flex-col items-center gap-3 sm:flex-row md:justify-start">
          <i class="fa-solid fa-clock text-4xl" style="color:#2C641F;" aria-hidden="true"></i>
          <strong class="font-extrabold uppercase leading-tight" style="color:#2C641F; font-size:clamp(1.05rem,2vw,1.4rem);">Essa condição pode acabar a qualquer momento!</strong>
        </div>
        <div class="mx-auto hidden h-14 w-px md:block" style="background:#9D927D;" aria-hidden="true"></div>
        <div class="h-px w-full bg-[#9D927D]/50 md:hidden" aria-hidden="true"></div>
        <p class="font-bold leading-snug text-[#111]" style="font-size:clamp(1rem,1.8vw,1.3rem);">
          Não perca tempo e comece agora mesmo a economizar e lucrar mais!
        </p>
      </div>

      <!-- ── CTA ── -->
      <a
        href="#checkout"
        data-reveal
        class="mt-5 flex items-center justify-center gap-4 rounded-2xl px-5 py-4 text-center text-white transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0.5"
        style="background:linear-gradient(180deg,#2E6B1E,#163A12); box-shadow:0 6px 0 #0E2A0C; touch-action:manipulation;"
        onmouseover="this.style.boxShadow='0 4px 0 #0E2A0C'"
        onmouseout="this.style.boxShadow='0 6px 0 #0E2A0C'"
      >
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white sm:h-14 sm:w-14" style="color:#2C641F;">
          <i class="fa-solid fa-cart-shopping text-lg sm:text-2xl" aria-hidden="true"></i>
        </span>
        <strong class="font-extrabold uppercase leading-tight" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.2rem,3.2vw,2.6rem);">Quero começar agora!</strong>
      </a>
      <p data-reveal class="mt-3 text-center font-bold uppercase tracking-wide text-[#3D4A42]" style="font-size:clamp(0.74rem,1.4vw,0.98rem);">
        Acesso <b style="color:#D4AF37;">imediato</b> após a confirmação da compra
      </p>

      <!-- ── RODAPÉ DE CONFIANÇA ── -->
      <div class="mt-5 grid grid-cols-1 gap-y-4 border-t pt-4 sm:grid-cols-3" style="border-color:#C8BCA7;" data-reveal>
        <div v-for="t in trust" :key="t.title" class="flex items-center justify-center gap-3 sm:[&:not(:last-child)]:border-r" style="border-color:#C8BCA7;">
          <i :class="`fa-solid ${t.icon}`" class="text-2xl" style="color:#2C641F;" aria-hidden="true"></i>
          <div class="text-left">
            <strong class="block text-[0.82rem] font-extrabold uppercase text-[#0B1B14]">{{ t.title }}</strong>
            <small class="block text-[0.72rem] text-[#444]">{{ t.desc }}</small>
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
