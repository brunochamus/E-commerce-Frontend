import NavBar from "./componentes/NavBar/NavBar"
import CarWidget from "./componentes/CarWidget/CarWidget"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido! Arma aqui la pc de tus sueños!"} />
      <ItemDetailContainer/>
    </>
  )
}

export default App