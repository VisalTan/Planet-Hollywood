// HTTP Service Types
interface HttpConfig {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

interface RequestOptions {
  headers?: Record<string, string>;
  queryParams?: Record<string, any>;
  timeout?: number;
}

interface HttpResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

class HttpError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public response?: Response
  ) {
    super(`HTTP Error: ${status} ${statusText}`);
    this.name = 'HttpError';
  }
}

export class HttpService {
  private baseURL: string;
  private timeout: number;
  private defaultHeaders: Record<string, string>;

  constructor(config: HttpConfig = {}) {
    this.baseURL = config.baseURL || 'https://api-dev.wardrobe365.com/api/v1';
    this.timeout = config.timeout || 10000; // 10 seconds default
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...config.headers
    };
  }

  // Helper method to build URL with query parameters
  private buildURL(endpoint: string, queryParams?: Record<string, any>): string {
    const url = this.baseURL + endpoint;
    
    if (!queryParams || Object.keys(queryParams).length === 0) {
      return url;
    }

    const urlObj = new URL(url, window?.location?.origin || 'http://localhost');
    
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach(v => urlObj.searchParams.append(key, String(v)));
        } else {
          urlObj.searchParams.append(key, String(value));
        }
      }
    });

    return urlObj.toString();
  }

  // Helper method to merge headers
  private mergeHeaders(options?: RequestOptions): Record<string, string> {
    return {
      ...this.defaultHeaders,
      ...options?.headers
    };
  }

  // Helper method to create AbortController for timeout
  private createAbortController(timeout?: number): AbortController {
    const controller = new AbortController();
    const timeoutMs = timeout || this.timeout;
    
    setTimeout(() => controller.abort(), timeoutMs);
    
    return controller;
  }

  // Main request method
  private async request<T>(
    method: string,
    endpoint: string,
    body?: any,
    options?: RequestOptions
  ): Promise<HttpResponse<T>> {
    const url = this.buildURL(endpoint, options?.queryParams);
    const headers = this.mergeHeaders(options);
    const controller = this.createAbortController(options?.timeout);

    const requestInit: RequestInit = {
      method,
      headers,
      signal: controller.signal
    };

    // Add body for methods that support it
    if (body && ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())) {
      requestInit.body = typeof body === 'string' ? body : JSON.stringify(body);
    }

    try {
      const response = await fetch(url, requestInit);

      // Check if response is ok
      if (!response.ok) {
        throw new HttpError(response.status, response.statusText, response);
      }

      // Parse response based on content type
      let data: T;
      const contentType = response.headers.get('content-type');
      
      if (contentType?.includes('application/json')) {
        data = await response.json();
      } else if (contentType?.includes('text/')) {
        data = await response.text() as unknown as T;
      } else {
        data = await response.blob() as unknown as T;
      }

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      };
    } catch (error) {
      if (error instanceof HttpError) {
        throw error;
      }
      
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      
      throw new Error(`Request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // GET method
  async get<T = any>(endpoint: string, options?: RequestOptions): Promise<HttpResponse<T>> {
    return this.request<T>('GET', endpoint, undefined, options);
  }

  // POST method
  async post<T = any>(endpoint: string, body?: any, options?: RequestOptions): Promise<HttpResponse<T>> {
    return this.request<T>('POST', endpoint, body, options);
  }

  // PUT method
  async put<T = any>(endpoint: string, body?: any, options?: RequestOptions): Promise<HttpResponse<T>> {
    return this.request<T>('PUT', endpoint, body, options);
  }

  // DELETE method
  async delete<T = any>(endpoint: string, options?: RequestOptions): Promise<HttpResponse<T>> {
    return this.request<T>('DELETE', endpoint, undefined, options);
  }

  // PATCH method (bonus)
  async patch<T = any>(endpoint: string, body?: any, options?: RequestOptions): Promise<HttpResponse<T>> {
    return this.request<T>('PATCH', endpoint, body, options);
  }

  // Utility methods
  setDefaultHeader(key: string, value: string): void {
    this.defaultHeaders[key] = value;
  }

  removeDefaultHeader(key: string): void {
    delete this.defaultHeaders[key];
  }

  setAuthToken(token: string): void {
    this.setDefaultHeader('Authorization', `Bearer ${token}`);
  }

  removeAuthToken(): void {
    this.removeDefaultHeader('Authorization');
  }
}

export const api = new HttpService();


api.setAuthToken('your-jwt-token');

// 8. File upload example
async function uploadFile(file: File) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await api.post<UploadResponse>('/upload', formData, {
      headers: {
        // Don't set Content-Type for FormData, let browser set it
        'Content-Type': undefined as any
      }
    });
    console.log('File uploaded:', response.data);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

interface UploadResponse {
  url: string;
  filename: string;
}