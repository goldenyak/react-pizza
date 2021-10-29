import React, {useState} from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import {Route} from "react-router-dom";
import Home from "./components/Home";
import {useSelector, useDispatch} from "react-redux";
import './scss/app.scss';
import setPizzas from "./redux/action/pizzas";

function App({items}) {

    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas));
        })
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
                    <Home items={[]}/>
                </div>
            </div>
        </div>
    );
}

export default App;
