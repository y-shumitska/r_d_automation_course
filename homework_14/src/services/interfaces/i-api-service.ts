export interface IApiService {
    get(uri: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<Response>;
    post(uri: string, body: unknown, headers?: Record<string, string>): Promise<Response>;
    put(uri: string, body: unknown, headers?: Record<string, string>): Promise<Response>;
}
