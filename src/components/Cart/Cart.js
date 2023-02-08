import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartList from "../CartList/CartList";
import {Link} from "react-router-dom"
import './Cart.css'

const Cart = () =>{
    const {cart} = useContext(CartContext)
    return (
        <div>
            <h3 className="titulos-principales">Productos en el Carrito</h3>
            <CartList cart={cart}/>
            <Link to="/checkout" className="checkoutlink">Checkout</Link>
        </div>

    )
}

export default Cart;