import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './services/userSlice';
import { api } from "./services/rtk/api";


export const store = configureStore({
    reducer: {
        // user: userReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware);
    }
})