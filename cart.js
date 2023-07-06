import items from './items.json'
import currencyFormatter from './utilities/currencyFormatter'

const cartItemContainer = document.querySelector("[data-cart-items]")
const shoppingCartIcon = document.querySelector("[data-cart]")
const sideCheckoutContainer = document.querySelector("[data-item-holder]")
const cartItemTemplate = document.querySelector('#side-item-template')
let shoppingCart = []

export function setupShoppingCart() {
  shoppingCartIcon.addEventListener('click', () => {
    sideCheckoutContainer.classList.toggle('invisible')
  })
}

export function addItemsToCart(id) {
  shoppingCart.push({ id: id, quantity: 1 })
  renderSideCart()
}

function renderSideCart() {
  const cartItem = cartItemTemplate.content.cloneNode(true)
  const name = cartItem.querySelector("[data-name]")
  const price = cartItem.querySelector("[data-price-side]")
  const image = cartItem.querySelector("")


  shoppingCart.forEach(entry => {
    const item = items.find(i => entry.id === i.id)
    name.innerText = item.name
    price.innerText = currencyFormatter(item.priceCents / 100)


  })
  cartItemContainer.appendChild(cartItem)
}