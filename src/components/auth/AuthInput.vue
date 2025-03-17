<script setup>
import { ref } from 'vue';


const emits = defineEmits([
    'change_auth'
])

const authData = [
    {title: 'Mátricula', placeholder: 'Insira sua matrícula', data: ''},
    {title: 'Senha', placeholder: 'Insira sua senha', data: ''},
]

const authMethod = ref([
    {method: 'login', alternative_text: 'Não possui cadastro?', alternative_link: 'Cadastre-se', selected: true, function: () => {
        authMethod.value[0].selected = false
        authMethod.value[1].selected = true
        emits('change_auth')
    }},
    {method: 'register', alternative_text: 'Já possui cadastro? Faça ', alternative_link: ' login', selected: false, function: () => {
        authMethod.value[1].selected = false
        authMethod.value[0].selected = true
        emits('change_auth')
    }}
])
</script>

<template>
   <div class=" flex flex-col justify-between p-5 items-center gap-5 h-[500px]">
    <p class=" text-4xl font-bold text-[#0B6BBF]">{{ authMethod[0].selected ? authMethod[0].method : authMethod[1].method }}</p>

    <div class="flex flex-col">
    <div v-for="(data, index) in authData" :key="index" class="p-2">
        <p class="p-2">{{ data.title }}:</p>
        <div>
            <input class=" border-[0.1px] border-[#C7C7C7] w-[312px] max-md:w-12/12 max-md:text-[13px] py-3 px-5 rounded-full outline-0" type="text" :placeholder="data.placeholder">
        </div>
    </div>

    </div>

    <div class="flex flex-col items-center gap-4">
        <button class="py-3 px-8 min-w-32 w-auto rounded-full font-bold bg-[#82B0D9]">{{ authMethod[0].selected ? 'Entrar' : 'Cadastre-se' }}</button>
        <span @click="authMethod[0].selected ? authMethod[0].function() : authMethod[1].function()" class="flex select-none cursor-pointer gap-1 text-[13px]"><p>{{ authMethod[0].selected ? authMethod[0].alternative_text : authMethod[1].alternative_text }} </p> <p class="text-[#0455BF]">{{ authMethod[0].selected ? authMethod[0].alternative_link : authMethod[1].alternative_link }}</p></span>
    </div>
   </div>
</template>

<style scoped>

</style>