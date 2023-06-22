import './App.css'
import Header from './conponentes/header'
import ItemListContainer from "./conponentes/itemContainer/Items"

function App() {

  return (
    <div>
      <Header logo ="MOTORS"/>
      <ItemListContainer greeting="¡Bienvenido a Motors" descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum iusto quos molestiae illum fuga numquam, corrupti possimus tempore?"/>
    </div>
  )
}

export default App
