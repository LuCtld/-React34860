import {useState, createContext} from 'react';

export const CartContext = createContext ({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem =(item, quantity) =>{
        if(isInCart(item.id)){
          setCart (cart.map(product =>{
            return product.id === item.id ?{...product,quantity:product.quantity + quantity} : product
          }));
    
        }else{
          setCart ([...cart,{...item,quantity}]);
        }
      }

    const isInCart = (id) => {
        return cart.some (prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter (prod => prod.id !== id)
        setCart (cartUpdated)
    }



    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach (prod => {
            accu += prod.quantity
        })
        return accu
}

    const getTotal = () => {
        let total = 0

        cart.forEach (prod => {
            total += prod.quantity * prod.price
        })
        return total
    }

    const totalQuantity = getTotalQuantity()

    const total = getTotal()

return(
    <CartContext.Provider value={{cart, addItem, isInCart, totalQuantity, removeItem, total}}>
        {children}
    </CartContext.Provider>
)
}