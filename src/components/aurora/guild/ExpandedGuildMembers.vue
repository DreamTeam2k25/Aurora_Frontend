<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { useGuildMembersStore } from '@/stores';
import { onMounted, ref } from 'vue';

const guildMemberStore = useGuildMembersStore()
const actualMembers = ref([])
const active_year = new Date().getFullYear()
onMounted(async ()=> {
    await guildMemberStore.GetGuildMembers()
    actualMembers.value = guildMemberStore.guildMembers.filter((s) => s.year_active == active_year)
})
</script>
<template>
    <div>
        <p class="text-[#0B6BBF] font-semibold text-2xl p-5">Membros do grêmio</p>
        <div>
            <swiper class="pt-10 w-[97dvw] flex" :modules="[Navigation]" :slides-per-view="6" :breakpoints="{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 }
            }" :space-between="10" navigation>
        
            <swiper-slide v-for="guild_member in actualMembers" class="flex flex-col p-5 min-w-44">
                <div class="flex flex-col items-center justify-center">
                <img class=" size-36 rounded-full object-cover" src="@/assets/images/joao_widelg.jpg" alt="">
                <p class="mt-2 font-semibold text-md">{{ guild_member.student.user.username }}</p>
                <p class="text-[#444444] text-sm">{{ guild_member.office.name }}</p>
                </div>
            </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<style scooped>
</style>