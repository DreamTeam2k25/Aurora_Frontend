<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore, useStudentsStore } from './stores';
import Header from './components/layout/header/Header.vue';
import DevNav from './components/global/buttons/DevNav.vue';

import router from './router';

const studentsStore = useStudentsStore()
const authStore = useAuthStore()
const route = useRoute()

const userData_header = defineAsyncComponent(()=> import('./components/layout/userData_header/userData_header.vue'))

router.beforeEach((to, from, next)=> {
  if (authStore.isLogged && to.path == '/auth') 
    next('/notFound')
  
  next()
})


</script>
<template>
  <main >
    <Suspense>
   
    <template #default> 
      <userData_header :succes-requisition="true" v-if="authStore.access != ''" class="z-[9999]" />
    </template>
  
    <template #fallback>
      <userData_header :succes-requisition="false" v-if="authStore.access != ''" class="z-[9999]" />
    </template>
    </Suspense>
  <Header v-if="route.meta.header" /> 

  <DevNav />
  <RouterView />
</main>
</template>
