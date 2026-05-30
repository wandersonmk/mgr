<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

// Modal do vídeo de apresentação (VSL)
// TODO: trocar pelo vídeo original — este é apenas de teste
const showVideo = ref(false)
const videoSrc = 'https://www.youtube.com/embed/bxrOLfyYQyQ?autoplay=1&rel=0'

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') showVideo.value = false
}
watch(showVideo, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<template>
  <section
    aria-labelledby="hero-title"
    class="w-full flex flex-col items-center px-4 pt-3 pb-10 sm:px-6 md:px-8 md:pt-4 lg:px-12"
    style="background: linear-gradient(to bottom, #0F3D24 0%, #00331A 50%, #002010 100%);"
  >
    <main class="flex w-full max-w-4xl flex-col items-center gap-3 md:gap-3.5">

      <!-- ── LOGO (PNG oficial) ── -->
      <header class="flex flex-col items-center">
        <img
          src="/logo.png"
          alt="MGR — Manual do Guarda Roupa"
          class="w-auto"
          style="height: clamp(76px, 15.5vw, 134px); mix-blend-mode: lighten;"
          width="390"
          height="260"
        />
      </header>

      <!-- ── HEADLINE ── -->
      <section class="w-full max-w-3xl px-1 text-center sm:px-2">
        <h1
          id="hero-title"
          class="mb-2 font-extrabold leading-[1.12] tracking-tight"
          style="font-family: 'Montserrat', sans-serif; color:#F2F2F2; font-size: clamp(1.35rem, 2.9vw, 2.3rem);"
        >
          Pague até 70%
          <span style="color:#FF6600"> MENOS</span><br class="hidden md:block">
          no seu guarda-roupa –<br class="hidden md:block">
          ou lucre com isso.
        </h1>
        <p class="mx-auto max-w-2xl font-medium leading-relaxed" style="color:#D9D9D9; font-size: clamp(1rem, 1.6vw, 1.125rem);">
          Um método simples, direto e validado por
          <span class="font-bold" style="color:#F4B321">39 anos</span>
          de experiência na marcenaria.
        </p>
      </section>

      <!-- ── VSL ── -->
      <section
        class="relative w-full max-w-[540px] overflow-hidden rounded-2xl border bg-black"
        style="border-color: rgba(49,92,45,0.55); box-shadow: 0 20px 50px rgba(0,0,0,0.5);"
      >
        <!-- Thumbnail (imagem do guarda-roupa) -->
        <div class="relative aspect-video w-full">
          <img
            src="/thumbnail.png"
            alt="Guarda-roupa planejado de madeira em um closet"
            width="1672"
            height="941"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0" style="background:rgba(0,0,0,0.18);" aria-hidden="true"></div>
        </div>

        <!-- Overlay de texto do player — topo e base, centro livre p/ o play -->
        <div
          class="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-between px-4 pt-3 pb-11 text-center sm:pt-4 sm:pb-12"
          style="background: linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 38%, rgba(0,0,0,0.12) 62%, rgba(0,0,0,0.55) 100%);"
        >
          <div class="flex flex-col items-center">
            <p class="mb-0.5 text-[0.7rem] font-bold tracking-wider text-white sm:text-xs md:text-base" style="text-shadow:0 2px 8px rgba(0,0,0,0.85);">
              DESCUBRA COMO ECONOMIZAR
            </p>
            <p class="font-black text-white" style="font-size: clamp(1.7rem,5.5vw,3.6rem); line-height:1; text-shadow:0 2px 10px rgba(0,0,0,0.9);">
              ATÉ <span style="color:#FF6A00">70%</span>
            </p>
          </div>
          <div class="flex flex-col items-center">
            <p class="mb-0.5 font-bold tracking-wide text-white" style="font-size: clamp(0.72rem,2vw,1.3rem); text-shadow:0 2px 8px rgba(0,0,0,0.85);">
              OU FATURAR MUITO MAIS
            </p>
            <p class="font-bold" style="color:#78A52A; font-size: clamp(0.62rem,1.7vw,1.15rem); text-shadow:0 2px 8px rgba(0,0,0,0.9);">
              COM GUARDA-ROUPAS PLANEJADOS
            </p>
          </div>
        </div>

        <!-- Botão play (pulsando para incentivar o clique) -->
        <span
          class="play-ring pointer-events-none absolute left-1/2 top-1/2 z-10 rounded-full"
          aria-hidden="true"
          style="width:clamp(56px,11vw,80px); height:clamp(56px,11vw,80px); background:rgba(255,100,0,0.5);"
        ></span>
        <button
          type="button"
          aria-label="Reproduzir vídeo de apresentação"
          @click="showVideo = true"
          class="play-pulse absolute left-1/2 top-1/2 z-20 flex items-center justify-center rounded-full"
          style="width:clamp(56px,11vw,80px); height:clamp(56px,11vw,80px); background:rgba(255,100,0,0.95); box-shadow:0 0 28px rgba(255,100,0,0.45); touch-action:manipulation;"
        >
          <i class="fa-solid fa-play ml-0.5 text-white" style="font-size:clamp(20px,4vw,34px);" aria-hidden="true"></i>
        </button>

        <!-- Controles decorativos -->
        <div
          class="absolute inset-x-0 bottom-0 z-20 flex items-center gap-3 px-3 pb-2.5 pt-8 text-white/85 sm:px-4 sm:pb-3 md:gap-4 md:px-6"
          style="background: linear-gradient(to top, rgba(0,0,0,0.90) 0%, transparent 100%);"
          aria-hidden="true"
        >
          <i class="fa-solid fa-play shrink-0 text-sm md:text-base"></i>
          <i class="fa-solid fa-volume-high shrink-0 text-sm md:text-base"></i>
          <span class="shrink-0 text-[0.7rem] font-medium tabular-nums sm:text-xs">0:00 / 2:24</span>
          <div class="group relative flex-1">
            <div class="h-1.5 rounded-full bg-gray-600 transition-all group-hover:h-2">
              <div class="h-full w-0 rounded-full" style="background:#FF6400;" />
            </div>
          </div>
          <i class="fa-solid fa-gear shrink-0 text-sm md:text-base"></i>
          <i class="fa-solid fa-expand shrink-0 text-sm md:text-base"></i>
        </div>
      </section>

      <!-- ── CTA ── -->
      <section class="flex w-full flex-col items-center">
        <a
          href="https://pay.hotmart.com/F95310077Y"
          target="_blank"
          rel="noopener"
          class="flex w-full max-w-[540px] items-center justify-center gap-3 rounded-xl px-5 py-3.5 text-center font-extrabold uppercase leading-tight text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          style="font-family:'Montserrat',sans-serif; font-size:clamp(1rem,1.9vw,1.25rem); background:#FF6400; box-shadow:0 5px 0 #CC4E00, 0 8px 24px rgba(204,78,0,0.35); letter-spacing:0.04em; min-height:54px; touch-action:manipulation;"
          onmouseover="this.style.background='#FF7A1A'; this.style.boxShadow='0 3px 0 #CC4E00, 0 10px 28px rgba(204,78,0,0.45)';"
          onmouseout="this.style.background='#FF6400'; this.style.boxShadow='0 5px 0 #CC4E00, 0 8px 24px rgba(204,78,0,0.35)';"
        >
          QUERO ECONOMIZAR ATÉ 70% AGORA
          <i class="fa-solid fa-chevron-right shrink-0 text-base" aria-hidden="true"></i>
        </a>

        <!-- Selos -->
        <div
          class="mt-6 grid w-full max-w-[540px] grid-cols-3 items-start gap-2 border-b pb-6 sm:gap-4 md:flex md:items-center md:justify-center md:gap-10"
          style="border-color: rgba(49,92,45,0.55);"
        >
          <div class="flex flex-col items-center gap-2 text-center md:flex-row md:gap-3 md:text-left">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border" style="background:#122e21; border-color:rgba(49,92,45,0.6); color:#D4AF37;">
              <i class="fa-solid fa-lock text-lg" aria-hidden="true"></i>
            </div>
            <span class="text-[0.7rem] font-semibold leading-tight tracking-wide text-gray-200 sm:text-sm">ACESSO<br>IMEDIATO</span>
          </div>
          <div class="hidden h-10 w-px md:block" style="background:rgba(49,92,45,0.55);" aria-hidden="true" />
          <div class="flex flex-col items-center gap-2 text-center md:flex-row md:gap-3 md:text-left">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border" style="background:#122e21; border-color:rgba(49,92,45,0.6); color:#D4AF37;">
              <i class="fa-solid fa-shield-halved text-lg" aria-hidden="true"></i>
            </div>
            <span class="text-[0.7rem] font-semibold leading-tight tracking-wide text-gray-200 sm:text-sm">7 DIAS DE<br>GARANTIA</span>
          </div>
          <div class="hidden h-10 w-px md:block" style="background:rgba(49,92,45,0.55);" aria-hidden="true" />
          <div class="flex flex-col items-center gap-2 text-center md:flex-row md:gap-3 md:text-left">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border" style="background:#122e21; border-color:rgba(49,92,45,0.6); color:#7BA438;">
              <i class="fa-solid fa-award text-lg" aria-hidden="true"></i>
            </div>
            <span class="text-[0.7rem] font-semibold leading-tight tracking-wide text-gray-200 sm:text-sm">MÉTODO<br>VALIDADO</span>
          </div>
        </div>

        <!-- Aviso urgência (apenas texto amarelo, sem badge) -->
        <div
          class="mt-5 flex items-center justify-center gap-2.5 px-2 sm:gap-3"
          style="color:#E8B41A;"
        >
          <i class="fa-solid fa-triangle-exclamation shrink-0 text-base sm:text-lg" aria-hidden="true"></i>
          <span class="text-[0.8rem] font-medium leading-snug sm:text-sm md:text-base">Esse valor promocional pode sair do ar a qualquer momento.</span>
        </div>
      </section>

      <!-- ── ESTATÍSTICAS ── -->
      <section
        class="mt-2 w-full rounded-2xl border p-3.5 backdrop-blur-sm sm:p-4 md:p-5"
        style="background:rgba(12,36,25,0.8); border-color:rgba(49,92,45,0.55); box-shadow:0 20px 40px rgba(0,0,0,0.4);"
      >
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-3 md:flex md:items-center md:justify-around md:gap-4">

          <div class="flex items-center justify-center gap-2.5 text-left md:w-1/3 md:gap-3">
            <i class="fa-solid fa-file-lines shrink-0 text-3xl leading-none md:text-4xl" style="color:#7BA438;" aria-hidden="true"></i>
            <div>
              <div class="text-2xl font-black text-white md:text-4xl">+15</div>
              <div class="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400 sm:text-xs">PROJETOS<br class="hidden sm:block"> PRONTOS</div>
            </div>
          </div>

          <div class="hidden h-16 w-px md:block" style="background:linear-gradient(to bottom,transparent,rgba(49,92,45,0.6),transparent);" aria-hidden="true" />

          <div class="flex items-center justify-center gap-2.5 text-left md:w-1/3 md:gap-3">
            <i class="fa-solid fa-book-open shrink-0 text-3xl leading-none md:text-4xl" style="color:#7BA438;" aria-hidden="true"></i>
            <div>
              <div class="text-2xl font-black text-white md:text-4xl">+80</div>
              <div class="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400 sm:text-xs">PÁGINAS DE<br class="hidden sm:block"> CONTEÚDO</div>
            </div>
          </div>

          <div class="hidden h-16 w-px md:block" style="background:linear-gradient(to bottom,transparent,rgba(49,92,45,0.6),transparent);" aria-hidden="true" />

          <div class="flex items-center justify-center gap-2.5 text-left md:w-1/3 md:gap-3">
            <i class="fa-solid fa-arrow-trend-up shrink-0 text-3xl leading-none md:text-4xl" style="color:#7BA438;" aria-hidden="true"></i>
            <div>
              <div class="text-2xl font-black uppercase tracking-wider text-white md:text-xl">MÉTODO</div>
              <div class="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400 sm:text-xs">TESTADO E<br class="hidden sm:block"> COMPROVADO</div>
            </div>
          </div>

        </div>
      </section>

    </main>
  </section>

  <!-- ── MODAL DO VÍDEO ── -->
  <Teleport to="body">
    <Transition name="vmodal">
      <div
        v-if="showVideo"
        class="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label="Vídeo de apresentação"
        @click.self="showVideo = false"
      >
        <div class="relative w-full max-w-4xl">
          <button
            type="button"
            aria-label="Fechar vídeo"
            class="absolute -top-11 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            @click="showVideo = false"
          >
            <i class="fa-solid fa-xmark text-xl" aria-hidden="true"></i>
          </button>
          <div class="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl ring-1 ring-white/10">
            <iframe
              v-if="showVideo"
              :src="videoSrc"
              title="Vídeo de apresentação MGR"
              class="h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.vmodal-enter-active,
.vmodal-leave-active {
  transition: opacity 0.25s ease;
}
.vmodal-enter-from,
.vmodal-leave-to {
  opacity: 0;
}

/* Play pulsante */
.play-pulse {
  transform: translate(-50%, -50%);
  animation: playBeat 1.8s ease-in-out infinite;
}
@keyframes playBeat {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.08);
  }
}
.play-ring {
  transform: translate(-50%, -50%);
  animation: playPulse 1.8s ease-out infinite;
}
@keyframes playPulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  70%,
  100% {
    transform: translate(-50%, -50%) scale(1.85);
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .play-pulse,
  .play-ring {
    animation: none;
  }
}
</style>
