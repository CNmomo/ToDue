import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
	name: 'timer',
	initialState: {
		value: []
	},
	reducers: {
		setTime: (state, action) => {
			state.value = action.payload;
		},
	}
})

// Action creators are generated for each case reducer function
export const { setTime } = timerSlice.actions

export default timerSlice.reducer
