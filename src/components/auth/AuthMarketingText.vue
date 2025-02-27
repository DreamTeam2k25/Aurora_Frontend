
<script setup>
const props = defineProps({
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
    hasbeforecontent: {
        type: Boolean,
        default: true
    },
    align_items: {
        type: String,
        default: 'start'
    }
})
</script>

<template>
 <div :class="`bg-[#347EBF] flex flex-col  p-10 items-${props.align_items}`">
    <h2 :class="` text-2xl font-semibold text-white leading-12`" >{{ props.firstShortText }}</h2>
    <h1  :class="` text-6xl font-semibold text-[#82B0D9] leading-20 ${props.hasbeforecontent ? ` texto-first` : ``} `">{{ props.firstMainText }}</h1>
    <h1  :class="` text-6xl font-semibold text-[#82B0D9] leading-20 ${props.hasbeforecontent ? ` texto-second` : ``} `">{{ props.secondMainText }}</h1>
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