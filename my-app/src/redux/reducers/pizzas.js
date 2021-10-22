const initialState = {
    items: [],
}

const filter = (state = initialState, action) => {
    if (action.type === "SET_PIZZAS") {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state
}

export default pizzas;