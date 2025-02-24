<template>
    <div class="w-[95%] mx-auto  py-16 px-4 font-sans">
        <div class="w-full mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
                <MainText />
                <MainImages />
            </div>
        </div>
        <MainCourses />
    </div>
</template>

<script setup>
import MainCourses from './MainCourses.vue';
import MainImages from './MainImages.vue';
import MainText from './MainText.vue';
</script>