//OPEN AND CLOSE CAR//

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClosing = document.querySelector("#cart-close")


cartIcon.addEventListener('click', ()=>{
  cart.classList.add("active");
})

cartClosing.addEventListener('click', ()=>{
  cart.classList.remove("active");
})
