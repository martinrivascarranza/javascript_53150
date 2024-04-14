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



let number = 0;

do{

  number = prompt('please enter a number ');
  console.log(number);

}while(parseInt(number));