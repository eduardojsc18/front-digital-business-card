<template>
    <div class="flex flex-col min-h-screen">
        <TheHeader />
        <main class="flex-grow bg-green-100">
            <slot />
        </main>
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from "~/components/layouts/TheHeader.vue";
import TheFooter from "~/components/layouts/TheFooter.vue";

export default {
    name: "default",
    components: {TheFooter, TheHeader},
}
</script>

<style lang="postcss">
.test {
    @apply bg-black
}
</style>
