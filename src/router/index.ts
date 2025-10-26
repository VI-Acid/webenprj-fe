// router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const routes: RouteRecordRaw[] = [
  // Auth-Seiten (dürfen ohne Login sichtbar sein)
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { authPage: true },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue'),
    meta: { authPage: true },
  },

  // Hauptseiten (nur nach Login)
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
  {
    path: '/resources',
    name: 'resources',
    component: () => import('@/views/ResourceListView.vue'),
  },
  { path: '/imprint', name: 'imprint', component: () => import('@/views/ImprintView.vue') },
  { path: '/help', name: 'help', component: () => import('@/views/HelpView.vue') },
  { path: '/profile', name: 'profile', component: () => import('@/views/ProfileView.vue') },
  {
    path: '/styleguide',
    name: 'styleguide',
    component: () => import('@/views/StyleGuideView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

// Guard: Auth-Pages immer erlauben, alle anderen nur mit Token
router.beforeEach((to) => {
  const store = useUserStore()

  // Auth-Seiten frei zugänglich
  if (to.meta.authPage) return true

  // alle anderen nur mit Login
  if (!store.isAuthenticated) return { name: 'login' }

  // wenn eingeloggt und jemand versucht auf auth page
  if (store.isAuthenticated && (to.name === 'login' || to.name === 'register')) {
    return { name: 'home' }
  }
  return true
})

export default router
