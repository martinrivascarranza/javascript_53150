//CLASE 2 CONTROL DE CICLOS

//CONDICIONALES Y OPERADORES


// let time = 'sunny'

// if(time == 'rain') {
//   console.log('you better get an umbrella')
// } else {
//   console.log('get water cause is a sunny day')
// }


// let properAge = 18

// if(properAge >= 18) {
// console.log('you can enter to the disco')
// } else {
//  console.log('you are not allow to enter')
// }

// let conditionUno = 'javascript'

// let conditionTwo = 'french'

// if((conditionUno == 'javascript') &&(conditionTwo == 'French')  ||  (conditionTwo == 'English')) {
//   console.log('You can apply to this job offer')
// } else {
//   console.log('You need to have at least one requirement')
// 

// let time = 20

// if(time < 10) {
//   console.log('good Morning')
// } else if( time <= 15) {
//   console.log('good afternoon')
// } else {
//   console.log('good evening')
// }
 

//CICLOS 

//FOR
// for(let i = 0; i < 10 ; i++){
//   console.log('iteracion Número ' + i)
// }


//BREAK

// for(let i = 1; i <= 10; i++) {
//   if(i == 6) {
//     console.log(i)
//     console.log('el siclo fue interrumpido en el n 6')
//     break;
    
//   }
//   alert(i)
// }


//WHILE

// let i = 1

// while( i < 10) {
//   console.log('iterator number ' + i);
//   i++;
// }

// DO WHILE 



// let number = 0;

// do{

//   number = prompt('please enter a number ');
//   console.log(number);

// }while(parseInt(number));



//switch
//hoy día ya no es muy utilizao pero en bloques de código antiguo lo podemos encontrar


// let tiempo = prompt('como está el clima hoy en su ciudad? lluvia, sol, viento, nievo');

// switch (tiempo) {

// case 'lluvia':
//    alert("recuerde salir con un paraguas");
//    break;

// case 'sol':
//   alert('recuerde utilizar protector solar');
//   break;
  
// case 'viento':
//   alert('no deje objetos en su balcon');
//   break;
  
// case 'nieve':
//   alert('recuerde utilizar chaqueta y guantes para el frio');
//   break;
  
// default:
//   alert('ingrese una opción valida')  
// }


//repaso 

// let cantidad = parseInt(prompt('ingrese la cantidad de repeticiones por cada serie de dominadas'));
// alert('si son más de 5 repeticiones lo estás haciendo bien')


// for(let i = 0; i < cantidad; i++) {

//   if(cantidad < 5) {
//     console.log('tienes que entrenar más, menos de 5 repeticiones no es aceptable')
//   } else {
//     console.log('muy bien, hacer 5 o más repeticiones es bueno para ti')
//   }
// }


//ejercicios
//Find The Bug

//Actividad 01:


// let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
// let texto = prompt('INGRESE TEXTO A REPETIR');
// for (let index = 0; index < cantidad && cantidad < 10; index++) {
// console.log(texto);
// }

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?


//Actividad 02:


// let lados = prompt('INGRESE CANTIDAD DE LADOS');
// for (let index = 0; index < lados; index++) {
// if (index < lados) {
//   alert(`la cantidad de lados es ${lados}`)
// }
// alert("lado");
// }


//ejercicio
// Desafíos complementarios
// Actividad 01:
// Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
// número es par o impar.


// let ingresarNumero = parseInt(prompt('Por favor ingrese un número'))

// if(isNaN(ingresarNumero)) {
//   alert('por favor ingrese un valor númerico');
// } else if(ingresarNumero % 2 == 0) {
//   console.log('el numero ingresado es par');
// } else {
//   console.log('el numero ingresado es impar');
// }

// let ingresarNumero = parseInt(prompt('Por favor ingrese un número'));

// if(isNaN(ingresarNumero)){
//   console.log('por favor ingrese un valor numerico')
// } else {
//   for(let i = 0; i <= ingresarNumero; i++) {
//     if(i % 2 == 0) {
//       console.log(i + 'el numero ingresado es par ')
//     } else {
//       console.log(i + 'el numero ingresado es impar')
//     }
//   } 
// }

//ejercicio


// let enterNumber = parseInt(prompt('ingrese un número por favor'));


// function suma() {

// if(isNaN(enterNumber)) {
//   alert('por favor ingrese un valor numerico')
// } else {

//   let sum = 0;
//   for(let i = 2; i <= enterNumber ; i += 2) {
//    sum += i;
//   }

//   return sum;
// }

// }


// let result = suma();

// if(result !== undefined) {
//   alert('la suma de los pares de  ' + enterNumber + " es " + result);
// }


//ejercicio para sumar numeros impares


// let enterNumber = parseInt(prompt('por favor ingrese un número'))


// function sumar() {

//   if(isNaN(enterNumber)) {
//     alert('Por favor ingrese un valor numerico');
//   } else {

//     let sum = 0;
//     for(let i = 0; i <= enterNumber; i++){
//       if(i % 2 !== 0){
//         sum += i;
//       }
//     }

//     return sum;
//   }
// }


// let result = sumar();

// if(result !== undefined) {
//   console.log('el resultado de la suma de numeros impares es' + result);
// }



// function solution(year) {

//   let century = Math.ceil(year / 100);
//   return century;

// }

// let result = solution(1995);
// console.log(result);


function solution(inputString) {
    
  let palabra = inputString.split('').reverse('').join('');
  
  if(palabra === inputString) {
      return true;
  } else {
       if(palabra != inputString) {
        return false;
       } else {
        console.log('error');
       }
  }
  
  return palabra;
  }
  
  let result = solution('abac');
  console.log(result);