<template>
    <Transition enter-active-class="transform-gpu transition-all delay-[2000ms] duration-300 ease-in-out" enter-from-class="translate-x-full opacity-0" enter-to-class="translate-x-0 opacity-100">
        <div
            v-show="animateButton"
            type="button"
            class="relative z-[99999999] grid h-12 w-12 place-items-center rounded-full transition-all duration-500 overflow-hidden slide-in-right bg-palette-50/50 text-palette-900 group shadow-inner border border-palette-200/50"
            :class="{'!bg-black': activeAnimate && toggleDarkMode, '!bg-blue-200': activeAnimate && !toggleDarkMode, 'cursor-pointer': !activeAnimate}"
            @click.prevent="toggleDarkMode = !toggleDarkMode"
        >
            <Transition
                enter-active-class="transform-gpu transition-all duration-700" enter-from-class="scale-0 rotate-45" enter-to-class="scale-100 rotate-0"
                leave-active-class="transform-gpu transition-all duration-500" leave-from-class="scale-100 rotate-0" leave-to-class="scale-0 -rotate-45"
            >
                <svg v-if="!toggleDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="z-10 absolute w-6 h-6 drop-shadow transition-all fill-transparent" :class="{'!text-yellow-500 !fill-yellow-500 rotate-center': activeAnimate && !toggleDarkMode}">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="z-10 absolute w-6 h-6 drop-shadow transition-all fill-transparent" :class="{'!text-yellow-300 !fill-yellow-300 heartbeat': activeAnimate && toggleDarkMode}">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
            </Transition>
            <Transition
                enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-300" leave-from-class="opacity-100" leave-to-class="opacity-0"
            >
                <div v-if="activeAnimate && toggleDarkMode">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="bottom-1 left-3 absolute text-white w-2 h-2 animate-pulse duration-75 !delay-75">
                        <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="top-1 left-0 absolute text-white rotate-180 w-4 h-4 animate-pulse duration-100 !delay-100">
                        <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="bottom-1.5 right-1 absolute rotate-12 text-white w-2 h-2 animate-pulse">
                        <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute top-2 right-2 rotate-90 text-white w-2 h-2 animate-pulse !delay-150">
                        <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                    </svg>
                </div>
                <div v-else-if="activeAnimate && !toggleDarkMode">
                    <svg class="w-5 h-5 drop-shadow absolute top-1 left-0 slide-right" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z" fill="#FFF"></path> <path d="M9.9395 2.9549C9.11445 2.35431 8.0986 2 7 2C4.23858 2 2 4.23858 2 7C2 8.45451 2.62107 9.76396 3.61248 10.6776C4.12743 10.4112 4.68736 10.2195 5.27727 10.1165C5.26708 9.9612 5.2619 9.80468 5.2619 9.64706C5.2619 6.57385 7.21349 3.96993 9.9395 2.9549Z" fill="#FFF"></path>
                    </svg>
                    <svg class="w-5 h-5 drop-shadow absolute bottom-1 right-0 slide-left" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z" fill="#FFF"></path> <path d="M9.9395 2.9549C9.11445 2.35431 8.0986 2 7 2C4.23858 2 2 4.23858 2 7C2 8.45451 2.62107 9.76396 3.61248 10.6776C4.12743 10.4112 4.68736 10.2195 5.27727 10.1165C5.26708 9.9612 5.2619 9.80468 5.2619 9.64706C5.2619 6.57385 7.21349 3.96993 9.9395 2.9549Z" fill="#FFF"></path>
                    </svg>
                </div>
            </Transition>
        </div>
    </Transition>
    <Teleport to="#content-site">
        <div class="absolute top-10 right-10">
            <div class="relative grid place-items-center">
                <div class="z-[9999999] absolute w-[300vh] aspect-square rounded-full scale-0" :class="toggleDarkMode ? {'scale-up-center bg-palette-1000': activeAnimate} : {'scale-down-center bg-palette-100': activeAnimate}"></div>
            </div>
        </div>
    </Teleport>
</template>
<script setup>
//Props

//Emits

//Variables
const toggleDarkMode = ref(false)
const activeAnimate = ref(false)
const animateButton = ref(false)

onMounted(() => {
    animateButton.value = true
})

//Watch
watch(() => toggleDarkMode.value, (value) => {
    if (value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    activeAnimate.value = true
    setTimeout(() => {
        activeAnimate.value = false
    }, 1500)
})
//Computed

//Methods

</script>
<style scoped>
.scale-up-center {
    -webkit-animation: scale-up-center 1s both;
    animation: scale-up-center 1s both;
}
.scale-down-center {
    -webkit-animation: scale-up-center 1s both;
    animation: scale-up-center 1s both reverse;
}
.rotate-center {
    -webkit-animation: rotate-center 5s linear infinite both;
    animation: rotate-center 5s linear infinite both;
}
.slide-right {
    -webkit-animation: slide-right 5s linear infinite alternate both;
    animation: slide-right 5s linear infinite alternate both;
}
.slide-left {
    -webkit-animation: slide-left 5s linear infinite alternate both;
    animation: slide-left 5s linear infinite alternate both;
}
.heartbeat {
    -webkit-animation: heartbeat 5s linear infinite alternate both;
    animation: heartbeat 5s linear infinite alternate both;
}
@keyframes scale-up-center {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    80% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0.5;
    }
    99% {
        opacity: 0;
    }
    100% {
        display: none;
    }
}
@-webkit-keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-webkit-keyframes slide-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(100px);
        transform: translateX(100px);
    }
}
@keyframes slide-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(100px);
        transform: translateX(100px);
    }
}
@-webkit-keyframes slide-left {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(-100px);
        transform: translateX(-100px);
    }
}
@keyframes slide-left {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(-100px);
        transform: translateX(-100px);
    }
}
@-webkit-keyframes heartbeat {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
}
@keyframes heartbeat {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
}
</style>
