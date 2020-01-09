const cartReducer = (state = {items: [], price: 0.00, loading: false}, action) => {
  switch(action.type){

    case 'ADD_ITEMS':
      const sum = action.quantity * action.item.attributes.price
      const itemObj= {quantity: action.quantity, item: action.item}
      return {
        ...state,
        items: [...state.items, itemObj],
        price: state.price + sum,
        loading: false
      }
    case 'REMOVE_ITEMS':
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.id)
    }
    default:
      return state;
  }

}

export default cartReducer
