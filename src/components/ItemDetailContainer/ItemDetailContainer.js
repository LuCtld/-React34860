import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"



const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect (() => {
        const getProducto = async () => {

            const queryRef = doc(db, "products", productId);

            const response = await getDoc(queryRef);

            const newItem = {
                id: response.id,
                ...response.data(),
            };
            setTimeout(()=>{
                setProduct(newItem);
                setLoading(false)
            }, 2000)
            };
            getProducto();
    }, [productId])

    return (
        <div>
        <h3 className="titulos-secundarios"> Detalle de Producto</h3>
        <ItemDetail {...product} setCart={setCart}/>
        </div>
    )
}

export default ItemDetailContainer;