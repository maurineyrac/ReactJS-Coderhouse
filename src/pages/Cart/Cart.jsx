
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

import { useCart } from "@/context/CartContext";
import '../../components/Button/ButtonP.css'
import { Link } from "react-router-dom";
const Cart = () => {

    const { cart, totalCart, emptyCart, removeItem } = useCart();

    return (
        <div className="container flex flex-col md:flex-row gap-6 p-8">
            <div className="md:w-2/3">
                <Card>
                    <CardHeader>
                        <CardTitle>Your Shopping Cart</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Producto</TableHead>
                                    <TableHead>Imagen</TableHead>
                                    <TableHead>Cantidad</TableHead>
                                    <TableHead>Precio</TableHead>
                                </TableRow>
                            </TableHeader>
                            {
                                cart.map(item => (
                                    <TableBody key={item.id} >
                                        <TableRow>
                                            <TableCell className="font-medium">{item.name}</TableCell>
                                            <TableCell>
                                                <img
                                                    alt={item.name}
                                                    className="object-cover w-12 h-12"
                                                    height="50"
                                                    src={item.img}
                                                    style={{
                                                        aspectRatio: "50/50",
                                                        objectFit: "cover",
                                                    }}
                                                    width="50"
                                                />
                                            </TableCell>
                                            <TableCell>{item.quantity}</TableCell>
                                            <TableCell>${item.price}</TableCell>
                                        </TableRow>
                                    </TableBody>

                                ))

                            }
                        </Table>
                    </CardContent>
                </Card>
            </div>
            <div className="md:w-1/3">
                <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between mb-2">
                            <div>Subtotal</div>
                            <div>${totalCart()}</div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div>Envio</div>
                            <div>Gratis</div>
                        </div>
                        <div className="flex justify-between font-bold">
                            <div>Total</div>
                            <div>${totalCart()}</div>
                        </div>
                        <Link to={'/checkout'} >
                            <Button className="w-full mt-6 Custombutton2">
                                Finalizar compra
                            </Button>
                        </Link>
                        <Link to={'/'} ><Button className='w-full mt-6 Custombutton2' variant='outline' >Seguir comprando
                        </Button></Link>

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Cart