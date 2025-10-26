<template>
  <section class="section text-center">
    <h2 class="text-2xl font-heading mb-6">Study Resources</h2>

    <div class="grid gap-4 md:grid-cols-2">
      <BaseCard v-for="r in resources" :key="r.id" class="card-pad">
        <div class="card-header">
          <h3>{{ r.title }}</h3>
          <BaseChip variant="tag">#{{ r.tag }}</BaseChip>
        </div>

        <div class="card-body">
          <p>{{ r.description }}</p>
        </div>

        <div class="card-actions">
          <BaseButton size="sm" variant="outline">Open</BaseButton>
          <BaseButton size="sm">Save</BaseButton>
        </div>
      </BaseCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseCard from '@/components/atoms/BaseCard.vue'
import BaseChip from '@/components/atoms/BaseChip.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

const resources = [
  {
    id: 1,
    title: 'Async/Await Cheatsheet',
    tag: 'webengineering',
    description: 'Quick guide to writing cleaner async code in JavaScript.',
  },
  {
    id: 2,
    title: 'Math Formula Collection',
    tag: 'math',
    description: 'All important formulas summarized for quick exam prep.',
  },
  {
    id: 3,
    title: 'IT Security Basics PDF',
    tag: 'itsecurity',
    description: 'Short overview of the OWASP Top 10 vulnerabilities.',
  },
]
</script>
