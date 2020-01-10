export function addToCart(item, quantity) {
  return{
  type: "ADD_ITEMS", quantity: quantity, item: item
  }
}

export const clearCart () => {
  return{
    type: "CLEAR CART"
  }
}
