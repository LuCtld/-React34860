const products = [
    {
        id: '1',
        name: 'BASE COAT 90grs.' ,
        img: '../images/parabasecoat.png',
        price: 400,
        category: 'parafina',
        stock: 25,
    },
    {
        id: '2',
        name: 'FCS 2 VECTOR CARBON' ,
        img: '../images/quilla1.png',
        price: 600,
        category: 'quilla',
        stock: 25,
    },
    {
        id: '3',
        name: 'LEASH 6 REGULAR 7mm' ,
        img: '../images/pita.png',
        price: 800,
        category: 'pita',
        stock: 25,
    },
    {
        id: '4',
        name: 'DECK LOST' ,
        img: '../images/gripa.png',
        price: 200,
        category: 'gripa',
        stock: 25,
    },
    {
        id: '5',
        name: 'LLAVE ALLEN' ,
        img: '../images/accesorio.png',
        price: 120,
        category: 'accesorio',
        stock: 25,
    },
    {
        id: '6',
        name: 'Tabla Surf Rip Curl Print' ,
        img: '../images/tabla.png',
        price: 10000,
        category: 'tabla',
        stock: 25,
    },
    {
        id: '7',
        name: 'FUNDAS SOX' ,
        img: '../images/funda.png',
        price: 7000,
        category: 'funda',
        stock: 25,
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
            }, 2000 ) 
        })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.filter (prod => prod.category === categoryId))
        }, 500)

    })

}


export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === id))
        }, 2000);
    })
}

