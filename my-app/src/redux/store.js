import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import filter from './reducers/filter'
import pizzas from './reducers/pizzas'

const rootReducer = combineReducers({
    filter,
    pizzas
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;