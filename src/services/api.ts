// import axios from 'axios'
// import { useUserStore } from '@/stores/userStore'

/* const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  withCredentials: false,
})

api.interceptors.request.use((config) => {
  const user = useUserStore()
  if (user.token) config.headers.Authorization = `Bearer ${user.token}`
  return config
})

export default api */

// super simple mock; später durch axios.post(...) ersetzen
// src/services/api.ts
export const authApi = {
  login: async ({ username, password }: { username: string; password: string }) => {
    await new Promise((r) => setTimeout(r, 400))

    // Dummy-Check – akzeptiert nur "demo" / "demo"
    if (username === 'demo' && password === 'demo') {
      return {
        token: 'fake-demo-token',
        user: { id: 1, name: 'Demo User', email: 'demo@motivise.app' },
      }
    }
    throw new Error('Invalid credentials')
  },

  register: async ({
    username,
    email,
    password,
  }: {
    username: string
    email: string
    password: string
  }) => {
    await new Promise((r) => setTimeout(r, 400))
    return {
      token: 'fake-demo-token',
      user: { id: 1, name: username, email },
    }
  },
}
