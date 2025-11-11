<!-- für Dropdowns (z. B. Fächer, Tags, Filter) -->
<template>
  <select
    :class="['select', { invalid }]"
    :value="modelValue"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <slot />
  </select>
</template>

<script setup lang="ts">
defineProps<{ modelValue?: string; invalid?: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [string] }>()
</script>
