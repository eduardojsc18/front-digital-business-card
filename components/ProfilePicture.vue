<template>
    <div class="relative max-w-xl mx-auto">
        <div class="w-full h-[350px] bg-gradient-to-tl to-palette-100 from-palette-400 shadow-inner relative">
            <div class="absolute top-0 left-0 w-full flex justify-between p-4">
                <ButtonMenu />
                <ButtonShared />
            </div>
            <svg class="absolute -bottom-1 left-0 w-full drop-shadow-[0_-2px_1px_rgb(0,0,0,0.05)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
                <path fill="#fff" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,85.3C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </div>
        <div class="-mt-[310px] px-10">
            <div class="w-full mx-auto overflow-hidden rounded-b-2xl">
                <img class="z-0 w-full h-full drop-shadow-md" src="@/assets/img/erikaquerioz-fisioterapeuta-resize.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import ButtonMenu from "~/components/layouts/ButtonMenu.vue";
import ButtonShared from "~/components/layouts/ButtonShared.vue";

export default {
    name: 'ProfilePicture',
    components: {ButtonShared, ButtonMenu}
}
</script>
