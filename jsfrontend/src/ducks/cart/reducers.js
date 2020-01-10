const cartReducer = (state = {items: [], price: 0.00}, action) => {
  switch(action.type){

    case 'ADD_ITEMS':
      const sum = action.quantity * action.item.attributes.price
      const itemObj= {quantity: action.quantity, item: action.item}
      return {
        items: [...state.items, itemObj],
        price: state.price + sum,
      }
    case 'REMOVE_ITEMS':
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.id)
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
