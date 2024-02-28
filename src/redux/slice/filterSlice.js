import { createSlice } from '@reduxjs/toolkit';

// начальное состояние
const initialState = {
    categoryId: 'all',
    checkedSort: 'alphabet',
    searchValue: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // сохранения категории
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },
        // сохранения сортировки
        setCheckedSort: (state, action) => {
            state.checkedSort = action.payload
        },
        // поиск по имени,фамилии и никнейму
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
    }
})

export const { setCategoryId, setCheckedSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;