import { createSlice, 
  createAsyncThunk,
} from '@reduxjs/toolkit'

export const fetchCountries = createAsyncThunk("countries/fetch", async () => {
  const response = await fetch("../../../data.json")
  const jsonData = await response.json()
  return jsonData
})

const initialState = {
  loading: false,
  countries: [],
  error: ''
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.loading = false
      state.countries = payload
      state.error = ''
    })
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false
      state.countries = []
      state.error = action.error.message
    })
  }
})

// Action creators are generated for each case reducer function

export default countriesSlice.reducer