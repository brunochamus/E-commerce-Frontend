import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from "./context/CarritoContext"
import Cart from "./componentes/Cart/Cart"
import { Checkout } from "./componentes/Checkout/Checkout"
import ContactForm from "./componentes/ContactForm/ContactForm"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"¿Quieres armar una compu personalizada?"} />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/Item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/ContactForm" element={<ContactForm/>}/>
            <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App