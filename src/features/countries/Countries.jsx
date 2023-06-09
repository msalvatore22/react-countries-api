import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountries } from './countriesSlice'
import { Card } from 'react-bootstrap';

const Countries = () => {
  const countries = useSelector(state => state.countries)
  const filter = useSelector(state => state.filter)
  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  const countriesFilter = useMemo(() => {

    if(filter.filter === '' && search.search === ''){
      return countries.countries
    }

    let searchedCountries = countries.countries.filter(country => {
      return country.name.toLowerCase().includes( search.search.toLowerCase() )
    })

    if(filter.filter){
      return searchedCountries.filter(country => {
        return country.region === filter.filter
      })
    } else {
      return searchedCountries
    }
    
  }, [filter, search, countries])


  return (
    <>
      {countries.loading && <div>...Loading</div>}
      {!countries.loading && countries.error ? <div>Error: {countries.error}</div> : null}
      {!countries.loading && countries.countries.length ? (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {
            countriesFilter?.map(country => {
              return (
                <Card key={country.numericCode} className='m-3 shadow-sm' style={{ width: '18rem' }}>
                  <Card.Img className='shadow-sm' style={{width: '100%', height: '200px'}} variant="top" src={country.flags.png} />
                  <Card.Body>
                    <Card.Title style={{fontWeight: 800, margin: '15px 0px'}}>{country.name}</Card.Title>
                    <p className='m-0'><b>Population: </b>{country.population.toLocaleString()}</p>
                    <p className='m-0'><b>Region: </b>{country.region}</p>
                    <p className='mb-4'><b>Capital: </b>{country.capital}</p>
                  </Card.Body>
                </Card>
              )
            })
          }
        </div>
      ) : null }
    </>
  )
}

export default Countries