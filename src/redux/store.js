import { createStore, combineReducers } from 'redux'
import counter from './reducers/counter'
import ecommerce from './reducers/ecommerce'

let reducer = combineReducers({counter, ecommerce})

export default createStore(reducer)