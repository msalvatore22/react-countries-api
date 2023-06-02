import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import countriesReducer from './features/countries/countriesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    countries: countriesReducer
  },
})
