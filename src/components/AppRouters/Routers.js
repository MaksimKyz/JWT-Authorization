import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import Forgot from "../../Pages/Forgot/Forgot";

export const Routers = [
    {
        path:'/',
        component:Home,
        exact:true,
    },
    {
        path:'/login',
        component:Login,
        exact:true,
    },
    {
        path:'/register',
        component:RegisterPage,
        exact:true,
    },
    {
        path:'/forgot',
        component:Forgot,
        exact:true,
    },
]
