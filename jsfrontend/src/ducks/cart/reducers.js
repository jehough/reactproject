const cartReducer = (state = {items: [], total: 0.00, loading: false}, action) => {
  switch(action.type){
    case 'ADD_ITEMS':
      return {
        ...state,
        items: [...state.items, action.item],
        loading: false
      }
    case 'REMOVE_ITEMS'
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.id)
    }
  }

}
