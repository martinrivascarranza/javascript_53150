//funciones

// function myFunction() {

// console.log('uno')
// console.log('dos')

// }

// myFunction()


//retornar valores RETURN

// function retornar() {

// let a = 5;
// let b = 10;

// return a * b;

// }

// console.log(retornar());


//FUNCION DENTRO DE UNA VARIABLE 

// function retornarString() {

//   console.log('hola');
//   console.log('mundo');
//   return 'la función devuelve un string de palabras';

// }

// let retorno = retornarString();

// console.log(retorno);

//FUNCION CON PARAMETROS

// function parametros(nombre, edad) {

// console.log('mi nombre es ' + nombre + ' y mi edad es ' + edad);

// }

// parametros('Martin', 32);


//FUNCTIONES EXPRESADAS

// const expresada = function express() {

// console.log('mensaje de prueba imprimir');

// }

// expresada();


//FUNCIOONES PARAMETROS Y ARGUMENTOS


// let resultado = 0;

// function sumar(parametro1, parametro2) {

//   resultado = parametro1 + parametro2;
// }

// function mostrar(mensaje){
// console.log(mensaje);
// }

// sumar(6, 10);

// mostrar(resultado);


// function multiplicar(a, b) {

//   return a * b;

// }

// console.log(multiplicar(8,10));


//SCOOP VARIABLES GLOBALES Y LOCALES

// let carroTipo = 'descapotable';

// function pasear() {

// let carro = 'mercedes';
// console.log('vamos todys a pasear en el ' +  carro);

// function paseo() {
//     console.log('vamos todos a pasear en el ' + carro);
// }

// }

// pasear();



//FUNCIONES ANONIMAS Y FLECHA 

//FUNCION ANONIMA

// const multiplicarXdos = function(numero) {

//     console.log(numero * 2);
// }

// multiplicarXdos(10);


//misma funcion ahora en modo ARROW FUNCTION 


// const multiplicarXdos = (numero)=>{
// console.log(numero*2);
// }
// multiplicarXdos(7);

//seguimos simplificando la variable

// const multiplicarXdos = numero =>{ 
//     console.log(numero *2);
// }
// multiplicarXdos(8);

// const multiplicarXdos = numero => console.log(numero*2);
// multiplicarXdos(9);

//Las funciones flecha tienen return implicito, no necesitamos escribir return

const sumar = (numA, numB) => numA + numB;
console.log(sumar(10,10));

