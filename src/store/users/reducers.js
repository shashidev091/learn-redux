import { createSlice } from '@reduxjs/toolkit';

let genrateId = 0;
const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (users, action) => {
            users.push({
                id: ++genrateId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            })
        },

        removeUser: (users, action) => {
            const findIndex = users.findIndex(user => user.id === action.payload.id)
            users.splice(findIndex, 1)
        }
    }
})

export const { addUser, removeUser } = slice.actions;
export const userReducer = slice.reducer;