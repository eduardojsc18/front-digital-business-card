<template>
    <Transition enter-active-class="transition-all transform-gpu duration-700" enter-from-class="opacity-0 translate-y-5" enter-to-class="opacity-100 translate-y-0">
        <header v-show="loadPage" class="absolute w-full flex justify-between p-4">
            <ButtonMenu />
            <ButtonShared />
        </header>
    </Transition>
</template>

<script setup>
import ButtonShared from "~/components/layouts/ButtonShared.vue";
import ButtonMenu from "~/components/layouts/ButtonMenu.vue";

// defineProps({
//     loading: {type: Boolean, default: false}
// })

const loadPage = ref(false)
onMounted(() => {
    setTimeout(() => {
        loadPage.value = true
    }, 500)
})

</script>
