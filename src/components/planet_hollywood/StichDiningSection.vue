<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col font-display text-white overflow-hidden bg-background-dark">
    <!-- Background gradients -->
    <div class="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 via-background-dark to-background-dark pointer-events-none"></div>
    <div class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50"></div>
    <div class="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50"></div>

    <!-- Main content -->
    <div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header section -->
      <div class="py-24 sm:py-32">
        <div class="flex flex-col items-center text-center">
          <span class="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Taste the Fame</span>
          <h2 class="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl">
            Culinary Experiences
          </h2>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Indulge in a world of flavor where every meal is a scene-stealer. From legendary burgers to celebrity-worthy cocktails, savor the star treatment.
          </p>
        </div>
      </div>

      <!-- Restaurant cards -->
      <div class="pb-24 sm:pb-6">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <!-- Café Hollywood -->
          <div class="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 shadow-2xl shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            <div class="aspect-w-4 aspect-h-5 relative overflow-hidden">
              <img 
                alt="Interior view of Café Hollywood featuring elegant seating and warm lighting" 
                class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkSfFgZ1_n_W3ctaH4F66N3uddZTFFOAeMMuCkl2i9u9FS36uvIIr81eObVTaa178sPgG3_SwcfxFE2tHzJxRDtJ5qq1VKZbJFTk2ClIMhMPb8_k54gmefWV18nIf9wYOJN2grsYafu4RGy4z26PDtfyxlu1_uVBOuSZ1W0m8Ijbl59jbqfjJ5x1-OFWSVkGh8P-maYueiDMJAt41SjHoR1XMXGIQWP58LQ46UkgdU_33sYfAyx01IFG_1UNDczzhFKSNP_RkMZmY"
              />
            </div>
            
            <!-- Default state - always visible -->
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent p-6 sm:p-8 transition-opacity duration-500 group-hover:opacity-0">
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">CAFÉ HOLLYWOOD</h3>
                <!-- <span class="whitespace-nowrap rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  All Day Dining
                </span> -->
              </div>
              <p class="mt-2 text-sm italic text-gray-300">A celebration of cinema and cuisine.</p>
            </div>
            
            <!-- Hover state - clean and focused -->
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div class="text-center space-y-6">
                <div>
                  <h3 class="text-3xl font-bold tracking-tight text-white mb-2">CAFÉ HOLLYWOOD</h3>
                  <p class="text-primary text-sm font-semibold uppercase tracking-wider">All Day Dining</p>
                </div>
                
                <div class="space-y-3 text-white/90">
                  <div class="flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg text-primary">schedule</span>
                    <span class="text-sm">6:00 AM - 11:00 PM</span>
                  </div>
                  <div class="flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg text-primary">restaurant</span>
                    <span class="text-sm">International & Local Favorites</span>
                  </div>
                </div>
                
                <!-- <button class="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-background-dark transition-all hover:bg-primary/90 hover:scale-105">
                  Explore Menu
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </button> -->
              </div>
            </div>
          </div>

          <!-- The Marquee Bar -->
          <div class="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 shadow-2xl shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            <div class="aspect-w-4 aspect-h-5 relative overflow-hidden">
              <img 
                alt="Dark moody atmosphere of The Marquee Bar with neon lights" 
                class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-MIwoYxhymTNx1UTId1pBxOCjQJQCwbhD2cYaRHl-nq8JuE51H1iVa8BSsHepFc_41q3V2KkcJJxeJqwIefPWIw0mmVYRZbWgXAnbZya7ZaRjqtefEKX8nhvIqTYktM66E-mw3sLPD6pfXDJlmXWiwQdFNn5I03s9CTQJdfV4-eUka-eRSs-kvJpbQNlHlw8LSkHSU8Tf-Ln2HrPHpRDQ9xXS7HtSSBueze4zjN5EOS0-NdivQrwutf2ZrhAEmy1LkY2zvdsS1aY"
              />
            </div>
            
            <!-- Default state -->
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent p-6 sm:p-8 transition-opacity duration-500 group-hover:opacity-0">
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">THE MARQUEE BAR</h3>
                <!-- <span class="whitespace-nowrap rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Nightlife
                </span> -->
              </div>
              <p class="mt-2 text-sm italic text-gray-300">The heartbeat of the hotel.</p>
            </div>
            
            <!-- Hover state -->
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div class="text-center space-y-6">
                <div>
                  <h3 class="text-3xl font-bold tracking-tight text-white mb-2">THE MARQUEE BAR</h3>
                  <p class="text-primary text-sm font-semibold uppercase tracking-wider">Nightlife</p>
                </div>
                
                <div class="space-y-3 text-white/90">
                  <div class="flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg text-primary">schedule</span>
                    <span class="text-sm">5:00 PM - 2:00 AM</span>
                  </div>
                  <div class="flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg text-primary">local_bar</span>
                    <span class="text-sm">Signature Cocktails & DJ</span>
                  </div>
                </div>
                
                <!-- <button class="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-background-dark transition-all hover:bg-primary/90 hover:scale-105">
                  View Lounge
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </button> -->
              </div>
            </div>
          </div>

          <!-- Gordon Ramsay Burger -->
          <div class="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 shadow-2xl shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            <div class="aspect-w-4 aspect-h-5 relative overflow-hidden">
              <img 
                alt="Juicy gourmet burger from Gordon Ramsay Burger restaurant" 
                class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9lgA-tqGKj9D45jf9ZSemT5irmSt2RzJsGFdZG8IhClbTBahKIi11jyLAaHP7F2c8DlibH9YJiLC4sheuuq_EKW81yZlG4hTmFL6UNh_3WQ85GiU3Rfdbv6AreZu9OlbPRmyHFNATnR3B3-fc_rL3S9jqWYF1CPz45GP6v2hBFX661hwX8kLKXhSCV0bwJN96ZWLVcbpFo-mAZAbJ6PzmtRMU8NerKo3Sy4Ez7ISYVil6HL7reVuSntA5mvuAUDbL7GKgskalZI4"
              />
            </div>
            
            <!-- Default state -->
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent p-6 sm:p-8 transition-opacity duration-500 group-hover:opacity-0">
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">GORDON RAMSAY BURGER</h3>
                <!-- <span class="whitespace-nowrap rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Signature
                </span> -->
              </div>
              <p class="mt-2 text-sm italic text-gray-300">Legendary flavor, perfected.</p>
            </div>
            
            <!-- Hover state -->
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div class="text-center space-y-6">
                <div>
                  <h3 class="text-3xl font-bold tracking-tight text-white mb-2">GORDON RAMSAY BURGER</h3>
                  <p class="text-primary text-sm font-semibold uppercase tracking-wider">Signature</p>
                </div>
                
                <div class="space-y-3 text-white/90">
                  <div class="flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg text-primary">schedule</span>
                    <span class="text-sm">11:00 AM - 10:00 PM</span>
                  </div>
                  <div class="flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg text-primary">lunch_dining</span>
                    <span class="text-sm">Gourmet Burgers & Shakes</span>
                  </div>
                </div>
                
                <!-- <button class="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-background-dark transition-all hover:bg-primary/90 hover:scale-105">
                  Reserve Table
                  <span class="material-symbols-outlined text-base">calendar_month</span>
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA section -->
      <div class="py-16 sm:py-24">
        <div class="flex flex-col items-center gap-8 rounded-xl bg-gradient-to-br from-primary/10 via-background-dark/0 to-primary/10 p-8 text-center sm:p-16">
          <h3 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Experience the Flavor of Fame
          </h3>
          <p class="max-w-xl text-lg leading-8 text-gray-300">
            Book your table today and indulge in world-class dining. Whether it's a casual bite or a night out, we have the perfect seat waiting for you.
          </p>
          <button class="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-base font-bold text-background-dark shadow-lg shadow-primary/30 transition-transform hover:scale-105">
            <span class="truncate">Book a Table</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aspect-w-4 {
  position: relative;
  padding-bottom: 125%;
}

.aspect-w-4 > img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>