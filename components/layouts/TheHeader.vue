<template>
    <header class="absolute w-full flex justify-end p-4">
        <ButtonMenu v-if="false" />
        <ButtonShared />
    </header>
</template>

<script setup>
import ButtonShared from "~/components/layouts/ButtonShared.vue";
import ButtonMenu from "~/components/layouts/ButtonMenu.vue";
</script>
