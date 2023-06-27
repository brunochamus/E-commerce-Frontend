import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='detalle'>
        <h2 className='nombre-detalle'>{nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h4>ID: {id}</h4>
        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque beatae harum itaque ut non blanditiis nemo maxime, modi officia magni debitis dolor at commodi deleniti cum, voluptates neque ad fuga rem sit. Fugiat vel debitis adipisci ad, numquam corrupti.</p>
        <img className='img-detalle' src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail