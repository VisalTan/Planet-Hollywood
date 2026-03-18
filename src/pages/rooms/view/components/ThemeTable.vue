<template>
    <section class="py-8 sm:py-12">
        <div class="mb-6 sm:mb-10">
            <span class="text-xs sm:text-sm tracking-[0.3em] text-primary uppercase mb-4 block">Floor Availability</span>
            <h2 class="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Find Your Vibe
            </h2>
            <div class="mt-6 h-px w-20 bg-linear-to-r from-primary to-transparent"></div>
        </div>

        <div class="overflow-x-auto rounded-4xl border border-white/5 bg-surface-dark/50 backdrop-blur-xl shadow-3xl">
            <table class="w-full text-left text-sm sm:text-base text-neutral-300 min-w-[900px]">
                <thead class="bg-linear-to-r from-primary/20 via-primary/10 to-transparent text-white border-b border-white/10 uppercase tracking-widest text-xs font-black">
                    <tr>
                        <th class="p-6 sm:p-8" scope="col">Theme / Floors</th>
                        <th class="p-6 sm:p-8 text-center" scope="col">Superior</th>
                        <th class="p-6 sm:p-8 text-center" scope="col">Deluxe</th>
                        <th class="p-6 sm:p-8 text-center" scope="col">Premier Deluxe</th>
                        <th class="p-6 sm:p-8 text-center" scope="col">Executive</th>
                        <th class="p-6 sm:p-8 text-center" scope="col">Premier Executive</th>
                        <th class="p-6 sm:p-8 text-center" scope="col">Penthouse</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-white/5">
                    <tr v-for="(theme, index) in themes" :key="theme.name"
                        class="hover:bg-primary/5 transition-all duration-300 group">
                        <td class="p-6 sm:p-8">
                            <div class="flex flex-col">
                                <span class="font-black text-white text-lg tracking-tight group-hover:text-primary transition-colors">{{ theme.name }}</span>
                                <span class="font-light text-xs text-neutral-500 uppercase tracking-[0.2em] mt-1">{{ theme.floors }}</span>
                            </div>
                        </td>
                        <td class="p-6 sm:p-8 text-center">
                            <span v-if="theme.superior" class="material-symbols-outlined text-primary scale-110">check_circle</span>
                            <span v-else class="material-symbols-outlined text-white/5 scale-90">radio_button_unchecked</span>
                        </td>
                        <td class="p-6 sm:p-8 text-center">
                            <span v-if="theme.deluxe" class="material-symbols-outlined text-primary scale-110">check_circle</span>
                            <span v-else class="material-symbols-outlined text-white/5 scale-90">radio_button_unchecked</span>
                        </td>
                        <td class="p-6 sm:p-8 text-center">
                            <span v-if="theme.premierDeluxe" class="material-symbols-outlined text-primary scale-110">check_circle</span>
                            <span v-else class="material-symbols-outlined text-white/5 scale-90">radio_button_unchecked</span>
                        </td>
                        <td class="p-6 sm:p-8 text-center">
                            <span v-if="theme.executive" class="material-symbols-outlined text-primary scale-110">check_circle</span>
                            <span v-else class="material-symbols-outlined text-white/5 scale-90">radio_button_unchecked</span>
                        </td>
                        <td class="p-6 sm:p-8 text-center">
                            <span v-if="theme.premierExecutive" class="material-symbols-outlined text-primary scale-110">check_circle</span>
                            <span v-else class="material-symbols-outlined text-white/5 scale-90">radio_button_unchecked</span>
                        </td>
                        <td class="p-6 sm:p-8 text-center">
                            <span v-if="theme.penthouse" class="material-symbols-outlined text-primary scale-110">check_circle</span>
                            <span v-else class="material-symbols-outlined text-white/5 scale-90">radio_button_unchecked</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="bg-primary/5 text-white/40 border-t border-white/10 text-[10px] font-black tracking-widest uppercase">
                    <tr>
                        <td class="p-6 sm:p-8">Inventory Density</td>
                        <td class="p-6 sm:p-8 text-center">High</td>
                        <td class="p-6 sm:p-8 text-center">High</td>
                        <td class="p-6 sm:p-8 text-center">Standard</td>
                        <td class="p-6 sm:p-8 text-center">Limited</td>
                        <td class="p-6 sm:p-8 text-center">Exclusive</td>
                        <td class="p-6 sm:p-8 text-center">Signature</td>
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
