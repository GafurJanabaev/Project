import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducer/register.Slice";

export const store = configureStore({
    reducer:{
        register: registerReducer
    }
})