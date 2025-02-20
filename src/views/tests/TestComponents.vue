<script setup>
import GlobalButton from '@/components/GlobalButton.vue';

function envieCoisa() {
    console.log('coisa')
}

</script>

<template>
    <div class="w-1/4">
        <GlobalButton content="Login" :icon="false" @evento="envieCoisa"/>
    </div>
</template>