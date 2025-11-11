<!--kleine Tag-/Status-Komponente (z. B. #Mathe, #Motivation)-->
<template>
  <span :class="['chip', variantClass]">
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'muted' | 'tag'
}
const props = withDefaults(defineProps<Props>(), { variant: 'muted' })

const variantClass = {
  muted: 'chip-muted',
  tag: 'tag',
}[props.variant]
</script>
