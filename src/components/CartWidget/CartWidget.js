import './CartWidget.css'

const CartWidget = ({totalQuantity}) => {
    return (
        <div className="container-fluid-cart">
            <img  className="carrito-icono" src='../images/shopping-cart.png'></img>
            {totalQuantity}
        </div>
    )
}

export default CartWidget