

const Loader = ({loader}) => {
    return (
        <div className='ContainerLoader'>
            <div className='Loader1'></div>
            <div className='Loader2'></div>
            <h1 className='LoaderText'>{loader} </h1>
        </div>


    )
}

export default Loader