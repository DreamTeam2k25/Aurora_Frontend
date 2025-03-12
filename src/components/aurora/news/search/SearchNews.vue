<script setup>
    import GlobalButton from '@/components/global/buttons/GlobalButton.vue';
    import Magnify from 'vue-material-design-icons/Magnify.vue'
</script>
<template>
    <div class="flex w-full gap-7 justify-center items-center p-5">
        <div class="flex gap-1 border border-[#C3C3C3] rounded-3xl p-[6px]  w-2/4">
            <Magnify class="ml-2"/>
            <input placeholder="Pesquisar" class=" w-full font-bold outline-0 placeholder:font-bold placeholder:text-black text-black " >
        </div>
        <div class="w-1/4 flex ">
            <GlobalButton background="bg-white" :search="true" content="Categorias"></GlobalButton>
            <GlobalButton background="bg-white" :search="true" content="Filtros"></GlobalButton>
        </div>
    </div>
</template>