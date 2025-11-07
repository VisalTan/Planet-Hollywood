
export interface Category {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    name: string;
    description: string;
    image: string;
}

export interface Promotion {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    type: 'percentage' | 'fixed'; // Assuming these are the main types
    value: number;
    start_at: string;
    end_at: string;
    is_active: boolean;
    usage_limit?: number;
}

export interface Product {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    slug: string;
    picture: string;
    description: string;
    specification: string;
    price: number;
    final_price: number;
    has_promotion: boolean;
    promotion?: Promotion;
    sku: string;
    categories: Category[];
}

export interface AvailableSize {
    size: string;
    qty: number;
}

export interface ProductInventory {
    id: string;
    created_at: string;
    updated_at: string;
    total_qty: number;
    qty: number;
    delivery_fee: number;
    product_id: string;
    product: Product;
    rating: number;
    review_count: number;
    total_rate: number;
    available_sizes: AvailableSize[];
    in_cart: boolean;
    is_favorite: boolean;
}


// Helper types for specific use cases
export type ProductWithInventory = ProductInventory;

export interface ProductSummary {
    id: string;
    name: string;
    price: number;
    final_price: number;
    has_promotion: boolean;
    rating: number;
    review_count: number;
    in_cart: boolean;
    is_favorite: boolean;
}

// Utility functions (optional)
export class ProductUtils {
    static calculateDiscountPercentage(product: Product): number | null {
        if (!product.has_promotion) return null;
        return Math.round(((product.price - product.final_price) / product.price) * 100);
    }

    static isInStock(inventory: ProductInventory): boolean {
        return inventory.qty > 0;
    }

    static getAvailableSizes(inventory: ProductInventory): string[] {
        return inventory.available_sizes
            .filter(size => size.qty > 0)
            .map(size => size.size);
    }

    static getTotalAvailableQuantity(inventory: ProductInventory): number {
        return inventory.available_sizes.reduce((total, size) => total + size.qty, 0);
    }
}

// Enums for better type safety
export enum ProductSize {
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
    XXL = 'XXL',
    ONE_SIZE = 'One Size'
}

export enum CategoryName {
    DRESS = 'Dress',
    SHIRT = 'Shirt',
    JEANS = 'Jeans',
    TROUSERS = 'Trousers',
    UNDERWEAR = 'Underwear',
    PURSE = 'Purse',
    SHORTS = 'Shorts'
}

// Example usage with type guards
export function isProductOnSale(product: Product): boolean {
    return product.has_promotion && product.final_price < product.price;
}

export function hasReviews(inventory: ProductInventory): boolean {
    return inventory.review_count > 0;
}