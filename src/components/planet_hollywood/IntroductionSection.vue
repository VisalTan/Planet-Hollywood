<template>
    <section class="py-20 bg-linear-to-b from-black via-gray-900 to-black">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <!-- Left Content -->
                <div class="space-y-8">
                    <h2 class="text-6xl md:text-7xl font-black leading-tight">
                        Where Hollywood<br />
                        <span class="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">Meets
                            Cambodia</span>
                    </h2>

                    <p class="text-lg text-gray-300 leading-relaxed">
                        Planet Hollywood Hotel Phnom Penh marks the brand's first-ever hotel in Asia — a milestone that
                        brings
                        Hollywood's signature energy to the heart of Cambodia.
                    </p>

                    <p class="text-base text-gray-400 leading-relaxed">
                        Blending cinematic glamour with contemporary sophistication, the hotel features 148 rooms, each
                        designed
                        to deliver an elevated smart-living experience.
                    </p>

                    <!-- Stats Grid -->
                    <div class="grid grid-cols-3 gap-4 pt-6">
                        <div
                            class="border-2 border-pink-500 rounded-2xl p-6 text-center bg-black/40 backdrop-blur-sm hover:border-pink-400 transition-colors duration-300">
                            <p class="text-5xl font-black text-white mb-2">148</p>
                            <p class="text-sm text-gray-400">Rooms</p>
                        </div>

                        <div
                            class="border-2 border-cyan-500 rounded-2xl p-6 text-center bg-black/40 backdrop-blur-sm hover:border-cyan-400 transition-colors duration-300">
                            <p class="text-5xl font-black text-white mb-2">900+</p>
                            <p class="text-sm text-gray-400">Event Space (sqm)</p>
                        </div>

                        <div
                            class="border-2 border-purple-500 rounded-2xl p-6 text-center bg-black/40 backdrop-blur-sm hover:border-purple-400 transition-colors duration-300">
                            <div class="flex items-center justify-center mb-2">
                                <p class="text-5xl font-black text-white">5</p>
                                <svg class="w-8 h-8 text-purple-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <p class="text-sm text-gray-400">Facilities</p>
                        </div>
                    </div>
                </div>

                <!-- Right Image & Location -->
                <div class="relative">
                    <!-- Main Image Container -->
                    <div
                        class="relative rounded-3xl overflow-hidden border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 group">
                        <div class="aspect-[4/3] bg-linear-to-br from-gray-800 to-gray-900">
                            <!-- Placeholder for hotel interior image -->
                            <div
                                class="relative rounded-3xl overflow-hidden border border-cyan-400 shadow-2xl shadow-cyan-500/20 group">
                                <div class="aspect-[4/3] bg-linear-to-br from-gray-800 to-gray-900">
                                    <!-- Placeholder for hotel interior image -->
                                    <img src="/images/ph1.png" class="w-full h-full object-cover"
                                        alt="Planet Hollywood Hotel"></img>
                                </div>
                            </div>
                        </div>

                        <!-- Gradient Overlay for depth -->
                        <div
                            class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>