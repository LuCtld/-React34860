import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="container-fluid-cart">
            <img  className="carrito-icono" src='../images/shopping-cart.png'></img>
            <p className="texto">0</p>
        </div>
    )
}

export default CartWidget