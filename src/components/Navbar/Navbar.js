//Navbar
import './Navbar.css'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.js';

import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from '../Context/CartContext';


const Navbar = () => {

    const navigate  = useNavigate()
    const {totalQuantity} = useContext (CartContext)

    return (
        <nav className="navbar navbar-expand-lg bg-darck">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={()=> navigate ('/')}><img src="../images/pnblanco.png"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <Link className="link"  to='/'>Todos</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <Link className="link"  to='/category/Parafina'>Parafinas</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <Link className="link"  to='/category/Quilla'>Quillas</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <Link className="link"  to='/category/Pita'>Pitas</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <Link className="link"  to='/category/Gripa'>Gripas</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <Link className="link"  to='/category/Accesorio'>Accesorios</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <Link className="link"  to='/category/Tabla'>Tablas</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            <Link className="link"  to='/category/Funda'>Fundas</Link>
                            </a>
                        </li>
                    </ul>
                </div>
                <CartWidget quantity={totalQuantity}/>
            </div>
        </nav>

    );
}

export default Navbar