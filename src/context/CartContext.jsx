import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => { 
    const [cart, setCart] = useState([])
    console.log(cart)

    const addToCart = (item) => {
        setCart([...cart, item])
    }
    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }
    
    const itemQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const totalCart = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    const emptyCart = () => {      
        setCart([])
    }

    const removeItem = (id) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, isInCart, itemQuantity, totalCart, emptyCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}