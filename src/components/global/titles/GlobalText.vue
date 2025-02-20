<script setup>
    defineProps({
        text: {
            type: String,
            default: 'teste'
        },
        color: {
            type: String,
            default: 'text-blue'
        },
        has_gradient: {
            type: Boolean,
            default: false
        },
        gradient_type: {
            type: String,
            default: 'bg-gradient-to-r'
        },
        gradient_from:{
            type: String,
            default: 'from-black'
        },
        gradient_via: {
            type: String,
            default: ''
        },
        gradient_to:{
            type: String,
            default: 'to-blue-400'
        },
        from_large: {
            type: String,
            default: '',
        },
        via_large: {
            type: String,
            default: ''
        },
        to_large:{
            type: String,
            default: ''
        },
        weight: {
            type: String,
            default: 'font-bold'
        },
        size: {
            type: String,
            default: 'text-6xl'
        },
        spacing: {
            type: String,
            default: 'leading-25'
        },
        width: {
            type: String,
            default: 'w-2/5'
        },
        text_align: {
            type: String,
            default: 'text-start'
        }
    })
</script>
<template>
    <p :class="`${color} ${weight} ${size} ${spacing} ${width} ${text_align}`" v-if="!has_gradient">{{ text }}</p>
    <p :class="`text-transparent ${width} ${weight} ${size} ${spacing} ${text_align} ${gradient_type} ${gradient_from} ${from_large} ${gradient_via} ${via_large} ${gradient_to} ${to_large} bg-clip-text`" v-else>{{ text }}</p>
</template>
