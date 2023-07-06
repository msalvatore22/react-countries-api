import { Container, Row, Col } from 'react-bootstrap'
import { NavBar } from './features/nav/NavBar'
import './App.css'
import Countries from './features/countries/Countries'
import Search from './features/search/Search'
import Filter from './features/filter/Filter'

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="mb-4">
          <Col xs={4}>
            <Search />
          </Col>
          <Col xs={6}>
          </Col>
          <Col>
            <Filter />
          </Col>
        </Row>
        <Row>
            <Countries />
        </Row>
      </Container>
    </>
  )
}

export default App
