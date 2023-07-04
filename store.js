import items from './items.json'

const imageGeneralSrc = "https://dummyimage.com/420x260/"
const storeItemTemplate = document.querySelector('#store-item-template')
const itemContainer = document.querySelector("[data-store-container]")

export function setupStore() {
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
  item.priceCents = (item.priceCents / 100).toFixed(2) + "$"
  itemPrice.innerText = item.priceCents

  const imageColor = storeItem.querySelector("[data-image]")
  imageColor.src = imageGeneralSrc + item.imageColor
  itemContainer.appendChild(storeItem)
}