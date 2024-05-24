// CLASE 5 OBJETOS

//INTRODUCCIÓN A LOS OBJETOS

//OBJETO LITERAL 

// const persona = {

// nombre: 'Homero',
// edad: 25,
// calle: 'Rivas Vaciamadrid'

// }

// console.log(persona['nombre']); //forma alternativa de acceder a los valores del objeto
// console.log(persona.calle);

//class constructor

// function Team(league, division, city) {

// this.league = league
// this.division = division
// this.city = city

// this.message = function() {
//   console.log('welcome to the ' + league + ' finals ' , 'live from ' + city);
// }

// }

// const team = new Team('American' , 'West', 'Loa Angeles, California');
// team.message()



// Propiedades estaticas y dinamicas de los objetos


// class Cliente {

//   static id = 0; // propiedad estatica

//   constructor(nombre, direccion) {

//     this.id = ++Cliente.id;

//     let email = ''; //propiedad privada

//     //propiedades publicas
//     this.nombre = nombre;
//     this.direccion = direccion;

//     this.getemail = function() {
//       return email;
//     }

//     this.setemail = function(nuevoemail) {
//       email = nuevoemail;
//     }

//   }

// }


// const cliente1 = new Cliente('Miguel', 'Sicomoro Drive');
// const cliente2 = new Cliente('Martin', 'La Cañada Flintridge');


// console.log(cliente2.direccion);
// console.log(cliente1.nombre);


// console.log(cliente1.setemail('martin@gmail.com'))
// console.log(cliente1.getemail());


/////////////////////////////////////////////////////////


// function Teams(name, division, city) {

// this.name = name;
// this.division = division;
// this.city = city

// this.message = function() {
//   console.log('the ' + name + 'play in the city of ' + city)
// }

// }

// const team1 = new Teams('Pistons ', 'east', 'Detroit');

// team1.message()

// class Persona {

//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   saludar() {
//     return `Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`;
//   }

// }

// const persona1 = new Persona('Jerry Jones', 75);

// console.log(persona1.saludar());




//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
 /* CLASE 5 PROFESOR MAXIMILIANO*/
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


//objeto literal

/*
const productoUno = {

 titulo : 'Kettlebell 4 kg',
 descripion : 'Kettlebell black powder',
 peso : 4,
 precio : 16,
 stock : 21,
 marca : 'Kettlebell Kings',
 codigo : 'KB1234',
 palabrasClaves : ['cuatro', 'kilos', 'powder', 4]
}

productoUno.precio = 200;

console.log(productoUno.precio);*/


/* objeto literal con clases class */

// la clase siempre comienza en mayuscula
class Producto {

//funcion llamada constructor
 constructor(titulo) {

  this.titulo = titulo;

 }


}


let producto1 = new Producto('coca cola');
let producto2 = new Producto('burguer');

console.log(producto1);
console.log(producto2);