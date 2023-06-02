import { Button, Container, Row, Col } from 'react-bootstrap'
import { NavBar } from './features/nav/NavBar'
import './App.css'
import Countries from './features/countries/Countries'
import Search from './features/search/Search'
import Filter from './features/filter/Filter'
import { useSelector } from 'react-redux'

function App() {
  const filter = useSelector(state => state.filter)

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Search />
          </Col>
          <Col>
            <Filter />
            <p>current filter is {filter.filter}</p>
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
