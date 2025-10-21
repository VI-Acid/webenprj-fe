<template>
  <section class="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-2xl">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form>
      <AuthForm submitLabel="Login" @submit="submit" />
    </form>
  </section>
</template>

<script setup lang="ts">
import AuthForm from '@/components/molecules/AuthForm.vue'
import { useUserStore } from '@/stores/userStore'
const user = useUserStore()
async function submit({ email, password }: { email: string; password: string }) {
  await user.login(email, password) // später echte API
}
</script>

<style></style>
