// import { defineStore } from "pinia";
// import { UserService } from "~/services/user_api_service";
// import { UserModel } from "~/types/user";

// export const useUserStore = defineStore('user', {
//     state: () => ({
//         users: [] as UserModel[],
//         loading: false,
//         error: null as string | null,
//     }),
//     actions: {
//         async fetchUsers() {
//             this.loading = true;
//             this.error = null;
//             const userService = new UserService();
//             try {
//                 this.users = await userService.fetchUsers();
//             } catch (error) {
//                 this.error = (error as Error).message;
//             } finally {
//                 this.loading = false;
//             }
//         }
//     }
// });