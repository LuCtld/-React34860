import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const ItemCart = ({id, name, quantity, price}) => {
    const{removeItem} = useContext(CartContext)
    return (
        <article>
            <h3>{name}</h3>
            <h4>Cantidad {quantity}</h4>
            <h4>Precio por Unidad: ${price}</h4>
            <h4>Subtotal: ${price * quantity}</h4>
            <button onClick={ () => removeItem(id)}>Eliminar</button>
        </article>
    )
}

export default ItemCart
