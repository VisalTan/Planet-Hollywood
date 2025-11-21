<template>
  <div class="booking-form">
    <h2>Book an Appointment</h2>
    
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name *</label>
        <input 
          id="name"
          v-model="form.name" 
          type="text" 
          required
          placeholder="Your full name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email *</label>
        <input 
          id="email"
          v-model="form.email" 
          type="email" 
          required
          placeholder="your@email.com"
        />
      </div>

      <div class="form-group">
        <label for="phone">Phone *</label>
        <input 
          id="phone"
          v-model="form.phone" 
          type="tel" 
          required
          placeholder="+1234567890"
        />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="date">Date *</label>
          <input 
            id="date"
            v-model="form.date" 
            type="date" 
            required
            :min="today"
          />
        </div>

        <div class="form-group">
          <label for="time">Time *</label>
          <input 
            id="time"
            v-model="form.time" 
            type="time" 
            required
          />
        </div>
      </div>

      <div class="form-group">
        <label for="message">Message (Optional)</label>
        <textarea 
          id="message"
          v-model="form.message" 
          rows="4"
          placeholder="Any special requests or notes..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        :disabled="loading"
        class="submit-btn"
      >
        {{ loading ? 'Sending...' : 'Book Now' }}
      </button>

      <div v-if="status.message" :class="['status', status.type]">
        {{ status.message }}
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  message: ''
})

const loading = ref(false)
const status = ref({ message: '', type: '' })

const today = computed(() => {
  return new Date().toISOString().split('T')[0]
})

const handleSubmit = async () => {
  loading.value = true
  status.value = { message: '', type: '' }

  try {
    // Send to your API endpoint
    await $fetch('/api/booking', {
      method: 'POST',
      body: form.value
    })

    status.value = {
      message: 'Booking request sent successfully! We will contact you soon.',
      type: 'success'
    }

    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    }
  } catch (error) {
    console.error('Booking error:', error)
    status.value = {
      message: 'Failed to send booking request. Please try again.',
      type: 'error'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.booking-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  margin-bottom: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #4f46e5;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #4338ca;
}

.submit-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}

.status.success {
  background: #d1fae5;
  color: #065f46;
}

.status.error {
  background: #fee2e2;
  color: #991b1b;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>