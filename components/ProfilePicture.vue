<template>
    <div class="z-[9999] relative flex justify-center w-full">
        <div class="relative z-0 transform-gpu transition-[margin] antialiased delay-[300ms] duration-[400ms] -mt-[0]" :class="{'!-mt-[250px]': transitionLoadPage}">
            <div class="absolute bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent"/>
            <img class="z-0 w-full h-full" src="@/assets/img/erikaquerioz-fisioterapeuta-resize.png" alt="">
        </div>
    </div>
</template>

<script>
import ButtonMenu from "~/components/layouts/ButtonMenu.vue";
import ButtonShared from "~/components/layouts/ButtonShared.vue";

export default {
    name: 'ProfilePicture',
    components: {ButtonShared, ButtonMenu},
    props: { transitionLoadPage: Boolean }
}
</script>
