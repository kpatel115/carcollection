import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './slices/RootSlice' 

export const store =  configureStore({
  reducer,
  devTools:false,
})

export default store;