<template>
    <div class="relative grid place-items-center z-[99999]">
        <button
            @click="showMenu = !showMenu"
            class="relative z-10 grid h-12 w-12 place-items-center rounded-full border-0 ring-0 transition-all duration-500 drop bg-palette-100/70 text-palette-900 focus:outline-palette-600 focus:border-0 focus:ring-0 active:scale-95"
            :class="{'!bg-palette-100/100 drop-shadow': showMenu}"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="visible absolute h-6 w-6 scale-100 opacity-100 transition-all duration-500" :class="{'!invisible !rotate-180 !opacity-0 !scale-0': showMenu}">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="invisible absolute h-6 w-6 -rotate-180 scale-0 opacity-0 transition-all duration-500" :class="{'!visible !opacity-100 !scale-100': showMenu}">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <Teleport to="#menu">
            <Transition
                enter-active-class="transform-gpu transition-all duration-700" enter-from-class="-translate-x-[300px]" enter-to-class="ml-0 translate-x-0"
                leave-active-class="transform-gpu transition-all duration-500" leave-from-class="ml-0 translate-x-0" leave-to-class="-translate-x-[300px]"
            >
                <div v-show="showMenu" class="absolute z-[99999] min-h-[200vh] antialiased w-[300px] bg-white shadow-[-2px_0px_10px_0px_#00000015]">
                    <div class="relative h-screen w-full overflow-y-auto p-5 space-y-5">
                        <div class="absolute -right-full ml-5">
                            <button
                                @click="showMenu = !showMenu"
                                class="relative z-10 grid h-12 w-12 place-items-center rounded-full border-0 ring-0 transition-all duration-500 drop bg-palette-100/70 text-palette-900 focus:outline-palette-600 focus:border-0 focus:ring-0 active:scale-95"
                                :class="{'!bg-palette-100/100 drop-shadow': showMenu}"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="visible absolute h-6 w-6 scale-100 opacity-100 transition-all duration-500" :class="{'!invisible !rotate-180 !opacity-0 !scale-0': showMenu}">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="invisible absolute h-6 w-6 -rotate-180 scale-0 opacity-0 transition-all duration-500" :class="{'!visible !opacity-100 !scale-100': showMenu}">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup>
const showMenu = ref(false)
const contentSite = document.getElementById('content-site')

watch(() => showMenu.value, (value) => {
    if (value) {
        document.body.style.overflow = 'hidden'
        contentSite.classList.add('overflow-x-hidden')
    } else {
        document.body.style.overflow = 'auto'
        contentSite.classList.remove('overflow-x-hidden')
    }
})
</script>
