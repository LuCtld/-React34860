import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect (() => {
        (async() =>{
        const producRef = (db, 'products', productId)

        try{
            const snapshot = await getDoc(producRef)

            const fields = snapshot.data()
            const productAdapted = {id: snapshot.id, ...fields}

            setProduct(productAdapted)
        } catch (error){
            console.log(error)
        } finally {
            setLoading(false)
        }

        })()
    }, [productId])

    return (
        <div>
        <h3 className="titulos-secundarios"> Detalle de Producto</h3>
        <ItemDetail {...product} setCart={setCart}/>
        </div>
    )
}

export default ItemDetailContainer;