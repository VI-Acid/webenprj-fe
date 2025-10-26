<!--UserBadge + Tag-Chip + „Subscribe“-Button-->

<template>
  <div class="card-header">
    <div class="flex items-center gap-3">
      <UserBadge :src="avatarSrc" :name="username" :subtitle="time" size="sm" />
      <BaseChip v-if="tag" variant="tag">#{{ tag }}</BaseChip>
    </div>
    <BaseButton variant="primary" size="sm">Subscribe</BaseButton>
  </div>
</template>

<script setup lang="ts">
import UserBadge from '@/components/molecules/UserBadge.vue'
import BaseChip from '@/components/atoms/BaseChip.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
defineProps<{ username: string; avatarSrc?: string; tag?: string; time?: string }>()
</script>
