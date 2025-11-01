<template>
  <input
    :type="type || 'text'"
    :class="['input', { invalid }]"
    :value="modelValue"
    :placeholder="placeholder"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
defineProps<{ modelValue?: string; invalid?: boolean; placeholder?: string; type?: string }>()
const emit = defineEmits<{ 'update:modelValue': [string] }>()
</script>
