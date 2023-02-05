import {UseState, createContext} from 'react';

export const CartContext = createContext ({
    cart:[]
})

export const cartProvider = (children) => {
    const [cart, setCart] = UseState([])

    const addItem = (productToAdd) =>{
        if(!isInCart(productToAdd.id)){
            setCart(prev =>[...prev, productToAdd])
        }else{
            console.error("El producto ya se encuentra en el carrito")
        }
    }

    const isInCart = (id) => {
        return cart.some (prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach (prod => {
            accu += prod.quantity
        })
        return accu
}


    const totalQuantity = getTotalQuantity()

return(
    <CartContext.Provider value={{cart, addItem, isInCart, totalQuantity}}>
        {children}
    </CartContext.Provider>
)
}