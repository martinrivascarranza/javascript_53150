
class Kettlebell {
  constructor(weight, price) {
      this.weight = weight;
      this.price = price;
  }

  display() {
      return `${this.weight} - Price: ${this.price} euros`;
  }
}

document.getElementById('submitName').addEventListener('click', () => {
  const customerName = document.getElementById('customerName').value;
  if (customerName) {
      alert(`Hello ${customerName}, Welcome to TOTAL KETTLEBELL`);
      document.getElementById('kettlebellSection').style.display = 'block';
      displayAvailableKettlebells();
  }
});

let kettlebells = [
  new Kettlebell('4kg', 10),
  new Kettlebell('6kg', 12),
  new Kettlebell('8kg', 15),
  new Kettlebell('12kg', 20),
  new Kettlebell('16kg', 25),
  new Kettlebell('20kg', 30),
  new Kettlebell('24kg', 35)
];

function displayAvailableKettlebells() {
  const availableKettlebellsDiv = document.getElementById('availableKettlebells');
  availableKettlebellsDiv.innerHTML = ''; // Clear previous entries
  kettlebells.forEach(kettlebell => {
      const p = document.createElement('p');
      p.textContent = kettlebell.display();
      availableKettlebellsDiv.appendChild(p);
  });
}

document.getElementById('submitKettlebell').addEventListener('click', () => {
  const customerChoice = document.getElementById('chosenKettlebell').value;
  if (validateCustomerChoice(customerChoice, kettlebells)) {
      alert('Thank you for choosing your kettlebell');
      console.log('Thank you for choosing your kettlebell');
      document.getElementById('paymentSection').style.display = 'block';
  } else {
      alert('Sorry, there is something wrong. Please contact us.');
      console.log('Please enter a valid value');
  }
});

function validateCustomerChoice(choice, kettlebells) {
  return kettlebells.some(kettlebell => kettlebell.weight === choice);
}

document.getElementById('submitPayment').addEventListener('click', () => {
  const paymentMethod = document.getElementById('paymentMethod').value;
  if (validatePaymentMethod(paymentMethod)) {
      alert('Your payment is ok');
      console.log('Payment correct');
      document.getElementById('confirmationSection').style.display = 'block';
      document.getElementById('confirmationMessage').textContent = 'Your purchase is done! Thank you!';
  } else {
      alert('Please enter a valid method');
      console.log('Payment error');
  }
});

function validatePaymentMethod(method) {
  const validMethods = ['credit card', 'debit card', 'transfer', 'bitcoin'];
  return validMethods.includes(method);
}
