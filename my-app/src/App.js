import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Home from "./components/Home";
import './scss/app.scss';
import {useDispatch, useSelector} from "react-redux";
import {setSortBy} from "./redux/action/filter";

function App() {

    const dispatch = useDispatch();

    const {category, sortBy} = useSelector(({filter}) => filter)

    const onSelectSortType = (type) => {
        dispatch(setSortBy(type))
    }


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={["Все", "Мясные", "Вегетерианская", "Гриль", "Острые", "Закрытые"]}
                                    activeCategory={category}/>
                        <Sort items={[
                            {name: "популярности", type: "popular"},
                            {name: "цене", type: 'price'},
                            {name: "алфавиту", type: 'alphabet'}
                        ]}
                              activeSortType={sortBy}
                              onClickSortType={onSelectSortType}/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <Home/>
                </div>
            </div>
        </div>
    );
}

export default App;
