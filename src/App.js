import './App.css';
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js';
import AppRouter from './components/AppRouter/AppRouter.js';
import { cartProvider } from './components/Context/CartContext';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <cartProvider>
        <Navbar/>
        <AppRouter/>
      </cartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
