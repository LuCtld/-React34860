import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect (() => {
        getProductsById(productId)
        .then(product =>{
            setProduct(product)
        })
        .catch(error => {
            console.log (error)
        })
    }, [productId])

    return (
        <div>
        <h3> Detalle de Producto</h3>
        <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer