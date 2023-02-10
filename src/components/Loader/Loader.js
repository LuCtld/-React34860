import'./Loader.css'

const Loader = ({loader}) => {
    return (
        <div className='ContainerLoader'>
            <h1 className='Loader-texto'>{loader} </h1>
        </div>

     
    )
}

export default Loader