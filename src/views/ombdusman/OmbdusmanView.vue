<script setup>
import { GlobalText, GlobalButton, ResolveCard, SetPagination } from '@/components';
import { onMounted, reactive, ref } from 'vue';
import { useAuthStore, useOmbdusmanStore } from '@/stores';
import { amountOfPages } from '@/utils';

const AuthStore = useAuthStore()
const OmbdusmanStore = useOmbdusmanStore()
const pages = ref(null)

const description = reactive({
    user: AuthStore.user.email,
    description: '',
})

onMounted(async () => {
    await OmbdusmanStore.GetOmbdusman()
    pages.value = amountOfPages(OmbdusmanStore.state.count, 9)
})  

</script>
<template>
    <section class="flex flex-col p-10 gap-20">
        <div class="flex justify-center items-center flex-col gap-5">
            <GlobalText text="Ouvidoria" text_align="text-center" color="text-[#0455BF]" size="text-3xl"
                spacing="leading-3" width="w-full" />
            <GlobalText text_align="text-center" text="Deixe aqui seus comentarios, reclamações, sugestões ou dicas"
                width="w-full" color="text-[#82B0D9]" size="text-xl" spacing="leading-7" />
        </div>
        <div class="flex flex-col justify-center items-center gap-10">
            <textarea placeholder="Escreva aqui seu feedback..."
                class="border border-[#C7C7C7] rounded-3xl p-7 resize-none w-2/4 h-80 placeholder:text-[#444444]"
                v-model="description.description" />
            <GlobalButton content="Enviar" padding="p-3" width="w-1/12"
                @click="OmbdusmanStore.CreateOmbudsman(description), description.description = '' " />
        </div>
        <div class="flex justify-center items-center flex-col gap-20">
            <div>
                <h1 class="text-center text-3xl font-bold">Alguns Feedbacks</h1>
            </div>
            <div class="flex gap-5 flex-wrap justify-center w-full ">
                <ResolveCard v-for="ombudsman in OmbdusmanStore.ombdusman" :key="ombudsman.id" :is_resolve="ombudsman.is_resolved" :desc="ombudsman.description" />
            </div>
            <SetPagination :store_method="OmbdusmanStore.GetOmbdusman" :store_variable="OmbdusmanStore.state.ombdusman" :pages="pages" @setPage="setPage" @setPageByChoose="setPageByChoose" />
        </div>
    </section>
</template>