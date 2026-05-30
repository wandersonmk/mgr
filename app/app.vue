<script setup lang="ts">
import { onMounted } from 'vue'

// A landing page deve sempre abrir na 1ª seção (Hero).
// Desativa a restauração de scroll do navegador (que ao atualizar voltava pro meio da página)
// e garante o topo no carregamento — exceto quando há uma âncora (#oferta, #checkout, etc.).
onMounted(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  if (!window.location.hash) {
    window.scrollTo(0, 0)
  }
})
</script>

<template>
  <div class="min-h-dvh bg-brand-bg-deep">
    <NuxtRouteAnnouncer />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
