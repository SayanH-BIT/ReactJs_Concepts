import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],       //setting initial state as an empty array
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
            console.log('action -> ', action);
        },
        updateUser: (state, action) => {
            const { id, name, username, email } = action.payload;
            const user = state.find(user => user.id === id);
            if (user) {
                user.name = name;
                user.username = username;
                user.email = email;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const uu = state.find(user => user.id === id)
            if (uu) {
                return state.filter(f => f.id !== id)
            }
        }
    },
})

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;