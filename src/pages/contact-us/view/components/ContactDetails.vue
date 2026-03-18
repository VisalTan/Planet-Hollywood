<template>
    <div class="lg:col-span-5 flex flex-col gap-8">
      <!-- Contact Details Cards -->
      <div class="flex flex-col gap-4">
        <h3 class="text-white text-xl font-bold">Contact Information</h3>
        <p class="text-neutral-400 text-sm mb-2">Reach out to our concierge, reservations team, or media relations department.</p>

        <div class="flex flex-col gap-3">
          <!-- General -->
          <div class="flex gap-4 rounded-xl border border-white/10 bg-[#2b1834]/50 p-5 hover:border-purple-600/50 transition-colors group">
            <div class="text-purple-600 bg-[#1c1022] p-3 rounded-full h-fit group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined">call</span>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-white text-base font-bold leading-tight">General Inquiries</h2>
              <p class="text-neutral-400 text-sm font-normal leading-normal">+852 5555 0199</p>
              <p class="text-neutral-400 text-sm font-normal leading-normal">info@planethollywood.asia</p>
            </div>
          </div>

          <!-- Reservations -->
          <div class="flex gap-4 rounded-xl border border-white/10 bg-[#2b1834]/50 p-5 hover:border-purple-600/50 transition-colors group">
            <div class="text-purple-600 bg-[#1c1022] p-3 rounded-full h-fit group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined">calendar_month</span>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-white text-base font-bold leading-tight">Reservations</h2>
              <p class="text-neutral-400 text-sm font-normal leading-normal">+852 5555 0200</p>
              <p class="text-neutral-400 text-sm font-normal leading-normal">reservations@planethollywood.asia</p>
            </div>
          </div>

          <!-- Press -->
          <div class="flex gap-4 rounded-xl border border-white/10 bg-[#2b1834]/50 p-5 hover:border-purple-600/50 transition-colors group">
            <div class="text-purple-600 bg-[#1c1022] p-3 rounded-full h-fit group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined">campaign</span>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-white text-base font-bold leading-tight">Press & Media</h2>
              <p class="text-neutral-400 text-sm font-normal leading-normal">+852 5555 0201</p>
              <p class="text-neutral-400 text-sm font-normal leading-normal">press@planethollywood.asia</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Location / Map -->
      <div class="flex flex-col gap-4 mt-4">
        <h3 class="text-white text-xl font-bold">Visit Us</h3>
        <div class="rounded-xl overflow-hidden border border-white/10 bg-[#2b1834]/50 shadow-lg">
          <div class="w-full bg-center bg-no-repeat aspect-video bg-cover relative group cursor-pointer"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBt0lieeqg2XYxPYe761qwJ2BpZLHzgbV6HcxokteDg7BrVVK4nvbswglqB1Gd88EIOH8saFh2UUsy4xsQcXuawvhrDIrV-ave-YHlBnHxbIUrEedTH50era9WRY7iKoeRBk1dlakwMfH-RHS2oYaeliG11Gf1x-6H-C65R_X8txoilhIc5KQ4lmbDvggEWBeb48n8igTpOA5kGfo1OoXngJT6xzBjQQYszQanNsJpDKais3YbNaw2CEY8bstmAvSe-qHGHB-IA6GY');">
            <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
            <div
              class="absolute bottom-4 left-4 bg-[#1c1022]/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white border border-purple-600/30 flex items-center gap-1">
              <span class="material-symbols-outlined text-sm text-purple-600">location_on</span> View on Map
            </div>
          </div>
          <div class="p-5">
            <p class="text-white text-base font-medium leading-normal">Planet Hollywood Asia</p>
            <p class="text-neutral-400 text-sm font-normal leading-normal mt-1">123 Star Avenue, Entertainment District, Asia</p>
            <p class="text-white/80 text-sm font-normal leading-normal mt-3">Located in the heart of the city, surrounded by iconic landmarks and vibrant nightlife.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
