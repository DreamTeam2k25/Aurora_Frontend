<script setup>
    defineProps({
        info: {
            type: Object,
            required: true,
            default: () => ({
            img: '',
            title: '',
            description: '',
            publishedAt: ''
        })
    }})

    function AlternateDate(date){
        const alternate = date.split('-')
        return `${alternate[2]}/${alternate[1]}/${alternate[0]}`
    }
</script>
<template>
    <div class="flex w-2/4 gap-5">
        <div class="w-36">
            <img :src="info.img" alt="" class="rounded-2xl">
        </div>
        <div class="flex flex-col justify-center gap-3">
            <h3 :style="{ fontWeight: 700 || 'normal' }" :class="'text-xl text-gray-900 line-clamp-2'">
                {{ info.title }}
            </h3>
            <p class="text-gray-600 text-sm line-clamp-2">
                {{ info.description }}
            </p>
            <div class="text-sm text-gray-800">
                Publicado em: {{  AlternateDate(info.publishedAt) }}
            </div>
        </div>
    </div>
</template>