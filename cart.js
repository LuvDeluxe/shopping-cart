import items from './items.json'
import currencyFormatter from './utilities/currencyFormatter'

const cartItemContainer = document.querySelector("[data-cart-items]")
const shoppingCartIcon = document.querySelector("[data-cart]")
const sideCheckoutContainer = document.querySelector("[data-item-holder]")
const cartItemTemplate = document.querySelector('#side-item-template')
const imageInBasketPath = "https://dummyimage.com/210x130/"
let shoppingCart = []
let toggleLeftRail = true

export function setupShoppingCart() {
  shoppingCartIcon.addEventListener('click', () => {
    if (toggleLeftRail) {
      sideCheckoutContainer.style.display = "none"
    } else {
      sideCheckoutContainer.style.display = "block"
    }
    toggleLeftRail = !toggleLeftRail
  })
}

export function addItemsToCart(id) {
  shoppingCart.push({ id: id, quantity: 1 })
  renderSideCart()
  shoppingCartVisibility()
  toggleLeftRail = true
  sideCheckoutContainer.style.display = "block"
}

function renderSideCart() {
  cartItemContainer.innerHTML = ''
  shoppingCart.forEach(entry => {
    const cartItem = cartItemTemplate.content.cloneNode(true)
    const name = cartItem.querySelector("[data-name]")
    const price = cartItem.querySelector("[data-price-side]")
    const image = cartItem.querySelector("[data-image]")
    const removeItemFromCart = cartItem.querySelector("[data-remove-from-cart-button]")
    const item = items.find(i => entry.id === i.id)
    name.innerText = item.name
    price.innerText = currencyFormatter(item.priceCents / 100)
    image.src = `${imageInBasketPath}` + item.imageColor
    cartItemContainer.appendChild(cartItem)
    removeItemFromCart.addEventListener('click', removeCartItemHandler)
  })
}

function removeCartItemHandler(event) {
  if (event.target.matches("[data-remove-from-cart-button]")) {
    const itemSide = event.target.closest("[data-item-side]")
    const index = Array.from(cartItemContainer.children).indexOf(itemSide)
    if (index !== -1) {
      shoppingCart.splice(index, 1)
    }
    itemSide.remove()
  }
  shoppingCartVisibility()
}

function shoppingCartVisibility() {
  if (shoppingCart.length === 0) {
    sideCheckoutContainer.style.display = "none"
    shoppingCartIcon.style.display = "none"
  } else if (shoppingCart.length > 0) {
    sideCheckoutContainer.style.display = "block"
    shoppingCartIcon.style.display = "block"
  }
}

shoppingCartVisibility()