const initialState = {
    category: 0,
    sortBy: "popular"
}

const filter = (state = initialState, action) => {
if (action.type === "SET_SORT_BY") {
      return {
          ...state,
          sortBy: action.payload,
      }
}
}