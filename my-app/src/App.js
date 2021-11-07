import React, {useState} from "react";
import axios from 'axios';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Home from "./components/Home";
import {useDispatch} from "react-redux";
import {fetchPizzas} from "./redux/action/pizzas";
import './scss/app.scss';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {

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
                    <Home/>
                </div>
            </div>
        </div>
    );
}

export default App;
