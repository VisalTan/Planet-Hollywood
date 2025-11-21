<template>
  <div class="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
    <!-- Header -->
    <div class="bg-linear-to-r from-blue-600 to-indigo-700 px-8 py-6">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-white">Hero Section Content</h2>
          <p class="text-blue-100 text-sm mt-1">Customize your homepage hero section</p>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="p-8">
      <form @submit.prevent="saveHeroContent" class="space-y-8">
        <!-- Title -->
        <div class="group">
          <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
            <svg class="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            Main Title
          </label>
          <input 
            v-model="heroForm.title" 
            type="text"
            class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-slate-300"
            placeholder="Enter an attention-grabbing title" 
          />
        </div>

        <!-- Subtitle -->
        <div class="group">
          <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
            <svg class="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            Subtitle
          </label>
          <input 
            v-model="heroForm.subtitle" 
            type="text"
            class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-slate-300"
            placeholder="Add a compelling subtitle" 
          />
        </div>

        <!-- Description -->
        <div class="group">
          <label class="flex items-center text-sm font-semibold text-slate-700 mb-2">
            <svg class="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Description
          </label>
          <textarea 
            v-model="heroForm.description" 
            rows="4"
            class="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-slate-300 resize-none"
            placeholder="Write a detailed description that captures your audience's attention"
          ></textarea>
          <p class="text-xs text-slate-500 mt-2">{{ heroForm.description.length }} characters</p>
        </div>

        <!-- Video Upload -->
        <VideoUpload
          v-model="heroForm.videoSrc"
          label="Hero Video"
        />

        <!-- Tags -->
        <div class="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
          <label class="flex items-center text-sm font-semibold text-slate-700 mb-4">
            <svg class="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Tags
            <span class="ml-2 text-xs text-slate-500 font-normal">({{ heroForm.tags.length }} tags)</span>
          </label>
          
          <div class="space-y-3">
            <div 
              v-for="(tag, index) in heroForm.tags" 
              :key="index" 
              class="flex items-center space-x-3 group/tag"
            >
              <div class="flex-1 relative">
                <input 
                  v-model="heroForm.tags[index]" 
                  type="text"
                  class="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-slate-300"
                  placeholder="Enter tag name" 
                />
              </div>
              <button 
                type="button" 
                @click="removeTag(index)" 
                class="shrink-0 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover/tag:opacity-100"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
          
          <button 
            type="button" 
            @click="addTag"
            class="mt-4 w-full inline-flex items-center justify-center px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Tag
          </button>
        </div>

        <!-- Save Button -->
        <div class="flex items-center justify-between pt-6 border-t-2 border-slate-200">
          <div class="flex items-center text-sm text-slate-500">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Changes will be visible immediately
          </div>
          <button 
            type="submit" 
            :disabled="loading"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-linear-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span v-if="loading">Saving Changes...</span>
            <span v-else>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useHero, type HeroContent } from '~/composables/content/useHero'
import VideoUpload from '~/components/admin/VideoUpload.vue'

const { heroContent, loading, updateHeroContent } = useHero()

// Hero form data
const heroForm = ref<HeroContent>({
  title: '',
  subtitle: '',
  description: '',
  tags: [],
  videoSrc: ''
})

// Watch for hero content changes and update form
watch(heroContent, (newContent) => {
  if (newContent) {
    heroForm.value = {
      title: newContent.title,
      subtitle: newContent.subtitle,
      description: newContent.description,
      tags: [...newContent.tags],
      videoSrc: newContent.videoSrc
    }
  }
}, { immediate: true })

// Hero content management methods
const saveHeroContent = async () => {
  try {
    await updateHeroContent(heroForm.value)
    // Success message could be added here
  } catch (err) {
    console.error('Error saving hero content:', err)
  }
}

const addTag = () => {
  heroForm.value.tags.push('')
}

const removeTag = (index: number) => {
  heroForm.value.tags.splice(index, 1)
}
</script>

<style scoped>
/* Smooth scrolling for the form */
@media (prefers-reduced-motion: no-preference) {
  .group {
    transition: transform 0.2s ease-in-out;
  }
  
  .group:focus-within {
    transform: translateY(-2px);
  }
}
</style>