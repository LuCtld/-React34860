import './App.css';
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if(!isInCart (productToAdd)) {
      setCart (prev =>{
          return [...prev, productToAdd]})
    }else{
      console.error ("Ya se encuentra en el carrito")
    }

    const isInCart =(id)=> cart.some(prod => id === prod.id)
  }


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Productos Disponibles'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:productId' element={<ItemDetailContainer setCart={addItem}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
