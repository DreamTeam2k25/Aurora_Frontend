<script setup>
import { ref } from 'vue';

   defineProps({
        subtitle: {
            type: String,
            required: true,
            default: 'teste testetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetesteteste'
        },
        date: {
            type: Date,
            required: true,
            default: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
        },
        description: {
            type: String,
            required: true,
            default: "<p>HELOOO Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae alias dolore numquam rerum, aperiam beatae aut illo dolorem quaerat ullam corrupti et molestias adipisci distinctio, a voluptas, accusamus quas.</p><br><p> Ola mundo Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae alias dolore numquam rerum, aperiam beatae aut illo dolorem quaerat ullam corrupti et molestias adipisci distinctio, a voluptas, accusamus quas.Ola mundo Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae alias dolore numquam rerum, aperiam beatae aut illo dolorem quaerat ullam corrupti et molestias adipisci distinctio, a voluptas, accusamus quas.HELOOO Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae alias dolore numquam rerum, aperiam beatae aut illo dolorem quaerat ullam corrupti et molestias adipisci distinctio, a voluptas, accusamus quas.</p><br>HELOOO Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae alias dolore numquam rerum, aperiam beatae aut illo dolorem quaerat ullam corrupti et molestias adipisci distinctio, a voluptas, accusamus quas.</p><br>HELOOO Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae alias dolore numquam rerum, aperiam beatae aut illo dolorem quaerat ullam corrupti et molestias adipisci distinctio, a voluptas, accusamus quas.</p><br>HELOOO Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae alias dolore numquam rerum, aperiam beatae aut illo dolorem quaerat ullam corrupti et molestias adipisci distinctio, a voluptas, accusamus quas.</p><br>HELOOO Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae alias dolore numquam rerum, aperiam beatae aut illo dolorem quaerat ullam corrupti et molestias adipisci distinctio, a voluptas, accusamus quas.</p><br>HELOOO Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae alias dolore numquam rerum, aperiam beatae aut illo dolorem quaerat ullam corrupti et molestias adipisci distinctio, a voluptas, accusamus quas.</p>"
        }
    })

    const descIsLarge = ref(false) 

    function CutDesc(desc){
        if(desc.length > 900 && !descIsLarge.value){
            return desc.substring(0, 900)
        }
        else if(desc.length > 900 && descIsLarge.value){
            return desc
        }
        else{
            return desc
        }
    }
</script>
<template>
<section class="w-2/5 p-3 ">
    <div class="break-words">
        <p class="font-bold text-2xl leading-7" >Subtitulo: {{ subtitle }}</p>
        <p class="text-sm text-[#7C7272]">Publicado em: {{ date }}</p>
    </div>
    <div class="mt-3 border-b border-[#c3c3c3]">
        <p v-html="CutDesc(description)" class="mb-5 text-[#494343]"></p>
        <p class="mb-5 text-xl font-semibold" v-if="description.length > 900" @click="descIsLarge = !descIsLarge">{{ descIsLarge ? 'ler menos...' : 'ler mais...' }}</p>
    </div>
    <div class="flex items-end justify-end p-2">
        <button class="flex items-center justify-center gap-2 w-2/5 border rounded-4xl p-1 text-[#7C7272] font-bold">Compartilhar <img src="../../../../assets/images/share.png" ></button>
    </div>
</section>
</template>