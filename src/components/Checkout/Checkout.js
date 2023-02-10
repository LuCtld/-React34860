import {collection, addDoc} from "firebase/firestore"
import { useContext, useState} from "react";
import { CartContext } from "../Context/CartContext";
import { db } from "../../services/firebase/firebaseConfig"
import { ToastContainer, toast } from 'react-toastify'; 
import "./Checkout.css"
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';



const Checkout = () => {

    const { cart, total, clear } = useContext(CartContext);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [orderId, setOrderId] = useState(null);


    const createOrder = async () => {
    const objOrder = {
        name: name,
        phone: phone,
        email: email,
        items: cart,
        total,
    };
    const col = collection(db, "Orders");
    const order = await addDoc(col, objOrder);
    setOrderId(order.id);
    setShowForm(false);
    clear();
    };



    const validForm = (e) =>{
    e.preventDefault ();
    if (name == '' && phone == '' && email == ''  ) {
        toast.warn("Porfavor complete los datos", {
            position: toast.POSITION.TOP_CENTER,
        })
        console.log(email,email2, "Email incorrecto");
    } else if(email !== email2 ) {
        toast.warn("los emails deben ser iguales")

    }else{
        createOrder ();

    }
}


    return (
    <>
    <div>
        <h2 className="titulo-checkout">Checkout</h2>
        

        <div>
            <h2 className="titulo-checkout-dos">Ingrese sus datos</h2>
        </div>

        {showForm ? (
        <form className="formulario">
            <div>
            <input
                type="text"
                value={name}
                placeholder="Nombre"
                onChange={(event) => setName(event.target.value)}
            />
            </div>

            <div>
            <input
                type="text"
                value={phone}
                placeholder="Telefono"
                onChange={(event) => setPhone(event.target.value)}
            />
            </div>

            <div>
            <input
                type="text"
                value={email}
                placeholder="Mail"
                onChange={(event) => setEmail(event.target.value)}
            />
            </div>

            <div>
            <input
                type="text"
                value={email2}
                placeholder="Confirmar Mail"
                onChange={(event) => setEmail2(event.target.value)}
            />
            </div>
        </form>
    ) : (
        <div className="textoid">Su ID de compra es: {orderId}</div>
    )}
<ToastContainer autoClose={8000}/>
        <button className="boton-checkout" onClick={validForm} onChange={createOrder}>
        Generar Orden
        </button>

    </div>

    </>
    );
};

export default Checkout;