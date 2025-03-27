<script setup>
import { onMounted } from 'vue';
import { MainSection, PostContainerCard, InformationComp, ActualGuild, Footer } from '@/components';
import { useAuthStore, useStudentsStore } from '@/stores';

const authStore = useAuthStore()
const studentsStore = useStudentsStore()

onMounted(async ()=>{
    await studentsStore.GetStudentByUserId(authStore.user.id)
    console.log(studentsStore.student)
})
</script>

<template>
    <MainSection />
    <PostContainerCard />
    <InformationComp />
    <ActualGuild />
    <Footer />
</template>