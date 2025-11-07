import { defineStore } from 'pinia';
import { LoginService } from '~/services/login_service';
import type { LoginResponseModel } from '~/types/login_response';


export const useLoginStore = defineStore('login', {
    state: () => ({
        LoginResponse: null as LoginResponseModel | null,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async login({ email_username_phone, password }: { email_username_phone: string; password: string }) {
            this.loading = true;
            this.error = null;
            const loginService = new LoginService();
            const tokenCookie = useCookie('token');
            const refreshTokenCookie = useCookie('refresh_token');

            try {
                this.LoginResponse = await loginService.login({ email_username_phone, password });
                console.log(this.LoginResponse);

                if (this.LoginResponse?.status.success) {
                    tokenCookie.value = this.LoginResponse.data.token;
                    refreshTokenCookie.value = this.LoginResponse.data.refresh_token;
                    console.log(`Login Successful`);
                    navigateTo('/'); // Redirect to home page on successful login
                }
            } catch (error) {
                this.error = (error as Error).message;
            } finally {
                this.loading = false;
            }
        },
        async logout() {
            this.loading = true;
            this.error = null;
            const loginService = new LoginService();
            const tokenCookie = useCookie('token');
            const refreshTokenCookie = useCookie('refresh_token');

            try {
                if (refreshTokenCookie.value && tokenCookie.value) {
                    api.setAuthToken(tokenCookie.value);
                    await loginService.logout({ token: refreshTokenCookie.value });
                }

                tokenCookie.value = null;
                refreshTokenCookie.value = null;
                this.LoginResponse = null;

                api.removeAuthToken();

                navigateTo('/auth/login');

                console.log("Logout successful");
            } catch (error) {
                this.error = (error as Error).message || 'Logout failed';
                console.error("Logout error:", error);
            } finally {
                this.loading = false;
            }
        }
    },
});