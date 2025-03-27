<script setup>
const props = defineProps({
    content: {
        type: String,
    },
    description: {
        type: String
    },
    icon: {
        type: String
    }
})
</script>
<template>
<main class="w-dvw z-[60] h-dvh flex justify-center items-center absolute bg-[rgba(0,0,0,0.5)]">
    <div class=" w-[400px] h-[250px] bg-white rounded-2xl flex items-center justify-center flex-col gap-5 relative">
        <span :class="`${props.icon} text-[60px] text-[#0455BF]`"></span>
        <p :class="`text-2xl text-[#0455BF]`">{{ props.content }}</p>
        <p class=" text-md text-center"> {{ props.description }} </p>
        <div :class="`rounded-b-2xl loading h-3 bg-[#0455BF] absolute bottom-0 left-0`"></div>
    </div>
</main>
</template>

<style scoped>
.loading {
    animation: load 3s 1 ease-in-out;
}

@keyframes load {
    from {
        width: 10%;
    }
    to {
        width: 100%;
    }
}
</style>