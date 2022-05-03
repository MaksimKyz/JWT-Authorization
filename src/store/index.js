import {combineReducers,configureStore} from "@reduxjs/toolkit";
import authStore from "./authStore";


const rootReducer = combineReducers({
    auth:authStore
})

export const store = configureStore({
    reducer:rootReducer,
})