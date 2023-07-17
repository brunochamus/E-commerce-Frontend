const productos = [
// { id: "1", nombre: "PROCESADOR AMD Ryzen 5 3600 3ra Gen ", precio: 102, stock: 12, img: "../img/id1.jpg", idCat: "1" },
//{ id: "2", nombre: "PROCESADOR AMD Ryzen 5 5600G GAMING", precio: 133, stock: 7, img: "../img/id2.png", idCat: "1" },
//{ id: "3", nombre: "PROCESADOR INTEL Core i5 11400 11va Gen 6 Core", precio: 147, stock: 9, img: "../img/id3.jpg", idCat: "1" },
//{ id: "4", nombre: "PROCESADOR INTEL Core i9 10900KF 10ma Gen 10 Core", precio: 230, stock: 12, img: "../img/id4.jpg", idCat: "1" },
//{ id: "5", nombre: "PROCESADOR INTEL Core i7 11700KF 11va Gen 8 Core", precio: 307, stock: 12, img: "../img/id5.jpg", idCat: "1" },
//{ id: "6", nombre: "MOTHER 1200 10ma 11va Gigabyte B560M-DS3H V2", precio: 70, stock: 4, img: "../img/id6.jpg", idCat: "2" },
//{ id: "7", nombre: "MOTHER AM4 Gigabyte B550 AORUS ELITE V2", precio: 118, stock: 3, img: "../img/id7.png", idCat: "2" },
//{ id: "8", nombre: "MOTHER 1200 10ma 11VA Gen Asus ROG STRIX Z590-E", precio: 151, stock: 10, img: "../img/id8.png", idCat: "2" },
//{ id: "9", nombre: "MOTHER AM4 Gigabyte B550M GAMING", precio: 39, stock: 12, img: "../img/id9.png", idCat: "2" },
//{ id: "10", nombre: "MOTHER AM4 Gigabyte A320M-H GAMING", precio: 51, stock: 8, img: "../img/id10.png", idCat: "2" },
//{ id: "11", nombre: "MOTHER AM4 Gigabyte B550M GAMING", precio: 39, stock: 12, img: "../img/id9.png", idCat: "2" },
//{ id: "12", nombre: "MOTHER AM4 Gigabyte A320M-H GAMING", precio: 51, stock: 5, img: "../img/id9.png", idCat: "2" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getUnProductoXCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve (productosCategoria);
        }, 100)
    })
}