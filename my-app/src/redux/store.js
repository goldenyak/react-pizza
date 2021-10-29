import {createStore, combineReducers} from 'redux'
import filterReducer from './reducers/filter'
import pizzasReducer from './reducers/pizzas'

const rootReducer = combineReducers({
    filterReducer,
    pizzasReducer,
})

console.log(rootReducer)

const store = createStore(counterReducer)

function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'incremented':
            return state + 3
        case 'decremented':
            return state - 1
        default:
            return state
    }
}

export default store;