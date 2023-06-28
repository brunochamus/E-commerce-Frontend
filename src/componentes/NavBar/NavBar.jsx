import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CarWidget from '../CarWidget/CarWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="body-nav">
      <Container>
        <Link to= "/">
        <Navbar.Brand className='name'>pc word</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/categoria/2" className='sec'>Componentes</Nav.Link>
            <Nav.Link to="/categoria/8" className='sec'>Perifericos</Nav.Link>
            <Nav.Link className='sec'>Contacto</Nav.Link>
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