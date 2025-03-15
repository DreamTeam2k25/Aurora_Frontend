<script setup>
    import { GlobalText } from '@/components';
</script>
<template>
    <div class="w-full md:w-1/2 flex flex-col gap-5">
        <GlobalText :has_gradient="true" text="Sejam Bem Vindos ao Campus IFC Araquari" width="w-full" size="text-7xl"/>
        <GlobalText :has_gradient="false" text="Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer" size="text-lg" spacing="leading-7" width="w-3/4" weight="font-normal" text_align="text-justify"/>
    </div>
</template>