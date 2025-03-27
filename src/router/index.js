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
      path: '/ouvidoria',
      name: "Ouvidoria",
      meta: {header: true},
      component: () => import('@/views/ombdusman/OmbdusmanView.vue')
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
      component: ()=> import('@/views/tests/FirstSteps.vue'),
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
      component: ()=> import('@/views/auth/AuthView.vue')
    },
    {
      path: '/luan',
      name: 'luan',
      component: () => import('@/views/tests/LuanView.vue')
    },
    {
      path: '/auth-student',
      name: 'auth-student',
      component: ()=> import('@/views/auth/CreateStudentView.vue')
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: ()=> import('@/views/NotFoundView.vue')
    }
  ],
})


export default router
