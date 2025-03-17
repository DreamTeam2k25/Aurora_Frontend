<script setup>
import { GlobalText, MiniGuildMembers, GlobalButton } from '@/components';

defineProps({
    guild: {
        type: URL,
        required:true,
        default: null
    },
    logo: {
        type: URL,
        required: true,
        default: null
        
    },
    is_actual_guild: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        required: true,
        default: 'Alvorada'
    },
    subtitle: {
        type: String,
        required: true,
        default: 'Atual chapa do grêmio estudantil'
    },
    description: {
        type: String,
        required: true,
        default: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, reprehenderit quo ex nobis enim qui tempore iure, officia recusandae beatae voluptatem ipsa sunt laudantium nisi. Non officiis provident eligendi ab?'
    }
})
</script>
<template>
    <div class="flex justify-center items-center gap-[100px] mt-[300px] p-5">
        <div >
            <div class="relative flex flex-col items-end justify-end">
                <div class="border-20 mb-14 rounded-full border-[#82B0D9] w-96">
                    <img src="../../../../assets/images/gremio.png" alt="" v-if="!guild">
                    <img :src="guild" alt="" v-else>
                </div>
                <div class="absolute border-10 rounded-full border-white">
                    <img src="../../../../assets/images/alvorada_logo.png" alt="" v-if="!logo">
                    <img :src="logo" alt="" v-else>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-2/4 gap-6">
            <GlobalText :text="title" :color="is_actual_guild ? 'text-[#0455BF]' : 'text-[#347EBF]'" :size="is_actual_guild ? 'text-[50px]' : 'text-3xl' " spacing="leading-10" width="w-full"></GlobalText>
            <GlobalText :text="subtitle" size="text-lg " weight="font-semibold" spacing="leading-7" width="w-full"></GlobalText>
            <GlobalText :text="description" size="text-md " weight="font-normal" spacing="leading-7" width="w-full"></GlobalText>
            <MiniGuildMembers  v-if="is_actual_guild"/>
            <GlobalButton :icon="true" content="Ver Mais" width="w-48" v-if="is_actual_guild"/>
        </div>
    </div>
</template>