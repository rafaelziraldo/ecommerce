

import './App.css'
import NavBar from './componentes/navbar/Navbar'
import ItemListContainer from './componentes/itemListContainer/ItemListContainer'

function App() {

  return (
   <>
     <NavBar/>
     <div className='container'>
     <ItemListContainer greeting={'Welcome to Ecommerce'}/>
    </div>
    </>
  )
}

export default App
