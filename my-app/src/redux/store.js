import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import filter from './reducers/filter'
import pizzas from './reducers/pizzas'
import cart from "./reducers/cart";

const rootReducer = combineReducers({
    filter,
    pizzas,
    cart,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;