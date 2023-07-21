import { useState } from "react"
import emailjs from "emailjs-com"
import swal from 'sweetalert';
import "./ContactForm.css"

const ContactForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const enviarMensaje = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            email_id: email,
            message: mensaje
        };

        emailjs.send(
            "service_9cu5r4d",
            "template_8y6b8qp",
            templateParams,
            "y_d88HKFieGP8Jcdr"
        )
            .then(() => {
                swal("¡Muchas Gracias!", "A la brevedar nos contactaremos con usted", "success");
            })
            .catch(() => {
                swal("¡ERROR!", "El mensaje no se envio, revise el formulario y vuelva a intentar", "warning");
            })

        setNombre("");
        setEmail("");
        setMensaje("")

    }

    return (
        <>
            <div className="greet-cont">
                <p>Hola 👋 <br/> dejanos tus datos y <br/> te contactaremos! </p>
            </div>
            <div className="body-form">
            <form className="form-cont" onSubmit={enviarMensaje}>
                <label className="lab">Nombre</label>
                <input className="input-cont" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                <label className="lab">Email</label>
                <input className="input-cont" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className="lab">Mensaje</label>
                <textarea className="input-text" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>

                <button className="btn-cont" type="submit">Contactanos!</button>
            </form>
            </div>
        </>
    )
}

export default ContactForm
