<template>
    <div class="relative mt-7">
        <div class="z-0 absolute w-[calc(100%+56px)] h-full bg-palette-50/10 rounded-[30px] -left-7" />
        <div class="z-10 absolute -top-4 -right-1 flex items-center justify-end">
            <div class="flex items-center overflow-hidden rounded-3xl text-palette-400 dark:text-palette-100">
                <div class="cursor-pointer max-w-[50px] group [&:has(.swiper-button-disabled)]:max-w-0 [&:has(.swiper-button-disabled)]:overflow-hidden [&:has(.swiper-button-disabled)]:cursor-not-allowed delay-200 transition-all">
                    <div class="bg-white dark:bg-palette-700 z-0 [&:not(.swiper-button-disabled)]:z-10 [&:not(.swiper-button-disabled)]:hover:bg-palette-50 dark:[&:not(.swiper-button-disabled)]:hover:bg-palette-800 transition-all">
                        <div class="px-3 py-2 transition-all custom-button-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-active:scale-125 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="cursor-pointer max-w-[50px] group [&:has(.swiper-button-disabled)]:max-w-0 [&:has(.swiper-button-disabled)]:overflow-hidden [&:has(.swiper-button-disabled)]:cursor-not-allowed delay-200 transition-all">
                    <div class="bg-white dark:bg-palette-700 z-0 [&:not(.swiper-button-disabled)]:z-10 [&:not(.swiper-button-disabled)]:hover:bg-palette-50 dark:[&:not(.swiper-button-disabled)]:hover:bg-palette-800 transition-all">
                        <div class="px-3 py-2 transition-all custom-button-next">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-active:scale-125 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Swiper
            :slidesPerView="'auto'"
            :space-between="25"
            class="!-mx-10 !py-7 !px-12"
            :modules="modules"
            :navigation="{nextEl: '.custom-button-next', prevEl: '.custom-button-prev'}"
        >
            <SwiperSlide class="!w-auto !transition-all">
                <a :href="makeLinkWhatsapp()" target="_blank" rel=”noreferrer” title="Clique para agendar sua avaliação diretamente em meu Whatsapp">
                    <div class="relative flex gap-3 rounded-full py-1 pr-5 pl-1 shadow shadow-neutral-300/10 bg-ironstone-100 dark:bg-ironstone-800">
                        <div class="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-white/50 dark:bg-palette-500 dark:text-neutral-200">
                            <svg class="h-8 w-8 dark:drop-shadow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                        </div>
                        <div class="flex-grow self-center">
                            <p class="whitespace-nowrap text-base font-semibold text-neutral-600 dark:text-neutral-200">Agende sua avaliação!</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
            <SwiperSlide class="!w-auto !transition-all">
                <a :href="makeLinkWhatsapp()" target="_blank" rel=”noreferrer” title="Clique para agendar sua avaliação domiciliar diretamente em meu Whatsapp">
                    <div class="relative flex gap-3 rounded-full bg-orange-100 dark:bg-palette-800 py-1 pr-5 pl-1 shadow shadow-neutral-300/10">
                        <div class="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-white/50 text-neutral-600 dark:bg-palette-500 dark:text-neutral-200">
                            <svg class="h-8 w-8 dark:drop-shadow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                        <div class="flex-grow self-center">
                            <p class="whitespace-nowrap text-base font-semibold text-neutral-600 dark:text-neutral-200">Avaliação domiciliar</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
            <SwiperSlide class="!w-auto !transition-all">
                <a :href="makeLinkWhatsapp()" target="_blank" rel=”noreferrer” title="Clique para verificar a disponibilidade em sua região diretamente em meu Whatsapp">
                    <div class="relative flex gap-3 rounded-full bg-yellow-100 dark:bg-yellow-900 py-1 pr-5 pl-1 shadow shadow-neutral-300/10">
                        <div class="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-white/50 text-neutral-600 dark:bg-palette-500 dark:text-neutral-200">
                            <svg class="h-8  dark:drop-shadow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <div class="flex-grow self-center">
                            <p class="whitespace-nowrap text-base font-semibold text-neutral-600 dark:text-neutral-200">Guarulhos/SP e Região</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
            <SwiperSlide class="!w-auto !transition-all">
                <a :href="makeLinkWhatsapp()" target="_blank" rel=”noreferrer” title="Clique para agendar sua avaliação diretamente em meu Whatsapp">
                    <div class="bg-[#dcf8c6] dark:bg-teal-900 rounded-full py-1 pl-1 pr-5 shadow shadow-neutral-300/10 flex gap-3 relative">
                        <div class="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-white/50 dark:bg-teal-600">
                            <svg class="h-8 w-8 stroke-neutral-600 dark:stroke-green-50 stroke-1 dark:stroke-2 fill-none dark:drop-shadow" width="800px" height="800px" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24,2.5A21.52,21.52,0,0,0,5.15,34.36L2.5,45.5l11.14-2.65A21.5,21.5,0,1,0,24,2.5ZM13.25,12.27h5.86a1,1,0,0,1,1,1,10.4,10.4,0,0,0,.66,3.91,1.93,1.93,0,0,1-.66,2.44l-2.05,2a18.6,18.6,0,0,0,3.52,4.79A18.6,18.6,0,0,0,26.35,30l2-2.05c1-1,1.46-1,2.44-.66a10.4,10.4,0,0,0,3.91.66,1.05,1.05,0,0,1,1,1v5.86a1.05,1.05,0,0,1-1,1,23.68,23.68,0,0,1-15.64-6.84,23.6,23.6,0,0,1-6.84-15.64A1.07,1.07,0,0,1,13.25,12.27Z"/>
                            </svg>
                        </div>
                        <div class="flex-grow self-center">
                            <p class="whitespace-nowrap text-base font-semibold text-neutral-600 dark:text-neutral-200">Meu Whatsapp</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
            <SwiperSlide class="!w-auto !transition-all">
                <a href="tel:011977895608" target="_blank" rel=”noreferrer” title="Clique para agendar sua avaliação através do meu telefone">
                    <div class="relative flex gap-3 rounded-full bg-blue-100 dark:bg-blue-900 py-1 pr-5 pl-1 shadow shadow-neutral-300/10">
                        <div class="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-white/50 text-neutral-600 dark:text-blue-50">
                            <svg class="h-8 w-8 dark:drop-shadow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <div class="flex-grow self-center">
                            <p class="whitespace-nowrap text-center text-base font-semibold text-neutral-600 dark:text-blue-50">Meu Telefone</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
            <SwiperSlide class="!w-auto"/>
        </Swiper>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper";

