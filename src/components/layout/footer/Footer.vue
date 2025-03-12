<script setup>
import { links, linksIFC, linksContact } from '@/utils';
import { GlobalText } from '@/components';

const images = import.meta.glob('@/assets/images/*', { eager: true });

const getImageUrl = (imgName) => {
  return images[`/src/assets/images/${imgName}`]?.default || '';
};

</script>
<template>
    <footer class="bg-[#347EBF] flex  justify-between items-center text-white p-10 mt-10">
            <div class="w-6/12 flex justify-center flex-col gap-10 p-5 ">
                <img src="../../../assets/images/Aurora footer.png" width="110" alt="">
                <GlobalText text="Bons estudos! agredecemos a visita" size="text-[28px]" spacing="leading-12" width="w-2/5" weight="font-semibold"/>
                <img src="../../../assets/images/iflogo.png" width="289" alt="">
            </div>
        <div class="flex gap-20 p-5">
            <div class="flex flex-col gap-7">
                <div>
                    <h1 class="font-bold">Navegue</h1>
                </div>
                <div class="flex flex-col gap-3">
                    <router-link v-for="link, i in links" :key="i" :to="link.link">{{ link.name }}</router-link>
                </div>
            </div>
            <div class="flex flex-col gap-7" >
                <div>
                    <h1 class="font-bold">Acesso rápido</h1>
                </div>
                <div class="flex flex-col gap-3">
                    <a v-for="linksif, i in linksIFC" :href="linksif.link" :key="i">{{ linksif.name }}</a>
                </div>
            </div>
            <div class="flex flex-col gap-7">
                <div>
                    <h1 class="font-bold">Precisa de Ajuda?</h1>
                </div>
                <div class="flex gap-3 items-center">
                    <img src="../../../assets/images/telephone-call.png" class="h-4"/>
                    <span>55 47 98765-6789</span>
                </div>
                <div class="flex gap-7">
                    <a v-for="linkcont, i in linksContact" :key="i" :href="linkcont.link">
                        <img :src="getImageUrl(linkcont.img)" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>