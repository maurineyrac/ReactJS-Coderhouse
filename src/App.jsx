
// Importando bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

import NavbarC from './components/NavbarC/NavbarC'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from './pages/ItemListContainer/ItemListContainer';

import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';


function App() {


  return (
    <>
      <BrowserRouter>

        <NavbarC />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos' />} />
          <Route path="/categories/:category" element={<ItemListContainer greeting='' />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
    </>




  )
}

export default App;
