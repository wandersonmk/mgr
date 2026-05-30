<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const cards = [
  { icon: 'fa-lock', title: 'Compra Segura', desc: 'Pagamento protegido e acesso imediato ao método completo.' },
  { icon: 'fa-shield-halved', title: 'Garantia de 7 dias', desc: 'Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro.' },
  { icon: 'fa-file-shield', title: 'Privacidade Protegida', desc: 'Seus dados pessoais estão 100% seguros e nunca serão compartilhados.' },
  { icon: 'fa-award', title: 'Método Validado', desc: 'Método testado e aprovado por milhares de pessoas que já alcançaram resultados.' },
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
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )
  els.forEach((el) => observer?.observe(el))
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section
    id="seguranca"
    ref="root"
    aria-labelledby="seguranca-title"
    class="relative w-full overflow-hidden px-4 py-11 sm:px-6 sm:py-12 md:px-8 md:py-14"
    style="background: linear-gradient(180deg, #FAF6EE 0%, #F5F0E8 55%, #EFE7D9 100%); color:#06291D;"
  >
    <div class="relative mx-auto flex w-full max-w-3xl flex-col">
      <!-- ── CABEÇALHO ── -->
      <header class="flex flex-col items-center text-center">
        <img
          src="/logo%20verde.png"
          alt="MGR — Manual do Guarda Roupa"
          width="1448"
          height="1086"
          class="mb-4 h-auto"
          style="width:clamp(170px,32vw,210px); mix-blend-mode:multiply;"
        />
        <h1
          id="seguranca-title"
          data-reveal
          class="font-extrabold leading-[1.06] tracking-tight"
          style="font-family:'Montserrat',sans-serif; color:#06291D; font-size:clamp(1.8rem,5vw,3.2rem); letter-spacing:-1px;"
        >
          Sua compra é 100% segura, protegida e com garantia.
        </h1>
        <p data-reveal class="mt-2.5 leading-snug text-[#111]" style="font-size:clamp(1rem,2vw,1.35rem);">
          Acesso imediato ao método completo +
          <strong class="font-extrabold" style="color:#06291D;">garantia de 7 dias.</strong>
        </p>
      </header>

      <!-- ── CARDS DE SEGURANÇA ── -->
      <div class="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(c, i) in cards"
          :key="i"
          data-reveal
          :style="`--d:${i * 80}ms`"
          class="flex flex-col items-center rounded-xl border px-4 py-5 text-center"
          style="background:#FFFDF8; border-color:rgba(217,205,180,0.6); box-shadow:0 7px 16px -8px rgba(48,36,20,0.18);"
        >
          <div class="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full" style="background:#F1EADF;">
            <i :class="`fa-solid ${c.icon}`" class="text-3xl" style="color:#FF5A00;" aria-hidden="true"></i>
          </div>
          <h3 class="mb-2 font-extrabold uppercase leading-tight" style="font-family:'Montserrat',sans-serif; color:#06291D; font-size:clamp(0.92rem,1.2vw,1.02rem);">{{ c.title }}</h3>
          <p class="leading-snug text-[#1A1A1A]" style="font-size:clamp(0.82rem,1.1vw,0.92rem);">{{ c.desc }}</p>
        </article>
      </div>

      <!-- ── BLOCO DE GARANTIA ── -->
      <div
        class="mt-5 grid grid-cols-1 items-center gap-5 rounded-2xl border px-5 py-5 text-center md:grid-cols-[auto_1px_1fr] md:gap-7 md:text-left"
        style="border-color:#D9CDB4; background:rgba(255,255,255,0.3);"
        data-reveal
      >
        <img
          src="/selo-7dias.png"
          alt="Garantia incondicional de 7 dias"
          width="1493"
          height="1053"
          class="mx-auto w-[180px] shrink-0 sm:w-[210px]"
          style="filter:drop-shadow(0 10px 16px rgba(11,27,20,0.2));"
        />
        <div class="mx-auto hidden h-[130px] w-px md:block" style="background:#CFC3AA;" aria-hidden="true"></div>
        <div class="h-px w-full bg-[#CFC3AA] md:hidden" aria-hidden="true"></div>
        <div class="leading-relaxed text-[#111]" style="font-size:clamp(1.05rem,1.8vw,1.35rem);">
          <p>Você tem 7 dias para testar o método.</p>
          <p class="mt-1">Se por qualquer motivo não ficar satisfeito,</p>
          <p class="mt-1 font-extrabold" style="color:#06291D;">é só solicitar o reembolso e devolvemos 100% do seu dinheiro. Sem perguntas.</p>
        </div>
      </div>

      <!-- ── MÉTODO VALIDADO ── -->
      <div class="mt-6 flex flex-col items-center gap-4 border-t pt-6 text-center md:flex-row md:gap-6 md:text-left" style="border-color:#53705B;" data-reveal>
        <div class="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full text-white" style="background:radial-gradient(circle at center, #1F6A36 0%, #06291D 85%);">
          <i class="fa-solid fa-chart-line text-3xl" aria-hidden="true"></i>
        </div>
        <h2 class="font-extrabold leading-[1.12] tracking-tight text-[#111]" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.3rem,2.6vw,1.95rem);">
          Método validado para pessoas comuns
          <strong style="color:#2F6B26;">economizarem até 70%</strong>
          <strong style="color:#FF5A00;"> ou lucrarem</strong>
          com guarda-roupas planejados.
        </h2>
      </div>

      <!-- ── CTA ── -->
      <a
        href="https://pay.hotmart.com/F95310077Y"
        target="_blank"
        rel="noopener"
        data-reveal
        class="mt-6 flex items-center justify-center gap-4 rounded-xl border-[3px] px-6 py-4 text-center text-white transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0.5"
        style="background:linear-gradient(180deg,#FF7200,#FF5A00); border-color:#FF8B1A; box-shadow:0 5px 0 #D64000; touch-action:manipulation;"
        onmouseover="this.style.boxShadow='0 3px 0 #D64000'"
        onmouseout="this.style.boxShadow='0 5px 0 #D64000'"
      >
        <strong class="font-extrabold uppercase leading-none" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.4rem,4vw,2.6rem); letter-spacing:-0.5px;">Quero começar agora!</strong>
        <i class="fa-solid fa-chevron-right text-2xl sm:text-3xl" aria-hidden="true"></i>
      </a>

      <!-- ── ACESSO ── -->
      <div class="mt-3 flex items-center justify-center gap-2 text-[#111]" data-reveal>
        <i class="fa-solid fa-shield-halved text-base" style="color:#06291D;" aria-hidden="true"></i>
        <span style="font-size:clamp(0.85rem,1.4vw,1.05rem);">Acesso imediato + garantia de 7 dias</span>
      </div>

      <!-- ── LOGO FINAL ── -->
      <footer class="mt-7 flex justify-center border-t pt-6" style="border-color:#53705B;">
        <img
          src="/logo%20verde.png"
          alt="MGR — Manual do Guarda Roupa"
          width="1448"
          height="1086"
          class="h-auto"
          style="width:clamp(130px,28vw,160px); mix-blend-mode:multiply;"
        />
      </footer>
    </div>
  </section>
</template>

<style scoped>
[data-reveal] {
  opacity: 0;
  transform: translateY(22px);
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
