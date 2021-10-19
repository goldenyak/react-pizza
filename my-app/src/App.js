import React, {useState} from "react";
import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import {Route} from "react-router-dom";
import PizzaBlock from "./components/PizzaBlock";
import Home from "./components/Home";


function App() {

    const [pizzas, setPizzas] = useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((res) => res.json())
            .then((json) => {
                setPizzas(json.pizzas)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={["Все", "Мясные", "Вегетерианская", "Гриль", "Острые", "Закрытые"]}/>
                        <Sort items={["популярности", "цене", "алфавиту"]}/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <Home items={pizzas}/>
                </div>
            </div>
        </div>
    );
}

export default App;
