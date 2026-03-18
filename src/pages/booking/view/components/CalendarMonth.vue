<template>
  <div>
    <div class="grid grid-cols-7 gap-1 text-center mb-2">
      <span 
        v-for="day in weekDays" 
        :key="day"
        class="text-gray-500 text-xs font-bold py-1"
      >
        {{ day }}
      </span>
    </div>
    
    <div class="grid grid-cols-7 gap-1">
      <span 
        v-for="blank in firstDayOfMonth" 
        :key="`blank-${blank}`"
        class="text-gray-700 py-2"
      ></span>
      
      <button
        v-for="day in daysInMonth"
        :key="day"
        @click="$emit('select-date', new Date(year, month, day))"
        :class="getDayClasses(day)"
        class="py-2 text-sm transition-colors rounded-full"
      >
        {{ day }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  month: number
  year: number
  selectedRange: {
    start: Date | null
    end: Date | null
  }
}>()

const emit = defineEmits<{
  'select-date': [date: Date]
}>()

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const daysInMonth = computed(() => {
  return new Date(props.year, props.month + 1, 0).getDate()
})

const firstDayOfMonth = computed(() => {
  return new Date(props.year, props.month, 1).getDay()
})

const getDayClasses = (day: number) => {
  const date = new Date(props.year, props.month, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const isPast = date < today
  const isStart = props.selectedRange.start && 
    date.toDateString() === props.selectedRange.start.toDateString()
  const isEnd = props.selectedRange.end && 
    date.toDateString() === props.selectedRange.end.toDateString()
  const isInRange = props.selectedRange.start && props.selectedRange.end &&
    date > props.selectedRange.start && date < props.selectedRange.end
  
  if (isPast) {
    return 'text-gray-400 cursor-not-allowed'
  }
  
  if (isStart) {
    return 'text-white bg-primary rounded-l-full z-10 font-bold'
  }
  
  if (isEnd) {
    return 'text-white bg-primary rounded-r-full z-10 font-bold'
  }
  
  if (isInRange) {
    return 'text-white bg-primary/30 z-0'
  }
  
  return 'text-white font-medium hover:bg-white/10'
}
</script>