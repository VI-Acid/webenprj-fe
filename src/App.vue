<script setup lang="ts">
import Navbar from '@/components/organisms/Navbar.vue'
</script>

<template>
  <Navbar />
  <main class="container mx-auto px-4 py-6">
    <RouterView />
  </main>
</template>

