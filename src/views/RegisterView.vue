<template>
  <section class="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-2xl">
    <h1 class="text-2xl font-bold mb-4">Register</h1>
    <AuthForm submitLabel="Create account" @submit="submit">
      <template #extra>
        <FormInput id="username" label="Username" v-model="username" />
      </template>
    </AuthForm>
  </section>
</template>

<script setup lang="ts">
import AuthForm from '@/components/molecules/AuthForm.vue'
import FormInput from '@/components/atoms/FormInput.vue'
import { ref } from 'vue'
const username = ref('')
function submit(p:{email:string; password:string}) {
  // später echte API
  console.log('register', { ...p, username: username.value })
}
</script>
