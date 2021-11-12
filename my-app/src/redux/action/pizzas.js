import axios from "axios";


export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`pizzas?${category !== 0 ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then(({data}) => {
        dispatch(setPizzas(data))
    });
};

export const setLoaded = (value) => ({
    type: 'SET_LOADED',
    payload: value,
});

const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

export default setPizzas;