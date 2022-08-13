
import Home from '~/container/home';
import Login from '~/container/auth/Login';
const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/Login', component: Login
    },



]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }