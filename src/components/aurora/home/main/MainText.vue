// HeroWelcome.vue
<template>
    <div class="w-full md:w-1/2">
        <h1 class="text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 leading-tight mb-8 gradientBlue">
            Sejam Bem Vindos<br />
            ao IFC Campus<br />
            Araquari
        </h1>
        <p class="text-sm md:text-base text-black mb-8 max-w-2xl">
            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer
        </p>
    </div>
</template>

<style scoped>
.gradientBlue {
    background: linear-gradient(90deg, #000000 0%, #347EBF 97.5%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>