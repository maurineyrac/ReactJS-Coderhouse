
// Importando componentes
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarC from './components/NavbarC/NavbarC'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import Cart from './pages/Cart/Cart';
import Admin from './pages/Admin/Admin';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Admin/Login';

function App() {

  return (
    <AuthProvider>
    <CartContextProvider>
      <BrowserRouter>
        <NavbarC />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos' />} />
          <Route path="/categories/:category" element={<ItemListContainer greeting='Categorias:' />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/admin' element={<Admin/>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </CartContextProvider>
    </AuthProvider>
  )
}

export default App;
