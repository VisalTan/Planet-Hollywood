<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <div v-if="inventoryStore.loading">Loading...</div>
    <div v-else-if="inventoryStore.inventoryDetail">
      <NuxtImg
        :src="inventoryStore.inventoryDetail.product.picture"
        width="300"
        fit="cover"
      />
      <h1 class="text-2xl font-bold mt-4">
        {{ inventoryStore.inventoryDetail.product.name }}
      </h1>
    </div>
    <div v-else>
      <p class="text-red-500">Inventory not found or invalid ID</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useInventoryStore } from "~/stores/inventory_store";

const route = useRoute();
const inventoryStore = useInventoryStore();

onMounted(() => {
  const id = route.params.id as string; // Keep ID as string
  if (!id) {
    console.error("Missing inventory ID");
    return;
  }
  inventoryStore.fetchInventoryById(id);
});
</script>
