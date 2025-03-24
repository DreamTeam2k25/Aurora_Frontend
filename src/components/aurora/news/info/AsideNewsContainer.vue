<script setup>
import { SimpleNewsCard, GlobalText } from "@/components";

const posts = [
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
]
</script>

<template>
    <div class="flex flex-col items-center w-1/4 my-5">
        <div class="w-full flex justify-start pl-9 my-5">
            <GlobalText size="text-2xl" text="notícias recentes" weight="font-semibold" spacing="" width="w-auto" />
        </div>
        <div v-for="(post, id) in posts" :key="id" class="w-76 my-4">
            <SimpleNewsCard :post="post" />
        </div>
    </div>
</template> 