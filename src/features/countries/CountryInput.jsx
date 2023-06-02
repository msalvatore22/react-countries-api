import React from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'react-bootstrap';

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

const CountryInput = () => {
  return (
    <Row className="g-2 justify-content-between">
      <Col md={4}>
        <FloatingLabel controlId="floatingInputGrid" label="Search">
          <Form.Control type="search" placeholder="Search for a country.." />
        </FloatingLabel>
      </Col>
      <Col md={{ span: 4, offset: 4 }}>
        <DropdownButton id="dropdown-basic-button" title="Filter by Region">
              {
                regions.map(region => {
                  return <Dropdown.Item>{region}</Dropdown.Item>
                })
              }
        </DropdownButton>
      </Col>
    </Row>
  );
}

export default CountryInput