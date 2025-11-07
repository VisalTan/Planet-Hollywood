<template>
    <UButton :label="label" :icon="icon" :color="color" :size="size" :variant="variant" :loading="loading"
        @click="$emit('click')"></UButton>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "Button"
    },
    icon: {
        type: String,
        default: "i-lucide-lightbulb",
    },
    color: {
        type: String,
        default: "primary"
    },
    size: {
        type: String,
        default: "md"
    },
    variant: {
        type: String,
        default: "solid"
    },
    loading: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>