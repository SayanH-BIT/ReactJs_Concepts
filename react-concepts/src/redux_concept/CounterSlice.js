import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice = createSlice({
    initialState : 0,
    name:'counter',
    //reducer of this particular slice
    reducers:{
        incre: (state) => state + 1,
        decre: (state) => state - 1
    },
})

//actions like incre & decre are dispatched
export const {decre, incre} = CounterSlice.actions;
//reducer of the slice -> counterSlice
export default CounterSlice.reducer;