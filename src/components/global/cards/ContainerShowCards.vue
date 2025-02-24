<script setup>
import InformationCard from './InformationCard.vue';
import Home from "vue-material-design-icons/Home.vue"

const cards = [
    {
        title: 'Card 1',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros tincidunt lacinia. Nullam nec purus nec eros tincidunt lacinia.",
        icon: Home,
        color: '#FF5733',
        fontWeigth: 'bold'
    },
    {
        title: 'Card 2',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros tincidunt lacinia. Nullam nec purus nec eros tincidunt lacinia.",
        icon: Home,
        color: '#33FF57',
        fontWeigth: 'normal'
    },
    {
        title: 'Card 3',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros tincidunt lacinia. Nullam nec purus nec eros tincidunt lacinia.",
        icon: Home,
        color: '#3357FF',
        fontWeigth: 'light'
    },
    {
        title: 'Card 4',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros tincidunt lacinia. Nullam nec purus nec eros tincidunt lacinia.",
        icon: Home,
        color: '#FF33A1',
        fontWeigth: 'bold'
    },
    {
        title: 'Card 5',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros tincidunt lacinia. Nullam nec purus nec eros tincidunt lacinia.",
        icon: Home,
        color: '#A133FF',
        fontWeigth: 'normal'
    },
    {
        title: 'Card 6',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros tincidunt lacinia. Nullam nec purus nec eros tincidunt lacinia.",
        icon: Home,
        color: '#33FFA1',
        fontWeigth: 'light'
    },
    {
        title: 'Card 6',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros tincidunt lacinia. Nullam nec purus nec eros tincidunt lacinia.",
        icon: Home,
        color: '#33FFA1',
        fontWeigth: 'light'
    },
    {
        title: 'Card 6',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec eros tincidunt lacinia. Nullam nec purus nec eros tincidunt lacinia.",
        icon: Home,
        color: '#33FFA1',
        fontWeigth: 'light'
    }
];
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4">
        <InformationCard v-for="(card, index) in cards" :key="index" :infos="card" />
    </div>
</template>