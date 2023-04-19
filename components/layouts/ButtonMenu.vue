<template>
    <div class="z-[9999] relative grid place-items-center">
        <button
            @click="clickButtonOpenMenu()"
            class="z-10 w-12 h-12 relative grid place-items-center drop rounded-full bg-palette-100/70 text-palette-900 transition-all duration-500 border-0 ring-0 focus:border-0 focus:ring-0 focus:outline-palette-600"
            :class="{'!bg-palette-100/100 drop-shadow': showMenu}"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="absolute w-6 h-6 visible opacity-100 scale-100 transition-all duration-500" :class="{'!invisible !rotate-180 !opacity-0 !scale-0': showMenu}">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="absolute w-6 h-6 invisible -rotate-180 opacity-0 scale-0 transition-all duration-500" :class="{'!visible !opacity-100 !scale-100': showMenu}">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <svg class="z-0 transition-all min-w-[0vw] min-h-[0vh] text-transparent fill-current absolute duration-500 ease-in-out touch-none"
             :class="{'!min-w-[800vw] !min-h-[800vh] !text-palette-900': showMenu}"
             viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="60" cy="60" r="50"/>
        </svg>
        <Transition enter-active-class="transition ease-in-out duration-300 delay-300" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in-out duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="showMenu" class="absolute -top-4 -left-4 w-screen h-screen !overflow-hidden px-5 space-y-3 pt-20 touch-none">
            <div class="relative w-full h-full">
                <div class="absolute right-0 bottom-full mb-4">
                    <div class="flex gap-1 border-b pr-1">
                        <div class="relative w-7 h-7">
                            <div class="absolute bottom-0">
                                <img class="aspect-auto w-7 drop-shadow" src="@/assets/img/erikaquerioz-fisioterapeuta-resize.png" alt="">
                            </div>
                        </div>
                        <div class="self-end leading-none text-xl font-semibold text-white  font-merriweather">
                            <small class="block text-[9px] leading-none font-thin drop-shadow">Dra.</small>
                            <p class="tracking-wide drop-shadow">Erika Queiroz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Transition>
    </div>
</template>

<script>
export default {
    name: "ButtonMenu",
    data() {
        return {
            showMenu: false,
        }
    },
    methods: {
        clickButtonOpenMenu() {
            this.showMenu = !this.showMenu
            document.body.style.overflow = this.showMenu ? "hidden" : "auto"
        }
    }
}
</script>
