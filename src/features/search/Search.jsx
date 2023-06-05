import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { setSearch } from './searchSlice';


const Search = () => {
  const dispatch = useDispatch()

  return (
    <FloatingLabel controlId="floatingInputGrid" label="Search">
      <Form.Control onChange={(e) => dispatch(setSearch(e.currentTarget.value))} type="search" placeholder="Search for a country.." />
    </FloatingLabel>

  );
}

export default Search