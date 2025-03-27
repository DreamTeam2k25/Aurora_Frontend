<script setup>
import { onMounted } from 'vue';
import { MainSection, PostContainerCard, InformationComp, ActualGuild, Footer } from '@/components';
import { useAuthStore, useStudentsStore } from '@/stores';

const authStore = useAuthStore()
const studentsStore = useStudentsStore()

onMounted(async ()=>{
    await studentsStore.GetStudents()
    const userId = authStore.user.id
    const student = studentsStore.students.find((s) => s.user.id == userId)
    console.log(studentsStore.students)
    studentsStore.GetStudent(student)
})
</script>

<template>
    <MainSection />
    <PostContainerCard />
    <InformationComp />
    <ActualGuild />
    <Footer />
</template>