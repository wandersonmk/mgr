<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const quick = [
  { icon: 'fa-infinity', title: 'Pague 1 vez e tenha acesso para sempre', desc: 'Sem mensalidades ou taxas extras.' },
  { icon: 'fa-bolt', title: 'Acesso imediato', desc: 'Após a confirmação do pagamento, liberação imediata na plataforma.' },
  { icon: 'fa-laptop', title: 'Acesse de onde quiser', desc: 'No computador, tablet ou celular, quando quiser.' },
  { icon: 'fa-medal', title: 'Risco zero', desc: '7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.' },
]

const bonus = [
  { icon: 'fa-industry', n: 'Bônus 1', title: 'Lista atualizada com as melhores fábricas/madeireiras para você negociar direto', desc: 'Contatos e informações para comprar com melhor preço e mais qualidade.', value: 'R$ 97,00' },
  { icon: 'fa-table-cells', n: 'Bônus 2', title: 'Planilhas com mais de 80 pg de todos os 15 guarda-roupas planejados', desc: 'Todas as medidas, cortes, listas de materiais e ferragens de cada projeto, prontas para usar.', value: 'R$ 1.500,00' },
  { icon: 'fa-circle-play', n: 'Bônus 3', title: 'Aulas bônus exclusivas', desc: 'Dicas práticas para facilitar a montagem ou aumentar sua renda.', value: 'R$ 537,00' },
]

