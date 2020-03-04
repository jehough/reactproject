export function addToCart(item, quantity) {
  return{
  type: "ADD_ITEMS", quantity: quantity, item: item
  }
}

export function clearCart() {
  return{
    type: "CLEAR_CART"
  }
}

export function removeItem(item_id) {
  return{
    type: "REMOVE_ITEM",
    item_id: item_id
  }
}
