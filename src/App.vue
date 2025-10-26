<template>
  <!-- Navbar ausblenden auf auth pages -->
  <Navbar v-if="isAuthenticated && !route.meta.authPage" />

  <main
    class="section"
    :class="{ 'md:pl-64 pb-16 md:pb-0': isAuthenticated && !route.meta.authPage }"
  >
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import Navbar from '@/components/organisms/Navbar.vue'

const route = useRoute()
const userStore = useUserStore()
const { isAuthenticated } = storeToRefs(userStore)
</script>
