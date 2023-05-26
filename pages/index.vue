<template>
    <TheHeader :transition-load-page="transitionLoadPage"/>
    <div :class="{'!h-screen touch-none': !transitionLoadPage}" class="z-0 relative h-[280px] transition-[height] transform-gpu antialiased duration-700">
        <div v-show="!transitionLoadPage" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="relative grid place-items-center">
                <div class="w-12 h-12 rounded-full absolute border border-solid border-palette-50"/>
                <div class="w-12 h-12 rounded-full animate-spin absolute border border-solid border-palette-500 drop-shadow border-t-transparent"/>
            </div>
            <div class="text-sm mt-7 animate-pulse">
                Carregando
            </div>
        </div>
    </div>
    <div :class="{'touch-none': !transitionLoadPage}" class="flex-grow w-full bg-white rounded-t-[40px] rounded-b-md px-10 pb-10 shadow-[0_-10px_20px_-5px_#25191125]">
        <ProfilePicture :transition-load-page="transitionLoadPage" />
        <ProfileName />
        <ProfileProfession />
        <ProfileFastContact />
        <ProfileAbout />
        <ProfileService />
        <ProfileContact />
    </div>
</template>

<script>
import ProfilePicture from "~/components/ProfilePicture.vue";
import ProfileName from "~/components/ProfileName.vue";
import TheHeader from "~/components/layouts/TheHeader.vue";
import ProfileContact from "~/components/ProfileContact.vue";

export default {
    name: "index",
    layout: 'default',
    components: {ProfileContact, TheHeader, ProfilePicture, ProfileName },
    data() {
        return{
            transitionLoadPage: false
        }
    },
    mounted() {
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
            this.transitionLoadPage = true
            document.body.style.overflow = 'auto'
        }, 500)
    }
}
</script>
