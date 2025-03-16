
<script setup>
import { computed, reactive } from 'vue';


const props = defineProps({
    isLogin: {
        type: Boolean,
        default: true
    }
})

const text_content = computed(() => ({
    firstShortText: {
        content: props.isLogin ? 'Educação' : 'Curso integrados de'
    },
    firstMainText: {
        content: props.isLogin ? 'pública' : 'agropecuária,'
    },
    secondMainText: {
        content: props.isLogin ? 'gratuita' : 'informática e'
    },
    thirdMainText: {
        content: props.isLogin ? 'qualidade' : 'química'
    },
    secondShortText: {
        content: '#VemViveroIFC'
    },
    hasbeforecontent: props.isLogin ? true : false,
}));
</script>

<template>
 <div :class="`flex flex-col absolute p-10 items-${ props.isLogin ? 'start' : 'end'}`">
    <h2 :class="` text-2xl font-semibold text-white leading-12`" >{{ text_content.firstShortText.content }}</h2>
    <h1  :class="` text-6xl font-semibold text-[#82B0D9] leading-20 ${ props.isLogin ? ` texto-first` : ``} `">{{ text_content.firstMainText.content }}</h1>
    <h1  :class="` text-6xl font-semibold text-[#82B0D9] leading-20 ${props.isLogin ? ` texto-second` : ``} `">{{ text_content.secondMainText.content }}</h1>
    <h1  :class="` text-6xl font-semibold text-[#82B0D9] leading-20`">{{ text_content.thirdMainText.content }}</h1>
    <h2  :class="` text-2xl font-semibold leading-14 text-white`">{{ text_content.secondShortText.content }}</h2>
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