import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/home/HomeView.vue'),
    },
    {
      path: '/tests',
      name: 'test',
      component: ()=> import('@/views/tests/TestComponents.vue'),
    },
    {
      path: "/components",
      name: "components",
      component: ()=> import('@/views/tests/ComponentsView.vue')
    }
  ],
})

export default router
