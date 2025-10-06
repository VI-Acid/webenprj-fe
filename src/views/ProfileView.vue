<template>
  <section class="max-w-2xl mx-auto mt-10 p-6 bg-gray-800 rounded-2xl">
    <h1 class="text-2xl font-bold mb-4">My Profile</h1>
    <p>Email: {{ user.email || '—' }}</p>
    <p>Username: {{ user.username || '—' }}</p>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
const user = useUserStore()
</script>
