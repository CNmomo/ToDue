import { createSlice } from '@reduxjs/toolkit'

export const screenSetterSlice = createSlice({
  name: 'screenSetter',
  initialState: {
    value: 'Pool'
  },
  reducers: {
    setPool: state => {
      state.value = 'Pool'
    },
    setToday: state => {
      state.value = 'Today'
    },
    setScheduled: state => {
      state.value = 'Scheduled'
    },
  }
})

// Action creators are generated for each case reducer function
export const { setPool, setToday, setScheduled } = screenSetterSlice.actions

export default screenSetterSlice.reducer