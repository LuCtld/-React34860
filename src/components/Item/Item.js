import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) => {
    console.log(id, name, img, price)
    return (
        <div className='container-fluid-item'>
            <h4>{name}</h4>
            <img className="img-item" src={img} alt={name}/>
            <p>Precio $ {price}</p>
            <Link className="link-item"  to={`/item/${id}`}> Ver más</Link>
        </div>
    )
}

export default Item 