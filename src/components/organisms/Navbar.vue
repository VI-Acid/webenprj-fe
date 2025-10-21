<!-- src/components/organisms/Navbar.vue -->
<script setup lang="ts">
import BaseIcon from '@/components/atoms/BaseIcon.vue'
</script>

<template>
  <nav
    class="fixed left-0 top-0 h-screen w-75 bg-neutral-200 border-r border-neutral-100 flex flex-col items-start p-6 shadow-sm"
  >
    <!-- Logo + Titel -->
    <div class="flex items-center gap-1 mb-10">
      <img src="@/assets/Weben - Logo Motivise.svg" alt="Motivise Logo" class="w-20 h-20" />
      <h1>MOTIVISE</h1>
    </div>

    <!-- Menülinks -->
    <div class="flex flex-col gap-6 w-full mt-2">
      <RouterLink :to="{ name: 'home' }" class="navbar-link w-full">
        <BaseIcon name="HomeIcon" />
        <span><h2>Home</h2></span>
      </RouterLink>

      <RouterLink :to="{ name: 'resources' }" class="navbar-link w-full">
        <BaseIcon name="FolderIcon" />
        <span><h2>Resources</h2></span>
      </RouterLink>

      <RouterLink :to="{ name: 'imprint' }" class="navbar-link w-full">
        <BaseIcon name="DocumentTextIcon" />
        <span><h2>Imprint</h2></span>
      </RouterLink>

      <RouterLink :to="{ name: 'help' }" class="navbar-link w-full">
        <BaseIcon name="QuestionMarkCircleIcon" />
        <span><h2>Help</h2></span>
      </RouterLink>

      <RouterLink :to="{ name: 'login' }" class="navbar-link w-full">
        <BaseIcon name="UserIcon" />
        <span><h2>Login</h2></span>
      </RouterLink>

      <RouterLink :to="{ name: 'register' }" class="navbar-link w-full">
        <BaseIcon name="UserPlusIcon" />
        <span><h2>Register</h2></span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
