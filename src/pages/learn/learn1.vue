<template>
    <nav>
        <div class="w-full bg-white flex justify-between items-center px-10 py-4 shadow-sm">
            <div class="flex items-center space-x-2">
                <UIcon name="mdi:home" size="35px" />
                <h2 class="text-2xl font-bold">AB Pro</h2>
            </div>

            <div class="flex space-x-6 text-gray-700 font-medium">
                <NuxtLink to="/" class="hover:text-blue-500 transition">Home</NuxtLink>
                <NuxtLink to="/" class="hover:text-blue-500 transition">About</NuxtLink>
                <NuxtLink to="/" class="hover:text-blue-500 transition">Services</NuxtLink>
                <NuxtLink to="/" class="hover:text-blue-500 transition">Contact</NuxtLink>
            </div>
        </div>
    </nav>

    <main>
        <!-- Hero Section -->
        <section class="m-4 px-2">
            <div class="relative w-full flex items-center rounded-2xl overflow-hidden h-[400px]">
                <!-- Background Image -->
                <NuxtImg src="/images/ph1.png" class="absolute inset-0 w-full h-full object-cover" />

                <!-- Content -->
                <div class="relative z-10 p-8 max-w-2xl">
                    <h2 class="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6 text-black">
                        Boosts the <br /><span class=" text-blue-500 font-bold">credibility</span> of <br /> your brand
                    </h2>
                    <p class=" text-sky-300 font-semibold mb-6">
                        If you can get your customers to love your products — not just your brand.
                    </p>
                    <div class="flex gap-4">
                        <UButton label="Join for free" size="lg" />
                        <UButton label="Learn more" size="lg" color="primary" variant="outline" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="m-4 px-50 py-20 space-y-8">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <h3 class="font-bold text-2xl text-gray-900">
                    Features our company provides for you
                </h3>
                <p class="text-gray-500 max-w-lg">
                    We always give each of our clients comfort in using our company services.
                </p>
            </div>

            <!-- Feature Cards -->
            <div class="flex flex-wrap justify-between gap-6">
                <div v-for="(item, index) in 3" :key="index"
                    class="w-80 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div class="p-8 space-y-4">
                        <!-- Icon -->
                        <div class="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-xl">
                            <Icon name="mdi:lightning-bolt" size="20px" class="text-white" />
                        </div>

                        <!-- Title -->
                        <h3 class="text-xl font-semibold text-gray-900">Fast Build</h3>

                        <!-- Description -->
                        <p class="text-gray-600 leading-relaxed">
                            Construction is carried out by experts according to specific timelines.
                        </p>

                        <!-- Link -->
                        <NuxtLink to="/" class="inline-block text-blue-600 font-medium hover:underline">
                            Read more →
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class=" flex justify-center flex-col items-center gap-2">
                <h3 class=" font-bold text-xl">Our Property</h3>
                <h1 class=" font-semibold text-gray-400 text-sm">We have many property for you with affordable price</h1>
            </div>
        </section>

    </main>

    <footer class="p-6 text-center text-gray-500">
        © 2025 AB Pro. All rights reserved.
    </footer>
</template>
