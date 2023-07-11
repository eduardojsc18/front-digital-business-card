<template>
    <header class="absolute flex w-full justify-end overflow-hidden p-4">
        <ButtonMenu v-if="false" />
        <ButtonShared />
    </header>
</template>

<script setup>
import ButtonShared from "~/components/layouts/ButtonShared.vue";
import ButtonMenu from "~/components/layouts/ButtonMenu.vue";
</script>
