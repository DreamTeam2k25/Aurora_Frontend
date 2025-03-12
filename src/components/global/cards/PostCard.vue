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
    },
    isfully: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div :class="!props.isfully ? 'rounded-[25px] overflow-hidden border border-gray-300 bg-white shadow-sm p-4 pt-6 pb-8 pl-4 w-[95%]' : 'h-96'">
        <div :class="!props.isfully ? 'relative h-53 w-full overflow-hidden rounded-[45px]' : 'h-full'" >
            <img :src="props.post.img" :alt="props.post.title" :class="!props.isfully ? 'h-full w-full object-cover rounded-[15px]' : 'h-full w-full object-cover rounded-[15px] absolute'"  />
            <div class="absolute bottom-[20px] left-5 z-10">
                <span style="font-weight: 600;" :class="!props.isfully ? 'bg-[#82B0D9] text-[#000] p-2 rounded-[15px] text-sm capitalize' : 'bg-[#347EBF] text-white p-2 rounded-[15px] text-sm capitalize' ">
                    {{ props.post.type }}
                </span>
                <h3 :style="{ fontWeight: 700 || 'normal' }" class='text-xl text-white line-clamp-2 mt-5' v-if="props.isfully">
                {{ props.post.title }}</h3>
            </div>
        </div>
        <div :class="'p-4 space-y-3'" v-if="!props.isfully">
            <h3 :style="{ fontWeight: 700 || 'normal' }" :class="!props.isfully ? 'text-xl text-gray-900 line-clamp-2' : 'text-xl text-white line-clamp-2'">
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