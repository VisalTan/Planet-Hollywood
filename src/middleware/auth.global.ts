export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token');

    // Define public routes that don't require authentication
    const publicRoutes = ['/auth/login', '/register', '/forgot-password', '/splash', '/planet-hollywood','/gordon-ramsay'];

    // Check if the current route is public
    const isPublicRoute = publicRoutes.some(route => to.path.startsWith(route));

    // If user is not authenticated and trying to access protected route
    // if (!token.value && !isPublicRoute) {
    //     return navigateTo('/auth/login');
    // }

    // // If user is authenticated and trying to access login page
    // if (token.value && to.path === '/auth/login') {
    //     return navigateTo('/');
    // }
});