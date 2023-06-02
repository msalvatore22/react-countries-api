import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './features/countries/countriesSlice'
import filterReducer from './features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer
  },
})
