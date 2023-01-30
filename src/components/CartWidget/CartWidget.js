import './CartWidget.css'

const CartWidget = (quantity) => {
    return (
        <div className="container-fluid-cart">
            <img  className="carrito-icono" src='../images/shopping-cart.png'></img>
            {quantity }
        </div>
    )
}

export default CartWidget