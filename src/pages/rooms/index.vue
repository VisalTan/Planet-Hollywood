<template>
    <div class="relative flex min-h-screen w-full flex-col bg-black overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
            <div class="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
                <main class="flex flex-col py-16 md:py-20">
                    <HeroSection />
                    <RoomGrid :rooms="rooms" />
                    <ThemeTable :themes="themes" />
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeroSection from './view/components/HeroSection.vue'
import RoomGrid from './view/components/RoomGrid.vue'
import ThemeTable from './view/components/ThemeTable.vue'

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