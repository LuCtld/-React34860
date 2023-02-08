import ItemCart from "../ItemCart/ItemCart"


const CartList = ({cart}) =>{
    return (
        <div className="contenedor">
            {
                cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
            }
        </div>
    )
}

export default CartList