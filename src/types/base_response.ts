export interface ApiResponse<T> {
    status: {
        code: number;
        message: string;
        success: boolean;
    };
    meta: {
        limit: number;
        current: string;
        next: string;
    };
    data: T;
}