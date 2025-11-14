<!--Container für Posts, Profile, etc. (nutzt .card, .card-header, .card-body …)-->
<template>
  <article :class="['card', 'card-pad', sizeClass]">
    <header v-if="$slots.header" class="card-header">
      <slot name="header" />
    </header>

    <div class="card-body">
      <slot />
    </div>

    <footer v-if="$slots.actions" class="card-actions">
      <slot name="actions" />
    </footer>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ size?: 'sm' | 'md' | 'lg' | 'full' }>(), { size: 'md' })

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'card-sm'
    case 'lg':
      return 'card-lg'
    case 'full':
      return 'w-full' // volle Breite (z. B. in Listen)
    default:
      return 'card-md'
  }
})
</script>
