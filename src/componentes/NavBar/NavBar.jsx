import './NavBar.css'
import CarWidget from '../CarWidget/CarWidget'

const NavBar = () => {
  return (
    <header>
        <img className='logo' src="https://cdn.freebiesupply.com/logos/large/2x/pc-world-2-logo-png-transparent.png" alt="logo" />
        <h1>PC Components</h1>
        <nav>
            <ul>
                <li>Arma tu PC</li>
                <li>Perifericos</li>
                <li>Soporte Tecnico</li>
            </ul>
        </nav>

        <CarWidget/>
    </header>
  )
}

export default NavBar