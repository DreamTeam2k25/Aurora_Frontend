<script setup>
    import { GlobalButton, GlobalText } from '@/components';
    
    defineProps({
        isChat: {
            type: Boolean,
            default: false
        },
        user: {
            type: String,
            required: true,
            default: 'anonimo'
        },
        text: {
            type: String,
            default: 'no comment yet'
        }
    })
    

</script>
<template>
<section class="w-full flex justify-center items-center ">
    <div class="flex gap-3 w-2/5 p-3">
        <div class="mt-1">
            <img src="@/assets/images/perfil.png" alt="">
        </div>
        <div class="flex flex-col gap-3 w-full" v-if="!isChat">
            <h1 class="font-bold">{{ user }}</h1>
            <textarea placeholder="Escreva seu comentário..." class="border-[#c3c3c3] border outline-0 p-2 resize-none 2-full h-28 rounded-xl" />
            <GlobalButton content="Postar comentário" width="w-full" radius="rounded-xl"/>
        </div>
        <div class="w-full flex flex-col gap-1 border-b pb-7" v-else>
            <h1 class="font-bold">{{ user }}</h1>
            <GlobalText :text="text" spacing="leading-7" weight="font-normal" size="text-md" width="w-full"/>
        </div>
    </div>
</section>
</template>