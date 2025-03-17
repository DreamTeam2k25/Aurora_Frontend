<script setup>
import InformationCard from '@/components/global/cards/InformationCard.vue';
import GlobalText from '@/components/global/titles/GlobalText.vue';
import GlobalButton from '@/components/global/buttons/GlobalButton.vue';
import infoData from './info.js';
</script>

<template>
  <section class="w-full h-[40vw] md:h-[40vw]">
    <div class="min-w-[98%] h-full mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-5 md:gap-5">
      <div class="info">
        <div class="p-5 flex flex-col gap-10 w-full">
          <GlobalText 
            text="O Que Você Precisa Saber Sobre o IF?" 
            color="text-blue-600" 
            class="w-[95%]" 
          />
          <GlobalText
            text="Mudanças de horários, olimpíadas estudantis, segunda chamada, sábados letivos entre outros. É calouro? Veja os primeiros passos:"
            width="w-full md:w-4/5" 
            spacing="leading-7" 
            size="text-xl" 
            weight="font-medium" 
            text_align="text-justify"
            class="w-[95%]"
          />
          <GlobalButton 
            icon="true" 
            width="w-full sm:w-3/4 md:w-1/2 lg:w-[25%]" 
            content="Primeiros Passos" 
            color="#82B0D9" 
          />
        </div>
      </div>
      <div 
        v-for="(item, index) in infoData" 
        :key="index"
        :class="{'ml-auto md:w-1/2': index === 2, 'w-full': index !== 2}"
      >
        <InformationCard :infos="item" class="hCard" />
      </div>
    </div>
  </section>
</template>