import {combineReducers} from 'redux'
import cartReducer from './ducks/cart/reducers.js'
import userReducer from './ducks/user/reducers.js'

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
})

export default rootReducer
