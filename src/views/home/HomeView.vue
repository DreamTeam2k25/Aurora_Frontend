<script setup>
    import GlobalText from '@/components/global/titles/GlobalText.vue';
</script>
<template>
    <div class="p-5 flex flex-col gap-10">
        <GlobalText text="Sejam bem Vindos ao IFC Campus Araquari" :has_gradient="true"/>
        <GlobalText text="Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer" width="w-2/5" spacing="leading-7" size="text-md" weight="font-normal"/>
    </div>
    <div class="p-5 flex flex-col gap-10">
        <GlobalText text="O que você precisa saber sobre o IF?" color="text-blue-600" />
        <GlobalText text="Mudanças de horários, olimpiadas estudantis, segunda chamada, sábados letivos entre outros. É calouro? Veja os primeiros passos:" width="w-2/5" spacing="leading-7" size="text-xl" weight="font-bold" text_align="text-justify"/>
    </div>
</template>