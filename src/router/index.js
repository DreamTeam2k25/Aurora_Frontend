import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('@/views/home/HomeView.vue'),
    },
    {
      path: '/tests',
      name: 'test',
      component: ()=> import('@/views/tests/TestComponents.vue'),
    },
    {
      path: '/firststep',
      name: 'Primeiros-passos',
      component: ()=> import('@/views/tests/TestHeader.vue'),
    },
    {
      path: "/components",
      name: "components",
      component: ()=> import('@/views/tests/ComponentsView.vue')
    },
    {
      path: "/auth",
      name: "auth",
      component: ()=> import('@/views/auth/AuthView.vue')
    }
  ],
})

export default router
