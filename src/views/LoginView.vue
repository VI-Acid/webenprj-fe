<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import BaseFormfield from '@/components/atoms/BaseFormfield.vue'
import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import ToastMessage from '@/components/molecules/ToastMessage.vue'

const username = ref('')
const password = ref('')
const router = useRouter()
const store = useUserStore()
const toast = ref({ show: false, msg: '', variant: 'error' as const })

async function submit() {
  try {
    if (!username.value || !password.value) throw new Error('Please fill in all fields')
    await store.login({ username: username.value, password: password.value })
    router.push({ name: 'home' })
  } catch (err: any) {
    toast.value = { show: true, msg: err.message, variant: 'error' }
  }
}
</script>

<template>
  <div class="mx-auto max-w-xl grid grid-cols-[200px_1fr] items-center gap-8">
    <img src="/IconMotivise.svg" alt="logo" class="w-40 h-40 rounded-2xl" />
    <div class="card card-pad space-y-3">
      <h2>Login</h2>

      <BaseFormfield label="Username">
        <BaseInput v-model="username" placeholder="Username" />
      </BaseFormfield>

      <BaseFormfield label="Password">
        <BaseInput v-model="password" placeholder="Password" />
      </BaseFormfield>

      <BaseButton class="w-full" @click="submit">Login</BaseButton>

      <small class="block text-center">
        No account? <RouterLink :to="{ name: 'register' }" class="underline">Register</RouterLink>
      </small>
    </div>
  </div>

  <ToastMessage
    v-if="toast.show"
    :message="toast.msg"
    :variant="toast.variant"
    @close="toast.show = false"
  />
</template>
