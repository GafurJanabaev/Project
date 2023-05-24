import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'',
    // phone:'',
    // password:'',
}

export const registerSlice = createSlice({
    name:'register',
    initialState,
    reducers:{
        fetchedRegister: (state, action) => {
            state.name = action.payload.name
        }
    }
})

export const {fetchedRegister} = registerSlice.actions
export default registerSlice.reducer