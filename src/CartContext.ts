import { createContext } from "react";
import Post from "./Interfaces";



type CartContextType = {
    cartValue: Post[] | any,
    setCartValue: (product: any) => void
}

const CartContext = createContext<CartContextType>({
    cartValue: [],
    setCartValue: () => []
})

export default CartContext