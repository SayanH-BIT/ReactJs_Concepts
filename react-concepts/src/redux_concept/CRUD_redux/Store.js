import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserReducer'

export const Store = configureStore({
    reducer:{
        users:UserReducer
    },
})