<template>
    <div class="relative flex min-h-screen w-full flex-col bg-black overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
            <!-- Main Content with Standard Landing Page Padding -->
            <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <main class="flex flex-col">
                    <!-- Hero Section -->
                    <section class="py-12 sm:py-16 lg:py-20">
                        <div class="flex min-h-[480px] sm:min-h-[520px] lg:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl sm:rounded-2xl items-center justify-center px-6 sm:px-8 lg:px-12 py-12 sm:py-16"
                            style="background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsIPeYZ9umrx9HlDV_IIPO7mmBNJKm9pY4Bvq2z8Kvs9fVTllig2CdJb9N05567k2VhNnIV7fzy2nWXz4ONgandrs-O3rm2_8LzsDwyRx18IS335eMHsVsFP4n8eQ4U_5_cjLX-_frFA1MnOwMH-RCwncDBoPc-SU5fX0sTTUjZQeue1coqwY5A5IFRvJyfkXJF6bQpyDiuZDgX94ZAs0ANWgcTE8twKdvmNOh5TL-NSbsjypAtLz7yvQYhAIqGcRpQrt-uP_lB1A');">
                            <div class="flex flex-col gap-4 sm:gap-6 text-center max-w-3xl">
                                <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                                    Experience Our Collection of Phamous Rooms
                                </h1>
                                <h2 class="text-white text-base sm:text-lg lg:text-xl font-normal leading-relaxed opacity-90">
                                    Discover unparalleled luxury and unique design across our themed accommodations,
                                    crafted for an unforgettable stay.
                                </h2>
                            </div>
                            <button
                                class="mt-4 flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 sm:h-14 px-6 sm:px-8 bg-[#af25f4] text-white text-base sm:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-[#8f1fd4] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                <span class="truncate">Explore Rooms</span>
                            </button>
                        </div>
                    </section>

                    <!-- Room Types Grid -->
                    <section class="py-12 sm:py-16 lg:py-20">
                        <div class="mb-8 sm:mb-12">
                            <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em]">
                                Choose Your Scene
                            </h2>
                            <p class="text-neutral-400 text-base sm:text-lg mt-3">
                                From cozy to spacious, find the perfect room for your stay
                            </p>
                        </div>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            <div v-for="room in rooms" :key="room.name" class="flex flex-col gap-4 group cursor-pointer">
                                <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-lg">
                                    <div class="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                                        :style="`background-image: url('${room.image}');`"></div>
                                </div>
                                <div class="px-1">
                                    <p class="text-white text-xl font-semibold leading-normal mb-1">{{ room.name }}</p>
                                    <p class="text-[#b790cb] text-sm font-normal leading-normal mb-2">{{ room.size }}</p>
                                    <a class="text-[#af25f4] text-sm font-medium leading-normal hover:text-[#8f1fd4] hover:underline inline-flex items-center gap-1 transition-colors"
                                        href="#">
                                        View Details 
                                        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Theme Table -->
                    <section class="py-12 sm:py-16 lg:py-20">
                        <div class="mb-8 sm:mb-12">
                            <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em]">
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
                                        <th class="p-4 sm:p-6 rounded-tr-xl font-bold text-center" scope="col">Penthouse</th>
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

                    <!-- CTA Section -->
                    <!-- <section class="py-12 sm:py-16 lg:py-20">
                        <div class="px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 bg-linear-to-r from-purple-900 via-[#af25f4] to-purple-800 rounded-2xl shadow-2xl">
                            <div class="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left max-w-6xl mx-auto">
                                <div class="flex-1">
                                    <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                                        Ready for Your Close-Up?
                                    </h2>
                                    <p class="text-white/90 text-lg sm:text-xl leading-relaxed">
                                        Your suite awaits. Secure your stay at Planet Hollywood and live like a star.
                                    </p>
                                </div>
                                <button
                                    class="shrink-0 min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-white text-[#af25f4] text-lg font-bold leading-normal tracking-[0.015em] hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                                    <span class="truncate">Book Your Stay</span>
                                </button>
                            </div>
                        </div>
                    </section> -->
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

useHead({
    title: 'Rooms - Planet Hollywood Phnom Penh',
    meta: [
        {
            name: 'description',
            content: 'Explore our collection of phamous rooms at Planet Hollywood Phnom Penh. Discover unparalleled luxury and unique design across our themed accommodations, crafted for an unforgettable stay.'
        }
    ]
})

definePageMeta({
    layout: 'hollywood',
    title: 'Rooms - Planet Hollywood Phnom Penh',
    meta: [
        {
            name: 'description',
            content: 'Explore our collection of phamous rooms at Planet Hollywood Phnom Penh. Discover unparalleled luxury and unique design across our themed accommodations, crafted for an unforgettable stay.'
        }
    ]
})

