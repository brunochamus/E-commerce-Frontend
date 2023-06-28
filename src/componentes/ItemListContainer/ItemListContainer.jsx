import { useState, useEffect } from 'react'
import { getProductos, getUnProductoXCategoria } from "../../asyncmock"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getUnProductoXCategoria : getProductos;

    funcion(idCategoria)
      .then(res => setProductos(res))
  }, [idCategoria])

  return (
    <>
      <h2 className='h2greet'> {props.greeting}</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer