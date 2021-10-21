import {createStore} from 'redux'

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