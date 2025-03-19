<script setup>
import { ref, watch } from 'vue'
import { AuthMarketingText, AuthInput } from '@/components'
import { useStudentsStore, useAuthStore } from '@/stores'
import { findData } from '@/utils'

const studentStore = useStudentsStore()
const authStore = useAuthStore()
const firstEntrance = ref(0)

const isLogin = ref(true)
const delayedLogin = ref(isLogin.value)

watch(isLogin, (newValue) => {
  setTimeout(() => {
    delayedLogin.value = newValue
  }, 2000)
})

const doAuth = (data) => {
    const user_id = authStore.user.id
    console.log({
      matricula: findData(data, 'Matrícula').data,
      turma: findData(data, 'Turma').data,
      user: user_id,
    })
    studentStore.CreateStudents({
      matricula: findData(data, 'Matrícula').data,
      turma: findData(data, 'Turma').data,
      user: user_id,
    })

}

</script>
<template>
  <main class="max-h-dvh h-dvh relative flex overflow-hidden">
    <div :class="`max-lg:visible hidden wave`"></div>
    <div class="flex absolute min-w-dvw max-lg:hidden">
      <AuthMarketingText :has-before-content="false" first-main-text="Estudante e" first-short-text="Entre como" second-short-text="#VemViveroIFC" second-main-text="aproveite" third-main-text="todos os benefícios" class="z-50 left-5 top-28" />
      <div class="wrapper">  
        <div class="wave"></div>
      </div>
    </div>
    <div class="flex items-center relative w-[100vw] justify-center">
      <AuthInput  @auth="doAuth" auth-method="Cadastro de Estudante" button_text="Cadastrar-se" alternative_link="" alternative_text="" :fields="['matricula', 'turma']"
        :class="`z-50 absolute max-lg:relative duration-300 ${delayedLogin ? ' right-[10%] max-lg:right-0 max-xl:right-[5%]' : ' left-[10%] max-xl:left-[5%] max-lg:left-0 '} ${firstEntrance == 0 ? '' : !isLogin ? 'animations' : 'animations-back'}`"
        @change_auth="((isLogin = !isLogin), console.log(isLogin), firstEntrance++)"
      />
    </div>
    
  </main>
</template>

<style scoped>
@import url(@/assets/styles/auth.css);

</style>
