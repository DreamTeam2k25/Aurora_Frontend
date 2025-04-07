<script setup>
import { useStudentsStore, useAuthStore } from '@/stores'
import { GlobalButton, Loading } from '@/components'
import { onMounted, ref, watch, computed } from 'vue'
import router from '@/router'

const studentsStore = useStudentsStore()
const authStore = useAuthStore()
const animateClose = ref(false)
const studentExists = computed(()=> studentsStore.studentExists)
const showSucess = computed(()=> props.succesRequisition)
const userInformation = computed(() => [
  { title: 'Matricula', content: studentsStore?.student?.matricula },
  { title: 'Curso', content:  studentsStore?.student?.curso },
  { title: 'Turma', content:  studentsStore?.student?.turma },
])

const returnUserInformation = computed(() => userInformation.value)

const props = defineProps({
  succesRequisition: {
    type: Boolean,
    default: false,
  },
})

onMounted(async () => {
  await studentsStore.GetStudentByUserId(authStore.user.id)
 
})

const logOut = () => {
  studentsStore.state.open = false
  authStore.Logout()
  studentsStore.LogOut()
}

watch(
  () => studentsStore.open,
  (newValue) => {
    if (!newValue) {
      animateClose.value = true
      setTimeout(() => {
        animateClose.value = false
      }, 500)
    }
  },
)
</script>

<template>
  <section class="w-dvw h-dvh fixed overflow-x-hidden" v-if="studentsStore.open || animateClose">
    <div
      :class="`absolute right-0 top-0 z-40 w-72 rounded-l-[40px] h-dvh bg-[#FEFEFF] ${studentsStore.open ? 'open-header' : 'close-header'}`"
    >
    <span @click="
    studentsStore.state.open = false" class="mdi mdi-close text-2xl cursor-pointer text-[#6B6B6B] absolute top-3 right-3"></span>
      <div v-if="showSucess">
        <div class="w-full pt-16 gap-5 flex justify-center items-center">
          <span class="mdi mdi-account-circle text-5xl"></span>
          <div class="flex flex-col items-center">
            <p>{{ authStore.user.name }}</p>
            <p class="text-[#6B6B6B]">{{ authStore.user.email }}</p>
          </div>
        </div>

        <div v-if="studentExists" class="flex flex-col pt-20 gap-24 items-center">
          <div
            v-for="(data, index) in returnUserInformation"
            :key="index"
            class="flex flex-col items-center"
          >
            <p class="text-[#0455BF]">{{ data.title }}</p>
            <p class="text-[#6B6B6B]">{{ data.content }}</p>
          </div>
        </div>
        <div v-else class="flex w-full justify-center">
          <GlobalButton
            class="mt-5"
            @evento="(router.push('/auth-student'), (studentsStore.state.open = false))"
            content="Crie uma conta estudante"
            width="w-3/4"
          />
        </div>
        <div @click="logOut()" class="flex justify-center items-center cursor-pointer mt-20">
            <span class="mdi mdi-exit-to-app text-2xl text-[#6B6B6B]"></span>

          <p class="text-[#6B6B6B]">Sair</p>
        </div>
      </div>

      <Loading v-else />
    </div>

    <section
      @click="studentsStore.state.open = false"
      :class="`absolute w-dvw right-0 h-dvh z-30 bg-[#4d6f8d80] ${studentsStore.open ? 'open' : 'close'}`"
    ></section>
  </section>
</template>

<style scooped>
@import url('@/assets/styles/userData_header.css');
</style>
