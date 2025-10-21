import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 1) Typsichere Routen-Liste (jede Route hat path, name, component, etc.)
const routes: RouteRecordRaw[] = [
  // Hauptseiten
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
  { path: '/login', name: 'login', component: () => import('@/views/LoginView.vue') },
  { path: '/register', name: 'register', component: () => import('@/views/RegisterView.vue') },
  { path: '/profile', name: 'profile', component: () => import('@/views/ProfileView.vue') },

  // Deine neuen Seiten (Dummy)
  {
    path: '/resources',
    name: 'resources',
    component: () => import('@/views/ResourceListView.vue'),
  },
  { path: '/imprint', name: 'imprint', component: () => import('@/views/ImprintView.vue') },
  { path: '/help', name: 'help', component: () => import('@/views/HelpView.vue') },
  {
    path: '/styleguide',
    name: 'styleguide',
    component: () => import('@/views/StyleGuideView.vue'),
  },
]

// 2) Router-Instanz mit HTML5-History
const router = createRouter({
  // BASE_URL erlaubt sauberen Betrieb in Unterordnern / gh-pages etc.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 3) Scroll-Verhalten (nach Navigation wieder nach oben)
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
