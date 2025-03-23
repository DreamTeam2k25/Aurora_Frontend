<script setup>
import { computed, onMounted, ref } from 'vue'
const props = defineProps({
    pages: {
        type: Number
    },
    page: {
        type: Number
    },
    store_method: {
        type: Function
    },
    store_variable: {
        type: Array
    }
})

const page = ref(1)


const pageShown = computed(()=>{
    if (props.pages > 3) {
    if (page.value > 1 && page.value < props.pages) {
   return [page.value - 1, page.value, page.value + 1]
    } else if (page.value > 1 && page.value == props.pages) {
        return [page.value -2, page.value -1, page.value]
    } else {
        return [page.value, page.value + 1, page.value + 2]
    }
    } else {
        return props.pages
    }
})

const setPage = (data) => {

if (data == 'toward') {
    page.value < props.pages ? page.value++ : ''
    props.store_variable = []
    props.store_method(page.value)
} else {
    page.value > 1 ? page.value-- : ''
    props.store_variable = []
    props.store_method(page.value)
}
}

const setPageByChoose = (data) => {
props.store_variable = []
page.value = data
props.store_method(page.value)
}
</script>
<template>
<div v-if="props.pages > 1" class=" flex gap-1 select-none cursor-pointer">
                <div @click="page > 1 ? setPage('backward') : ''" :class="`min-h-[36px] min-w-[36px] border-2 ${page > 1 ? 'active:bg-[#2b72c9] active:text-white' : 'brightness-0'} border-[#2b72c9] text-[#2b72c9] flex items-center justify-center `">
                <span class="mdi mdi-arrow-left text-xl duration-200"></span>
                </div>
                <div v-for="item in pageShown" @click="setPageByChoose(item)" :class="`border-2 flex items-center justify-center min-w-[36px] min-h-[36px] py-1 px-3 duration-200 border-[#2b72c9] text-[#2b72c9] ${item == page ?'bg-[#2b72c9] text-white' : ' bg-transparent' }`"> {{ item }}</div>
                <div @click="page < props.pages ? setPage('toward') : ''" :class="`${page < props.pages ? 'active:bg-[#2b72c9] active:text-white' : ' brightness-0'} min-h-[36px] min-w-[36px] border-2 border-[#2b72c9] text-[#2b72c9] flex items-center justify-center `">

                <span class="mdi mdi-arrow-right text-xl duration-200"></span>
                </div>
            </div> 
</template>