import { Button, Container, Row, Col } from 'react-bootstrap'
import { NavBar } from './features/nav/NavBar'
import './App.css'
import Countries from './features/countries/Countries'
import CountryInput from './features/countries/CountryInput'

function App() {

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <CountryInput />
        </Row>
        <Row>
            <Countries />

        </Row>
      </Container>
    </>
  )
}

export default App
