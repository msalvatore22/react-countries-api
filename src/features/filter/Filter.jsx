import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch } from 'react-redux'
import { setFilter } from './filterSlice'
const regions = ["None", "Africa", "Americas", "Asia", "Europe", "Oceania"]

const Filter = () => {
  const dispatch = useDispatch()

  const handleDropDownClick = (region) => {

    if(region === "None"){
      dispatch(setFilter(''))
    } else {
      dispatch(setFilter(region))
    }
  }

  return (
    <DropdownButton id="dropdown-basic-button" title="Filter by Region">
      {
        regions.map(region => {
          return <Dropdown.Item key={region} onClick={() => handleDropDownClick(region)}>{region}</Dropdown.Item>
        })
      }
    </DropdownButton>
  )
}

export default Filter