import {combineReducers} from 'redux'
import {cartReducer} from './cart/reducers'
import {userReducer} from './user/reducers'

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
})

export default rootReducer
