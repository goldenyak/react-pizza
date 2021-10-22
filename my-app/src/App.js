import React, {useState} from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import {Route} from "react-router-dom";
import Home from "./components/Home";
import './scss/app.scss';

function App() {

    const [pizzas, setPizzas] = useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        })
        // fetch('http://localhost:3000/db.json')
        //     .then((res) => res.json())
        //     .then((json) => {
        //         setPizzas(json.pizzas)
        //     })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={["Все", "Мясные", "Вегетерианская", "Гриль", "Острые", "Закрытые"]}/>
                        <Sort items={[
                            {name: "популярности", type: "popular"},
                            {name: "цене", type: 'price'},
                            {name: "алфавиту", type: 'alphabet'}
                        ]}/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <Home items={pizzas}/>
                </div>
            </div>
        </div>
    );
}

export default App;
