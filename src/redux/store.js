import { configureStore } from '@reduxjs/toolkit'
import screenSetterReducer from './screenSetterSlice'

export default configureStore({
  reducer: {
    screenSetter: screenSetterReducer
  }
})