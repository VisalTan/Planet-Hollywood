// plugins/auth.client.ts
export default defineNuxtPlugin(() => {
    const tokenCookie = useCookie('token');
    
    // Restore token from cookie if it exists
    if (tokenCookie.value) {
        api.setAuthToken(tokenCookie.value);
    }
});