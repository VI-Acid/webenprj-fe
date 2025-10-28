import { defineStore } from 'pinia'
import { authApi } from '@/services/api'
import router from '@/router'

type User = { id: number; name: string; email?: string } | null

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') as string | null,
    user: null as User,
  }),
  getters: {
    isAuthenticated: (s) => !!s.token,
  },
  actions: {
    async login(payload: { username: string; password: string }) {
      const { token, user } = await authApi.login(payload)
      this.token = token
      this.user = user
      localStorage.setItem('token', token)
    },
    async register(payload: { username: string; email: string; password: string }) {
      const { token, user } = await authApi.register(payload)
      this.token = token
      this.user = user
      localStorage.setItem('token', token)
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
      router.push({ name: 'login' })
    },
  },
})
