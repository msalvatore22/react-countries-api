import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
  return (
    <Navbar expand="lg" className='shadow-sm'>
      <Container>
        <Navbar.Brand href="#home">Where in the world?</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Dark Mode
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
