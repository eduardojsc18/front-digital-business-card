<template>
    <div class="antialiased flex items-start transform-gpu bg-gradient-to-tl to-palette-100 from-palette-100">
        <div id="menu" class="flex-shrink-0 self-stretch"/>
        <div class="flex-shrink-0 w-full md:max-w-lg mx-auto flex flex-col min-h-screen font-raleway relative">
            <TheHeader />
            <main class="flex-grow">
                <slot />
            </main>
            <TheFooter />
        </div>
    </div>
</template>

<script setup>
import TheHeader from "~/components/layouts/TheHeader.vue";
import TheFooter from "~/components/layouts/TheFooter.vue";
</script>
