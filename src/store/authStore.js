import {createSlice} from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'authStore/login',
    async function ({username,password},{rejectedWithValue,dispatch,getState}){
        const {auth} = getState()
        try {
            const response = await AuthService.login(username,password)
            if (!response){
                dispatch(setError(true))
            }
            if (auth.checkedFollow){
                localStorage.setItem('access', response.data.access)
                localStorage.setItem('refresh', response.data.refresh)
            }
            dispatch(setError(false))
            dispatch(setAuth(true))
        }catch (e) {
            console.log(e.response?.data?.message)
        }
    }
)

export const register = createAsyncThunk(
    'authStore/register',
    async function ({first_name,last_name,username,email,password},{rejectedWithValue,dispatch}){
        try {
            await AuthService.registerUser(username,email,password)
            await dispatch(login({username:username, password:password}))
            dispatch(registerProfile({first_name:first_name, last_name:last_name}))
        }catch (e) {
            console.log(e.response?.data?.message)
        }
    }
)
export const registerProfile = createAsyncThunk(
    'authStore/registerProfile',
    async function ({first_name,last_name},{rejectedWithValue,dispatch}){
        try {
            await AuthService.registerProfile(first_name,'test',last_name)
        }catch (e) {
            console.log(e.response?.data?.message)
        }
    }
)
export const checkLogin = createAsyncThunk(
    'authStore/checkLogin',
    async function (_,{rejectedWithValue,dispatch}){
        try {
            const response = await AuthService.checkAuth(localStorage.getItem('access'))
        }catch (e) {
            console.log(e.response?.data?.message)
        }
    }
)
export const userMe = createAsyncThunk(
    'authStore/userMe',
    async function (_,{rejectedWithValue,dispatch}){
        try {
            const response = await AuthService.userMe()
            dispatch(setUser(response.data))
            dispatch(setAuth(true))
        }catch (e) {
            console.log(e.response?.data?.message)
        }
    }
)

const authStore = createSlice({
    name:'auth',
    initialState:{
        isAuth:false,
        checkedFollow:true,
        user:{},
        error:false,
    },
    extraReducers:{
    },
    reducers:{
        setAuth(state,action){
            state.isAuth = action.payload
        },
        setCheckedFollow(state){
            state.checkedFollow = !state.checkedFollow
        },
        setUser(state,action){
            state.user = action.payload
        },
        setError(state,action){
            state.error = action.payload
        },
        logout(state){
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            state.isAuth = false
         },
    }
})


export default authStore.reducer
export const {setAuth,setUser,setError,logout,setCheckedFollow} = authStore.actions