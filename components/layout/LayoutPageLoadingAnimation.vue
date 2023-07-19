<template>
    <div>
        <div class="touch-none relative h-screen w-full grid place-items-center overflow-hidden">
            <div class="max-md:absolute max-md:top-[40%]">
                <div class="follow-the-leader-line space-y-1">
                    <div class="border bg-palette-500 border-palette-200"/>
                    <div class="border bg-palette-500/80 border-palette-200"/>
                    <div class="border bg-palette-500/70 border-palette-200"/>
                    <div class="border bg-palette-500/60 border-palette-200"/>
                    <div class="border bg-palette-500/50 border-palette-200"/>
                </div>
            </div>
            <!--        <div>-->
            <!--            <div class="relative grid place-items-center">-->
            <!--                <div class="absolute h-12 w-12 rounded-full border border-solid border-palette-50"/>-->
            <!--                <div class="absolute h-12 w-12 animate-spin rounded-full border border-solid border-t-transparent drop-shadow border-palette-500"/>-->
            <!--            </div>-->
            <!--            <div class="mt-7 animate-pulse text-sm">-->
            <!--                Carregando-->
            <!--            </div>-->
            <!--        </div>-->
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
@-webkit-keyframes follow-the-leader {
    0% {
        -webkit-transform: rotate(0deg) translateY(-200%);
        transform: rotate(0deg) translateY(-200%);
    }

    60%,
    100% {
        -webkit-transform: rotate(360deg) translateY(-200%);
        transform: rotate(360deg) translateY(-200%);
    }
}

@keyframes follow-the-leader {
    0% {
        -webkit-transform: rotate(0deg) translateY(-200%);
        transform: rotate(0deg) translateY(-200%);
    }

    60%,
    100% {
        -webkit-transform: rotate(360deg) translateY(-200%);
        transform: rotate(360deg) translateY(-200%);
    }
}

.follow-the-leader-line {
    height: 14px;
    position: relative;
    width: 14px;
}

.follow-the-leader-line div {
    -webkit-animation: follow-the-leader 1.25s infinite backwards;
    animation: follow-the-leader 1.25s infinite backwards;
    border-radius: 100%;
    height: 100%;
    width: 100%;
}

.follow-the-leader-line div:nth-child(1) {
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
}

.follow-the-leader-line div:nth-child(2) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
}

.follow-the-leader-line div:nth-child(3) {
    -webkit-animation-delay: 0.45s;
    animation-delay: 0.45s;
}

.follow-the-leader-line div:nth-child(4) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
}

.follow-the-leader-line div:nth-child(5) {
    -webkit-animation-delay: 0.75s;
    animation-delay: 0.75s;
}
</style>
