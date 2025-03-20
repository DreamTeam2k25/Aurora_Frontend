<script setup>
import { TopicsCards } from '@/components'
import { ref } from 'vue'

const infoData = ref([
  {
    title: 'integração',
    content:
      'inedvuidmfiun n fnuisn  unuiyu yb yubu iuniuiu ybyubuy nnoo nuinui nuinui iiuniu inimimiubyub ubyubyub uybyubyub ubuybub uyb ubyub ubyubyub uybyubyub ubuybub uyb ',
    color: 'bg-[#6B6BFF]',
  },
  {
    title: 'Paradinha',
    content:
      'inedvuidmpaçofdjishnjg opfjasioomop ioniubni moinoiniubycderxex cxeexwexsdcesxes esxesyub uybyubyub ubuybub uyb',
  },
  {
    title: 'integração',
    content:
      'inedvuidmfiun n fnuisn  unuiyu yb yubu iuniuiu ybyubuy nnoo nuinui nuinui iiuniu inimimiubyub ubyubyub uybyubyub ubuybub uyb ubyub ubyubyub uybyubyub ubuybub uyb  ',
    color: 'bg-[#6B6BFF]',
  },
  {
    title: 'integração',
    content:
      'inedvuidmfiun n fnuisn  unuiyu yb yubu iuniuiu ybyubuy nnoo nuinui nuinui iiuniu inimimiubyub ubyubyub uybyubyub ubuybub uyb ubyub ubyubyub uybyubyub ubuybub uyb  ',
    color: 'bg-[#6B6BFF]',
  },
  {
    title: 'integração',
    content:
      'inedvuidmfiun n fnuisn  unuiyu yb yubu iuniuiu ybyubuy nnoo nuinui nuinui iiuniu inimimiubyub ubyubyub uybyubyub ubuybub uyb ubyub ubyubyub uybyubyub ubuybub uyb  ',
    color: 'bg-[#6B6BFF]',
  },
])
</script>

<template>
  <div class="flex flex-wrap w-3/4 justify-end my-15">
    <div v-for="(item, index) in infoData" :key="index" :class="`w-auto m-3 ${(index === 0) ? 'ml-[10%]' : ''}`">
      <TopicsCards :color="item.color" :title="item.title" :content="item.content"/>
    </div>
  </div>
</template>