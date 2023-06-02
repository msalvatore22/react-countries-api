import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountries } from './countriesSlice'
import { Container, Card } from 'react-bootstrap';

const Countries = () => {
  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  return (
    <>
      {countries.loading && <div>...Loading</div>}
      {!countries.loading && countries.error ? <div>Error: {countries.error}</div> : null}
      {!countries.loading && countries.countries.length ? (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {
            countries.countries.map(country => {
              return (
                <Card key={country.numericCode} className='m-3' style={{ width: '18rem' }}>
                  <Card.Img style={{width: '100%', height: '200px'}} variant="top" src={country.flags.png} />
                  <Card.Body>
                    <Card.Title>{country.name}</Card.Title>
                    <p><b>Population: </b>{country.population}</p>
                    <p><b>Region: </b>{country.region}</p>
                    <p><b>Capital: </b>{country.capital}</p>
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