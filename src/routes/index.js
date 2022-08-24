
import Home from '~/container/home';
import Login from '~/components/auth/Login';
import Register from '~/components/auth/Register';
const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/login', component: Login
    },
    {
        path: '/register', component: Register
    }


]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }