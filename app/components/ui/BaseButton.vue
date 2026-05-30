<script setup lang="ts">
/**
 * Botão base da marca MGR.
 * Auto-importado como <UiBaseButton>.
 *
 * variant: cta (laranja, conversão) | primary | secondary | ghost
 * Renderiza <button> por padrão, ou <a>/<NuxtLink> via prop `as`/`to`.
 */
import { computed } from 'vue'

interface Props {
  variant?: 'cta' | 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
  block?: boolean
  as?: 'button' | 'a'
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  withArrow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'cta',
  size: 'lg',
  block: false,
  as: 'button',
  type: 'button',
  disabled: false,
  loading: false,
  withArrow: false,
})

const tag = computed(() => (props.href || props.to ? 'a' : props.as))

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'cta':
      return 'bg-brand-orange text-white shadow-cta hover:bg-brand-orange-deep hover:shadow-cta-hover focus-visible:ring-brand-orange/40'
    case 'primary':
      return 'bg-brand-green text-white hover:bg-brand-green/90 focus-visible:ring-brand-green/40'
    case 'secondary':
      return 'bg-white/5 text-brand-cream ring-1 ring-white/15 hover:bg-white/10 focus-visible:ring-white/30'
    case 'ghost':
    default:
      return 'bg-transparent text-brand-cream hover:bg-white/5 focus-visible:ring-white/30'
  }
})

const sizeClasses = computed(() =>
  props.size === 'lg' ? 'px-6 py-5 text-lg sm:text-xl' : 'px-5 py-3 text-base',
)
</script>

<template>
  <component
    :is="tag"
    :href="href || to"
    :type="tag === 'button' ? type : undefined"
    :disabled="tag === 'button' ? disabled || loading : undefined"
    :aria-busy="loading || undefined"
    class="group inline-flex items-center justify-center gap-3 rounded-xl font-display font-extrabold uppercase tracking-wide transition duration-200 focus:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-60"
    :class="[variantClasses, sizeClasses, block && 'w-full']"
  >
    <svg
      v-if="loading"
      class="h-5 w-5 shrink-0 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
    <svg
      v-else-if="withArrow"
      class="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
    <slot />
  </component>
</template>
