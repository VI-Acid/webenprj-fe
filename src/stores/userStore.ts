import { defineStore } from 'pinia'

export interface User {
  id?: number
  email?: string
  username?: string
  token?: string
}

export const useUserStore = defineStore('user', {
  state: (): User => ({ id: undefined, email: undefined, username: undefined, token: undefined }),
  getters: {
    isAuthenticated: (s) => !!s.token,
  },
  actions: {
    async login(email: string, password: string) {
      // TODO: FE-05/06 – echte API; jetzt nur Mock:
      this.email = email
      this.username = email.split('@')[0]
      this.token = 'mock-jwt-token'
    },
    logout() {
      this.$reset()
    },
  },
})
