
// Importando bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'


import NavbarC from './components/NavbarC/NavbarC'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {


  return (
    <>
      <NavbarC/>
      
      <ItemListContainer greeting='Hola esta es una prop'/>
    </>




  )
}

export default App;
