<template>
    <div class="mt-10 flex flex-col relative">
        <div class="relative">
            <p class="text-2xl font-bold text-palette-900 leading-tight"> Minhas especialidades </p>
        </div>
        <div class="mt-6">
            <div class="relative pb-5" v-for="(attendance, index) in attendanceList">
                <div class="z-10 absolute shadow w-5 h-5 top-1 left-0 rounded-full bg-palette-100" />
                <div v-if="(index + 1) % attendanceList.length" class="z-0 absolute h-full left-[9px] top-2.5 w-[2px] bg-palette-50/50"/>
                <div class="ml-8 space-y-1">
                    <p class="text-palette-800 text-lg font-bold tracking-wide">{{ attendance.name }}</p>
                    <p class="text-palette-700 text-sm">{{ attendance.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProfileAbout",
    computed: {
        attendanceList: function () {
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
        }
    }
}
</script>
