<template>
    <section class="z-10 max-w-xl mx-auto mt-5 font-merriweather">
        <h1 class="relative">
            <small class="block text-base pl-0.5 -mb-2 leading-tight text-palette-1050 font-semibold">Dra.</small>
            <span class="drop-shadow text-[42px] text-palette-1050 font-extrabold tracking-wide whitespace-nowrap">
                Erika
                <span class="relative">
                    Queiroz
                    <a href="https://www.crefito3.org.br/dsn/inscritos/pesquisa.html" target="_blank" class="absolute top-full mt-2 text-palette-900 right-0 text-[10px] font-thin leading-none">
                        (CREFITO: 376404-F)
                    </a>
                </span>
            </span>
            <span class="block w-40 h-0.5 rounded-full -ml-2 mt-1.5 bg-palette-400" />
        </h1>
    </section>
</template>

<script setup>
const props = defineProps({
    loading: {type: Boolean, default: false}
})
</script>
