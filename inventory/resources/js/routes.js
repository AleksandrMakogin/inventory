import login from "./components/auth/login";
import register from "./components/auth/register";


export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/register', component: register, name: '/register' }
]
