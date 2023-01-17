const products = [
    {
        id: '1',
        name: 'BASE COAT 90grs.' ,
        img: '../images/parabasecoat.png',
        price: 400,
        category: 'Parafina',
        stock: 25,
        description:'Se usa como parafina base, para luego aplicar la parafina ideal de temperatura, y que esta última se adhiera y tenga mayor duración.',
    },
    {
        id: '2',
        name: 'FCS 2 VECTOR CARBON' ,
        img: '../images/quilla1.png',
        price: 600,
        category: 'Quilla',
        stock: 25,
        description:'Sistema: FCS 2 • Medida: M5 (Talle M). • Modelo: Vector • Material: Inyectado de Plástico + Nylon + Carbono • Incluye 3 Unidades (2 laterales + 1 central)',

    },
    {
        id: '3',
        name: 'LEASH 6 REGULAR 7mm' ,
        img: '../images/pita.png',
        price: 800,
        category: 'Pita',
        stock: 25,
        description:' Medida: 6´ Regular • Largo: 1,80 Metros • Grosor: 7 MM. • Rotor: Doble • Color: Según Disponibilidad • Marca: Freelife',
    },
    {
        id: '4',
        name: 'DECK LOST' ,
        img: '../images/gripa.png',
        price: 200,
        category: 'Gripa',
        stock: 25,
        description:'Suspiro final. Impossível bloquear. Rápido. Ataque. Ataque rápido. crystal 20 100. Sort by type. Share Deck. CHAMPION champions5.',
    },
    {
        id: '5',
        name: 'LLAVE ALLEN' ,
        img: '../images/accesorio.png',
        price: 120,
        category: 'Accesorio',
        stock: 25,
        description:'Suspiro final. Impossível bloquear. Rápido. Ataque. Ataque rápido. crystal 20 100. Sort by type. Share Deck. CHAMPION champions5.',
    },
    {
        id: '6',
        name: 'Tabla Surf Rip Curl Print' ,
        img: '../images/tabla.png',
        price: 10000,
        category: 'Tabla',
        stock: 25,
        description:'Tabla Surf Rip Curl Inspirada en la campaña realizada en colaboracion con el artista Madsteez Medidas: 6´ 3" - 6´ 3" 20 1/4" 3" Cola Round',
    },
    {
        id: '7',
        name: 'FUNDAS SOX' ,
        img: '../images/funda.png',
        price: 7000,
        category: 'Funda',
        stock: 25,
        description:'Tabla Surf Rip Curl Inspirada en la campaña realizada en colaboracion con el artista Madsteez Medidas: 6´ 3" - 6´ 3" 20 1/4" 3" Cola Round',
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

