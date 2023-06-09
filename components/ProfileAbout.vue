<template>
    <section class="mt-14 relative">
        <div class="absolute -top-10 -left-6 w-48 h-[calc(100%+70px)] bg-palette-50/20 rounded-full"/>
        <div class="relative">
            <h3>
                <span class="block text-4xl font-bold text-palette-1050">Minhas</span>
                <span class="block text-4xl font-bold text-palette-1050">Especialidades</span>
            </h3>
            <div class="mt-6 -mx-8 space-y-3">
                <div v-for="(attendance, index) in attendanceList" >
                    <div class="px-8 py-4 w-auto rounded-3xl bg-palette-50 shadow-md shadow-palette-900/10 space-y-1">
                        <p class="text-palette-800 text-lg font-bold tracking-wide">{{ attendance.name }}</p>
                        <p v-if="attendance.description" class="text-palette-700 text-sm">{{ attendance.description }}</p>
                    </div>
                </div>
<!--                <div class="relative pb-5" v-for="(attendance, index) in attendanceList">-->
<!--                    <div class="z-10 absolute shadow w-5 h-5 top-1 left-0 rounded-full bg-palette-100" />-->
<!--                    <div v-if="(index + 1) % attendanceList.length" class="z-0 absolute h-full left-[9px] top-2.5 w-[2px] bg-palette-50/50"/>-->
<!--                    <div class="ml-8 space-y-1">-->
<!--                        <p class="text-palette-800 text-lg font-bold tracking-wide">{{ attendance.name }}</p>-->
<!--                        <p class="text-palette-700 text-sm">{{ attendance.description }}</p>-->
<!--                    </div>-->
<!--                </div>-->
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
        {id: 0, name: 'Fisioterapia ortopédica', description: ''},
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
