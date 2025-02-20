<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PostCard from "./PostCard.vue";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";

const posts = ref([
    {
        img: "https://th.bing.com/th/id/R.47e099307c72b3c8b98cecd028a93bd7?rik=Ffm0wYsWHxGZeA&riu=http%3a%2f%2fnoset.com.br%2fwp-content%2fuploads%2f2016%2f09%2fgato-2.jpg&ehk=FH9enUmzg8ElklSWMMfepJThXqOE%2fdH1oSWFHrr6WDo%3d&risl=&pid=ImgRaw&r=0",
        type: "tecnologia",
        title: "Novas Tendências em IA",
        description: "A inteligência artificial está revolucionando o mundo.",
        publishedAt: "20 de Fevereiro, 2025",
    },
    {
        img: "https://th.bing.com/th/id/R.47e099307c72b3c8b98cecd028a93bd7?rik=Ffm0wYsWHxGZeA&riu=http%3a%2f%2fnoset.com.br%2fwp-content%2fuploads%2f2016%2f09%2fgato-2.jpg&ehk=FH9enUmzg8ElklSWMMfepJThXqOE%2fdH1oSWFHrr6WDo%3d&risl=&pid=ImgRaw&r=0",
        type: "negócios",
        title: "O Futuro do Trabalho Remoto",
        description: "Como as empresas estão se adaptando ao novo normal.",
        publishedAt: "18 de Fevereiro, 2025",
    },
    {
        img: "https://th.bing.com/th/id/R.47e099307c72b3c8b98cecd028a93bd7?rik=Ffm0wYsWHxGZeA&riu=http%3a%2f%2fnoset.com.br%2fwp-content%2fuploads%2f2016%2f09%2fgato-2.jpg&ehk=FH9enUmzg8ElklSWMMfepJThXqOE%2fdH1oSWFHrr6WDo%3d&risl=&pid=ImgRaw&r=0",
        type: "saúde",
        title: "Dicas para uma Vida Saudável",
        description: "Alimentação balanceada e exercícios fazem a diferença.",
        publishedAt: "15 de Fevereiro, 2025",
    },
    {
        img: "https://th.bing.com/th/id/R.47e099307c72b3c8b98cecd028a93bd7?rik=Ffm0wYsWHxGZeA&riu=http%3a%2f%2fnoset.com.br%2fwp-content%2fuploads%2f2016%2f09%2fgato-2.jpg&ehk=FH9enUmzg8ElklSWMMfepJThXqOE%2fdH1oSWFHrr6WDo%3d&risl=&pid=ImgRaw&r=0",
        type: "educação",
        title: "O Impacto do Ensino Online",
        description: "O aprendizado digital tem crescido exponencialmente.",
        publishedAt: "12 de Fevereiro, 2025",
    },
    {
        img: "https://th.bing.com/th/id/R.47e099307c72b3c8b98cecd028a93bd7?rik=Ffm0wYsWHxGZeA&riu=http%3a%2f%2fnoset.com.br%2fwp-content%2fuploads%2f2016%2f09%2fgato-2.jpg&ehk=FH9enUmzg8ElklSWMMfepJThXqOE%2fdH1oSWFHrr6WDo%3d&risl=&pid=ImgRaw&r=0",
        type: "esportes",
        title: "Os Benefícios do Exercício Diário",
        description: "Praticar esportes regularmente melhora a saúde.",
        publishedAt: "10 de Fevereiro, 2025",
    },
    {
        img: "https://th.bing.com/th/id/R.47e099307c72b3c8b98cecd028a93bd7?rik=Ffm0wYsWHxGZeA&riu=http%3a%2f%2fnoset.com.br%2fwp-content%2fuploads%2f2016%2f09%2fgato-2.jpg&ehk=FH9enUmzg8ElklSWMMfepJThXqOE%2fdH1oSWFHrr6WDo%3d&risl=&pid=ImgRaw&r=0",
        type: "esportes",
        title: "Os Benefícios do Exercício Diário",
        description: "Praticar esportes regularmente melhora a saúde.",
        publishedAt: "10 de Fevereiro, 2025",
    },
    {
        img: "https://th.bing.com/th/id/R.47e099307c72b3c8b98cecd028a93bd7?rik=Ffm0wYsWHxGZeA&riu=http%3a%2f%2fnoset.com.br%2fwp-content%2fuploads%2f2016%2f09%2fgato-2.jpg&ehk=FH9enUmzg8ElklSWMMfepJThXqOE%2fdH1oSWFHrr6WDo%3d&risl=&pid=ImgRaw&r=0",
        type: "esportes",
        title: "Os Benefícios do Exercício Diário",
        description: "Praticar esportes regularmente melhora a saúde.",
        publishedAt: "10 de Fevereiro, 2025",
    }
]);
</script>

<template>
    <section class="w-full px-6 py-10">
        <div class="max-[95%] mx-auto">
            <div class="w-[95%]">
                <h2 class="text-2xl font-bold text-left flex items-center mb-[50px]">Noticias
                    <ChevronRightIcon class="w-6 h-6 inline-block" />
                </h2>
            </div>

            <swiper :modules="[Navigation]" :slides-per-view="1" :breakpoints="{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 5 }
            }" :space-between="20" navigation class="relative">
                <swiper-slide v-for="(post, index) in posts" :key="index">
                    <PostCard :post="post" />
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<style scoped>
span{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>