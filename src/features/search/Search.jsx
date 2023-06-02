import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Search = () => {

  return (
    <FloatingLabel controlId="floatingInputGrid" label="Search">
      <Form.Control type="search" placeholder="Search for a country.." />
    </FloatingLabel>

  );
}

export default Search