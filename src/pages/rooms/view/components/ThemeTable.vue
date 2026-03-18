<template>
    <section class="py-12 sm:py-16 lg:py-20">
        <div class="mb-8 sm:mb-12">
            <h2
                class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em]">
                Find Your Vibe: Rooms by Floor Theme
            </h2>
            <p class="text-neutral-400 text-base sm:text-lg mt-3">
                Each floor brings its own unique atmosphere and style
            </p>
        </div>

        <div class="overflow-x-auto rounded-xl shadow-2xl">
            <table class="w-full text-left text-sm sm:text-base text-neutral-300 min-w-[800px]">
                <thead class="bg-[#af25f4]/20 text-white border-b-2 border-[#af25f4]/30">
                    <tr>
                        <th class="p-4 sm:p-6 rounded-tl-xl font-bold" scope="col">Theme / Floors</th>
                        <th class="p-4 sm:p-6 font-bold text-center" scope="col">Superior</th>
                        <th class="p-4 sm:p-6 font-bold text-center" scope="col">Deluxe</th>
                        <th class="p-4 sm:p-6 font-bold text-center" scope="col">Premier Deluxe</th>
                        <th class="p-4 sm:p-6 font-bold text-center" scope="col">Executive</th>
                        <th class="p-4 sm:p-6 font-bold text-center" scope="col">Premier Executive</th>
                        <th class="p-4 sm:p-6 rounded-tr-xl font-bold text-center" scope="col">Penthouse
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white/5">
                    <tr v-for="(theme, index) in themes" :key="theme.name"
                        :class="index < themes.length - 1 ? 'border-b border-white/10' : ''"
                        class="hover:bg-white/10 transition-colors">
                        <td class="p-4 sm:p-6 font-semibold text-white">
                            {{ theme.name }}<br />
                            <span class="font-normal text-sm text-neutral-400">{{ theme.floors }}</span>
                        </td>
                        <td class="p-4 sm:p-6 text-center text-lg">
                            <span v-if="theme.superior" class="text-[#af25f4] text-2xl">✓</span>
                        </td>
                        <td class="p-4 sm:p-6 text-center text-lg">
                            <span v-if="theme.deluxe" class="text-[#af25f4] text-2xl">✓</span>
                        </td>
                        <td class="p-4 sm:p-6 text-center text-lg">
                            <span v-if="theme.premierDeluxe" class="text-[#af25f4] text-2xl">✓</span>
                        </td>
                        <td class="p-4 sm:p-6 text-center text-lg">
                            <span v-if="theme.executive" class="text-[#af25f4] text-2xl">✓</span>
                        </td>
                        <td class="p-4 sm:p-6 text-center text-lg">
                            <span v-if="theme.premierExecutive" class="text-[#af25f4] text-2xl">✓</span>
                        </td>
                        <td class="p-4 sm:p-6 text-center text-lg">
                            <span v-if="theme.penthouse" class="text-[#af25f4] text-2xl">✓</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="bg-[#af25f4]/30 text-white">
                    <tr>
                        <td class="p-4 sm:p-6 font-bold rounded-bl-xl">Total Rooms</td>
                        <td class="p-4 sm:p-6 text-center font-bold">120</td>
                        <td class="p-4 sm:p-6 text-center font-bold">150</td>
                        <td class="p-4 sm:p-6 text-center font-bold">100</td>
                        <td class="p-4 sm:p-6 text-center font-bold">50</td>
                        <td class="p-4 sm:p-6 text-center font-bold">30</td>
                        <td class="p-4 sm:p-6 text-center font-bold rounded-br-xl">5</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    themes: any[]
}>()
</script>
