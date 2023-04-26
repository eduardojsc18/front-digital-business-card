<template>
    <div class="z-[9999] relative grid place-items-center">
        <button
            @click="clickButtonOpenMenu()"
            class="z-10 w-12 h-12 relative grid place-items-center drop rounded-full bg-palette-100/70 text-palette-900 border-0 ring-0 focus:border-0 focus:ring-0 focus:outline-palette-600 active:scale-95 transition-all duration-500 "
            :class="{'!bg-palette-100/100 drop-shadow': showMenu}"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="absolute w-6 h-6 visible opacity-100 scale-100 transition-all duration-500" :class="{'!invisible !rotate-180 !opacity-0 !scale-0': showMenu}">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="absolute w-6 h-6 invisible -rotate-180 opacity-0 scale-0 transition-all duration-500" :class="{'!visible !opacity-100 !scale-100': showMenu}">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <Teleport to="#menu">
            <Transition enter-active-class="transition ease-in-out duration-300" enter-from-class="opacity-0 -ml-[300px]" enter-to-class="opacity-100 ml-0" leave-active-class="transition ease-in-out duration-300" leave-from-class="opacity-100 ml-0" leave-to-class="opacity-0 -ml-[300px]">
                <div v-show="showMenu" class="h-full w-[300px] transition-all bg-palette-50/10 shadow-[inset_-2px_0px_10px_0px_#00000015]">

                </div>
            </Transition>
        </Teleport>
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
            document.body.style.overflowX = this.showMenu ? "hidden" : "auto"
        }
    }
}
</script>
