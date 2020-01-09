const userReducer = (state = {signed_in: false},action) => {
  switch(action.type){
    case 'SIGN IN USER':
      return{
        signed_in: true
      }
    default:
      return state
  }
}

export default userReducer
