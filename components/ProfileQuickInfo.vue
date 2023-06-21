<template>
    <div class="relative mt-5">
        <div class="absolute w-[calc(100%+56px)] h-full bg-palette-50/10 rounded-[30px] -left-7" />
        <Swiper
            :slidesPerView="'auto'"
            :space-between="25"
            class="!-mx-10 !py-6 !px-12"
        >
            <SwiperSlide class="!w-auto !transition-all">
                <a :href="makeLinkWhatsapp()" target="_blank" rel=”noreferrer” title="Clique para agendar sua avaliação diretamente em meu Whatsapp">
                    <div class="bg-ironstone-100 rounded-full py-1 pl-1 pr-5 shadow shadow-neutral-300/10 flex gap-3 relative">
                        <div class="flex-shrink-0 bg-white/50 rounded-full w-14 h-14 grid place-items-center">
                            <svg class="w-8 h-8 text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                        </div>
                        <div class="self-center flex-grow ">
                            <p class="text-base font-semibold text-neutral-600 whitespace-nowrap">Agende sua avaliação!</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
            <SwiperSlide class="!w-auto !transition-all">
                <a :href="makeLinkWhatsapp()" target="_blank" rel=”noreferrer” title="Clique para agendar sua avaliação domiciliar diretamente em meu Whatsapp">
                    <div class="bg-orange-100 rounded-full py-1 pl-1 pr-5 shadow shadow-neutral-300/10 flex gap-3 relative">
                    <div class="flex-shrink-0 bg-white/50 rounded-full w-14 h-14 grid place-items-center">
                        <svg class="w-8 h-8 text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </div>
                    <div class="self-center flex-grow ">
                        <p class="text-base font-semibold text-neutral-600 whitespace-nowrap">Avaliação domiciliar</p>
                    </div>
                </div>
                </a>
            </SwiperSlide>
            <SwiperSlide class="!w-auto !transition-all">
                <a :href="makeLinkWhatsapp()" target="_blank" rel=”noreferrer” title="Clique para verificar a disponibilidade em sua região diretamente em meu Whatsapp">
                    <div class="bg-yellow-100 rounded-full py-1 pl-1 pr-5 shadow shadow-neutral-300/10 flex gap-3 relative">
                        <div class="flex-shrink-0 bg-white/50 rounded-full w-14 h-14 grid place-items-center">
                            <svg class="w-8 h-8 text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <div class="self-center flex-grow ">
                            <p class="text-base font-semibold text-neutral-600 whitespace-nowrap">Guarulhos/SP e Região</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
            <SwiperSlide class="!w-auto !transition-all">
                <a :href="makeLinkWhatsapp()" target="_blank" rel=”noreferrer” title="Clique para agendar sua avaliação diretamente em meu Whatsapp">
                    <div class="bg-[#dcf8c6] rounded-full py-1 pl-1 pr-5 shadow shadow-neutral-300/10 flex gap-3 relative">
                        <div class="flex-shrink-0 bg-white/50 rounded-full w-14 h-14 grid place-items-center">
                            <svg class="w-8 h-8 fill-neutral-600" xmlns="http://www.w3.org/2000/svg" stroke-width="1" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            </svg>
                        </div>
                        <div class="self-center flex-grow ">
                            <p class="text-base text-center font-semibold text-neutral-600 whitespace-nowrap">Meu Whatsapp</p>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
            <SwiperSlide class="!w-auto !transition-all">
                <a href="tel:011977895608" target="_blank" rel=”noreferrer” title="Clique para agendar sua avaliação através do meu telefone">
                    <div class="bg-blue-100 rounded-full py-1 pl-1 pr-5 shadow shadow-neutral-300/10 flex gap-3 relative">
                        <div class="flex-shrink-0 bg-white/50 rounded-full w-14 h-14 grid place-items-center">
                            <svg class="w-8 h-8 text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>

                        </div>
                        <div class="self-center flex-grow ">
                            <p class="text-base text-center font-semibold text-neutral-600 whitespace-nowrap">Meu Telefone</p>
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
