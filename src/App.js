import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import CartWidget from './components/CartWidget/CartWidget.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <CartWidget/>
        <ItemListContainer greeting="Point Norte Surf Shop"/>
    </div>
  );
}

export default App;
