<template>
    <section class="z-[9999] relative flex justify-center w-full">
        <div class="relative z-0 transform-gpu transition-[margin] antialiased delay-[300ms] duration-[400ms] -mt-[0]" :class="{'!-mt-[250px] md:!-mt-[320px]': props.loading}">
            <div class="absolute bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent"/>
            <img
                class="z-0 w-full h-full"
                src="@/assets/img/erikaquerioz-fisioterapeuta-resize.png"
                alt="Imagem destaque da Dra. Erika Queiroz. Fisioterapeuta e Instrutura de Pilates"
            >
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    loading: {type: Boolean, default: false}
})
</script>
