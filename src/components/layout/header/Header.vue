<script setup>
import GlobalButton from '@/components/global/buttons/GlobalButton.vue';
import { links } from '@/utils';
import { useRoute } from 'vue-router';

const route = useRoute()    
</script>
<template>
    <header class="flex justify-between items-center p-5 ">
        <img src="../../../assets/images/AURORA.png" alt="" class="ml-10">
        <div class="flex gap-5">
            <router-link v-for="link, i in links" :key="i" :to="link.link" :class="route.name === link.name ? 'font-bold': 'font-medium'" >{{ link.name }}</router-link>
        </div>
        <div class="flex justify-center border rounded-3xl w-60 border-[#C3C3C3] items-center mr-10">
            <p class="w-3/4 text-center font-bold cursor-pointer">Cadastro</p>
            <GlobalButton content="Login" width="w-3/4"/>
        </div>
    </header>
</template>