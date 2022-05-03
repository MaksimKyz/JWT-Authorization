import $api from "../http";
import axios from "axios";

export default class AuthService{

    static async login(username,password){
        return await $api.post('auth/login/',{username: username, password: password})
    }
    static async registerUser(username,email,password){
        return await axios.post('https://api.fullstats.ru/api/v1/signup/user/',{username:username,email:email,password:password})
    }
    static async registerProfile(first_name,patronymic_name,last_name){
        return await $api.post('signup/profile/',{first_name:first_name,patronymic_name:patronymic_name,last_name:last_name})
    }
    static async checkAuth(token){
        return await $api.post('auth/token-verify/',{token:token})
    }
    static async userMe(){
        return await $api.get('users/me/')
    }
}