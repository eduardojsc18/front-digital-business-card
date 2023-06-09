<template>
    <div class="z-[99999] relative grid place-items-center">
        <button
            @click="showMenu = !showMenu"
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
            <Transition enter-active-class="transition-all transform-gpu duration-700" enter-from-class="-translate-x-[300px] -ml-[300px]" enter-to-class="translate-x-0 ml-0" leave-active-class="transition-all transform-gpu duration-500" leave-from-class="translate-x-0 ml-0" leave-to-class="-translate-x-[300px] -ml-[300px]">
                <div v-show="showMenu" class="min-h-[200vh] antialiased w-[300px] bg-white shadow-[inset_-2px_0px_10px_0px_#00000015]">
                    <div class="h-screen min-w-full p-5 space-y-5 overflow-y-auto">
                        
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup>
const showMenu = ref(false)

watch(showMenu, (value) => {
    document.body.style.overflow = value ? "hidden" : "auto"
    document.body.style.overflowX = 'hidden'
})
</script>
