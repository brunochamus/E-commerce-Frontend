import { useState, useEffect } from 'react'
import {getUnProducto} from "../../asyncmock"
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getUnProducto(9)
            .then(res => setProducto(res))
    }, [])
  return (
    <>
        <ItemDetail {...producto}/>
    </>
  )
}

export default ItemDetailContainer