<template>
    <section class="relative mt-20">
        <div class="absolute w-[250px] -top-16 -ml-10 h-[calc(100%+100px)] overflow-hidden">
            <div class="absolute top-0 h-full rounded-full rounded-bl-none -left-[80px] w-[250px] bg-palette-50/20"/>
        </div>
        <div class="relative">
            <h2 class="text-4xl font-bold text-palette-1050 dark:text-palette-100">
                Minhas<br>
                Especialidades
            </h2>
            <div class="relative -mx-5 mt-6 flex gap-2 bg-gradient-to-r from-transparent px-5 py-8 via-palette-50/20 to-palette-50/30 rounded-r-[35px]">
                <div class="sticky z-10 h-8 w-8 flex-shrink-0 rounded-full shadow-inner top-[70%] -translate-x-[10px] bg-palette-100" />
                <div class="relative flex-grow">
                    <div class="absolute top-0 z-0 h-full -left-[35px] w-[3px] bg-palette-50/50"/>
                    <div v-for="(attendance, index) in attendanceList" class="pb-8 last:pb-0">
                        <p class="font-bold tracking-wide text-palette-1000 mt-1.5 text-[22px]">
                            {{ attendance.name }}
                        </p>
                        <p v-if="attendance.description" class="text-sm text-palette-700">{{ attendance.description }}</p>
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
