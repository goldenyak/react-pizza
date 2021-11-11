import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Home from "./components/Home";
import './scss/app.scss';
import {useDispatch, useSelector} from "react-redux";
import {setSortBy} from "./redux/action/filter";
import Cart from "./components/Cart";

function App() {


    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    {/*<div className="container">*/}
                    {/*    <div className="content__top">*/}
                    {/*        <Route exact path="/">*/}
                    {/*            <Categories items={["Все", "Мясные", "Вегетерианская", "Гриль", "Острые", "Закрытые"]}*/}
                    {/*                        activeCategory={category}/>*/}
                    {/*        </Route>*/}
                    {/*        <Route exact path="/">*/}
                    {/*            <Sort items={[*/}
                    {/*                {name: "популярности", type: "popular"},*/}
                    {/*                {name: "цене", type: 'price'},*/}
                    {/*                {name: "алфавиту", type: 'name'}*/}
                    {/*            ]}*/}
                    {/*                  activeSortType={sortBy}*/}
                    {/*                  onClickSortType={onSelectSortType}/>*/}
                    {/*        </Route>*/}
                    {/*    </div>*/}
                    {/*    <h2 className="content__title">Все пиццы</h2>*/}
                    {/*    <Route exact path="/">*/}
                    {/*        <Home/>*/}
                    {/*    </Route>*/}
                    {/*    <Route path="/cart">*/}
                    {/*        <Cart/>*/}
                    {/*    </Route>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Router>

    );
}

export default App;
