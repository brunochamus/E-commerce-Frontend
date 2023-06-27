import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CarWidget from '../CarWidget/CarWidget'

const NavBar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="body-nav">
      <Container>
        <Navbar.Brand className='name' href="#home">pc word</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='sec' href="#">Componentes</Nav.Link>
            <Nav.Link className='sec' href="#">Perifericos</Nav.Link>
            <Nav.Link className='sec' href="#">Contacto</Nav.Link>
            <CarWidget/>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </header>
  )
}

export default NavBar