const security = [
  { icon: 'fa-lock', title: 'Compra 100% Segura', desc: 'Ambiente 100% protegido' },
  { icon: 'fa-user-shield', title: 'Privacidade Garantida', desc: 'Seus dados nunca serão compartilhados' },
  { icon: 'fa-award', title: '7 Dias de Garantia', desc: 'Satisfação garantida ou seu dinheiro de volta' },
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
    id="checkout"
    ref="root"
    aria-labelledby="checkout-title"
    class="relative w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10"
    style="background:
      radial-gradient(80% 50% at 50% 0%, rgba(127,181,43,0.16) 0%, rgba(127,181,43,0) 55%),
      linear-gradient(180deg, #052016 0%, #07291D 45%, #051D15 100%);
      color:#ffffff;"
  >
    <div class="relative mx-auto flex w-full max-w-6xl flex-col">
      <!-- ── CABEÇALHO ── -->
      <header class="flex flex-col items-center text-center">
        <img
          src="/logo.png"
          alt="MGR — Manual do Guarda Roupa"
          width="1563"
          height="1006"
          class="mb-4 h-auto"
          style="width:clamp(180px,38vw,230px); mix-blend-mode:lighten;"
        />

        <span
          data-reveal
          class="mb-4 inline-flex items-center gap-2 rounded-lg px-5 py-2 text-[0.78rem] font-extrabold uppercase tracking-wide sm:text-base"
          style="background:#8BBD2D; color:#06210F;"
        >
          <i class="fa-solid fa-clock" aria-hidden="true"></i>
          Oferta especial por tempo limitado
        </span>

        <h1
          id="checkout-title"
          data-reveal
          class="font-extrabold uppercase leading-[1.02] tracking-tight"
          style="font-family:'Montserrat',sans-serif; font-size:clamp(1.8rem,4.6vw,3.6rem); letter-spacing:-1px;"
        >
          O método que já transformou
          <span class="mt-1 block" style="color:#8CC63F; font-size:1.12em;">milhares de pessoas</span>
        </h1>

        <p data-reveal class="mx-auto mt-4 max-w-2xl font-medium leading-snug text-white/90" style="font-size:clamp(1rem,1.9vw,1.4rem);">
          Economize até <strong class="font-extrabold" style="color:#FF5700;">70%</strong>
          ou conquiste uma nova fonte de renda com guarda-roupas planejados.
        </p>
      </header>

      <!-- ── HERO: PRODUTO + PREÇO ── -->
      <div class="mt-9 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]" data-reveal>
        <div class="flex justify-center">
          <img
            src="/secao5.png"
            alt="Produto MGR — Manual do Guarda-Roupa completo"
            width="1339"
            height="1175"
            class="product-fade w-full max-w-lg"
          />
        </div>

        <!-- Card de preço -->
        <div
          class="relative rounded-2xl px-6 pb-6 pt-9 text-[#06210F] sm:px-7"
          style="background:#F7F2E8; box-shadow:0 16px 40px -16px rgba(0,0,0,0.55);"
        >
          <!-- selo de desconto -->
          <div
            class="absolute right-5 top-0 flex h-[104px] w-[104px] -translate-y-1/2 flex-col items-center justify-center rounded-full border-[5px] bg-white text-center leading-none sm:right-8 sm:h-[120px] sm:w-[120px]"
            style="border-color:#D4AF37; box-shadow:0 8px 20px rgba(0,0,0,0.25);"
          >
            <span class="text-[0.7rem] font-extrabold sm:text-xs">ATÉ</span>
            <strong class="font-black" style="font-family:'Montserrat',sans-serif; color:#FF5700; font-size:clamp(2rem,5vw,2.6rem);">70%</strong>
            <small class="text-[0.6rem] font-extrabold sm:text-[0.65rem]">DE DESCONTO</small>
          </div>

          <p class="text-[0.95rem] font-extrabold uppercase tracking-wide">Investimento único</p>
          <p class="mt-2 text-xl font-extrabold text-[#3a3a3a] line-through decoration-[#E73B1F] decoration-2 sm:text-2xl">DE R$ 1.900,00</p>
          <p class="mt-2 text-[0.95rem] font-extrabold uppercase">Por apenas</p>
          <div class="tabular-nums font-black leading-none text-[#06210F]" style="font-family:'Montserrat',sans-serif; font-size:clamp(3rem,7vw,4.6rem);">R$ 397,00</div>

          <div class="mt-4 rounded-xl px-4 py-3.5 text-center text-white" style="background:#0B1B14;">
            <span class="block text-base font-bold uppercase sm:text-lg">ou 12x de</span>
            <strong class="block tabular-nums font-black leading-none" style="font-family:'Montserrat',sans-serif; font-size:clamp(2rem,4.5vw,3rem);">R$ 41,06</strong>
            <small class="text-sm font-bold uppercase">no cartão</small>
          </div>

          <div class="mt-4 flex items-center gap-3">
            <i class="fa-solid fa-lock text-2xl text-[#06210F]" aria-hidden="true"></i>
            <div>
              <strong class="block text-[0.9rem] font-extrabold uppercase">Compra 100% Segura</strong>
              <small class="text-[0.8rem] text-[#444]">Seus dados protegidos.</small>
            </div>
          </div>
        </div>
      </div>

      <!-- ── BENEFÍCIOS RÁPIDOS ── -->
      <div
        class="mt-8 grid grid-cols-1 gap-x-0 gap-y-5 rounded-2xl px-5 py-6 text-[#06210F] sm:grid-cols-2 lg:grid-cols-4"
        style="background:#F7F2E8;"
        data-reveal
      >
        <div
          v-for="(q, i) in quick"
          :key="q.title"
          class="flex items-start gap-3 px-2 sm:px-4 lg:[&:not(:last-child)]:border-r"
          style="border-color:#D8CDB9;"
        >
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full" style="background:#E7EFD9; color:#417B18;">
            <i :class="`fa-solid ${q.icon}`" class="text-2xl" aria-hidden="true"></i>
          </div>
          <div class="min-w-0">
            <h3 class="mb-1 font-extrabold uppercase leading-tight" style="font-family:'Montserrat',sans-serif; font-size:clamp(0.82rem,1vw,0.92rem);">{{ q.title }}</h3>
            <p class="text-[0.8rem] leading-snug text-[#3a3a3a]">{{ q.desc }}</p>
          </div>
        </div>
      </div>

      <!-- ── BÔNUS ── -->
      <section
        class="relative mt-12 rounded-2xl border px-5 pb-6 pt-10 sm:px-7"
        style="border-color:rgba(140,198,63,0.4); background:rgba(5,32,22,0.7);"
        data-reveal
      >
        <span
          class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg px-6 py-2.5 font-extrabold uppercase tracking-wide text-white"
          style="background:#4A711A; font-family:'Montserrat',sans-serif; font-size:clamp(1rem,2vw,1.4rem);"
        >
          Bônus exclusivos
        </span>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            v-for="(b, i) in bonus"
            :key="b.n"
            class="px-1 md:px-4 md:[&:not(:last-child)]:border-r"
            style="border-color:rgba(140,198,63,0.35);"
          >
            <i :class="`fa-solid ${b.icon}`" class="text-4xl" style="color:#6CA51F;" aria-hidden="true"></i>
            <h3 class="mt-3 font-extrabold uppercase" style="font-family:'Montserrat',sans-serif; color:#8CC63F; font-size:1.1rem;">{{ b.n }}</h3>
            <h4 class="mt-1 font-extrabold uppercase leading-tight text-white" style="font-family:'Montserrat',sans-serif; font-size:0.98rem;">{{ b.title }}</h4>
            <p class="mt-2 text-[0.85rem] leading-snug text-white/85">{{ b.desc }}</p>
            <strong class="mt-2 block font-extrabold" style="color:#8CC63F; font-size:0.9rem;">(Valor: {{ b.value }})</strong>
          </div>
        </div>

        <div class="mt-6 border-t pt-4 text-center font-extrabold" style="border-color:rgba(140,198,63,0.35); color:#8CC63F; font-size:clamp(1.05rem,2vw,1.3rem);">
          Valor total dos bônus:
          <span style="color:#FF5700;">R$ 2.134,00</span>
        </div>
      </section>

      <!-- ── GARANTIA ── -->
      <div class="mt-10 grid grid-cols-1 items-center gap-7 text-center md:grid-cols-[auto_1fr_auto] md:text-left" data-reveal>
        <img
          src="/selo-7dias.png"
          alt="Selo de garantia incondicional de 7 dias"
          width="1493"
          height="1053"
          class="mx-auto w-[150px] shrink-0 sm:w-[172px]"
          style="filter:drop-shadow(0 8px 16px rgba(0,0,0,0.35));"
        />

        <div>
          <h2 class="font-extrabold uppercase leading-none" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.6rem,3vw,2.6rem);">Experimente sem risco!</h2>
          <p class="mt-2 leading-snug text-white/90" style="font-size:clamp(1rem,1.9vw,1.35rem);">
            Você tem 7 dias para testar o método. Se não ficar satisfeito por qualquer motivo,
            <strong class="font-extrabold" style="color:#FF5700;">devolvemos 100% do seu dinheiro.</strong>
          </p>
          <span class="mt-3 inline-block rounded-full px-6 py-2 text-sm font-extrabold uppercase text-white" style="background:#4A711A;">Zero risco. 100% de garantia.</span>
        </div>

        <img
          src="/selo-garantia.png"
          alt="Selo Risco Zero — satisfação 100% garantida"
          width="1254"
          height="1254"
          class="mx-auto w-[130px] shrink-0 sm:w-[142px]"
          style="filter:drop-shadow(0 8px 16px rgba(0,0,0,0.35));"
        />
      </div>

      <!-- ── CTA ── -->
      <a
        href="#oferta"
        data-reveal
        class="mt-9 flex items-center justify-center gap-3 rounded-2xl px-5 py-4 text-center text-white transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0.5 sm:gap-4"
        style="background:linear-gradient(180deg,#FF6B00,#FF3D00); box-shadow:0 6px 0 #C23A00; touch-action:manipulation;"
        onmouseover="this.style.boxShadow='0 4px 0 #C23A00'"
        onmouseout="this.style.boxShadow='0 6px 0 #C23A00'"
      >
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12" style="color:#FF5700;">
          <i class="fa-solid fa-arrow-right text-xl sm:text-2xl" aria-hidden="true"></i>
        </span>
        <strong class="font-extrabold uppercase leading-tight" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.1rem,2.8vw,2rem);">
          Quero acessar agora o método MGR
        </strong>
      </a>
      <p data-reveal class="mt-3 text-center font-bold uppercase tracking-wide text-white/80" style="font-size:clamp(0.74rem,1.4vw,0.95rem);">
        Economize até 70% ou lucre muito mais com guarda-roupas planejados
      </p>

      <!-- ── RODAPÉ DE SEGURANÇA ── -->
      <div class="mt-8 grid grid-cols-1 gap-y-4 border-t pt-5 sm:grid-cols-3" style="border-color:rgba(212,175,55,0.3);" data-reveal>
        <div
          v-for="(s, i) in security"
          :key="s.title"
          class="flex items-center justify-center gap-3 sm:[&:not(:last-child)]:border-r"
          style="border-color:rgba(212,175,55,0.3);"
        >
          <i :class="`fa-solid ${s.icon}`" class="text-2xl" style="color:#D4AF37;" aria-hidden="true"></i>
          <div class="text-left">
            <strong class="block text-[0.8rem] font-extrabold uppercase">{{ s.title }}</strong>
            <small class="block text-[0.72rem] text-white/70">{{ s.desc }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* esfuma as bordas da imagem do produto para dissolver no fundo verde */
.product-fade {
  -webkit-mask-image:
    linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 7%, #000 93%, transparent 100%);
  mask-image:
    linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 7%, #000 93%, transparent 100%);
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
