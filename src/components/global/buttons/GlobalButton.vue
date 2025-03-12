<script setup>
import { onMounted, ref } from 'vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'

const props = defineProps({
    'color': {
        type: String,
        default: 'text-black'
    },
    'content': {
        type: String,
        default: 'button'
    },
    'weight': {
        type: String,
        default: 'font-bold'
    },
    'background': {
        type: String,
        default: 'bg-[#82B0D9]'
    },
    'width': {
        type: String,
        default: 'w-auto'
    },
    'radius': {
        type: String,
        default: 'rounded-4xl'
    },
    'icon': {
        type: Boolean,
        default: false
    },
    'block': {
        type: Boolean,
        default: false
    },
    'search': {
        type: Boolean,
        default: false
    }
})

const padding = ref('px-6')

onMounted(() => {
    if (props.icon) padding.value = 'pl-6 pr-4';
})
</script>

<template>
    <button
        :class="`${props.color} ${props.weight} ${props.background} ${padding} ${props.width} ${props.radius} py-2 cursor-pointer font-poppins flex justify-center items-center`"
        @click="$emit('evento')">
        <p>{{ props.content }}</p>
        <ChevronRight v-if="props.icon" class="ml-1.5" />
        <ChevronDown v-if="props.search" class="ml-1.5"/>
    </button>
</template>