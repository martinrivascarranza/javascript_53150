/* CLASE MATERIAL DE APOYO CURSO*/ 
/* FUNCIONES DE ORDEN SUPERIOR*/ 



// function mayorQue(n) {
//   return (m) => m > n
// }

// const mayorQueDiez = mayorQue(10)

// console.log(mayorQueDiez(12))
// console.log(mayorQueDiez(8))


/*const numero = [ 1,2,3,3]

porCadaUno(numeros, console.log)*/

/*const numero = [1,2,3,4]
let total = 0;

function acumular(num) {
  total += num
}

porCadaUno(numeros, acumulador)

console.log(total)*/


/*const numeros = [1,2,3,4]
const duplicados = []

porCadaUno(numeros, (el) => {
  duplicados.push(el * 2)
})

console.log(duplicados)*/

/*const numeros = [1,2,3,4,5,6]

numeros.forEach((num) => {
  console.log(num)
})*/

/*const numeros = [1,2,3,4,]

let porCadaUno = (num, callback)*/





//6.3 ORDENNAR ARRAYS DE OBJETOS/////////////////////////////////

//METODO SORT EN JAVASCRIPT sort() ORGANIZA LOS ELEMENTOS DENTRO DEL ARRAY LOCALMENTE Y DEVUELVE UN ARRAY ORDENADO//

/*const items = [

  {name: 'Pikachu', price: 21},
  {name: 'Charmander', price: 37},
  {name: 'Pidgey', price: 45},
  {name: 'Squirtle', price: 60}


]

items.sort((a, b) => {

if(a.name > b.name)
  return 1

if (a.name < b.name)
  return -1

return 0


})


console.log(items)*/

//METODO BURBUJA, NO SE RECOMIENDA PERO PUEDES ENCONTRARLO EN ALGUNOS CODIGOS CUANDO ESTES TRABAJANDO//


// 

// 6.4 TRANSFORMAR EL CONTENIDO DE UN ARRAY DE OBJETOS//

//map()
//reduce()
//

//MAP//

// const cursos = [

// {nombre: 'Javascript', duracion: 8, precio:300},
// {nombre: 'React', duracion: 8, precio:300},
// {nombre: 'Angular', duracion: 8, precio:300},
// {nombre: 'Vue', duracion: 8, precio:300},
// {nombre: 'Svelte', duracion: 8, precio:300},
// {nombre: 'React Native', duracion: 8, precio:300}

// ]

// const nombres = cursos.map(cursos => cursos.nombre)
// console.log(nombres)


/*const cursos = [

  {nombre: 'Javascript', duracion: 8, precio:315},
  {nombre: 'React', duracion: 8, precio:320},
  {nombre: 'Angular', duracion: 8, precio:325},
  {nombre: 'Vue', duracion: 8, precio:330},
  {nombre: 'Svelte', duracion: 8, precio:335},
  {nombre: 'React Native', duracion: 8, precio:340}
  
  ]

  const actualizar = cursos.map(cursos => {

    return {

    nombre: cursos.nombre,
    duracion: cursos.duracion,
    precio: cursos.precio * 1.19

    }
  })

 console.log(actualizar)*/

 
 //REDUCE()//
 // en javascript podemos usar current y el como metodos que significan los elementos de un array, la expresion acc es para acumularlos o sumarlos//

/*const numeros = [1,2,3,4,5,6,7]

const sumaTotal = numeros.reduce((acc, current) => acc + current, 0)
console.log(sumaTotal)*/

/*const miCompra = [

{nombre: 'Javascript', duracion: 8, precio:15000},
{nombre: 'React', duracion: 8, precio:30000},
{nombre: 'Angular', duracion: 8, precio:45621}

]

const precioFinal = miCompra.reduce((acc, current) => acc + current.precio, 0)
console.log(precioFinal)
*/



/////CLASE PROFESOR ROSANDA////////////
