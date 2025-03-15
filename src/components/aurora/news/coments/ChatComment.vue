<script setup>
    import { GlobalButton } from '@/components';

    defineProps({
        isChat: {
            type: Boolean,
            default: false
        }
    })
    

</script>
<template>
    <div class="border p-5 flex flex-col justify-center items-center">
        <div class="flex w-[47%] gap-3 leading-5">
            <img src="@/assets/images/perfil.png"  alt="">
            <h1 class="font-bold">teste</h1>
        </div>
        <div class="flex flex-col gap-2 w-2/5">
            <textarea placeholder="Escreva seu comentário..." class="border-[#c3c3c3] border outline-0 p-2 resize-none 2-full h-28 rounded-xl" />
            <GlobalButton content="Postar comentário" width="w-full" radius="rounded-xl"/>
        </div>
    </div>
</template>