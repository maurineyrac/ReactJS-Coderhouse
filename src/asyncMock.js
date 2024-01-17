const products = [
    {
        id: 1,
        name: "Aviator",
        price: 25000,
        category: "clasicos",
        img: "aviator_model.jpg",
        stock: 50,
        description: "Gafas de sol clásicas tipo aviador para un look atemporal."
    },
    {
        id: 2,
        name: "Wayfarer",
        price: 18000,
        category: "moda",
        img: "wayfarer_model.jpg",
        stock: 40,
        description: "Gafas de sol wayfarer de moda que nunca pasan de moda."
    },
    {
        id: 3,
        name: "SportsPro",
        price: 32000,
        category: "deportivos",
        img: "sportspro_model.jpg",
        stock: 30,
        description: "Gafas de sol deportivas de alto rendimiento para estilos de vida activos."
    },
    {
        id: 4,
        name: "Cat Eye Chic",
        price: 28000,
        category: "moda",
        img: "cateyechic_model.jpg",
        stock: 35,
        description: "Gafas de sol con forma de ojo de gato para un look elegante y moderno."
    },
    {
        id: 5,
        name: "Polarized Shield",
        price: 35000,
        category: "clasicos",
        img: "polarizedshield_model.jpg",
        stock: 25,
        description: "Gafas de sol con protección polarizada para una protección solar definitiva."
    },
    {
        id: 6,
        name: "Runner's Edge",
        price: 12000,
        category: "deportivos",
        img: "runnersedge_model.jpg",
        stock: 45,
        description: "Gafas de sol elegantes y ligeras diseñadas para corredores."
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    )
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(products.find(prod => prod.id.toString() === id))
        }, 500)
    )
}