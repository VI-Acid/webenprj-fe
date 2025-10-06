import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'  // <-- type-only!

const routes: RouteRecordRaw[] = [
  { path: '/',        component: () => import('@/views/HomeView.vue') },
  { path: '/login',   component: () => import('@/views/LoginView.vue') },
  { path: '/register',component: () => import('@/views/RegisterView.vue') },
  { path: '/profile', component: () => import('@/views/ProfileView.vue') },
  { path: '/:pathMatch(.*)*', component: { template: '<div class="p-6">Not found</div>' } },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