const rooms = [
    {
        name: 'Superior Room',
        size: '23sqm',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWYCCNps4N-hazXtnhUSyo92DjE-sYuooVLHaShthiCaPr-FoN-dixisql1VzVSaOYIQP2lAR0xvrJj40ON_TUO_B7snZzoQmh9F56eOzijhjLI5jU8xb3Wd-mxrrYSfPnYoS_NIq6PRYXMwHrBPMpz9lXM8ljx9PpbLnE11-wyUYQHXBlCXnx3f8rtLrWcRgyv18GDZp9x0phNKn5zOM3WOIGIJb2vOlQdFePNjfoarc3hp3krMWMeHU1sJjOK5gHNFswRmIiY9k'
    },
    {
        name: 'Deluxe Room',
        size: '29sqm',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByIKIN7x9oVyw8D_qSRHYYUIZENAKSI_kma2V_hzltElfjP-m0flQkGiJX8oLm9pbz6H4Afrp07Kn1zyUJgW46PF7Dlgmq9I9xlOb6dxM74pCgN5r1qittv43NZGTfB_qpDjFEOpBCmtqulwLewAb53IQdYasKOAhpjvk9kSTvNVskrrkWNz4Ie1Nmv2jIIOkldpWvVzl9SKkhVqXhOkJdzNUNEK2vw7PB_QSUEXRvkqdRr3_7iFNxw8Sj61aztRm_1JHfd-JQWnY'
    },
    {
        name: 'Premier Deluxe',
        size: '53sqm',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDba9RvNrPQ7M7LzTr0RiUn8B-aqdwsiW5FiE4YKXDLEQIIsENfNLqwvue00-9kdm6PMl2viabwj9k8qYSetEPjkVjYtZ9wvVHaS05Sfr0z-B-0aM7M_oC9m29nBDNXRzzV1f4HH93Q_PVNEwtu72LPV3ZMuZ5FwHyAc3AY2InQ-DStySRmOVyuaZM3pJ8wv3ZF_Z7Tahekfg8l6_CYvr_BAYRkIOvI7jph5OYLJj6GfugVIeXfPl39GDLroA0LZm8MiPQk9yfgxE'
    },
    {
        name: 'Executive',
        size: '60sqm',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUO1a8zVs6GJ9RXxz_JzfA2hQW0srSczu8jHQVvOCBszaysifJ3kUvX7R51MjBSv_jexl4RCF1qs6c7p5W1rdYPv_FEshq-HpacDfeDeFNDIXJ4L-gIEFzNuWDwqlCp4H_6_EP9jxVKLReo9NR7Zb9f_BzAjhX7R2OGqXlg0TOfmadWT1xO3B3ZBW9WSI-9KFzbL2Ga8pQovlUKeSF1ShbQca4kdhG4wh8cdHy0eCzlK3Cjl2ENBOFsLnEtKmhJQGmBuwTnlZGRZQ'
    },
    {
        name: 'Premier Executive',
        size: '65sqm',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1JMw2EaaX_QNhUm4L35RXGwahs4QSlLamsZQJAitaMHUtH_bVhN0jhpawEn8zi47n01lMnXmeBxRFMjPk6GkKRKpVgILLDp27uRPkjxW7K1Qv888HCYDomF83GYDFWHyXK_JE1gCBDZJb9fbvi4rAWINe-_IcZ_tZlEI4Glff7KPGlV17kAF0GbPdEHxndKE2P3U1GlulEZOk29kE5zgAESXOuUrft5X6iLV0a_HrNrqEJg4jt8521UAmiQboc0SZnts6cWcNxbI'
    },
    {
        name: 'Penthouse',
        size: '120sqm',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAcvxwYWsYlR5g3y1Qqi66AduVCmbJZ4Ay-qLEkTnUH1lXgJFIRiA9EoeSzgLzGKP-AERDX2yW1CwLF7-CZ1kcsgqNIvJuW5Ua7EYextA83xUKVVdK7IHh1wN50_k0w1DWu7J6_FyleJtPe2hJKYrpfTbjIYBXhMggnclkjqqhiWQn3RlreypHBp1VNyc10KrA-KkRoWxvCm2rQwAlberZexehUNVn_iU3nRuC2VqdLovCmLBQqc4BEnxWbmbEdKwrtMjpxwgAhwM'
    }
]

const themes = [
    {
        name: 'Phamous',
        floors: 'Floors 31-33',
        superior: true,
        deluxe: true,
        premierDeluxe: true,
        executive: false,
        premierExecutive: false,
        penthouse: false
    },
    {
        name: 'Phantastic',
        floors: 'Floors 34-36',
        superior: false,
        deluxe: true,
        premierDeluxe: true,
        executive: true,
        premierExecutive: false,
        penthouse: false
    },
    {
        name: 'Phabulous',
        floors: 'Floors 37-39',
        superior: false,
        deluxe: false,
        premierDeluxe: true,
        executive: true,
        premierExecutive: true,
        penthouse: false
    },
    {
        name: 'Phun',
        floors: 'Floor 40',
        superior: false,
        deluxe: false,
        premierDeluxe: false,
        executive: false,
        premierExecutive: true,
        penthouse: true
    }
]
</script>

<style scoped>
/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
    height: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background: #af25f4;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #8f1fd4;
}
</style>