<template>
    <div class="antialiased flex items-start transform-gpu bg-gradient-to-tl to-palette-100 from-palette-100">
        <div id="menu" class="flex-shrink-0 self-stretch"/>
        <div class="w-full min-h-screen">
            <TransitionGroup enter-active-class="transition-all duration-1000 delay-100 ease-in-out transform-gpu" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-all duration-1000 transform-gpu" leave-from-class="h-screen translate-y-0 opacity-100" leave-to-class="h-[0vh] -translate-y-full opacity-0">
                <div v-if="!loadPage" class="touch-none flex-shrink-0 w-full h-screen grid place-items-center">
                    <div>
                        <div class="relative grid place-items-center">
                            <div class="w-12 h-12 rounded-full absolute border border-solid border-palette-50"/>
                            <div class="w-12 h-12 rounded-full animate-spin absolute border border-solid border-palette-500 drop-shadow border-t-transparent"/>
                        </div>
                        <div class="text-sm mt-7 animate-pulse">
                            Carregando
                        </div>
                    </div>
                </div>
                <div v-else class="w-full md:max-w-lg mx-auto flex flex-col min-h-screen font-raleway relative">
                    <TheHeader />
                    <main class="flex-grow">
                        <slot />
                    </main>
                    <TheFooter />
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup>
import TheHeader from "~/components/layouts/TheHeader.vue";
import TheFooter from "~/components/layouts/TheFooter.vue";

const loadPage = ref(false)

onBeforeMount(()=>{
    document.body.style.overflow = 'hidden'
    loadPage.value = false;
})
onMounted(() => {
    setTimeout(() => {
        loadPage.value = true
        document.body.style.overflow = 'auto'
    }, 500)
})
</script>
