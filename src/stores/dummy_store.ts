import { defineStore } from "pinia";
import { rooms } from "~/data/planet_hollywood";

export const useDummyStore = defineStore('dummyStore', {
    state: () => ({
        loading: false,
        data: rooms
    }),
    actions: {
        async testingFunction() {
            this.loading = true
            await delay(2000)
            this.data.push({
                name: 'Phamous',
                description: 'Red-carpet energy with gold and copper tones',
                image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
                size: '23-120sqm'
            })
            this.loading = false
            console.log('Hello Naruto')
        }
    }
})