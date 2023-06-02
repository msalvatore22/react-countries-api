import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountries } from './countriesSlice'

const Countries = () => {
  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  return (
    <div>
      {countries.loading && <div>...Loading</div>}
      {!countries.loading && countries.error ? <div>Error: {countries.error}</div> : null}
      {!countries.loading && countries.countries.length ? (
        <ul>
          {
            
            countries.countries.map(country => {
              return <li>{country.name}</li>
            })
          }
        </ul>
      ) : null }
    </div>
  )
}

export default Countries