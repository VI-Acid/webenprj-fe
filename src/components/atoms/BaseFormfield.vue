<!-- kombiniert Label + Control + Help/Error zu einem Paket, für später z. B. im Post-Formular)-->
<template>
  <div class="mb-4">
    <BaseLabel v-if="label">{{ label }}</BaseLabel>
    <slot />
    <BaseHelp v-if="help">{{ help }}</BaseHelp>
    <BaseError v-if="error">{{ error }}</BaseError>
  </div>
</template>

<script setup lang="ts">
import BaseLabel from '@/components/atoms/BaseLabel.vue'
import BaseHelp from '@/components/atoms/BaseHelp.vue'
import BaseError from '@/components/atoms/BaseError.vue'

interface Props {
  label?: string
  help?: string
  error?: string
}
defineProps<Props>()
</script>
