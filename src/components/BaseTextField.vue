<template>
    <div>
      <label :for="id" class="block text-sm font-medium text-gray-900 mb-1">
        {{ label }}
      </label>
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-black"
      />
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: 'Text Field',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
  })
  
  defineEmits(['update:modelValue'])
  </script>