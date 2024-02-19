import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/context/CartContext"





const Order = () => {

  const { cart, totalCart, emptyCart, removeItem } = useCart();
  return (
    <div className="container flex flex-col md:flex-row gap-6 p-8">
      <div className="flex flex-col md:w-2/3 space-y-8 pr-10">
        <section aria-labelledby="email-section">
          <h2 className="border-l-4 border-black pl-2">
            1 - EMAIL
          </h2>
          <Label htmlFor='email' >Rápido. Fácil. Seguro.</Label>
          <Input id='email' placeholder="tu@email.com" type="email" />
        </section>
        <section aria-labelledby="personal-data-section">
          <h2 className="border-l-4 border-black pl-2" id="personal-data-section">
            2 - DATOS PERSONALES
          </h2>
          <Label htmlFor="name">
            Nombre
          </Label>
          <Input id="name" placeholder="Tu nombre" type="text" />
          <Label htmlFor='apellido'>
            Apellido
          </Label>
          <Input id='apellido' placeholder='Tu apellido' type='text' />
          <Label htmlFor='tel'>
            Teléfono
          </Label>
          <Input id='tel' placeholder='Tu teléfono' type='tel' />
        </section>
        <section aria-labelledby="delivery-section">
          <h2 className="border-l-4 border-black pl-2" id="delivery-section">
            3 - ENTREGA
          </h2>
          <Label htmlFor='address'>
            Dirección
          </Label>
          <Input id='address' placeholder='Tu dirección' type='text' />

          <Label htmlFor='altura'>
            Altura
          </Label>
          <Input id='altura' placeholder='Numero de calle' type='tel' />

          <Label htmlFor='city'>
            Ciudad
          </Label>
          <Input id='city' placeholder='Tu ciudad' type='text' />

          <Label htmlFor='zip'>
            Código Postal
          </Label>
          <Input id='zip' placeholder='Tu código postal' type='tel' />
        </section>
        <section aria-labelledby="payment-section">
          <h2 className="border-l-4 border-black pl-2" id="payment-section">
            4 - PAGO
          </h2>
          <p className="text-sm mt-3 text-green-600	">Te enviaremos el link de pago a tu email junto con tu numero de orden, gracias!</p>
          <Button className='mt-3' >Enviar y pagar</Button>
        </section>
        <Card className="bg-gray-100">
          <CardContent className='pt-6'>
            <LockIcon className="text-gray-400" />
            <p className="text-xs mt-2">Tus datos estan 100% protegidos.</p>
          </CardContent>
        </Card>
      </div>
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
                    className="object-cover rounded-md mr-4"
                    height={80}
                    src={item.img}
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">{item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium">{item.price}</p>
              </div>


            )}
            <div className="flex flex-col space-y-2 mt-4">

            </div>
            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <p>Subtotal</p>
              <p className="font-medium">$ 49.999</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <p>Total</p>
              <p className="font-medium">$ 49.999</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Volver a carrito</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Order
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
