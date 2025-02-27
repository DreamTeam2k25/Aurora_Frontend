<script setup>
import { ref } from 'vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import thais from '/src/assets/images/download.jpg'

const members = ref([
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
  {
    img: thais,
    name: 'João',
  },
])
</script>

<template>
    <div class="font-semibold w-full text-xl">
      <span>Membros</span>
    </div>
    <div class="flex flex-wrap mt-10">
      <div v-for="(member, id) in members" :key="id" class="w-auto flex justify-center items-center m-0.5">
        <img :src="member.img" :alt="member.name" class="rounded-full w-16 mt-0.5" />
      </div>
    </div>
</template>
