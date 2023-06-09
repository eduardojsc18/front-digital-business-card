<template>
    <div :class="!loadPage ? 'h-screen touch-none' : 'h-[280px] md:h-[350px]' " class="z-0 relative transition-[height] transform-gpu antialiased duration-700">
        <div v-show="!loadPage" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="relative grid place-items-center">
                <div class="w-12 h-12 rounded-full absolute border border-solid border-palette-50"/>
                <div class="w-12 h-12 rounded-full animate-spin absolute border border-solid border-palette-500 drop-shadow border-t-transparent"/>
            </div>
            <div class="text-sm mt-7 animate-pulse">
                Carregando
            </div>
        </div>
    </div>
    <div v-show="loadPage" class="flex-grow w-full bg-white rounded-t-[35px] rounded-b-md px-10 md:px-12 pb-10 shadow-[0_-10px_20px_-5px_#25191125]">
        <ProfilePicture :loading="loadPage" />
        <ProfileName />
        <ProfileProfession />
        <ProfileQuickInfo />
        <ProfileAbout />
        <ProfileService />
        <ProfileContact />
    </div>
</template>

<script setup>
import ProfilePicture from "~/components/ProfilePicture.vue";
import ProfileName from "~/components/ProfileName.vue";
import ProfileContact from "~/components/ProfileContact.vue";
import ProfileProfession from "~/components/ProfileProfession.vue";
import ProfileAbout from "~/components/ProfileAbout.vue";
import ProfileService from "~/components/ProfileService.vue";
import ProfileQuickInfo from "~/components/ProfileQuickInfo.vue";

definePageMeta({
    layout: "default",
});

const loadPage = ref(false)

onMounted(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
        loadPage.value = true
        document.body.style.overflow = 'auto'
    }, 500)
})

</script>
