const cartReducer = (state = {items: [], price: 0.00}, action) => {
  switch(action.type){

    case 'ADD_ITEMS':
      const sum = action.quantity * action.item.attributes.price
      const itemObj= {quantity: action.quantity, item: action.item}
      return {
        items: [...state.items, itemObj],
        price: (state.price + sum)
      }
    case 'REMOVE_ITEM':
    const item = state.items[action.item_id]
    const dif = item.quantity*item.item.attributes.price
    const items = state.items
    items.splice(action.item_id,1)
    return {
      items: items,
      price: (state.price - dif)
    }
    case 'CLEAR_CART':
    return{
      items: [],
      price: 0.00
    }
    default:
      return state;
  }

}

export default cartReducer
