import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../service/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import emailjs from "emailjs-com"
import swal from 'sweetalert';
import './Checkout.css'

export const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [mensaje, setMensaje] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Porfavor completa todos los campos")
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos de email no coinciden")
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log("Error en creacon de orden", error);
                        setError("Error en orden")
                    })
            })
            .catch((error) => {
                console.log("No se puede actualizar el stock", error);
                setError("No se actualizo el stock");
            })

            const templateParams = {
                from_name: nombre,
                from_email: email,
                email_id: email,
                message: mensaje
            };
    
            emailjs.send(
                "service_9cu5r4d",
                "template_n5onf2b",
                templateParams,
                "y_d88HKFieGP8Jcdr"
            )
                .then(() => {
                    swal("¡Muchas Gracias!", "A continuacion su numero de orden", "success");
                })
                .catch(() => {
                    swal("¡ERROR!", "La compra no se pudo realizar, contactate con nosotros", "warning");
                })
    
                setNombre("");
                setApellido("");
                setTelefono("");
                setEmail("");
                setEmailConfirmacion("");
                setMensaje("");
    

    }

    

    return (
        <>
            <h2 className="info" >Rellena el formulario y nos contactaremos para enviar sus productos</h2>

            <form onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div className="item-check" key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad}</p>
                            <p> $ {producto.item.precio} </p>
                            <hr />
                        </div>
                    ))
                }

                <div className="form-group">
                    <label className="lab-check">Nombre</label>
                    <input className="input-check" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="lab-check">Apellido</label>
                    <input className="input-check" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="lab-check">Telefono</label>
                    <input className="input-check" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="lab-check">Email</label>
                    <input className="input-check" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="lab-check">Email Confirmacion</label>
                    <input className="input-check" type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p className="error-campos" >{error}</p>
                }

{
                ordenId && (
                    <p className="orden" >¡Gracias por tu compra! <br /> Este es tu numero de orden: <br /> {ordenId} </p>
                )
            }

                <div className="checking">
                    <button className="check-bt" type="submit">Finalizar Compra</button>
                </div>
            </form>

        </>
    )
}

