import { configureStore } from '@reduxjs/toolkit';
import filter from './slice/filterSlice';
import users from './slice/usersSlice'

export const store = configureStore({
    reducer: {
       filter,
       users
    },
})
