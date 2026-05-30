<script setup lang="ts">
/**
 * Input base da marca MGR.
 * Auto-importado como <UiBaseInput>.
 *
 * - Label sempre visível (não usar placeholder como label)
 * - Erro exibido abaixo do campo (aria-describedby + role="alert")
 * - Altura confortável para toque (>= 44px)
 */
import { computed, useId } from 'vue'

interface Props {
  modelValue?: string | number
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  helper?: string
  autocomplete?: string
  inputmode?: 'text' | 'numeric' | 'tel' | 'email' | 'decimal' | 'search'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  required: false,
  disabled: false,
})

defineEmits<{ 'update:modelValue': [value: string] }>()

const uid = useId()
const inputId = computed(() => `input-${uid}`)
const errorId = computed(() => `error-${uid}`)
const helperId = computed(() => `helper-${uid}`)

const describedBy = computed(() => {
  const ids: string[] = []
  if (props.error) ids.push(errorId.value)
  else if (props.helper) ids.push(helperId.value)
  return ids.length ? ids.join(' ') : undefined
})
</script>

<template>
  <div class="w-full text-left">
    <label
      v-if="label"
      :for="inputId"
      class="mb-1.5 block font-display text-sm font-semibold text-brand-cream"
    >
      {{ label }}
      <span v-if="required" class="text-brand-orange" aria-hidden="true">*</span>
    </label>

    <input
      :id="inputId"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :inputmode="inputmode"
      :aria-invalid="!!error || undefined"
      :aria-describedby="describedBy"
      class="block w-full rounded-xl border bg-white/5 px-4 py-3 text-base text-brand-cream placeholder:text-brand-muted/60 transition focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-60"
      :class="
        error
          ? 'border-red-500/70 focus-visible:ring-red-500/40'
          : 'border-white/15 focus:border-brand-lime/60 focus-visible:ring-brand-lime/40'
      "
      style="min-height: 48px"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >

    <p
      v-if="error"
      :id="errorId"
      role="alert"
      class="mt-1.5 text-sm text-red-400"
    >
      {{ error }}
    </p>
    <p
      v-else-if="helper"
      :id="helperId"
      class="mt-1.5 text-sm text-brand-muted"
    >
      {{ helper }}
    </p>
  </div>
</template>
