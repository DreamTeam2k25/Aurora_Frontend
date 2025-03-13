<script setup>
    import { ChatComment } from '@/components';
    const user = "Anthony"

    const users = ['teste', 'teste2', 'teste3']
</script>
<template>
<section class="p-2">
    <ChatComment :user="user" />
    <ChatComment v-for="user, i in users" :key="i" :is-chat="true" :user="user"/>
</section>
</template>