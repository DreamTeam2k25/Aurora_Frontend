<script setup>
    import { GlobalButton } from '@/components';
    import { Navigation } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    defineProps({
        post: {
            type: Object,
            required: true,
            default: () => ({
                type: 'Agropecuária',
                covers: ["https://th.bing.com/th/id/R.47e099307c72b3c8b98cecd028a93bd7?rik=Ffm0wYsWHxGZeA&riu=http%3a%2f%2fnoset.com.br%2fwp-content%2fuploads%2f2016%2f09%2fgato-2.jpg&ehk=FH9enUmzg8ElklSWMMfepJThXqOE%2fdH1oSWFHrr6WDo%3d&risl=&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.47e099307c72b3c8b98cecd028a93bd7?rik=Ffm0wYsWHxGZeA&riu=http%3a%2f%2fnoset.com.br%2fwp-content%2fuploads%2f2016%2f09%2fgato-2.jpg&ehk=FH9enUmzg8ElklSWMMfepJThXqOE%2fdH1oSWFHrr6WDo%3d&risl=&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.47e099307c72b3c8b98cecd028a93bd7?rik=Ffm0wYsWHxGZeA&riu=http%3a%2f%2fnoset.com.br%2fwp-content%2fuploads%2f2016%2f09%2fgato-2.jpg&ehk=FH9enUmzg8ElklSWMMfepJThXqOE%2fdH1oSWFHrr6WDo%3d&risl=&pid=ImgRaw&r=0"],
                views: 0,
                commnents: 0,
                shared: 0
            })
        }
    })
</script>
<template >
    <div class="flex flex-col justify-center items-center gap-10">
        <div class="w-2/4">
            <Swiper :modules="[Navigation]"  :slides-per-view="1" class="h-96 rounded-xl"  navigation >
                <SwiperSlide v-for="imgs, i in post.covers" :key="i"  >
                    <img :src="imgs" alt="" class="rounded-xl object-cover ">
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="w-2/4 flex justify-between">
            <GlobalButton :content="post.type"/>
            <div class="flex gap-7">
                <div class="flex justify-center items-center gap-3">
                    <img src="https://auroramediastorage.s3.us-east-2.amazonaws.com/eye.png" alt="">
                    <p class="font-semibold">{{ post.views }}</p>
                </div>
                <div class="flex justify-center items-center gap-3">
                    <img src="https://auroramediastorage.s3.us-east-2.amazonaws.com/message.png" alt="">
                    <p class="font-semibold">{{ post.commnents }}</p>
                </div>
                <div class="flex justify-center items-center  gap-3">
                    <img src="https://auroramediastorage.s3.us-east-2.amazonaws.com/share.png" alt="">
                    <p class="font-semibold">{{ post.shared }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .swiper-button-next, .swiper-button-prev{
        color: white;
        background-color: #C7C7C7B0;
        height: 40px;
        width: 40px;
        border-radius: 9999px;
    }
    .swiper-button-next::after, .swiper-button-prev::after{
        font-size: 20px;
        font-weight: 900;
    }
</style>