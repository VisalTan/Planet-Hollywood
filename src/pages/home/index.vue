<template>
    <header class="flex justify-between p-4 items-center bg-black">
        <h1 class="text-xl font-bold text-white">Home Page</h1>
        <UInput class="w-200" placeholder="Search Your Item" />
        <div class="flex space-x-4">
            <NuxtLink to="/">
                <UIcon name="i-lucide-log-in" class="w-6 h-6 text-white hover:text-blue-700" />
            </NuxtLink>
            <NuxtLink to="/">
                <UIcon name="i-lucide-home" class="w-6 h-6 text-white hover:text-blue-700" />
            </NuxtLink>
            <UIcon name="i-lucide-bell" class="w-6 h-6 text-white hover:text-blue-700" />
        </div>
    </header>

    <!-- Main Content -->
    <div class="p-4 min-h-screen">
        <!-- Loading State -->
        <div v-if="inventoryStore.loading" class="flex justify-center items-center h-96">
            <div class="text-center">
                <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mx-auto mb-4">
                </div>
                <p class="text-gray-600 text-lg">Loading products...</p>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="inventoryStore.error" class="flex justify-center items-center h-96">
            <div class="text-center max-w-md mx-auto p-8">
                <UIcon name="i-lucide-alert-circle" class="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
                <p class="text-gray-600 mb-6">{{ inventoryStore.error }}</p>
                <button @click="retryFetch"
                    class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200">
                    <UIcon name="i-lucide-refresh-cw" class="w-4 h-4 inline mr-2" />
                    Try Again
                </button>
            </div>
        </div>

        <!-- Empty State -->
        <div v-else-if="!inventoryStore.inventories || inventoryStore.inventories.length === 0"
            class="flex justify-center items-center h-96">
            <div class="text-center max-w-md mx-auto p-8">
                <UIcon name="i-lucide-package-x" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 class="text-2xl font-bold text-gray-800 mb-2">No Products Found</h2>
                <p class="text-gray-600 mb-6">We couldn't find any products in our inventory right now. Please check
                    back later!</p>
                <button @click="retryFetch"
                    class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200">
                    <UIcon name="i-lucide-refresh-cw" class="w-4 h-4 inline mr-2" />
                    Refresh
                </button>
                <UButton></UButton>
            </div>
        </div>

        <!-- Success State - Products Grid -->
        <div v-else>
            <div class="flex flex-wrap justify-center">
                <div v-for="value in inventoryStore.inventories" :key="value.id">
                    <div :key="value.id"
                        class="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-200 cursor-pointer bg-white"
                        @click="navigateTo(`/product/${value.id}`)">
                        <!-- Product Image with Error Handling -->
                        <div class="relative mb-4">
                            <NuxtImg :src="value.product.picture" :alt="value.product.name" width="100%" height="200"
                                fit="cover" class="rounded-lg" loading="lazy" />
                        </div>

                        <!-- Product Name -->
                        <div class="font-bold text-xl mb-2 text-gray-800 truncate">
                            {{ value.product.name || 'Unnamed Product' }}
                        </div>

                        <!-- Additional product info if available -->
                        <div v-if="value.product.price" class="text-gray-600">
                            ${{ value.product.price }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="mt-8 flex justify-center">
                <UPagination :page="page" @pageChange="handlePageChange" :items-per-page="inventoryStore.limit"
                    :total="100" />
            </div>
        </div>
    </div>

    <footer>
        <div class="text-center p-4 bg-gray-800 text-white">
            &copy; 2024 Your Company. All rights reserved.
        </div>
    </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useInventoryStore } from "~/stores/inventory_store";

const inventoryStore = useInventoryStore();
const page = ref(1);

// Handle page change
const handlePageChange = (newPage: number) => {
    page.value = newPage;
    // You can implement pagination logic here if your API supports it
    // For now, just update the page number
};

// Retry fetch function
const retryFetch = async () => {
    try {
        await inventoryStore.fetchInventories();
    } catch (error) {
        console.error('Failed to retry fetch:', error);
    }
};

// Handle image loading errors
const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;
    // Set a placeholder image or hide the image
    img.src = '/placeholder-image.jpg'; // Make sure you have a placeholder image
    // Or you could hide the image entirely:
    // img.style.display = 'none';
};

onMounted(() => {
    inventoryStore.fetchInventories();
});
</script>

<style scoped>
.loader {
    border-top-color: #3498db;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* Optional: Add some hover animations */
.cursor-pointer:hover {
    transform: translateY(-2px);
}

/* Ensure images don't break layout */
img {
    max-width: 100%;
    height: auto;
}
</style>