<script setup>
import { useRoute } from 'vue-router';
import Header from './components/layout/header/Header.vue';
import { onMounted } from 'vue';
const route = useRoute()

</script>
<template>
  <Header v-if="route.meta.header" /> 
  import Header from './components/layout/header/Header.vue';
  import DevNav from './components/global/buttons/DevNav.vue';
</script>
<template>
  <Header /> 
  <DevNav />
  <RouterView />
</template>
