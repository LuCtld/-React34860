import './ItemListContainer.css'
import { useState, useEffect, setLoading } from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts]= useState([])

    const { categoryId } = useParams()

    useEffect(() => {

                const getData = async () => {

                    const queryRef = !categoryId

                        ? collection(db, "products")
                        : query(
                            collection(db, "products"),
                            where("category", "==", categoryId)
                        );

                    const response = await getDocs(queryRef);

                    const productos = response.docs.map((doc) => {
                        const newProduct = {
                            ...doc.data(),
                            id: doc.id,
                        };

                        return newProduct;
                    });
                    setTimeout(() => {

                        setProducts(productos);
                    }, 2000)
                };

                getData();

            }, [categoryId])


    return (
        <div >
            <h1 className="titulos-principales">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;