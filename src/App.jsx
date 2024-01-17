
// Importando bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

import NavbarC from './components/NavbarC/NavbarC'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {


  return (
    <>
      <BrowserRouter>

        <NavbarC />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos' />} />
          <Route path="/category/:category" element={<ItemListContainer greeting='Bienvenidos' />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
    </>




  )
}

export default App;
