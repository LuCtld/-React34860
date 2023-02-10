import {collection, addDoc} from "firebase/firestore"
import { useContext, useState} from "react";
import { CartContext } from "../Context/CartContext";
import { db } from "../../services/firebase/firebaseConfig"
import "./Checkout.css"


const Checkout = () => {

    const {cart, total, clear} = useContext(CartContext)
    const [name, setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [check, setChek] = useState("")


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
        clear()
    }

    validForm = (e, email, check) =>{
        e.preventDefault ();
        if (email !== check) {
            console.log("Email incorrecto")
            return;
        }
        if (email === check) {
            createOrder ();
        }

    }


    return (
        <div>
            <h2 className="titulo-checkout">Checkout</h2>

            <form className="formulario">
            <div>
            <h2 className="textoid">Ingrese sus datos</h2>
            </div>
            <div>
                <input type="text" value={name} placeholder="Nombre"  onChange={(event)=> setName(event.target.value)}/>
            </div>

            <div>
                <input type="text" value={phone} placeholder="Telefono"  onChange={(event)=> setPhone(event.target.value)}/>
            </div>

            <div>
                <input type="text" value={email} placeholder="Mail"  onChange={(event)=> setEmail(event.target.value)}/>
            </div>

            <div>
                <input type="text" value={check} placeholder="Mail"  onChange={(event)=> setChek(event.target.value)}/>
            </div>

            </form>

            <button className="boton-checkout" onClick={createOrder} onChange={validForm} >Generar Orden</button>

        </div>
    )
}

export default Checkout;