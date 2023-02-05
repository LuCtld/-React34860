import './CartWidget.css'
import {Link} from 'react-router-dom'

const CartWidget = ({quantity}) => {
    return (
        <Link to='/cart' className="container-fluid-cart">
            <img className="carrito-icono" src='../images/shopping-cart.png'></img>
            {quantity}
        </Link>
    )
}

export default CartWidget