import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: ()=> import('@/views/auth/AuthView.vue')
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: ()=> import('@/views/NotFoundView.vue')
    },
    {
      path: '/auth-student',
      name: 'auth-student',
      component: ()=> import('@/views/auth/CreateStudentView.vue')
    }, 
    {
      path: '/portal',
      name: 'portal',
      children: [
        {
          path: '',
          name: 'Home',
          meta: {header: true},
          component: ()=> import('@/views/home/HomeView.vue'),
        },
        {
          path: 'ombdusman',
          name: "ombdusman",
          meta: {header: true},
          component: () => import('@/views/ombdusman/OmbdusmanView.vue')
        },
        {
          path: 'firststep',
          name: 'Primeiros-passos',
          meta: {header: true},
          component: ()=> import('@/views/tests/FirstSteps.vue'),
        },
        {
          path: 'news',
          name: 'noticias',
          meta: {header: true},
          component: ()=> import('@/views/news/NewsView.vue'),
        },   
      ]
    },
    
  ],
})


export default router
