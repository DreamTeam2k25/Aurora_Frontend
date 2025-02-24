<script setup>
import { PostContainerCard, PostForm, ContainerShowCards } from '@/components';
</script>

<template>
<!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 pt-4 pb-4 pl-8">
    <PostCard v-for="(post, index) in posts" :key="index" :post="post" />
</div> -->
<PostContainerCard  />
<PostForm />
<ContainerShowCards />
</template>
