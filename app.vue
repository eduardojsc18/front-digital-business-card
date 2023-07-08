<template>
    <div class="antialiased flex items-start transform-gpu bg-palette-100">
        <div id="menu" class="flex-shrink-0 self-stretch"/>
        <div class="w-full min-h-screen">
            <TransitionGroup enter-active-class="transition-all duration-1000 delay-100 ease-in-out transform-gpu" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-all duration-[1500ms] ease-in-out transform-gpu" leave-from-class="h-screen opacity-100" leave-to-class="h-[0vh] opacity-0">
                <LoaderAnimation v-if="loading" :loading="loading"/>
                <div v-else class="w-full max-w-lg mx-auto flex flex-col min-h-screen font-raleway relative">
                    <TheHeader/>
                    <main class="flex-grow w-full bg-white rounded-t-[40px] mt-[280px] md:mt-[400px] rounded-b-md px-10 pb-10 shadow-[0_-10px_20px_-5px_#25191110]">
                        <ProfilePicture/>
                        <ProfileName/>
                        <ProfileProfession/>
                        <ProfileQuickInfo/>
                        <ProfileAbout/>
                        <ProfileService/>
                        <ProfilePlaceCare/>
                        <ProfileContact/>
                    </main>
                    <TheFooter/>
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup>
import TheHeader from "~/components/layouts/TheHeader.vue";
import TheFooter from "~/components/layouts/TheFooter.vue";
import ProfileContact from "~/components/ProfileContact.vue";
import ProfilePlaceCare from "~/components/ProfilePlaceCare.vue";
import ProfileAbout from "~/components/ProfileAbout.vue";
import ProfileQuickInfo from "~/components/ProfileQuickInfo.vue";
import ProfilePicture from "~/components/ProfilePicture.vue";
import ProfileService from "~/components/ProfileService.vue";
import ProfileName from "~/components/ProfileName.vue";
import ProfileProfession from "~/components/ProfileProfession.vue";
import LoaderAnimation from "~/components/LoaderAnimation.vue";

const loading = ref(true)

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => {
    document.body.style.overflow = 'hidden'
    loading.value = true;
})
nuxtApp.hook('app:mounted', () => {
    setTimeout(() => {
        loading.value = false
        document.body.style.overflow = 'auto'
    },600)
})
</script>
