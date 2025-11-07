import { defineStore } from 'pinia';
import type { ProductInventory } from '~/types/product';
import { InventoryApiService } from '~/services/inventory_api_service';

export const useInventoryStore = defineStore('inventory', {
    state: () => ({
        inventories: [] as ProductInventory[],
        inventoryDetail: null as ProductInventory | null,
        loading: true,
        error: null as string | null,
        limit : 10 as number,
    }),
    actions: {
        async fetchInventories() {
            this.loading = true;
            this.error = null;
            const inventoryService = new InventoryApiService();
            try {
                this.inventories = await inventoryService.fetchInventory({ limit: this.limit });
                console.log(this.inventories);
            } catch (error) {
                this.error = (error as Error).message;
            } finally {
                this.loading = false;
            }
        },
        async fetchInventoryById(id: string) {
            this.loading = true;
            this.error = null;
            const inventoryService = new InventoryApiService();
            try {
                this.inventoryDetail = await inventoryService.fetchInventoryById(id);
                console.log(this.inventoryDetail);
            } catch (error) {
                this.error = (error as Error).message;
                return null;
            } finally {
                this.loading = false;
            }
        }
    }
});