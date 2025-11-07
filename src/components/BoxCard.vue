<template>
    <div class="w-80 h-80 bg-blue-500 flex flex-col items-center justify-start rounded-2xl p-2">
        <img class="w-full h-50 object-fill rounded-xl mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hibP6oDeuDgeqPLHA43qA5iKajgfi-NjvyNxavVxuGCsLZEvnPq2FaNC394G4MyV70SIyLL3gdwJffXE8cjFIszq-J1yjpCQhJdk0A&s=10"
            alt="image" />
        <div class="text-white text-center font-semibold items-center w-full">
            <h3>{{ name }}</h3>
            <h1>{{ des }}</h1>
            <h1>{{ price }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    name: string,
    des: string,
    price: number
}>()

</script>