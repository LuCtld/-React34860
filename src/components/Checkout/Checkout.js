import {collection, query, where, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {

    const {cart, total} = useContext(CartContext)

    const createOrder = async () => {
        const objOrder = {
            buyer:{
                name: "Lucia",
                phone: "123456",
                email: "Contact@lucia.com"
            },

            items: cart,
            total
        }

        const batch =writeBatch(db)

        const ids = cart.map(prod => prod.id)
        console.log(ids)

        const productRef = query(collection(db, "products"), where (documentId()), "in", ids)

        const productsAddedToCartFirestone = await getDocs(productRef)

        const {docs} = productsAddedToCartFirestone

        const outOfStock = []

        docs.forEach(doc => {
            const dataDocs = doc.data()
            const stockDb = dataDocs.stock 

            const productAddedToCart = cart.find (prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart.prodQuantity

            if(stockDb >= prodQuantity){
                batch.update(doc.ref, { stock: stockDb - prodQuantity})
            } else {
            }
            outOfStock.push({ id: doc.id, ...dataDocs})
        })


        if(outOfStock.length === 0){
            await batch.commit()

            const orderRef = collection (db, "orders")

            const orderAdded =await addDoc (orderRef, objOrder)

            const {id} = orderAdded 
            console.log (id)

        }

    }

    return (
        <div>
            <h2>Checkout</h2>
            <button onClick={createOrder}>Generar Orden</button>

        </div>
    )
}

export default Checkout;
