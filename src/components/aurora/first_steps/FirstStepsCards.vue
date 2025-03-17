<script setup>
import { ref } from 'vue'

const cards = ref([
  {
    id: 1,
    title: 'Sigaa IFC >',
    description:
      "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printerIs simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    link: '#',
    continue: true,
  },
  {
    id: 2,
    title: 'Sigaa IFC >',
    description:
      "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printerIs simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    link: '#',
    continue: true,
  },
  {
    id: 3,
    title: 'Sigaa IFC >',
    description:
      "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printerIs simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    link: '#',
    continue: true,
  },
  {
    id: 4,
    title: 'Sigaa IFC >',
    description:
      "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printerIs simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    link: '#',
    continue: true,
  },
  {
    id: 5,
    title: 'Sigaa IFC >',
    description:
      "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printerIs simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    link: '#',
    continue: false,
  },
])
</script>

<template>
  <div class="w-full flex justify-center flex-col items-center">
    <div v-for="card in cards" :key="card.id" class="w-3/4 mt-14 flex items-center">
      <div class="mr-8 flex flex-col items-center">
        <span class="font-semibold text-3xl text-[#0455BF] absolute">{{ card.id }}</span>
        <div class="flex flex-col absolute items-center">
            <span v-if="card.continue" v-for="i in [1, 2, 3]" :key="i" class="bg-[#82B0D9] rounded-full w-1.5 h-1.5 mt-16"></span>
        </div>
      </div>
      <div class="bg-[#EAF3FC] rounded-e-full p-8 h-auto">
        <router-link :to="card.link" class="font-bold text-2xl text-[#0455BF]">{{
          card.title
        }}</router-link>
        <p class="mt-4">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>