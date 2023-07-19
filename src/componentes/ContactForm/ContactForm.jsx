import { useState } from "react"
import emailjs from "emailjs-com"

const ContactForm = () => {
    const [nombre, setNombre] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [mensaje, setMensaje] = useState(""); 

    const enviarMensaje = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        };

        emailjs.send(
            "service_9cu5r4d",
            "template_ig7eg5b",
            templateParams,
            "y_d88HKFieGP8Jcdr"
        )
        .then( () => {
            alert("Mensaje enviado correctamente")
        } )
        .catch( ()=>{
            alert("Error al enviar mensaje")
        } )

        setNombre("");
        setEmail("");
        setMensaje("")

    }

  return (
    <form onSubmit={enviarMensaje}>
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} />

        <label>Email</label>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />

        <label>Mensaje</label>
        <textarea value={mensaje} onChange={(e)=> setMensaje(e.target.value)}></textarea>

        <button type="submit">Contactanos!</button>

    </form>
  )
}

export default ContactForm
