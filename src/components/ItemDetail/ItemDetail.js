import {useState} from "react"
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail =({ name, id, img, category, description, stock, price, setCart}) => {
    const [quantity, setQuantity] = useState (0)

    const handleOnAdd = (qty, name, id, price) => {
        console.log (`Se agregaron ${qty} ${name} con el id: ${id}`, qty)

        const productToAdd = {id, name, price, qty }

        setQuantity(parseInt(qty))

        setCart({ id, name, price, qty})
        console.log(productToAdd)




    }


    return (
        <div className="container-fluid-item-detalle">
            <h4>{name}</h4>
            <p>{category}</p>
            <img src={img} alt={name}/>
            <p>$ {price}</p>
            <p>Descripción: {description}</p>
            {
                quantity > 0 ? (
                    <Link>Finalizar Compra</Link>
                ) : (
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                )
            }

        </div>
    )
}

export default ItemDetail 