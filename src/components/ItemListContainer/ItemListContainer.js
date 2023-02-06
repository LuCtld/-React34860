import './ItemListContainer.css'
import { useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts]= useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        (async() => {

            const productsRef = collection(db, 'products')

            try{
                const snapshot = await getDocs(productsRef)
                const productsAdapted = snapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(productsAdapted)

            } catch(error){
                console.log(error)
            }

    })()
    },[])

console.log(products, 'productos')
    return (
        <div >
            <h1 className="titulos-principales">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;