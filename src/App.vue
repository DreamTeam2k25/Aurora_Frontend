<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore, useStudentsStore } from './stores';
import Header from './components/layout/header/Header.vue';
import DevNav from './components/global/buttons/DevNav.vue';
import userData_header from './components/layout/userData_header/userData_header.vue';
import router from './router';

const studentsStore = useStudentsStore()
const authStore = useAuthStore()
const route = useRoute()

router.beforeEach((to, from, next)=> {
  if (authStore.access != '' && to.path == '/auth') {
    next('/notFound')
  }

  next()
})

</script>
<template>
  <main >
    <userData_header v-if="authStore.access != ''" class="z-[9999]" />
  <Header v-if="route.meta.header" /> 

  <DevNav />
  <RouterView />
</main>
</template>
