<!--UserBadge + Tag-Chip + „Subscribe“-Button-->

<template>
  <div class="card-header flex flex-wrap md:flex-nowrap items-center justify-between gap-3 min-w-0">
    <!-- links: Avatar + Name + Tag -->
    <div class="flex items-center gap-3 min-w-0">
      <UserBadge :src="avatarSrc" :name="username" :subtitle="time" size="sm" />
      <BaseChip v-if="tag" variant="tag">#{{ tag }}</BaseChip>
    </div>
    <!-- rechts: Subscribe -->
    <BaseButton size="sm" variant="outline" class="px-3 py-1 text-xs"> Subscribe </BaseButton>
  </div>
</template>

<script setup lang="ts">
import UserBadge from '@/components/molecules/UserBadge.vue'
import BaseChip from '@/components/atoms/BaseChip.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
defineProps<{ username: string; avatarSrc?: string; tag?: string; time?: string }>()
</script>
