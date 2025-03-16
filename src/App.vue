<script setup>
  import Header from './components/layout/header/Header.vue';
  import DevNav from './components/global/buttons/DevNav.vue';
  import userData_header from './components/layout/userData_header/userData_header.vue';

  import { useStudentsStore } from './stores';

  const studentsStore = useStudentsStore()
</script>
<template>
  <userData_header class="z-50" />
  <Header /> 
  <DevNav />
  <button @click="studentsStore.state.open = !studentsStore.state.open">OPEN</button>
  <RouterView />
</template>
