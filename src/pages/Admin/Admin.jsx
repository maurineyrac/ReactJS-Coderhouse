
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
// const Admin = () => {
//     const { authed, setAuthed } = useAuth();
//     const productsRef = collection(db, 'products');
//     const navigate = useNavigate();

//     const handleUpload = () => {
//         mockProducts.forEach((product) => {
//             addDoc(productsRef, product);
//             navigate('/');
//         });

//     };

//     const handleLogout = async () => {
//         await signOut(auth);
//         setAuthed(false);
//         navigate('/');
//     };

//     if (!authed) {
//         return (
//             <>
//                 <div>No estás autorizado para ver esta página.</div>
//                 <Link to='/login'>
//                 <button>Iniciar sesión</button>
//                 </Link>
//             </>
//         );

//     }

//     return (
//         <div>
//             <h1>Panel de Administrador</h1>
//             <button onClick={handleUpload}>Subir Productos</button>
//             <button onClick={handleLogout}>Cerrar sesión</button>
//         </div>
//     );
// }

// export default Admin;


const Admin = () => {
    const { authed, setAuthed } = useAuth();
    const [products, setProducts] = useState([]);
    const { category } = useParams()
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
        const productsRef = category
            ?
            query(collection(db, "products"), where("category", "==", category))
            :
            collection(db, "products")


        fetchProducts(productsRef);
    }, [category]);


    const handleUpload = async () => {
        try {
            
            await Promise.all(mockProducts.map(async (product) => {
                await addDoc(productsRef, product);
            }));
            console.log('Productos subidos con éxito');

            fetchProducts(productsRef); // Llama a la función fetchProducts que obtiene los productos de Firebase
        } catch (error) {
            console.error('Error al subir productos', error);
        }
    };


    const handleDeleteProduct = async (productId) => {
        try {
            await deleteDoc(doc(db, 'products', productId));
            setProducts(products.filter(product => product.id !== productId));
            console.log('Producto eliminado con éxito');
        } catch (error) {
            console.error('Error al eliminar el producto', error);
        }
    };

    const handleDeleteAllProducts = async () => {
        try {
            await Promise.all(products.map(product => deleteDoc(doc(db, 'products', product.id))));
            setProducts([]);
            console.log('Todos los productos fueron eliminados con éxito');
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
            <>
                <div>No estás autorizado para ver esta página.</div>
                <Link to='/login'>
                    <ButtonAlt label='Iniciar sesión' />
                </Link>
            </>
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
                        <ButtonAlt label={<PiTrashLight />} callback={() => handleDeleteProduct(product.id)} />
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
