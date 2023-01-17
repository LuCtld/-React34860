import {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState (initial)

    const decrement = () => {
        if(count > 1){
            setCount (prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount (prev => prev + 1)
        }
    }

    return (
        <div className='container-fluid-botones'>
            <h4>{count}</h4>
            <button  className='boton-carro' onClick={decrement }>-</button>
            <button className='boton-carro' onClick={increment }>+</button>
            <button className='boton-agregar' onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount