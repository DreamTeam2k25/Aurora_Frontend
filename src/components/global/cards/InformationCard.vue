<script setup>
const props = defineProps({
    infos: {
        type: Object,
        required: true,
        default: () => ({
            title: '',
            description: '',
            icon: Object,
            color: '#0B6BBF',
            fontWeigth: "",
        })
    }
})
</script>

<template>
    <div class="border border-gray-300 p-4 rounded-xl flex flex-col gap-6">
        <div class="p-2 rounded-xl w-12 h-10 flex justify-center items-center" :style="{ backgroundColor: props.infos.color }">
            <component :is="props.infos.icon" class="text-white" />
        </div>
        <div class="flex flex-col gap-4">
            <h3 class="font-bold">{{ props.infos.title }}</h3>
            <p class="font-medium">{{ props.infos.description }}</p>
        </div>
    </div>
</template>
