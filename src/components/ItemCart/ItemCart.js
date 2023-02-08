import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import "./ItemCart.css"


const ItemCart = ({id, name, quantity, price, img}) => {
    const{removeItem} = useContext(CartContext)
    return (
        <article>
            <div className="itemCartCard">
            <h3 className="datoscard">{name}</h3>
            <h4 className="datoscard">Cantidad {quantity}</h4>
            <h4 className="datoscard">Precio por Unidad: ${price}</h4>
            <h4 className="datoscard">Subtotal: ${price * quantity}</h4>
            <button className="botonEliminar" onClick={ () => removeItem(id)}>Eliminar</button>
            </div>
        </article>
    )
}

export default ItemCart
