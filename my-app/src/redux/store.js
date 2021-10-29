import {createStore, combineReducers} from 'redux'
import filter from './reducers/filter'
import pizzas from './reducers/pizzas'

const rootReducer = combineReducers({
    filter,
    pizzas
})

const store = createStore(rootReducer)

export default store;