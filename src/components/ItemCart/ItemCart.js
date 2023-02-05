const ItemCart = ({id, name, quantity, price}) => {
    return (
        <article>
            <h3>{name}</h3>
            <h4>Cantidad {quantity}</h4>
            <h4>Precio por Unidad: ${price}</h4>
            <h4>Subtotal: ${price * quantity}</h4>
        </article>
    )
}

export default ItemCart
