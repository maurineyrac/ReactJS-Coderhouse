
// Importando componentes
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarC from './components/NavbarC/NavbarC'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';

import Admin from './pages/Admin/Admin';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Admin/Login';
import { Toaster } from './components/ui/toaster';
import { ModalProvider } from './context/modalContext';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';




function App() {

  return (
    <AuthProvider>
      <CartContextProvider>
        <ModalProvider>
          <BrowserRouter>
            <NavbarC />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting='Bienvenidos' />} />
              <Route path="/categories/:category" element={<ItemListContainer greeting='Categorias:' />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path='/admin' element={<Admin />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </CartContextProvider>
      <Toaster />
    </AuthProvider>
  )
}

export default App;
