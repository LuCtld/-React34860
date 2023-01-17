import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../asyncMock.js'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts]= useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFuncion = categoryId ? getProductsByCategory : getProducts

        asyncFuncion(categoryId)
        .then(products => {
            setProducts(products)
        })
        .catch(error => {
            console.log(error)
        } )

    },[categoryId])


    return (
        <div className="container-fluid-greeting">
            <h1 className="titulos-principales">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer