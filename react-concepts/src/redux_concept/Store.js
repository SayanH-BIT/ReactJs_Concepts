import { configureStore } from '@reduxjs/toolkit'
import { CounterSlice } from './CounterSlice.js'

export const Store = configureStore({
    reducer:{
        counter: CounterSlice
    },
})