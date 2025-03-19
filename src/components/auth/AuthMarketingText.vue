
<script setup>
import { computed, reactive } from 'vue';


const props = defineProps({
    isLogin: {
        type: Boolean,
        default: true
    },
    firstShortText: {
       type: String,
       default: 'Educação'
    },
    firstMainText: {
       type: String,
       default: 'pública'
    },
    secondMainText: {
       type: String,
       default: 'gratuita'
    },
    thirdMainText: {
       type: String,
       default: 'qualidade'
    },
    secondShortText: {
       type: String,
       default: '#VemViveroIFC'
    },
    hasBeforeContent: {
        type: Boolean,
        default: true,
    }
})

</script>

<template>
 <div :class="`flex flex-col absolute p-10 items-${ props.isLogin ? 'start' : 'end'}`">
    <h2 :class="` text-2xl font-semibold text-white leading-12`" >{{ props.firstShortText }}</h2>
    <h1  :class="` text-6xl font-semibold text-[#82B0D9] leading-20 ${ props.hasBeforeContent ? ` texto-first` : ``} `">{{props.firstMainText }}</h1>
    <h1  :class="` text-6xl font-semibold text-[#82B0D9] leading-20 ${props.hasBeforeContent ? ` texto-second` : ``} `">{{ props.secondMainText }}</h1>
    <h1  :class="` text-6xl font-semibold text-[#82B0D9] leading-20`">{{ props.thirdMainText }}</h1>
    <h2  :class="` text-2xl font-semibold leading-14 text-white`">{{ props.secondShortText }}</h2>
 </div>
</template>


<style scoped>

.texto-first::after {
    content: ',';
    color: white;
}

.texto-second::after {
    content: ' e de';
    color: white;
}
</style>