//CLASE 5 ALMACENAMIENTO STORAGE

// localStorage.setItem('boolean', true)
// localStorage.setItem('textoUno', 'hola mundo')
// localStorage.setItem('valorUno',125)
// console.log(parseFloat( localStorage.getItem('valorUno')))
// console.log(localStorage.getItem('textoUno'))
// console.log(localStorage.getItem('boolean'))

 /*const tituloProducto = prompt('ingrese titulo del producto');
 const descripcionProducto = prompt('ingrese descripcion del producto');
 const precioProducto = parseFloat(prompt('ingrese precio del producto'));
 const nuevoProducto = confirm('El producto es nuevo')

localStorage.setItem('titulo',tituloProducto)
localStorage.setItem('descripcion',descripcionProducto)
localStorage.setItem('precio',precioProducto)
localStorage.setItem('nuevo',nuevoProducto)*/

/*console.log(localStorage.getItem('titulo'))
mediante el removeIten podemos eliminar items del local storage
localStorage.removeItem('titulo');*/


//objeto literal
// const producto = {

// titulo:tituloProducto,
// descripcion: descripcionProducto,
// precio: precioProducto

// }

// //funcion
// const calcularIva = (precio) => {

// const precioConIva = precio * 1.19
// return precioConIva

// }


//EJEMPLO DEL PROFESOR PARA GUARDAR DOS PRODUCTOS EN EL LOCAL STORAGE ANTES DE USAR JSON//

const productosRecuperados = JSON.parse(localStorage.getItem('productos'))
let productos = []

if(productosRecuperados){
productos = productosRecuperados
}

let continuar = confirm('desea agregar productos?')


while(continuar) {
  
const tituloProducto = prompt('ingrese el titulo de su producto')
const descripcionProducto = prompt('ingrese detalle del producto')
const precioProducto = prompt('ingrese el precio del producto')
const nuevoProducto = confirm('Es un nuevo producto ? ')

 const producto = {

  titulo:tituloProducto,
  descripcion:descripcionProducto,
  precio:precioProducto,
  nuevo:nuevoProducto

}

productos.push(producto)
const productosJson = JSON.stringify(productos)
localStorage.setItem('productos', productosJson)


continuar = confirm('desea continuar y agrear más productos?')

}

console.log(productos)



















