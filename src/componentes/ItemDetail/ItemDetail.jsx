import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext (CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }
  return (
    <div className='detalle'>
        <h2 className='nombre-detalle'>{nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h4>ID: {id}</h4>
        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque beatae harum itaque ut non blanditiis nemo maxime, modi officia magni debitis dolor at commodi deleniti cum, voluptates neque ad fuga rem sit. Fugiat vel debitis adipisci ad, numquam corrupti.</p>
        <img className='img-detalle' src={img} alt={nombre} />
        {
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<ItemCount initial={1} stock={stock} onAdd={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail