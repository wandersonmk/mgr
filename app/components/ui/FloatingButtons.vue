<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

// TODO: substituir pelo número real do WhatsApp (só dígitos, formato internacional: 55 + DDD + número)
const WHATSAPP_NUMBER = '5599999999999'
const WHATSAPP_MESSAGE =
  'Olá! Tenho dúvidas e preciso falar sobre o produto MGR (Manual do Guarda-Roupa).'
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// Botão "voltar ao topo" — só aparece depois da 1ª seção (ao entrar na segunda)
const showTop = ref(false)
function onScroll() {
  showTop.value = window.scrollY > window.innerHeight * 0.7
}
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="fixed bottom-5 right-4 z-[100] flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
    <!-- Voltar ao topo -->
    <Transition name="fade">
      <button
        v-show="showTop"
        type="button"
        aria-label="Voltar ao topo da página"
        class="flex h-12 w-12 items-center justify-center rounded-full border text-white transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
        style="background:#0B1B14; border-color:rgba(212,175,55,0.5); box-shadow:0 8px 22px -8px rgba(0,0,0,0.65);"
        @click="toTop"
      >
        <i class="fa-solid fa-chevron-up text-lg" aria-hidden="true"></i>
      </button>
    </Transition>

    <!-- WhatsApp -->
    <a
      :href="waLink"
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp — tire suas dúvidas sobre o produto"
      class="wa-btn relative flex h-12 w-12 items-center justify-center sm:h-[52px] sm:w-[52px]"
    >
      <span class="wa-ring" aria-hidden="true"></span>
      <img
        src="/whatsApp.png"
        alt="WhatsApp"
        width="512"
        height="512"
        class="relative h-full w-full"
        style="filter:drop-shadow(0 6px 14px rgba(0,0,0,0.4));"
      />
    </a>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.wa-btn {
  animation: waBob 2.8s ease-in-out infinite;
}
.wa-ring {
  position: absolute;
  inset: 7%;
  border-radius: 9999px;
  background: #25d366;
  z-index: 0;
  animation: waPulse 2s ease-out infinite;
}
@keyframes waPulse {
  0% {
    transform: scale(0.85);
    opacity: 0.55;
  }
  70%,
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}
@keyframes waBob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .wa-btn,
  .wa-ring {
    animation: none;
  }
}
</style>
