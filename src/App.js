import './App.css';
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js';
import AppRouter from './components/AppRouter/AppRouter.js';
import { CartProvider } from './components/Context/CartContext'; 

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <AppRouter/>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
