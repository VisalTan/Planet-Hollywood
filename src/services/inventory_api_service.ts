import { api } from "@/composables/useHttp";
import type { ApiResponse } from "~/types/base_response";
import type { ProductInventory } from "~/types/product";

export class InventoryApiService {
  async fetchInventory({limit}: {limit: number}): Promise<ProductInventory[]> {
    try {
      const response = await api.get("/inventories/cursor",{
        queryParams: {
          limit: limit,
        }
      });
      const apiResponse = response.data as ApiResponse<ProductInventory[]>;

      if (!apiResponse.status.success) {
        throw new Error(`API Error: ${apiResponse.status.message}`);
      }

      console.log("API: Inventory data", apiResponse.data);
      return apiResponse.data;
    } catch (error) {
      console.error("API: Request failed", error);
      throw error;
    }
  }

  async fetchInventoryById(id: string): Promise<ProductInventory> {
    try {
      const response = await api.get(`/inventories/${id}`);

      // Access the nested data property
      const apiResponse = response.data as ApiResponse<ProductInventory>;

      if (!apiResponse.status.success) {
        throw new Error(`API Error: ${apiResponse.status.message}`);
      }

      return apiResponse.data;
    } catch (error) {
      console.error("API: Request failed", error);
      throw error;
    }
  }
}
