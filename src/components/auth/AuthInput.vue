<script setup>
import { computed, ref, reactive } from 'vue';
import { useAuthStore } from '@/stores';
const authStore = useAuthStore()
const emits = defineEmits([
    'change_auth'
])

const user = reactive({
    email: '',
    password: '',
    name: '',
    username: '',
})

const authData = ref([
    {title: 'Nome', placeholder: 'Insira seu Nome', data: '', login: false, register: true, page: 1},
    {title: 'Email', placeholder: 'Insira seu Email', data: '', login: false, register: true, page: 1},
    {title: 'Turma', placeholder: 'Insira sua Turma', data: '', login: false, register: true, page: 2},
    {title: 'Mátricula', placeholder: 'Insira sua matrícula', data: '', login: true, register: true, page: 2},
    {title: 'Senha', placeholder: 'Insira sua senha', data: '', login: true, register: true, page: 1},
])

const authMethod = ref([
    {method: 'Login', alternative_text: 'Não possui cadastro?', alternative_link: 'Cadastre-se', selected: true, function: () => {
        authMethod.value[0].selected = false
        authMethod.value[1].selected = true
        // authStore.Login(loginBody)
        emits('change_auth')

    }},
    {method: 'Cadastro', alternative_text: 'Já possui cadastro? Faça ', alternative_link: ' login', selected: false, function: () => {
        authMethod.value[1].selected = false
        authMethod.value[0].selected = true
        // authStore.CreateUser()
        emits('change_auth')
    }}
])

const check_auth = computed(()=>{

    if (authMethod.value[0].selected) {
        return authData.value.slice(3)
    }
    else {
        return authData.value.slice(0, 2).concat(authData.value[authData.value.length - 1])
    }
})

const createUser = (nome, email, senha) => {
    user.email = email
    user.name = nome
    user.password = senha
    user.username = nome
    console.log(user)
    authStore.CreateUser(user)
}

</script>

<template>
   <div class=" flex flex-col justify-between p-5 items-center gap-5 h-[500px]">
    <p class=" text-4xl font-bold text-[#0B6BBF]">{{ authMethod[0].selected ? authMethod[0].method : authMethod[1].method }}</p>

    <div class="flex flex-col">
    <div v-for="(data, index) in check_auth" :key="index"  class="p-2">
        <p class="p-2">{{ data.title }}:</p>
        <div>
            <input class=" border-[0.1px] border-[#C7C7C7] w-[312px] max-md:w-12/12 max-md:text-[13px] py-3 px-5 rounded-full outline-0" type="text" v-model="data.data" :placeholder="data.placeholder">
        </div>
    </div>

    </div>

    <div class="flex flex-col items-center gap-4">
        <button @click="authMethod[0].selected ? authStore.Login() : createUser(authData[0].data, authData[1].data, authData[4].data)" class="py-3 px-8 min-w-32 w-auto rounded-full font-bold bg-[#82B0D9]">{{ authMethod[0].selected ? 'Entrar' : 'Cadastre-se' }}</button>
        <span @click="authMethod[0].selected ? authMethod[0].function() : authMethod[1].function()" class="flex select-none cursor-pointer gap-1 text-[13px]"><p>{{ authMethod[0].selected ? authMethod[0].alternative_text : authMethod[1].alternative_text }} </p> <p class="text-[#0455BF]">{{ authMethod[0].selected ? authMethod[0].alternative_link : authMethod[1].alternative_link }}</p></span>
    </div>
   </div>
</template>