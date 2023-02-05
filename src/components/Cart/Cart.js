import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartList from "../CartList/CartList";


const Cart = () =>{
    const {cart} = useContext(CartContext)
    return (
        <div>
            <h3>Productos en el Carrito</h3>
            <CartList cart={cart}/>
        </div>
    )
}

export default Cart;