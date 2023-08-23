<template>
    <div id="content-site" class="flex transform-gpu items-start antialiased bg-palette-100 dark:bg-palette-1000 transition-colors duration-500 delay-100" :class="{'overflow-hidden': loading}">
        <div id="menu" class="flex-shrink-0 self-stretch" />
        <div class="w-full min-h-screen">
            <TransitionGroup enter-active-class="transform-gpu transition-all delay-500 duration-1000 ease-in-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transform-gpu delay-500 transition-all origin-top ease-in-out duration-[1500ms]" leave-from-class="h-screen opacity-100" leave-to-class="opacity-0 h-[0vh]">
                <LayoutPageLoadingAnimation v-if="loading" :loading="loading" />
                <div v-else class="relative mx-auto flex min-h-screen w-full max-w-lg flex-col font-raleway">
                    <header class="absolute flex w-full justify-between overflow-hidden p-4">
                        <ButtonShared />
                        <ButtonDarkMode />
                    </header>
                    <main class="flex-grow w-full bg-white dark:bg-palette-1050 rounded-t-[40px] mt-[280px] md:mt-[400px] rounded-b-md px-10 pb-10 shadow-[0_-10px_20px_-5px_#25191110] transition-colors duration-700 delay-200">
                        <ProfilePicture/>
                        <ProfileName/>
                        <ProfileProfession/>
                        <ProfileQuickInfo/>
                        <ProfileAbout/>
                        <ProfileService/>
                        <ProfilePlaceCare/>
                        <ProfileContact/>
                    </main>
                    <footer class="py-5 text-center">
                        ©{{ new Date().getFullYear() }} Todos os direitos reservados
                    </footer>
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup>
import ProfileContact from "~/components/ProfileContact.vue";
import ProfilePlaceCare from "~/components/ProfilePlaceCare.vue";
import ProfileAbout from "~/components/ProfileAbout.vue";
import ProfileQuickInfo from "~/components/ProfileQuickInfo.vue";
import ProfilePicture from "~/components/ProfilePicture.vue";
import ProfileService from "~/components/ProfileService.vue";
import ProfileName from "~/components/ProfileName.vue";
import ProfileProfession from "~/components/ProfileProfession.vue";
import LayoutPageLoadingAnimation from "~/components/layout/LayoutPageLoadingAnimation.vue";
import ButtonShared from "~/components/button/ButtonShared.vue";
import ButtonMenu from "~/components/button/ButtonMenu.vue";
import ButtonDarkMode from "~/components/button/ButtonDarkMode.vue";

const nuxtApp = useNuxtApp()
const loading = ref(true)

nuxtApp.hook('page:start', () => {
    loading.value = true;
})
nuxtApp.hook('app:mounted', () => {
    setTimeout(() => {
        loading.value = false
    },500)
})
</script>
