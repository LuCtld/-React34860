import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container-fluid-greeting">
            <h1 className="titulos-principales">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer