<template>
    <div class="bg-[#347EBF] rounded-3xl py-10 px-8 shadow-xl w-[70%] mx-auto">
      <div class="flex flex-col md:flex-row justify-around items-center text-white text-center gap-12">
        <div v-for="course in courses" :key="course.title" class="mb-8 md:mb-0">
          <div class="flex justify-center mb-6">
            <component :is="course.icon" class="h-16 w-16" />
          </div>
          <p class="text-xl font-medium">{{ course.title }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { h } from 'vue';
const courses = [
    { title: "Técnico em Agropecuária", icon: () => h('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "white" }, [h('path', { d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" })]) },
    { title: "Técnico em Informática Para Internet", icon: () => h('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "white" }, [h('path', { d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })]) },
    { title: "Técnico em Química", icon: () => h('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "white" }, [h('path', { d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" })]) }
];
  </script>