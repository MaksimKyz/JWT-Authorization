import axios from "axios";
import {checkAuth} from "../store/authStore";
import AuthService from "../services/AuthService";

export const API_URL = 'https://api.fullstats.ru/api/v1/'


const $api = axios.create({
    withCredentials:true,
    baseURL:API_URL,
})

$api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return config
})
$api.interceptors.response.use((config)=>{
    return config
},async error => {
    const originalRequest = error.config
    if (error.response.status === 401){
        try {
            const response = await axios.post('https://api.fullstats.ru/api/v1/auth/token-refresh/',{refresh:localStorage.getItem('refresh')})
            localStorage.setItem('access', response.data.access)
            localStorage.setItem('refresh', response.data.refresh)
            originalRequest.data={'token':response.data.access}
            return $api.request(originalRequest)
        }catch (e) {
            console.log('не авторизован ')
        }
    }
})

export default $api;

