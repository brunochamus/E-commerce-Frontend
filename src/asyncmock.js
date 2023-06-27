const productos = [
    { id: 1, nombre: "PROCESADOR AMD Ryzen 5 3600 3ra Gen ", precio: 102, img: "./img/id1.png" },
    { id: 2, nombre: "PROCESADOR AMD Ryzen 5 5600G GAMING", precio: 133, img: "./img/id2.png" },
    { id: 3, nombre: "PROCESADOR INTEL Core i5 11400 11va Gen 6 Core", precio: 147, img: "./img/id3.jpg" },
    { id: 4, nombre: "PROCESADOR INTEL Core i9 10900KF 10ma Gen 10 Core", precio: 230, img: "./img/id4.jpg" },
    { id: 5, nombre: "PROCESADOR INTEL Core i7 11700KF 11va Gen 8 Core", precio: 307, img: "./img/id5.jpg" },
    { id: 6, nombre: "MOTHER 1200 10ma 11va Gigabyte B560M-DS3H V2", precio: 70, img: "./img/id6.jpg" },
    { id: 7, nombre: "MOTHER AM4 Gigabyte B550 AORUS ELITE V2", precio: 118, img: "./img/id7.png" },
    { id: 8, nombre: "MOTHER 1200 10ma 11VA Gen Asus ROG STRIX Z590-E", precio: 151, img: "./img/id8.png" },
    { id: 9, nombre: "MOTHER AM4 Gigabyte B550M GAMING", precio: 39, img: "./img/id9.png" },
    { id: 10, nombre: "MOTHER AM4 Gigabyte A320M-H GAMING", precio: 51, img: "./img/id10.png" },
    { id: 11, nombre: "MOTHER AM4 Gigabyte B550M GAMING", precio: 39, img: "./img/id9.png" },
    { id: 12, nombre: "MOTHER AM4 Gigabyte A320M-H GAMING", precio: 51, img: "./img/id9.png" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}  