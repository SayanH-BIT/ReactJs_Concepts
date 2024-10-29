import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
            console.log('action -> ', action);
        },
        updateUser: (state, action) => {
            const uu = state.find(user => user.id === id)
            const { id, name, username, email } = action.payload
            if (uu) {
                uu.name = name;
                uu.username = username;
                uu.email = email
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