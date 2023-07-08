<template>
    <section class="mt-20 relative">
        <div class="absolute w-[250px] -top-16 -ml-10 h-[calc(100%+100px)] overflow-hidden">
            <div class="absolute top-0 -left-[80px] w-[250px] h-full bg-palette-50/20 rounded-bl-none rounded-full"/>
        </div>
        <div class="relative">
            <h2 class="text-4xl font-bold text-palette-1050">
                Minhas<br>
                Especialidades
            </h2>
            <div class="relative flex gap-2 mt-6 py-8 px-5 bg-gradient-to-r from-transparent via-palette-50/20 to-palette-50/30 -mx-5 rounded-r-[35px]">
                <div class="flex-shrink-0 z-10 sticky w-8 h-8 top-[70%] -translate-x-[10px] rounded-full shadow-inner bg-palette-100" />
                <div class="flex-grow relative">
                    <div class="z-0 absolute h-full -left-[35px] top-0 w-[3px] bg-palette-50/50"/>
                    <div v-for="(attendance, index) in attendanceList" class="pb-8 last:pb-0">
                        <p class="text-palette-1000 mt-1.5 text-[22px] font-bold tracking-wide ">
                            {{ attendance.name }}
                        </p>
                        <p v-if="attendance.description" class="text-palette-700 text-sm">{{ attendance.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    loading: {type: Boolean, default: false}
})
const attendanceList = computed(() => {
    return [
        {id: 0, name: 'Fisioterapia Ortopédica', description: ''},
        {id: 1, name: 'Liberação Miofascial e Dry-needling', description: ''},
        {id: 2, name: 'Terapia Manual', description: ''},
        {id: 3, name: 'Paralisia Facial', description: ''},
        {id: 4, name: 'Disfunção temporomandibular', description: ''},
        {id: 5, name: 'Pilates solo', description: ''},
        {id: 6, name: 'Pilates para gestante', description: ''},
        {id: 7, name: 'Quiropraxia', description: ''},
    ]
})
</script>
