<template>
  <div class="min-h-screen flex">
    <!-- Main Content -->
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
//import Navbar from '@/components/organisms/Navbar.vue'
</script>
