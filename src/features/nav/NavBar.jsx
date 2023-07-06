import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export function NavBar() {
  return (
    <Navbar expand="lg" className='shadow-sm mb-5'>
      <Container>
        <Navbar.Brand style={{fontWeight: 800}} href="#home">Where in the world?</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
          <Navbar.Text style={{fontWeight: 600, cursor: "pointer"}}>
            <FontAwesomeIcon icon={faMoon} /> Dark Mode
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
