import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './user-slice/userSlice';
import {api} from "./api"
export const store = configureStore({
  reducer: {
    users: usersReducer,
    [api.reducerPath]:api.reducer,
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(api.middleware),
});
