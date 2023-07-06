import items from './items.json'
import currencyFormatter from './utilities/currencyFormatter'
import { addItemsToCart } from './cart.js'

const imageGeneralSrc = "https://dummyimage.com/420x260/"
const storeItemTemplate = document.querySelector('#store-item-template')
const itemContainer = document.querySelector("[data-store-container]")

export function setupStore() {
  document.addEventListener('click', event => {
    if (event.target.matches("[data-add-to-cart]")) {
      const id = event.target.closest('[data-store-item]').dataset.itemId
      addItemsToCart(parseInt(id))
    }
  })
  items.forEach(renderStoreItem)
}

function renderStoreItem(item) {
  const storeItem = storeItemTemplate.content.cloneNode(true)

  const container = storeItem.querySelector("[data-store-item]")
  container.dataset.itemId = item.id

  const name = storeItem.querySelector("[data-name]")
  name.innerText = item.name

  const category = storeItem.querySelector("[data-category]")
  category.innerText = item.category

  const itemPrice = storeItem.querySelector("[data-price]")
  itemPrice.innerText = currencyFormatter(item.priceCents / 100)

  const imageColor = storeItem.querySelector("[data-image]")
  imageColor.src = imageGeneralSrc + item.imageColor
  itemContainer.appendChild(storeItem)
}