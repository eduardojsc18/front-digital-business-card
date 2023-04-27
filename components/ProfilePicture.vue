<template>
    <div class="relative max-w-xl mx-auto">
        <div class="z-auto w-full h-[350px] bg-gradient-to-tl to-palette-100 from-palette-400 shadow-inner relative transform-gpu transition-all duration-700" :class="{'!h-screen': !transitionLoadPage}">
            <svg v-if="transitionLoadPage" class="absolute -bottom-1 left-0 w-full drop-shadow-[0_-2px_1px_rgb(0,0,0,0.05)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
                <path fill="#fff" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,85.3C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <div v-if="!transitionLoadPage" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="relative grid place-items-center">
                    <div class="w-12 h-12 rounded-full absolute border border-solid border-palette-50"/>
                    <div class="w-12 h-12 rounded-full animate-spin absolute border border-solid border-palette-500 drop-shadow border-t-transparent"/>
                </div>
                <div class="text-sm mt-7 animate-pulse">
                    Carregando
                </div>
            </div>
        </div>
        <div class="z-0 mt-10 px-10 transition-all transform-gpu" :class="{'!-mt-[300px]': transitionLoadPage}">
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
    components: {ButtonShared, ButtonMenu},
    data() {
      return{
          transitionLoadPage: false
      }
    },
    mounted() {
        setTimeout(() => {
            this.transitionLoadPage = true
        }, 500)
    }
}
</script>
