<template>
    <div class="flex transition-all transform-gpu">
        <div id="menu" class="flex-shrink-0 transition-all"/>
        <div class="flex-shrink-0 shadow-md w-full flex flex-col min-h-screen font-raleway">
            <TheHeader />
            <main class="flex-grow bg-white">
                <slot />
            </main>
            <TheFooter />
        </div>
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
