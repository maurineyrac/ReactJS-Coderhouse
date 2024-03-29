
import { auth, db } from "../../services/fbconfig";
import '../../components/Button/ButtonP.css'
import { signOut } from 'firebase/auth';
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { products as mockProducts } from '../../asyncMock'; // Importa los productos de asyncMock
import ButtonAlt from "../../components/Button/ButtonAlt";
import { PiTrashLight } from "react-icons/pi";
import ButtonE from "@/components/Button/ButtonE";
import { toast } from "@/components/ui/use-toast";




const Admin = () => {
    const { authed, setAuthed } = useAuth();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const productsRef = collection(db, 'products');
    
    const fetchProducts = async (productsRef) => {
        try {
            const snapshot = await getDocs(productsRef);
            const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsData);
        } catch (error) {
            console.error('Error al obtener los productos', error);
        }
    };

    useEffect(() => {
        fetchProducts(productsRef);
    }, []);


    const handleUpload = async () => {
        try {
            await Promise.all(mockProducts.map(async (product) => {
                await addDoc(productsRef, product);
            }));
            console.log('Productos subidos con éxito');
            toast({
				title: `Productos subidos con éxito`,
				description: `Ahora estan en firebase.`,
			})
            // Actualiza la lista de productos
            fetchProducts(productsRef);
        } catch (error) {
            console.error('Error al subir productos', error);
        }
    };


    const handleDeleteProduct = async (productId, product) => {
        try {
            await deleteDoc(doc(db, 'products', productId));
            setProducts(products.filter(product => product.id !== productId));
            console.log('Producto eliminado con éxito');
            toast({
				title: `Producto ${product.name} eliminado con éxito`,
				description: `Ahora no esta en firebase.`,
			})
        } catch (error) {
            console.error('Error al eliminar el producto', error);
        }
    };

    const handleDeleteAllProducts = async () => {
        try {
            await Promise.all(products.map(product => deleteDoc(doc(db, 'products', product.id))));
            setProducts([]);
            console.log('Todos los productos fueron eliminados con éxito');
            toast({
				title: `Productos eliminados con éxito`,
				description: `Ahora no estan en firebase.`,
			})
        } catch (error) {
            console.error('Error al eliminar todos los productos', error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setAuthed(false);
            navigate('/');
        } catch (error) {
            console.error('Error al cerrar sesión', error);
        }
    };

    if (!authed) {
        return (
            <div className="flex justify-center items-center flex-column" >
                <div className="mt-3" >No estás autorizado para ver esta página.</div>
                <Link to='/login'>
                    <ButtonE className={'Custombutton2 mt-3'} label={'Iniciar sesion'} />
                </Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Panel de Administrador</h1>

            <h2>Lista de Productos en la BD:</h2>
            <ul>
                {products.map(product => (
                    <li className="d-flex m-2" key={product.id}>
                        <div className="me-3">* Modelo: {product.name} - Precio: {product.price} - Stock: {product.stock}</div>
                        <ButtonAlt label={<PiTrashLight />} callback={() => handleDeleteProduct(product.id, product)} />
                    </li>
                ))}
            </ul>
            <h2>Lista de productos para subir a BD</h2>
            <ul>
                {
                    mockProducts.map(product => (
                        <li className="d-flex m-2" key={product.name}>
                            <div className="me-3">* Modelo: {product.name} - Precio: {product.price} - Stock: {product.stock}</div>
                        </li>
                    ))

                }
            </ul>
            <ButtonAlt label='Subir Todos los Productos' callback={handleUpload} />
            <ButtonAlt label='Eliminar todos los productos' callback={handleDeleteAllProducts} />
            <ButtonAlt label='Cerrar sesión' callback={handleLogout} />
        </div>
    );
}

export default Admin;
