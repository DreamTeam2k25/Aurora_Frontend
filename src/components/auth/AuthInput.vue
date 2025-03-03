<script setup>

const authData = [
    {title: 'Mátricula', placeholder: 'Insira sua matrícula', data: ''},
    {title: 'Senha', placeholder: 'Insira sua senha', data: ''},
]

const authMethod = [
    {method: 'login', alternative_text: 'Já possui cadastro? Faça', alternative_link: 'login', selected: true, function: () => {}},
    {method: 'register', alternative_text: 'Não possui cadastro?', alternative_link: ' Cadastra-se', selected: false, function: () => {}}
]
</script>

<template>
   <div class=" flex flex-col justify-between p-5 items-center gap-5">
    <p class=" text-4xl font-bold text-[#0B6BBF]">{{ authMethod[0].selected ? authMethod[0].method : authMethod[1].method }}</p>

    <div class="flex flex-col">
    <div v-for="(data, index) in authData" :key="index" class="p-2">
        <p class="p-2">{{ data.title }}:</p>
        <div>
            <input class=" border-[0.1px] border-[#C7C7C7] w-[312px] py-3 px-5 rounded-full outline-0" type="text" :placeholder="data.placeholder">
        </div>
    </div>

    </div>

    <div class="flex flex-col items-center gap-4">
        <button class="py-3 px-8 w-32 rounded-full font-bold bg-[#82B0D9]">{{ authMethod[0].selected ? 'Entrar' : 'Cadastre-se' }}</button>
        <div class="flex gap-1 text-[13px]"><p>{{ authMethod[0].selected ? authMethod[0].alternative_text : authMethod[1].alternative_text }} </p> <p class="text-[#0455BF]">{{ authMethod[0].selected ? authMethod[0].alternative_link : authMethod[1].alternative_link }}</p></div>
    </div>
   </div>
</template>

<style scoped>

</style>