const modules = [Navigation]

function makeLinkWhatsapp() {
    return 'https://api.whatsapp.com/send?phone=5511977895608&text=' +
        'Olá Dra. Erika Queiroz! Gostaria de agendar uma consulta com você....'
}
</script>
<style scoped>
.swiper-slide-active{
    transform: scale(1.10);
}
.swiper-slide-active svg {
    -webkit-animation: shake-bottom 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    animation: shake-bottom 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}
@-webkit-keyframes shake-bottom {
    0%,
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
    }
    10% {
        -webkit-transform: rotate(1deg);
        transform: rotate(1deg);
    }
    20%,
    40%,
    60% {
        -webkit-transform: rotate(-3deg);
        transform: rotate(-3deg);
    }
    30%,
    50%,
    70% {
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
    }
    80% {
        -webkit-transform: rotate(-1deg);
        transform: rotate(-1deg);
    }
    90% {
        -webkit-transform: rotate(1deg);
        transform: rotate(1deg);
    }
}
@keyframes shake-bottom {
    0%,
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
    }
    10% {
        -webkit-transform: rotate(1deg);
        transform: rotate(1deg);
    }
    20%,
    40%,
    60% {
        -webkit-transform: rotate(-3deg);
        transform: rotate(-3deg);
    }
    30%,
    50%,
    70% {
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
    }
    80% {
        -webkit-transform: rotate(-1deg);
        transform: rotate(-1deg);
    }
    90% {
        -webkit-transform: rotate(1deg);
        transform: rotate(1deg);
    }
}
</style>
