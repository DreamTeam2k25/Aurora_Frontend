<script setup>
    import { GlobalText, GlobalButton } from '@/components';
    import { reactive } from 'vue';
    import { useAuthStore } from '@/stores';

    const AuthStore = useAuthStore()

    const description = reactive({
        user: AuthStore.user.email,
        description: ''
    })


</script>
<template>
<section class="flex flex-col p-10 gap-10">
    <div class="flex justify-center items-center flex-col gap-5">
        <GlobalText text="Ouvidoria" text_align="text-center" color="text-[#0455BF]" size="text-3xl" spacing="leading-3" width="w-full"/>
        <GlobalText text_align="text-center" text="Deixe aqui seus comentarios, reclamações, sugestões ou dicas" width="w-full" color="text-[#82B0D9]" size="text-xl" spacing="leading-7"/>
    </div>  
    <div class="flex flex-col justify-center items-center gap-10">
        <textarea placeholder="Escreva aqui seu feedback..." class="border border-[#C7C7C7] rounded-3xl p-7 resize-none w-2/4 h-80 placeholder:text-[#444444]" v-model="description.description"/>
        <GlobalButton content="Enviar" padding="p-3" width="w-1/12"/>
    </div>
</section>
</template>