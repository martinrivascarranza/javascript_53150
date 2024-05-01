//ARRAYS

// let productos = ['harina', 'carne', 'leche', 'huevos'];
// console.log(productos);
//imprime todos los elementos del array

// let productos = ['harina', 'carne', 'leche', 'huevos'];
// console.log(productos[0]);
//imprime el primer valor del array

// let productos = ['harina', 'carne', 'leche', 'huevos'];
// console.table(productos);
//imprime los valores en forma de tabla, parecido a un excel


// let productos = ['harina', 'carne', 'leche', 'huevos'];

// for(let i = 0; i < productos.length; i++) {
//   console.log(productos[i]);
// }
//optimizar nuestro codigo con iterador for

//IMPORTANTE: LOS ELEMENTOS DE LOS ARRAYS DEBEN SER DEL MISMO TIPO


/////////////////////////////////////
//METODOS Y PROPIEDADES DE LOS ARRAYS
/////////////////////////////////////


//METODO PUSH
// let listaFrutas = ['melon', 'mango', 'patilla'];
// listaFrutas.push('cocos');
// console.log(listaFrutas);
//metodo push agrega elementos al rray en la ultima posición

//METODO UNSHIFT AYUDA A AGREGAR ELEMENTOS EN EL PRIMERA POSICIÓN DEL ARRAY
// let listaFrutas = ['melon', 'mango', 'patilla'];
// listaFrutas.unshift('cocos');
// console.log(listaFrutas);

//METODO SHIFT AYUDA A ELIMINAR EL PRIMER ELEMENTOS DEL ARRAY
// let listaFrutas = ['melon', 'mango', 'patilla'];
// listaFrutas.shift();
// console.log(listaFrutas);

//METODO PÓP PARA ELIMINAR EL ULTIMO ELEMENTOS DEL ARRAY 
// let listaFrutas = ['melon', 'mango', 'patilla'];
// listaFrutas.pop();
// console.log(listaFrutas);

//METODO JOIN PARA UNIR LOS ELEMENTOS DEL ARRAY

// let listaFrutas = ['melon', 'mango', 'patilla'];
// console.log(listaFrutas.join('-'));
// console.log(listaFrutas.join('*'));

//METODO INDEXOF, NOS AYUDA A SABER EL INDEX DEL ELEMENTO DE UN ARRAY
//CUANDO UN ELEMENTO NO ESTÁ EN EL ARRAY RETORNA -1

// let listaFrutas = ['melon', 'mango', 'patilla', 'fresa', 'pera'];
// console.log( listaFrutas.indexOf('patilla'));

// let listaFrutas = ['melon', 'mango', 'patilla', 'fresa', 'pera'];
// console.log(listaFrutas.indexOf('guanabana'));

//METODO INCLUDES NOS AYUDA A VER SI UN ELEMENTO EXISTE O NO RETORNANDO UN BOOLEAN TRUE OR FALSE
// let listaFrutas = ['melon', 'mango', 'patilla', 'fresa', 'pera'];
// console.log(listaFrutas.includes('fresa'));
// console.log(listaFrutas.includes('tamarindo'));

//METODO SORT NOS AYUDA A ORDENAR ALFABETICAMENTE LOS ELEMENTOS DEL ARRAY


// let listaFrutas = ['melon', 'mango', 'patilla', 'fresa', 'pera'];
// console.log(listaFrutas.sort());

//METODO REVERSE 
// let listaFrutas = ['melon', 'mango', 'patilla', 'fresa', 'pera'];
// console.log(listaFrutas.reverse());

//METODOS VISTOS POR AHORA Y MUY USADO PUSH, SHIFT, UNSHIFT, JOIN, indexOf, includes, pop, sort, reverse


///////////////////////////////////
// OBJETOS LITERALES
///////////////////////////////////

// const gataLulu = {

//   edad: 1,
//   raza: 'desconocida',
//   castrada: false,
//   embarazos: 1,
//   hogar: true

// }

// console.log(gataLulu.castrada);


//funcion for of

const productos = [

{id: 1, nombre: 'kb 10kg'},
{id : 2, nombre: 'kb 14kg'},
{id: 3, nombre: 'kb 18'},

]

for (const product of productos) {
  console.log(product.id);
}