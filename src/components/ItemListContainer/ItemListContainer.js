import './ItemListContainer.css'
import { useState, useEffect, setLoading } from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts]= useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        (async() => {
            setLoading(true)

            const productsRef = collection(db, 'products')

            try{
                const snapshot = await getDocs(productsRef)

                const productsAdapted = snapshot.docChanges.map(doc => {
                    const fields = doc.data()

                    return {id: doc.id, ...fields}
                })

                setProducts(productsAdapted)

            } catch(error){
                console.log(error)
            } finally {
                setLoading(false)
            }

    })()
    },[categoryId])


    return (
        <div >
            <h1 className="titulos-principales">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;