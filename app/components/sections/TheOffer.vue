<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

// ── O que você recebe ──
const benefits = [
  { icon: 'fa-folder-open', title: '15 Projetos Completos', desc: 'Modelos exclusivos e testados para todos os estilos.' },
  { icon: 'fa-ruler-combined', title: 'Medidas Exatas Prontas', desc: 'Tudo com medidas precisas para fabricar sem erros.' },
  { icon: 'fa-clipboard-list', title: 'Lista Completa de Materiais', desc: 'Relação detalhada dos guarda-roupas planejados, chapas e acabamentos.' },
  { icon: 'fa-gears', title: 'Ferragens Detalhadas', desc: 'Todos os itens e quantidades especificadas.' },
  { icon: 'fa-table-cells', title: 'Planilhas para Corte e Filetagem', desc: 'Otimização de chapas, cortes e aproveitamento inteligente.' },
  { icon: 'fa-screwdriver-wrench', title: 'Passo a Passo de Montagem', desc: 'Instruções claras com imagens e vídeos explicativos.' },
  { icon: 'fa-industry', title: 'Contato com Fornecedores', desc: 'Fornecedores confiáveis com os melhores preços e condições.' },
]

// ── Selos de confiança ──
const trust = [
  { icon: 'fa-shield-halved', title: 'Compra Segura', desc: 'Ambiente 100% protegido' },
  { icon: 'fa-award', title: '7 Dias de Garantia', desc: 'Risco zero para você' },
  { icon: 'fa-lock', title: 'Acesso Imediato', desc: 'Comece agora mesmo' },
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
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
  )
  els.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section
    id="oferta"
    ref="root"
    aria-labelledby="oferta-title"
    class="relative w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10"
    style="background: linear-gradient(180deg, #FAF6EE 0%, #F4EFE6 55%, #EFE8DB 100%);"
  >
    <div class="relative mx-auto flex w-full max-w-6xl flex-col">
      <!-- ── CABEÇALHO ── -->
      <header class="flex flex-col items-center text-center">
        <!-- logo (sem reveal: opacity<1 isolaria o mix-blend) -->
        <img
          src="/logo%20verde.png"
          alt="MGR — Manual do Guarda Roupa"
          width="1448"
          height="1086"
          class="mb-4 h-auto"
          style="width:clamp(170px,32vw,220px); mix-blend-mode:multiply;"
        />

        <span
          data-reveal
          class="mb-3 inline-block rounded-lg px-6 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-white sm:text-sm"
          style="background:#0B1B14;"
        >
          Apresentando o
        </span>

        <h1
          id="oferta-title"
          data-reveal
          class="font-extrabold leading-[0.95] tracking-tight text-[#0B1B14]"
          style="font-family:'Montserrat',sans-serif; font-size:clamp(2.1rem,6vw,4.4rem); letter-spacing:-1.5px;"
        >
          MGR — Manual do<br />Guarda-Roupa
        </h1>

        <p
          data-reveal
          class="mx-auto mt-4 max-w-2xl font-medium leading-snug text-[#2C3A33]"
          style="font-size:clamp(1rem,1.9vw,1.4rem);"
        >
          Um sistema completo, criado por quem vive marcenaria há
          <strong class="font-extrabold text-[#0B1B14]">39 anos</strong>,
          que entrega tudo pronto para você
          <strong class="font-extrabold" style="color:#FF5700;">economizar ou lucrar.</strong>
        </p>
      </header>

      <!-- ── IMAGEM DO PRODUTO (bordas esfumadas no fundo) ── -->
      <div class="mt-8 flex justify-center" data-reveal>
        <img
          src="/secao4.png"
          alt="Kit completo MGR — ebook, planilhas, projetos e vídeos do Manual do Guarda-Roupa"
          width="1672"
          height="941"
          class="product-fade w-full max-w-4xl"
        />
      </div>

      <!-- ── VOCÊ RECEBE TUDO PRONTO ── -->
      <section
        class="relative mt-12 rounded-3xl border-2 px-5 pb-7 pt-12 sm:px-7 sm:pt-14"
        style="background:#FBF7EE; border-color:#E1D4BC;"
        data-reveal
      >
        <span
          class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg px-5 py-2.5 text-center font-extrabold uppercase tracking-wide text-white sm:px-8"
          style="background:#0B1B14; font-family:'Montserrat',sans-serif; font-size:clamp(0.95rem,2vw,1.5rem);"
        >
          Você recebe tudo pronto:
        </span>

        <div class="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(b, i) in benefits"
            :key="b.title"
            class="flex items-start gap-3.5 lg:border-r lg:pr-4 lg:[&:nth-child(4n)]:border-r-0 lg:last:border-r-0"
            style="border-color:#E0D3BD;"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border"
              style="background:#E7EDD9; border-color:#C9D5B8; color:#0B1B14;"
            >
              <i :class="`fa-solid ${b.icon}`" class="text-xl" aria-hidden="true"></i>
            </div>
            <div class="min-w-0">
              <h3
                class="mb-1 font-extrabold uppercase leading-tight text-[#111]"
                style="font-family:'Montserrat',sans-serif; font-size:clamp(0.82rem,1.1vw,0.95rem);"
              >
                {{ b.title }}
              </h3>
              <p class="text-[0.82rem] leading-snug text-[#4A4A4A]">{{ b.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── BLOCO MÉTODO ── -->
      <div
        class="mt-5 grid grid-cols-1 items-center gap-5 rounded-2xl px-6 py-6 text-center text-white md:grid-cols-[auto_1fr_1px_1fr] md:gap-7 md:text-left"
        style="background:linear-gradient(135deg,#102619,#0B1B14);"
        data-reveal
      >
        <div
          class="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full md:mx-0"
          style="background:#D4AF37; color:#0B1B14;"
        >
          <i class="fa-solid fa-bullseye text-3xl" aria-hidden="true"></i>
        </div>
        <p class="font-bold leading-tight" style="font-size:clamp(1.05rem,1.9vw,1.5rem);">
          Você não precisa projetar.<br />
          Não precisa adivinhar.<br />
          <strong class="font-extrabold" style="color:#FF5700;">Não precisa depender de loja.</strong>
        </p>
        <div class="mx-auto hidden h-20 w-px md:block" style="background:rgba(212,175,55,0.55);" aria-hidden="true"></div>
        <div class="h-px w-full bg-white/15 md:hidden" aria-hidden="true"></div>
        <p class="font-bold leading-tight" style="font-size:clamp(1.05rem,1.9vw,1.5rem);">
          O método que profissionais usam para lucrar, agora disponível
          <strong class="font-extrabold" style="color:#8CC63F;">para você.</strong>
        </p>
      </div>

      <!-- ── CTA ── -->
      <a
        href="#checkout"
        data-reveal
        class="mt-5 flex items-center justify-center gap-3 rounded-2xl px-5 py-4 text-center text-white transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0.5 sm:gap-4"
        style="background:linear-gradient(180deg,#FF6B00,#FF3D00); box-shadow:0 6px 0 #C23A00; touch-action:manipulation;"
        onmouseover="this.style.boxShadow='0 4px 0 #C23A00'"
        onmouseout="this.style.boxShadow='0 6px 0 #C23A00'"
      >
        <i class="fa-solid fa-chevron-right shrink-0 text-2xl sm:text-3xl" aria-hidden="true"></i>
        <strong class="font-extrabold leading-tight" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.1rem,3vw,2.1rem);">
          Quero acessar o método completo
        </strong>
      </a>
      <p
        data-reveal
        class="mt-3 text-center font-bold uppercase tracking-wide text-[#3D4A42]"
        style="font-size:clamp(0.74rem,1.4vw,0.95rem);"
      >
        Economize ou lucre com guarda-roupas planejados
      </p>

      <!-- ── SELOS ── -->
      <div
        class="mt-6 grid grid-cols-1 gap-y-4 border-t pt-5 sm:grid-cols-3"
        style="border-color:#CFC3AD;"
        data-reveal
      >
        <div
          v-for="(t, i) in trust"
          :key="t.title"
          class="flex items-center justify-center gap-3 sm:[&:not(:last-child)]:border-r"
          style="border-color:#CFC3AD;"
        >
          <i :class="`fa-solid ${t.icon}`" class="text-2xl text-[#0B1B14]" aria-hidden="true"></i>
          <div class="text-left">
            <strong class="block text-[0.82rem] font-extrabold uppercase text-[#0B1B14]">{{ t.title }}</strong>
            <small class="block text-[0.74rem] text-[#555]">{{ t.desc }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* esfuma as bordas da imagem do produto para dissolver no fundo (sem retângulo) */
.product-fade {
  -webkit-mask-image:
    linear-gradient(to right, transparent 0%, #000 4%, #000 96%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 6%, #000 95%, transparent 100%);
  mask-image:
    linear-gradient(to right, transparent 0%, #000 4%, #000 96%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 6%, #000 95%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}

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
