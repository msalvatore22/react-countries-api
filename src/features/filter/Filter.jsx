import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from './filterSlice'
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]



const Filter = () => {
  const dispatch = useDispatch()

  return (
    <DropdownButton id="dropdown-basic-button" title="Filter by Region">
      {
        regions.map(region => {
          return <Dropdown.Item key={region} onClick={() => dispatch(setFilter(region))}>{region}</Dropdown.Item>
        })
      }
    </DropdownButton>
  )
}

export default Filter