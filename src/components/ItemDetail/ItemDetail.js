import {useState} from "react"
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

const ItemDetail =({ name, id, img, category, description, stock, price}) => {
    const [quantity, setQuantity] = useState (0)

    const handleOnAdd = (qty) => {
        console.log (`Se agregaron ${qty} ${name} con el id: ${id}`)
        const productToAdd = {
            id, name, price, qty
        }
        console.log(productToAdd)
        setQuantity (qty)
    }


    return (
        <div>
            <h4>{name}</h4>
            <p>{category}</p>
            <img src={img} alt={name}/>
            <p>{price}</p>
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