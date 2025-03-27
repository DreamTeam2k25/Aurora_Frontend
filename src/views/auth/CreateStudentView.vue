<script setup>
import { onMounted, ref, watch } from 'vue'
import { AuthMarketingText, AuthInput, MessageConfirmation } from '@/components'
import { useStudentsStore, useAuthStore } from '@/stores'
import { findData } from '@/utils'
import router from '@/router'

const studentStore = useStudentsStore()
const authStore = useAuthStore()
const firstEntrance = ref(0)

const isLogin = ref(true)
const delayedLogin = ref(isLogin.value)

onMounted(()=> {
  studentStore.GetStudents()
})

watch(isLogin, (newValue) => {
  setTimeout(() => {
    delayedLogin.value = newValue
  }, 2000)
})

const message = ref(false)
const resultRequisition = ref(false)

const appearMessage = (resultReq, goTo) => {
  resultRequisition.value = resultReq
  message.value = true
  setTimeout(()=>{
    message.value = false
    router.push(goTo)
  },3000)
  
}

const doAuth = (data) => {
    const user_id = authStore.user.id

    studentStore.CreateStudents({
      matricula: findData(data, 'Matrícula').data,
      turma: findData(data, 'Turma').data,
      user: user_id,
    }).then((response)=>{
      response.status == 400 ? appearMessage(false, '') : appearMessage(true, '/')
    })


}

</script>
<template>
  <MessageConfirmation :content="resultRequisition ? 'Conta Criada com sucesso!' : `Erro ao criar sua conta`" :description="resultRequisition ? 'Agora você pode aproveitar todo o nosso sistema.' : 'Verifique as credenciais e tente novamente.'" :icon="resultRequisition ? 'mdi mdi-check-decagram' : 'mdi mdi-alert-circle'" v-if="message" />
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
        @change_auth="((isLogin = !isLogin), firstEntrance++)"
      />
    </div>
    
  </main>
</template>

<style scoped>
@import url(@/assets/styles/auth.css);

</style>
