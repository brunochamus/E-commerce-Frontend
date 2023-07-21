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
            <NavLink to="/categoria/3" className='sec'>Memorias</NavLink>
            <NavLink to="/categoria/4" className='sec'>Gabinetes</NavLink>
            <NavLink to="/categoria/5" className='sec'>Placas de Video</NavLink>
            <NavLink to="/ContactForm" className='sec'>Contacto</NavLink>
            <CarWidget/>
          </Nav>
          <Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </header>
  )
}

export default NavBar