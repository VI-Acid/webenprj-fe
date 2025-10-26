<!-- für längere Texteingaben (z. B. Post schreiben, Kommentare) -->

<template>
  <textarea
    :class="['textarea', { invalid }]"
    :value="modelValue"
    :placeholder="placeholder"
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<script setup lang="ts">
defineProps<{ modelValue?: string; invalid?: boolean; placeholder?: string }>()
const emit = defineEmits<{ 'update:modelValue': [string] }>()
</script>
