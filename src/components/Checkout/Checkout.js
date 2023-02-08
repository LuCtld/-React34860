import {collection, query, where, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore"
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { db } from "../../services/firebase/firebaseConfig"
import "./Checkout.css"

const Checkout = () => {

    const {cart, total} = useContext(CartContext)
    const [name, setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email, setEmail] = useState("")


    const createOrder = async () => {
        const objOrder = {
        name: name,
        phone: phone,
        email: email,
        items: cart,
        total
        }
        const col = collection(db,"Orders")
        const order = await addDoc(col,objOrder)
        console.log("El ID es:",order.id)
        }



    return (
        <div>
            <h2 className="titulo-checkout">Checkout</h2>

            <div>
            <h2 className="titulo-checkout-dos">Ingrese sus datos</h2>
            </div>

            <form className="formulario">
            <div>
                <input type="text" value={name} placeholder="Nombre"  onChange={(event)=> setName(event.target.value)}/>
            </div>

            <div>
                <input type="text" value={phone} placeholder="Telefono"  onChange={(event)=> setPhone(event.target.value)}/>
            </div>

            <div>
                <input type="text" value={email} placeholder="Mail"  onChange={(event)=> setEmail(event.target.value)}/>
            </div>

            </form>

            <button className="boton-checkout"onClick={createOrder} >Generar Orden</button>

        </div>
    )
}

export default Checkout;
