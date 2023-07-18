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
        <NavLink to= "/" className='logo'>
        <Navbar.Brand className='name'>pc word</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/categoria/1" className='sec'>Procesadores</NavLink>
            <NavLink to="/categoria/2" className='sec'>Mothers</NavLink>
            <NavLink to="/ContactForm" className='sec'>Contacto</NavLink>
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