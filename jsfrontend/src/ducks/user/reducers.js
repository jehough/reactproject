const userReducer = (state = {signed_in: false, auth_token: '', message: ''},action) => {
  switch(action.type){
    case 'SIGN IN USER':
      return{
        ...state,
        signed_in: true,
        message: ''
      }
    case 'UPDATE ERRORS':
      return{
        ...state,
        message: action.message
      }
    case 'LOGOUT':
      return{
        signed_in: false,
        auth_token: '',
        message: ''
      }
    default:
      return state
  }
}

export default userReducer
