import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="car-vacio">
                <h2 className="vacio" >No hay productos en el carrito</h2>
                <Link to="/"><button className="retorna">Ver Productos</button></Link>
            </div>
        )
    }
    return (
        <div className="cart">
            {carrito.map(producto => <CartItem className="cart-item" key={producto.item.id}  {...producto} />)}
            <h3 className="cart-total" >El total de su compra es: <br/> $ {total}</h3>
            <h3 className="cart-total" >Cantidad de Productos: {cantidadTotal} </h3>
            <button className="btn-total" onClick={() => vaciarCarrito()}> Vaciar Carrito</button>
            <Link to="/checkout" > <button className="btn-total" >Finalzar Compra</button></Link>
        </div>
    )
}

export default Cart