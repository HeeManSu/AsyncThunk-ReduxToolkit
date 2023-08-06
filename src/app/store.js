import { configureStore } from "@reduxjs/toolkit";
import  userDetails  from "./Features/userDetailsSlice";

export const store = configureStore({
    reducer: {
        app: userDetails,
    },
})