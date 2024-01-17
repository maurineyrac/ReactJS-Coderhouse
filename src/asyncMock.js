const products = [
    {
        id: 1,
        name: "Aviator",
        price: 25000,
        category: "clasicos",
        img: "https://acdn.mitiendanube.com/stores/002/406/022/products/03-ray-ban-aviador-fibra-de-carbon1-a746a9c1017f4fbcc716117787778896-1024-10241-114a24d040b685075116710656203697-1024-1024.jpg",
        stock: 50,
        description: "Gafas de sol clásicas tipo aviador para un look atemporal."
    },
    {
        id: 2,
        name: "Wayfarer",
        price: 18000,
        category: "moda",
        img: "https://acdn.mitiendanube.com/stores/001/639/512/products/21321-2ef48dbde32963805a16202199325779-480-0.jpg",
        stock: 40,
        description: "Gafas de sol wayfarer de moda que nunca pasan de moda."
    },
    {
        id: 3,
        name: "SportsPro",
        price: 32000,
        category: "deportivos",
        img: "https://www.maciag-offroad.de/shop/artikelbilder/normal/160762/scott-sportbrille-sport-glasses-pro-shield-1.jpg",
        stock: 30,
        description: "Gafas de sol deportivas de alto rendimiento para estilos de vida activos."
    },
    {
        id: 4,
        name: "Cat Eye Chic",
        price: 28000,
        category: "moda",
        img: "https://i.pinimg.com/736x/9d/38/a2/9d38a20da7670b26e513f81b5b29d0b7.jpg",
        stock: 35,
        description: "Gafas de sol con forma de ojo de gato para un look elegante y moderno."
    },
    {
        id: 5,
        name: "Polarized Shield",
        price: 35000,
        category: "clasicos",
        img: "https://images.ray-ban.com/is/image/RayBan/805289439899_0001.png?impolicy=SEO_16x9",
        stock: 25,
        description: "Gafas de sol con protección polarizada para una protección solar definitiva."
    },
    {
        id: 6,
        name: "Runner's Edge",
        price: 12000,
        category: "deportivos",
        img: "https://ullerco.com/cdn/shop/products/UL-P06-09_01.jpg?v=1673546418&width=1800",
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