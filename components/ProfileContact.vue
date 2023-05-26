<template>
    <div class="mt-14">
        <p class="text-2xl font-bold text-palette-900 leading-tight"> Agende sua avaliação com um profissional especializada! </p>
        <div class="mt-6 -ml-10 -mr-5 flex flex-col gap-3">
            <a :href="makeLinkWhatsapp()">
                <div class="bg-[#dcf8c6] rounded-r-full pl-10 p-3 shadow flex gap-5 relative">
                    <div class="flex-shrink-0 bg-white/50 rounded-full p-3">
                        <svg class="w-8 h-8 fill-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                    </div>
                    <div class="self-center flex-grow ">
                        <p class="text-sm font-semibold text-neutral-600">Meu Whatsapp</p>
                        <p class="text-2xl font-bold font-[arial] text-neutral-900">(11) 97789-5608</p>
                    </div>
                </div>
            </a>
            <a href="tel:011977895608">
                <div class="bg-[#ddf1f2] rounded-r-full pl-10 p-3 shadow flex gap-5 relative">
                    <div class="flex-shrink-0 bg-white/50 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 fill-neutral-600">
                            <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="self-center flex-grow ">
                        <p class="text-sm font-semibold text-neutral-600">Meu Telefone</p>
                        <p class="text-2xl font-bold font-[arial] text-neutral-900">(11) 97789-5608</p>
                    </div>
                </div>
            </a>
            <a href="mailto:erikaqueirozcaetano.eq@gmail.com?subject=Agendar consulta&body=Olá Dra. Erika Queiroz, gostaria de agendar uma consulta....">
                <div class="bg-[#f1e5bc] rounded-r-full pl-10 p-3 shadow flex gap-5 relative overflow-hidden">
                    <div class="flex-shrink-0 bg-white/50 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 fill-neutral-600">
                            <path fill-rule="evenodd" d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="self-center ">
                        <p class="text-2xl font-semibold text-neutral-600">Meu Email</p>
                        <p class="text-[10px] font-bold font-[arial] text-neutral-900">erikaqueirozcaetano.eq@gmail.com</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
<!--    <Teleport to="body">-->
<!--        <Transition enter-active-class="transition-all transform-gpu ease-in-out duration-1000" enter-from-class="translate-y-full" enter-to-class="-translate-y-3">-->
<!--            <div v-show="transitionLoadPage" class="fixed right-6 bottom-6 z-50">-->
<!--                <ButtonWhatsapp />-->
<!--            </div>-->
<!--        </Transition>-->
<!--    </Teleport>-->
</template>
<script>
export default {
    name: "ProfileContact",
    data() {
        return{
            transitionLoadPage: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.transitionLoadPage = true
        }, 1000)
    },
    methods: {
        makeLinkWhatsapp() {
            return 'https://api.whatsapp.com/send?phone=5511977895608&text=' +
                'Olá Dra. Erika Queiroz! Gostaria de agendar uma consulta com você....'
        }
    }
}
</script>
