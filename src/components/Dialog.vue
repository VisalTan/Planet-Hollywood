<template>
    <div v-if="props.show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <p class="mb-4 text-2xl text-black">{{ props.message }}</p>
            <UButton @click="close" class="w-full">OK</UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    show: boolean
    message: string
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

function close() {
    emit('close')
}

</script>
