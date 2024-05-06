
let customerName = prompt('Please enter your name');
let welcomeCustomer = alert('Hello '+ customerName + ' Welcome to TOTAL KETTLEBELL');
let kettlebells = ['4kg', '6kg', '8kg', '12kg', '16kg', '20kg', '24kg'];
let availableWeigths = ' This are our avaible kettlebells:\n';

//objeto literal visto en clases 
let kettlebellPrice = {
  
  '4kg': 10,
  '8kg': 15,
  '12kg': 20,
  '16kg': 25,
  '20kg': 30,
  '24kg': 35,

}

for(let weigth in kettlebellPrice) {

  availableWeigths += weigth + ' - Price: ' + kettlebellPrice[weigth] + ' euros \n';
}
alert(availableWeigths);

let customer = prompt('please enter your chosen kettlebells');

let paymentText = 'Please choose you payment option \n'
let customerPaymentOption = alert( paymentText + 'credit card \n debit card \n transfer \n bitcoin \n')

let finalPayment = prompt('Please enter your payment method')

function paymentOption() {


if(['credit card', 'debit card', 'transfer', 'bitcoin'].includes(finalPayment)) {

  alert('Your payment is ok')
  console.log('payment correct')
}else {
 alert('Please enter a valid method')
 console.log('payment error')
}
}

paymentOption()


function customerOption() {


   if (kettlebells.includes(customer)) {
     
     console.log('Thank you for choose your kettlebell')
     alert('Your purchase is done!')
   } else {
    alert('Sorry there is somenting wrong, please contact us')
     console.log('please enter a valid value');
   }
  
   }

 customerOption();  








