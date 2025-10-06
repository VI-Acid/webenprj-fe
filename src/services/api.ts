import axios from 'axios'
import { useUserStore } from '@/stores/userStore'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  withCredentials: false,
})

api.interceptors.request.use((config) => {
  const user = useUserStore()
  if (user.token) config.headers.Authorization = `Bearer ${user.token}`
  return config
})

export default api
