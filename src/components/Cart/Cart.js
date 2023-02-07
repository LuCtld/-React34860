import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartList from "../CartList/CartList";
import {Link} from "react-router-dom"


const Cart = () =>{
    const {cart} = useContext(CartContext)
    return (
        <div>
            <h3>Productos en el Carrito</h3>
            <CartList cart={cart}/>
            <Link to="/checkout">Checkout</Link>
        </div>
        
    )
}

export default Cart;