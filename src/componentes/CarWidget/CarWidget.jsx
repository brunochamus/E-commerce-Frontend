import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CarWidget.css'


const CarWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  return (
    <div>
        <Link to="/cart" >
        <img className='imgCarro' src="https://www.sportopticas.com/img/iconos/icono-carrito.png" alt="carrito"/>
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
        </Link>
    </div>
  )
}

export default CarWidget