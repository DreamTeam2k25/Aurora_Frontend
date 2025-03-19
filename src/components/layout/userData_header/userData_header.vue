<script setup>
import { useStudentsStore } from '@/stores';
import { ref, watch } from 'vue';

const studentsStore = useStudentsStore()
const animateClose = ref(false)


watch(() => studentsStore.open, (newValue) => {
    if (!newValue) {
        animateClose.value = true
        setTimeout(() => {
            animateClose.value = false
        }, 500) 
    }
})

// const userInformation = ref([{title: 'Matricula', content: studentsStore.student.matricula}, {title: 'Curso', content: studentsStore.student.curso}, {title: 'Turma', content: studentsStore.student.turma} ])

const userInformation = ref([{title: 'Matricula', content: '2023325000'}, {title: 'Curso', content: 'Informática'}, {title: 'Turma', content: '3INFO1'} ])
</script>

<template>
<section class="w-dvw h-dvh absolute overflow-x-hidden" v-if="studentsStore.open || animateClose">
    <div :class="`absolute right-0 top-0 z-40 w-72 rounded-l-[40px] h-dvh bg-[#FEFEFF] ${studentsStore.open ? 'open-header' : 'close-header'}`">
        <svg @click="studentsStore.state.open = false" class=" cursor-pointer size-7 absolute right-2 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
        <div class=" w-full pt-16 gap-5 flex justify-center items-center">
    <svg class=" size-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" /></svg>
    <div class="flex flex-col items-center">
        <p>Nome Usuario</p>
        <p class="text-[#6B6B6B]">usuario@gmail.com</p>
    </div>
    </div>

    <div class="flex flex-col pt-20 gap-24 items-center">
        <div v-for="(data,index) in userInformation" :key="index" class="flex flex-col items-center">
            <p class="text-[#0455BF]">{{data.title}}</p>
            <p class="text-[#6B6B6B]">{{ data.content }}</p>
        </div>
    </div>

    <div class="flex justify-center items-center pt-20">
        <svg class="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B6B6B">

  <path d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" />
</svg>

        <p class="text-[#6B6B6B]">Sair</p>
    </div>
    </div>

    <section :class="`absolute w-dvw right-0 h-dvh z-30 bg-[#4d6f8d80] ${studentsStore.open ? 'open' : 'close'}`"></section>
</section>
</template>


<style scooped>
@import url('@/assets/styles/userData_header.css');
</style>