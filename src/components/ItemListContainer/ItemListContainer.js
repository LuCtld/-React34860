import './ItemListContainer.css'
import { useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts]= useState([])
    const [Loading, setLoading]= useState()

    const { categoryId } = useParams()

    useEffect(() => {


        (async() => {

            const productsRef = categoryId
            ? query (collection (db, 'products'), where ('category', '==', categoryId))
            : collection(db, 'products')

            getDocs(productsRef).then(response => {
                const productsAdapted = response.docChanges.map(doc =>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts (productsAdapted)
            })

    })()
},[])

    return (
        <div >
            <h1 className="titulos-principales">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;