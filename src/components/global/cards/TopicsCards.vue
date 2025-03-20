<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Integração"
    },
    content:{
        type: String,
        default: "As simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm WKdjlkdnaddna sdjnawlkdjwlqk djmqwlkjmqwkl dnqwlkAs simply dummy"
    },
    color: {
        type: String,
        default: "bg-[#0B6BBF]"
    }
})
</script>

<template>
    <div class="border border-gray-300 h-80 p-8 rounded-xl flex flex-col gap-6 w-2xs">
        <div class="flex items-center">
            <div :class="`rounded-full w-4 h-4 flex justify-center items-center ${props.color}`"></div>
            <span class="font-semibold text-xl ml-2">{{ props.title }}</span>
        </div>
        <div class="flex flex-wrap gap-4 w-auto">
            <p class="font-medium">{{ props.content }}</p>
        </div>
    </div>
</template>
