//OPEN AND CLOSE CAR//

const cartIcon = document.querySelector('#cart-icon')
const cart = document.querySelector('.cart')
const closeCart = document.querySelector('#cart-close')

cartIcon.addEventListener('click', () =>{
  cart.classList.add('active')
})

closeCart.addEventListener('click', () =>{
  cart.classList.remove('active')
})


// this only gonna work when the document is ready //
if(document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', start)
} else {
  start()
}

/* start */ 

function start() {
   addEvents();
}

/* updtae and rerender */ 

function update() {

  addEvents();
  updateTotal();
}

/* add events */ 

function addEvents() {

  /*remove items from the cart*/ 
  let cartRemove_btns = document.querySelectorAll('.cart-remove')
  console.log(cartRemove_btns)
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener('click', handle_removeCartItem)
  })

  // change item quantity

  let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
  cartQuantity_inputs.forEach( input => {
    input.addEventListener('change', handle_changeItemQuantity)
  })

  // Add item to the cart

let addCart_btns = document.querySelectorAll('.add-cart')
addCart_btns.forEach(btn => {
  btn.addEventListener('click', handle_cartItem)
})
}

/* HANDLE EVENTS FUNCTIONS */ 
function handle_cartItem() {
   let product = this.parentElement
   let title = product.querySelector('.product-title').innerHTML
   let price = product.querySelector('.product-price').innerHTML
   let imgSrc = product.querySelector('.product-img').src
   console.log(title, price, imgSrc)

   let newToAdd = {
    title,
    price,
    imgSrc
   }

   //add product to cart

   let cartBoxElement = CartBoxComponent(title, price, imgSrc)
   let newNode = document.createElement('div')
   newNode.innerHTML = cartBoxElement
   const cartContent = cart.querySelector('.cart-content')
   cartContent.appendChild(newNode)

   update()
}


function handle_removeCartItem() {
  this.parentElement.remove()

  update()
}

function handle_changeItemQuantity() {
if(isNaN(this.value) || this.value < 1) {
  this.value = 1
}
  this.value = Math.floor(this.value) 

  update()
}

/* update and rerender functions*/ 

function updateTotal() {
  let cartBoxes = document.querySelectorAll('.cart-box')
  const totalElement = cart.querySelector('.total-price')
  let total = 0
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector('.cart-price')
    let price = parseFloat(priceElement.innerHTML.replace('$', ''))
    let quantity = cartBox.querySelector('.cart-quantity').value 
    total += price * 1.23 * quantity
} )


//let keep 2 digits here after the decimal point
total = total.toFixed(2)

totalElement.innerHTML = '$' + total
}



//=================== HTML COMPONENTS ============

function CartBoxComponent(title, price, imgSrc) {
  return `
  <div class="cart-box">
    <img src=${imgSrc} alt="" class="cart-img">
    <div class="detail-box">
       <div class="cart-product-title">${title}</div>
       <div class="cart-price">${price}</div>
       <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- REMOVE CART -->
    <i class='bx bxs-trash-alt cart-remove' ></i>
  </div>`
}

           