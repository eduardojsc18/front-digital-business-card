<template>
    <header v-if="transitionLoadPage" class="absolute w-full flex justify-between p-4">
        <ButtonMenu />
        <ButtonShared />
    </header>
</template>

<script>
import ButtonShared from "~/components/layouts/ButtonShared.vue";
import ButtonMenu from "~/components/layouts/ButtonMenu.vue";

export default {
    name: "TheHeader",
    components: {ButtonMenu, ButtonShared},
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
