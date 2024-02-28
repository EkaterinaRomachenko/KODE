import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (params) => {
        const { options } = params;
        const { data } = await axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users', options);
        return data.items
    },
)

// начальное состояние
const initialState = {
    items: [],
    status: '',
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items.push(action.payload)

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
            state.items = [];

        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.status = 'error';
            state.items = [];
        });
    },
})

export const { setItems } = usersSlice.actions;

export default usersSlice.reducer;