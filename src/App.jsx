import NavBar from "./componentes/NavBar/NavBar"
import CarWidget from "./componentes/CarWidget/CarWidget"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element = {<ItemListContainer/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/Item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="carrito"/>
        </Routes>
      </BrowserRouter>
      <ItemListContainer greeting={"Bienvenido! Arma aqui la pc de tus sueños!"} />
      <ItemDetailContainer/>
    </>
  )
}

export default App