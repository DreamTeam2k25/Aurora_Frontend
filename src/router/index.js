import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {header: true},
      component: ()=> import('@/views/home/HomeView.vue'),
    },
    {
      path: '/tests',
      name: 'test',
      meta: {header: true},
      component: ()=> import('@/views/tests/TestComponents.vue'),
    },
    {
      path: '/firststep',
      name: 'Primeiros-passos',
      meta: {header: true},
      component: ()=> import('@/views/tests/TestHeader.vue'),
    },
    {
      path: "/components",
      name: "components",
      meta: {header: true},
      component: ()=> import('@/views/tests/ComponentsView.vue')
    },
    {
      path: "/auth",
      name: "auth",
      meta: {header: false},
      component: ()=> import('@/views/auth/AuthView.vue')
    }
  ],
})

export default router
