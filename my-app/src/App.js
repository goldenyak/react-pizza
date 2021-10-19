import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import {Route} from "react-router-dom";
import Home from "./components/Home";


function App() {

    return (
        <div className="wrapper">
            <div className="header">
                <Route path="/"><Header/></Route>
            </div>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={["Все", "Мясные", "Вегетерианская", "Гриль", "Острые", "Закрытые"]}/>
                        <Sort items={["популярности", "цене", "алфавиту"]}/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <Home/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
