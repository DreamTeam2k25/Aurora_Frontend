<script setup>
import { GlobalText, MiniGuildMembers, GlobalButton } from '@/components';
import { textGuild } from '@/utils';
</script>
<template>
    <div class="flex justify-around mt-[300px] p-5">
        <div>
            <div class="relative flex flex-col items-end justify-end">
                <div class="border-20 mb-14 rounded-full border-[#82B0D9] w-96">
                    <img src="../../../../assets/images/gremio.png" alt="">
                </div>
                <div class="absolute border-10 rounded-full border-white">
                    <img src="../../../../assets/images/alvorada_logo.png" alt="">
                </div>
            </div>
        </div>
        <div class="flex flex-col w-2/4 gap-6">
            <GlobalText v-for="texts, i in textGuild" :key="i" :width="texts.width" :text="texts.text"
                :color="texts.color" :size="texts.size" :weight="texts.weight" :spacing="texts.leading"></GlobalText>
            <MiniGuildMembers />
            <GlobalButton :icon="true" content="Ver Mais" width="w-48" />
        </div>
    </div>
</template>