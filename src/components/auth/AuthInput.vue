<script setup>
import { computed, ref } from 'vue';

const emits = defineEmits([
    'change_auth', 'auth'
])

const props = defineProps({
   fields: {
    type: Array,
    default: ['nome', 'email', 'turma', 'matricula', 'senha']
   },
   authMethod: {
    type: String,
    default: 'Login'
   },
   alternative_text: {
    type: String,
    default: 'Não possui cadastro?'
   },
   alternative_link: {
    type: String,
    default: 'Cadastre-se'
   },
   button_text: {
    type: String,
    default: 'Entrar'
   }
})

const authData = ref([
    {title: 'Nome', placeholder: 'Insira seu Nome', data: '', login: false, register: true, field_type: 'text'},
    {title: 'Email', placeholder: 'Insira seu Email', data: '', login: false, register: true, field_type: 'text'},
    {title: 'Turma', placeholder: 'Insira sua Turma', data: '', login: false, register: true, field_type: 'select'},
    {title: 'Matrícula', placeholder: 'Insira sua matrícula', data: '', login: true, register: true, field_type: 'text'},
    {title: 'Senha', placeholder: 'Insira sua senha', data: '', login: true, register: true, field_type: 'text'},
])

const returnFields = computed(()=> {
    return authData.value.filter((s) => props.fields.find((e) => e == s.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))
})

const classes = ref([
    '1info1',
    '1info2',
    '1info3',
    '2info1',
    '2info2',
    '2info3',
    '3info1',
    '3info2',
    '3info3',
    '1agro1',
    '1agro2',
    '1agro3',
    '2agro1',
    '2agro2',
    '2agro3',
    '3agro1',
    '3agro2',
    '3agro3',
    '1quimi',
    '2quimi',
    '3quimi'
]);

</script>

<template>
   <div class=" flex flex-col justify-between p-5 items-center gap-5 h-[500px]">
    <p class=" text-4xl font-bold text-[#0B6BBF]">{{ props.authMethod }}</p>

    <div class="flex flex-col">
    <div v-for="(data, index) in returnFields" :key="index" class="p-2">
        
        <p class="p-2">{{ data.title }}:</p>
        <div>
            <input v-if="data.field_type == 'text'" class=" border-[0.1px] border-[#C7C7C7] w-[312px] max-md:w-12/12 max-md:text-[13px] py-3 px-5 rounded-full outline-0" v-model="data.data" :placeholder="data.placeholder">

            <div class="border-[0.1px] border-[#C7C7C7] w-[312px] max-md:w-12/12 max-md:text-[13px] py-3 px-5 rounded-full" v-else>
            <select v-model="authData[2].data" class="w-full outline-0">
                <option v-for="(turma, index) in classes" :value="turma">{{ turma }}</option>
            </select>
            </div>
        </div>

    </div>

    </div>

    <div class="flex flex-col items-center gap-4">
        <button @click="emits('auth', authData)" class="py-3 px-8 min-w-32 w-auto rounded-full font-bold bg-[#82B0D9]">{{ props.button_text }}</button>
        <span @click="emits('change_auth')" class="flex select-none cursor-pointer gap-1 text-[13px]"><p>{{ props.alternative_text }} </p> <p class="text-[#0455BF]">{{ props.alternative_link }}</p></span>
    </div>
   </div>
</template>