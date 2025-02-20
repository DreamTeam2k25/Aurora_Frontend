<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true,
        default: () => ({
            img: '',
            type: 'geral',
            title: '',
            description: '',
            publishedAt: ''
        })
    }
})
</script>

<template>
    <div class="rounded-[25px] overflow-hidden border border-gray-300 bg-white shadow-sm p-4 pt-6 pb-8 pl-4 w-[95%]">
        <div class="relative h-53 w-full overflow-hidden rounded-[45px]">
            <img :src="props.post.img" :alt="props.post.title" class="h-full w-full object-cover rounded-[15px]" />
            <div class="absolute bottom-[20px] left-7 z-10">
                <span style="font-weight: 600;" class="bg-[#82B0D9] text-[#000] p-2 rounded-[15px] text-sm capitalize ">
                    {{ props.post.type }}
                </span>
            </div>
        </div>
        <div class="p-4 space-y-3">

            <h3 :style="{ fontWeight: 700 || 'normal' }" class="text-xl text-gray-900 line-clamp-2">
                {{ props.post.title }}
            </h3>


            <p class="text-gray-600 text-sm line-clamp-2">
                {{ props.post.description }}
            </p>


            <div class="text-sm text-gray-500">
                Publicado em: {{ props.post.publishedAt }}
            </div>
        </div>
    </div>
</template>