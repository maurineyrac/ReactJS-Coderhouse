import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/context/CartContext"
import { collection, doc, getDocs, updateDoc, serverTimestamp, increment, addDoc } from "firebase/firestore"
import { db } from "../../services/fbconfig"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

const Checkout = () => {

  const { cart, totalCart, emptyCart } = useCart();

  const [formData, setFormData] = useState({
    // Define el estado inicial del formulario
    email: '',
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    altura: '',
    ciudad: '',
    codigoPostal: ''
  });

  const handleInputChange = (e) => {
    // Actualiza el estado del formulario cuando cambia algún campo
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [orderId, setOrderId] = useState(null);
  const handlePurchase = (e) => {

    e.preventDefault()


    // Actualiza el stock de los productos en la base de datos y agrega la orden a la colección "orders"

    cart.forEach(async (item) => {
      const docRef = doc(db, "products", item.id);
      await updateDoc(docRef, {
        stock: increment(-item.quantity),
      });
    });

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, {

      formData,

      total: totalCart(),
      items: cart,
      createdAt: serverTimestamp(),
    }).then((doc) => {
      setOrderId(doc.id);
      emptyCart();
      console.log("Document written with ID: ", doc.id);
    }
    ).catch((error) => {
      console.error("Error adding document: ", error);
    });
  };

  if (orderId) {
    return (
      <div className="flex items-center flex-col justify-center mt-4 p-2">
        <h2>Tu orden se generó correctamente, muchas gracias! </h2>
        <p className="mt-2" >Guardá el numero de orden <strong>{orderId}</strong></p>
      </div>
    )
  } if (cart.length === 0) {
    return <Navigate to='/' />
  }

  return (
    <div className="container flex flex-col md:flex-row gap-6 p-8">
      <form onSubmit={handlePurchase} className="flex flex-col md:w-2/3 space-y-8 pr-10">
        <section aria-labelledby="email-section">
          <h2 className="border-l-4 border-black pl-2">
            1 - EMAIL
          </h2>
          <Label htmlFor='email' >Rápido. Fácil. Seguro.</Label>
          <Input id='email' name='email' placeholder="tu@email.com" type="email" required onChange={handleInputChange} />
        </section>
        <section aria-labelledby="personal-data-section">
          <h2 className="border-l-4 border-black pl-2" id="personal-data-section">
            2 - DATOS PERSONALES
          </h2>
          <Label htmlFor="name">
            Nombre
          </Label>
          <Input id="nombre" name='nombre' placeholder="Tu nombre" type="text" required onChange={handleInputChange} />
          <Label htmlFor='apellido'>
            Apellido
          </Label>
          <Input id='apellido' name='apellido' placeholder='Tu apellido' type='text' required onChange={handleInputChange} />
          <Label htmlFor='tel'>
            Teléfono
          </Label>
          <Input id='tel' name='telefono' placeholder='Tu teléfono' type='tel' onChange={handleInputChange} />
        </section>
        <section aria-labelledby="delivery-section">
          <h2 className="border-l-4 border-black pl-2" id="delivery-section">
            3 - ENTREGA
          </h2>
          <Label htmlFor='address'>
            Dirección
          </Label>
          <Input id='address' name='direccion' placeholder='Tu dirección' type='text' required onChange={handleInputChange} />

          <Label htmlFor='altura'>
            Altura
          </Label>
          <Input id='altura' name='altura' placeholder='Numero de calle' type='tel' required onChange={handleInputChange} />

          <Label htmlFor='city'>
            Ciudad
          </Label>
          <Input id='city' name='ciudad' placeholder='Tu ciudad' type='text' onChange={handleInputChange} />

          <Label htmlFor='zip'>
            Código Postal
          </Label>
          <Input id='zip' name='codigoPostal' placeholder='Tu código postal' type='tel' required onChange={handleInputChange} />
        </section>
        <section aria-labelledby="payment-section">
          <h2 className="border-l-4 border-black pl-2" id="payment-section">
            4 - PAGO
          </h2>
          <p className="text-sm mt-3 text-green-600	">Te enviaremos el link de pago a tu email junto con tu numero de orden, gracias!</p>
          <Button type='submit' className='mt-3' >Enviar y pagar</Button>
        </section>
        <Card className="bg-gray-100">
          <CardContent className='pt-6'>
            <LockIcon className="text-gray-400" />
            <p className="text-xs mt-2">Tus datos estan 100% protegidos.</p>
          </CardContent>
        </Card>
      </form>
      <div className="md:w-1/3">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>RESUMEN DE COMPRA</CardTitle>
          </CardHeader>
          <CardContent>
            {cart.map(item =>
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <img
                    alt={item.name}
                    className="rounded-md mr-4"
                    height={80}
                    src={item.img}
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "contain",
                    }}
                    width={80}
                  />
                  <div>
                    <p className="font-medium">Articulo: {item.name}</p>
                    <p className="text-sm">Cantidad: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium">${item.price}</p>
              </div>


            )}
            {/* <div className="flex flex-col space-y-2 mt-4">

            </div> */}
            <div className="flex justify-between items-center border-t pt-4">
              <p>Total</p>
              <p className="font-medium">${totalCart()}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            
            <Link to={'../cart'} >
            <Button className='Custombutton2' variant="outline">Volver a carrito</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Checkout


