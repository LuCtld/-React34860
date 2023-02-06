import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Checkout = () => {

    const {cart, total} = useContext(CartContext)

    const obOrder = {
        buyer:{
            name: "Lucia",
        phone: "123456",
        email: "Contact@lucia.com"
        },
        items: cart,
        total
    }
    
    return (
        <div>
            <h2>Checkout</h2>
        </div>
    )
}

export default Checkout;
