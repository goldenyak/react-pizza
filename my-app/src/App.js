import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Home from "./components/Home";
import './scss/app.scss';
import {useSelector} from "react-redux";

function App() {

    const {category} = useSelector(({filter}) => filter)


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={["Все", "Мясные", "Вегетерианская", "Гриль", "Острые", "Закрытые"]} activeCategory={category}/>
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
