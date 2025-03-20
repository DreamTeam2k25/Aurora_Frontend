<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { AuthMarketingText, AuthInput } from '@/components'
import { useAuthStore, useStudentsStore } from '@/stores'
import { findData } from '@/utils'


const authStore = useAuthStore()
const firstEntrance = ref(0)
const isLogin = ref(true)
const delayedLogin = ref(isLogin.value)

watch(isLogin, (newValue) => {
  setTimeout(() => {
    delayedLogin.value = newValue
  }, 2000)
})



const textContent = computed(() => ({
    firstShortText: {
        content: isLogin.value ? 'Educação' : 'Curso integrados de'
    },
    firstMainText: {
        content: isLogin.value ? 'pública' : 'agropecuária,'
    },
    secondMainText: {
        content: isLogin.value ? 'gratuita' : 'informática e'
    },
    thirdMainText: {
        content: isLogin.value ? 'qualidade' : 'química'
    },
    secondShortText: {
        content: '#VemViveroIFC'
    },
}));

const doAuth = (data) => {
  if (isLogin.value) {
    console.log({
      email: findData(data, 'Email').data,
      password: findData(data, 'Senha').data,
      name: findData(data, 'Nome').data,
      username: findData(data, 'Nome').data
    })
    authStore.Login({email: findData(data, 'Email').data, password: findData(data, 'Senha').data})
  } else {
    authStore.CreateUser({
      email: findData(data, 'Email').data,
      password: findData(data, 'Senha').data,
      name: findData(data, 'Nome').data,
      username: findData(data, 'Nome').data
    })
  }
}

</script>
<template>
  <main class="max-h-dvh h-dvh relative flex overflow-hidden">
    <div :class="`max-lg:visible hidden wave`"></div>
    <div class="flex absolute min-w-dvw max-lg:hidden">
      <AuthMarketingText :has-before-content="isLogin" :is-login="isLogin" :first-short-text="textContent.firstShortText.content" :first-main-text="textContent.firstMainText.content" :second-main-text="textContent.secondMainText.content" :third-main-text="textContent.thirdMainText.content" :second-short-text="textContent.secondShortText.content" :class="` z-50 ${firstEntrance == 0 ? 'bottom-[-35rem] left-[5rem]' : !isLogin ? 'bottom-[-33rem] right-[5rem] register' : 'bottom-[-35rem] left-[5rem] login'} `" />
      <div
        
        :class="`${firstEntrance == 0 ? 'wrapper' : !isLogin ? 'wrapper-animation-back' : 'wrapper-animation'} z-30`"
      >
       
        <div :class="`${firstEntrance == 0 ? 'wave' : !isLogin ? 'wave-animation-back' : 'wave-animation'}`"></div>
      </div>
    </div>
    <div class="flex items-center relative w-[100vw] justify-center">
      <AuthInput @auth="doAuth" :button_text="isLogin ? 'Entrar' : 'Cadastrar-se'" :alternative_text="isLogin ? 'Não possui cadastro?' : 'Já possui cadastro? '" :alternative_link="isLogin ? 'Cadastre-se' : 'Faça login'" :auth-method="isLogin ? 'Login' : 'Registro'" :fields="isLogin ? ['email', 'senha'] : ['email', 'senha', 'nome']"
        :class="`z-50 absolute max-lg:relative duration-300 ${delayedLogin ? ' right-[10%] max-lg:right-0 max-xl:right-[5%]' : ' left-[10%] max-xl:left-[5%] max-lg:left-0 '} ${firstEntrance == 0 ? '' : !isLogin ? 'animations' : 'animations-back'}`"
        @change_auth="((isLogin = !isLogin), console.log(isLogin), firstEntrance++)"
      />
    </div>
    
    <!-- <css-doodle use="var(--rule)"></css-doodle> -->
  </main>
</template>

<style scoped>
@import url(@/assets/styles/auth.css);
css-doodle {
  --rule: (
    : doodle {@grid: 1x1; width: 100%; height: 100%; position: absolute; z-index: -1;}
      background: white; clip-path: ellipse(75% 50% at 25% center) ; background-color: #2b72c9;
  );
}
</style>
