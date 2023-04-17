<template>
    <div class="flex flex-col min-h-screen font-raleway">
        <TheHeader />
        <main class="flex-grow bg-white">
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
    components: { TheFooter, TheHeader },
}
</script>
