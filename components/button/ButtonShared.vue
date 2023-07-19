<template>
    <Transition enter-active-class="transform-gpu transition-all delay-[2000ms] duration-300 ease-in-out" enter-from-class="translate-x-full opacity-0" enter-to-class="translate-x-0 opacity-100">
        <button
            v-show="animateButton"
            class="relative z-50 grid h-12 w-12 place-items-center rounded-full transition-all slide-in-right bg-palette-100/70 text-palette-900 active:scale-95"
            type="button"
            @click="shareImage"
            title="Compartilhar meu contato"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
        </button>
    </Transition>
</template>
<script setup>
import ImgShared from '~/assets/img/dra-erika-queiroz-fisioterapeuta-especialista-ortopedista-pilates-guarulhos.jpg'

const animateButton = ref(false)
onMounted(() => {
    animateButton.value = true
})


async function shareImage() {
    const blob = await (await fetch(ImgShared)).blob();
    const file = new File(
        [blob],
        `erika-queiroz-fisioterapeuta-ortopedista-instrutora-pilates.jpeg`,
        {type: blob.type}
    );
    await navigator.share({
        files: [file],
        title: `Fisioterapeuta Ortopedista e Instrutura de Pilates`,
        text: `Acesse e agende sua consulta à domicílio agora mesmo!`,
        url: `

        Fisioterapeuta Ortopedista e Instrutura de Pilates.

        Acesse e agende sua consulta à domicílio agora mesmo!`,
    })
}

</script>
