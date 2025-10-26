<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <FormInput id="email" label="Email" v-model="email" type="email" />
    <FormInput id="password" label="Password" v-model="password" type="password" />
    <slot name="extra" />
    <AppButton type="submit">{{ submitLabel }}</AppButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import AppButton from '@/components/atoms/AppButton.vue'
import FormInput from '@/components/atoms/FormInput.vue'

const props = withDefaults(defineProps<{ submitLabel?: string }>(), {
  submitLabel: 'Submit',
})
const emit = defineEmits<{ (e: 'submit', payload: { email: string; password: string }): void }>()
const email = ref('')
const password = ref('')
function onSubmit() {
  emit('submit', { email: email.value, password: password.value })
}
</script>
