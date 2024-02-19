
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/rtk/api";
import userSlice from "./services/rtk/userSlice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    user: userSlice,
    [api.reducerPath]: api.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware);
    }
});
