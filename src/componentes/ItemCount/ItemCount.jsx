import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const decrementar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }
    

    const incrementar = () => {

        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    

    return (
        <>
            <div className="count-style">
                <button className="button-count" onClick={decrementar}>-</button>
                <p className="number">{contador}</p>
                <button  className="button-count" onClick={incrementar} >+</button>
            </div>
            <button className="push-cart type1" onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount