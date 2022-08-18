import { configureStore } from '@reduxjs/toolkit'
import screenSetterReducer from './screenSetterSlice'
import timerReducer from './timerSlice'

export default configureStore({
  reducer: {
    screenSetter: screenSetterReducer,
    timer: timerReducer,
  }
})