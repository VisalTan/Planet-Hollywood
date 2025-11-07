export class LoginService {
    async login({ email_username_phone, password }: { email_username_phone: string, password: string }) {
        const response = await api.post('/auth/login', { email_username_phone, password });
        return response.data;
    }

    async logout({ token }: { token: string }) {
        const response = await api.post('/auth/logout', { token })
        return response.data;
    }
}