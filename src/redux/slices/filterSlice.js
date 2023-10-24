import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	fullName: ''
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFullNameFilter: (state, action) => {
			state.fullName = action.payload;
		}
	}
});

export const { setFullNameFilter } = filterSlice.actions;

export const selectFullNameFilter = (state) => state.filter.fullName;

export default filterSlice.reducer;