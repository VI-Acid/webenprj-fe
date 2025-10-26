<script setup lang="ts">
import { ref } from 'vue'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import BaseFormfield from '@/components/atoms/BaseFormfield.vue'
import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import ToastMessage from '@/components/molecules/ToastMessage.vue'

const router = useRouter()
const store = useUserStore()

const username = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const toast = ref({ show: false, msg: '', variant: 'error' as const })

const schema = yup.object({
  username: yup.string().required('Username required'),
  email: yup.string().email('Invalid email').required('Email required'),
  password: yup.string().min(6, 'Min. 6 characters').required('Password required'),
})

async function submit() {
  try {
    loading.value = true
    await schema.validate(
      { username: username.value, email: email.value, password: password.value },
      { abortEarly: false },
    )
    await store.register({ username: username.value, email: email.value, password: password.value })
    router.push({ name: 'home' })
  } catch (err: any) {
    toast.value = { show: true, msg: err?.message || 'Registration failed', variant: 'error' }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="mx-auto max-w-xl grid grid-cols-[200px_1fr] items-center gap-8">
    <img src="/IconMotivise.svg" alt="logo" class="w-40 h-40 rounded-2xl" />
    <div class="card card-pad space-y-3">
      <h2>Create account</h2>

      <BaseFormfield label="Username">
        <BaseInput v-model="username" placeholder="Username" />
      </BaseFormfield>

      <BaseFormfield label="Email">
        <BaseInput v-model="email" placeholder="Email address" />
      </BaseFormfield>

      <BaseFormfield label="Password">
        <BaseInput v-model="password" placeholder="Password" />
      </BaseFormfield>

      <BaseButton class="w-full" :disabled="loading" @click="submit"> Register </BaseButton>

      <small class="block text-center">
        Already have an account?
        <RouterLink :to="{ name: 'login' }" class="underline">Login</RouterLink>
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
