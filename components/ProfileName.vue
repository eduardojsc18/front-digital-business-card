<template>
    <section class="z-10 mx-auto mt-5 max-w-xl font-merriweather">
        <h1 class="relative">
            <small class="-mb-2 block text-base font-semibold leading-tight pl-0.5 text-palette-1050">Dra.</small>
            <span class="whitespace-nowrap font-extrabold tracking-wide drop-shadow text-[42px] text-palette-1050 dark:text-palette-100">
                Erika
                <span class="relative">
                    Queiroz
                    <a href="https://www.crefito3.org.br/dsn/inscritos/pesquisa.html" target="_blank" title="Clique para acessar o site oficial do CREFITO-3 e consulte meu cadastro" class="absolute top-full right-0 mt-2 font-thin leading-none text-palette-900 dark:text-palette-300 text-[10px]">
                        (CREFITO: 376404-F)
                    </a>
                </span>
            </span>
            <span class="-ml-2 block w-40 rounded-full h-0.5 mt-1.5 bg-palette-400 dark:bg-palette-300" />
        </h1>
    </section>
</template>

<script setup>
const props = defineProps({
    loading: {type: Boolean, default: false}
})
</script>
