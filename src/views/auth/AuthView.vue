<script setup>
import { ref, watch, computed, onBeforeUnmount, reactive } from 'vue'
import { AuthMarketingText, AuthInput, MessageConfirmation } from '@/components'
import { useAuthStore, useStudentsStore } from '@/stores'
import { findData } from '@/utils'

import router from '@/router'

const authStore = useAuthStore()
const firstEntrance = ref(0)
const delayedLogin = ref(authStore.methodByLink)

watch(() => authStore.methodByLink, (newValue) => {
  setTimeout(() => {
    delayedLogin.value = newValue
  }, 2000)
})

onBeforeUnmount(()=>{
  authStore.methodByLink = true
})



const textContent = computed(() => ({
    firstShortText: {
        content: authStore.methodByLink ? 'Educação' : 'Curso integrados de'
    },
    firstMainText: {
        content: authStore.methodByLink ? 'pública' : 'agropecuária,'
    },
    secondMainText: {
        content: authStore.methodByLink ? 'gratuita' : 'informática e'
    },
    thirdMainText: {
        content: authStore.methodByLink ? 'qualidade' : 'química'
    },
    secondShortText: {
        content: '#VemViveroIFC'
    },
}));

const message = ref(false)
const messageContent = reactive({
  content: '',
  description: ''
})
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
  if (authStore.methodByLink) {
    authStore.Login({email: findData(data, 'Email').data, password: findData(data, 'Senha').data}).then((response)=>{
    
      if (response.status == 400) {
        messageContent.content = 'Erro ao fazer login!'
       messageContent.description = 'Suas credenciais estão erradas, tente novamente.'
        appearMessage(false, '')
      } else {
        messageContent.content = 'Sucesso ao fazer Login'
       messageContent.description = 'Seja bem vindo e bom proveito do nosso sistema.'
        appearMessage(true, '/')
      }
    })
  } else {
    authStore.CreateUser({
      email: findData(data, 'Email').data,
      password: findData(data, 'Senha').data,
      name: findData(data, 'Nome').data,
      username: findData(data, 'Nome').data
    }).then((response)=>{
      if (response.status == 400) {
        messageContent.content = 'Erro ao Criar Usuário!'
       messageContent.description = 'Suas credenciais estão erradas, tente novamente.'
        appearMessage(false, '')
      } else {
        messageContent.content = 'Sucesso ao Criar Usuário'
       messageContent.description = 'Você será redirecionado a página de criação de estudante.'
        appearMessage(true, '/auth-student')
      }
    })

   
  }
}

</script>
<template>
   <MessageConfirmation :content="messageContent.content" :description="messageContent.description" :icon="resultRequisition ? 'mdi mdi-check-decagram' : 'mdi mdi-alert-circle'" v-if="message" />
  <main class="max-h-dvh h-dvh relative flex overflow-hidden">
    <div :class="`max-lg:visible hidden wave`"></div>
    <div class="flex absolute min-w-dvw max-lg:hidden">
      <AuthMarketingText :has-before-content="authStore.methodByLink" :is-login="authStore.methodByLink" :first-short-text="textContent.firstShortText.content" :first-main-text="textContent.firstMainText.content" :second-main-text="textContent.secondMainText.content" :third-main-text="textContent.thirdMainText.content" :second-short-text="textContent.secondShortText.content" :class="` z-50 ${firstEntrance == 0 && !authStore.methodByLink ? 'bottom-[-33rem] right-[5rem] register' : firstEntrance == 0 ? 'bottom-[-35rem] left-[5rem]' : !authStore.methodByLink ? 'bottom-[-33rem] right-[5rem] register' : 'bottom-[-35rem] left-[5rem] login'} `" />
      <div
        
        :class="`${firstEntrance == 0 && !authStore.methodByLink ? 'wrapper-animation-back' : firstEntrance == 0 ? 'wrapper' : !authStore.methodByLink ? 'wrapper-animation-back' : 'wrapper-animation'} z-30`"
      >
       
        <div :class="`${firstEntrance == 0 && !authStore.methodByLink ? 'wave-animation-back' : firstEntrance == 0 ? 'wave' : !authStore.methodByLink ? 'wave-animation-back' : 'wave-animation'}`"></div>
      </div>
    </div>
    <div class="flex items-center relative w-[100vw] justify-center">
      <AuthInput @auth="doAuth" :button_text="authStore.methodByLink ? 'Entrar' : 'Cadastrar-se'" :alternative_text="authStore.methodByLink ? 'Não possui cadastro?' : 'Já possui cadastro? '" :alternative_link="authStore.methodByLink ? 'Cadastre-se' : 'Faça login'" :auth-method="authStore.methodByLink ? 'Login' : 'Registro'" :fields="authStore.methodByLink ? ['email', 'senha'] : ['email', 'senha', 'nome']"
        :class="`z-50 absolute max-lg:relative duration-300 ${delayedLogin ? ' right-[10%] max-lg:right-0 max-xl:right-[5%]' : ' left-[10%] max-xl:left-[5%] max-lg:left-0 '} ${firstEntrance == 0 ? '' : !authStore.methodByLink ? 'animations' : 'animations-back'}`"
        @change_auth="((authStore.methodByLink = !authStore.methodByLink), firstEntrance++)"
      />
    </div>
    
    <!-- <css-doodle use="var(--rule)"></css-doodle> -->
  </main>
</template>

<style scoped>
@import url(@/assets/styles/auth.css);

</style>
