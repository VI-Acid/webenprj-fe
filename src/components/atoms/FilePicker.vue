<template>
  <div>
    <label v-if="label" class="block text-sm mb-1">{{ label }}</label>
    <input type="file" :accept="accept" @change="onChange" />
    <p v-if="error" class="text-sm text-red-400 mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ label?: string; accept?: string; error?: string }>()
const emit = defineEmits<{ (e:'selected', f:File): void }>()
function onChange(e: Event) {
  const f = (e.target as HTMLInputElement).files?.[0]
  if (f) emit('selected', f)
}
</script>
