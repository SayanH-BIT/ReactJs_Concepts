import { createSlice } from "@reduxjs/toolkit";
import { userAPI } from "./API";
const userSlice = createSlice ( {
    name:'users',
    initialState:userAPI,
    reducers:{
        addUser:(state, action) => {
            console.log('action -> ',action);
            
        }
    },
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;