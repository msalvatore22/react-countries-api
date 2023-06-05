import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './features/countries/countriesSlice'
import filterReducer from './features/filter/filterSlice'
import searchReducer from './features/search/searchSlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer,
    search: searchReducer
  },
})
