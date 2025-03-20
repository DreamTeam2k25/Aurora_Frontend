<script setup>
    defineProps({
        is_resolve: {
            type: Boolean,
            default: false
        },
        desc: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <div class="border border-[#c3c3c3] rounded-2xl w-[30%] h-64">
        <div class="flex items-center py-4 gap-2 ms-5">
            <div class="w-2 h-2  rounded-full" :class="is_resolve ? 'bg-green-600' : 'bg-red-600'"></div>
            <p class="font-bold">{{ is_resolve ? 'Resolvido' : 'Não Resolvido' }}</p>
        </div>
        <div class="py-2 ms-5">
            <p >{{ desc }}</p>
        </div>
    </div>
</template>