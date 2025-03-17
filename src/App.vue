<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStudentsStore } from './stores';
import Header from './components/layout/header/Header.vue';
import DevNav from './components/global/buttons/DevNav.vue';
import userData_header from './components/layout/userData_header/userData_header.vue';

const studentsStore = useStudentsStore()
const route = useRoute()


</script>
<template>
  <main >
  <Header v-if="route.meta.header" /> 
  <userData_header class="z-[9999]" />
  <DevNav />
  <button class="absolute top-0 left-0 z-[9999]" @click="studentsStore.state.open = !studentsStore.state.open">OPEN</button>
  <RouterView />
</main>
</template>
