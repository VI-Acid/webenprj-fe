<template>
  <nav class="bg-gray-900 text-white px-5 py-3 flex items-center justify-between">
    <RouterLink to="/" class="text-xl font-semibold">FocusFlow</RouterLink>
    <ul class="flex gap-4">
      <li><RouterLink to="/" class="hover:text-indigo-400">Home</RouterLink></li>
      <li><RouterLink to="/login" class="hover:text-indigo-400">Login</RouterLink></li>
      <li><RouterLink to="/register" class="hover:text-indigo-400">Register</RouterLink></li>
      <li><RouterLink to="/profile" class="hover:text-indigo-400">Profile</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>
