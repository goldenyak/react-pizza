import React from "react";
import PizzaBlock from "./PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import PizzaLoadingBlock from "./PizzaLoadingBlock";
import {fetchPizzas} from "../redux/action/pizzas";
import Categories from "./Categories";
import Sort from "./Sort";
import {setSortBy} from "../redux/action/filter";

function Home() {

    const {items, isLoaded} = useSelector(({pizzas}) => pizzas)
    const {category, sortBy} = useSelector(({filter}) => filter)

    const dispatch = useDispatch();

    const onSelectSortType = (type) => {
        dispatch(setSortBy(type))
    }

    const onClickAddPizza = () => {
        console.log('hello')
    }

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={["Все", "Мясные", "Вегетерианская", "Гриль", "Острые", "Закрытые"]}
                            activeCategory={category}/>
                <Sort items={[
                    {name: "популярности", type: "popular"},
                    {name: "цене", type: 'price'},
                    {name: "алфавиту", type: 'name'}
                ]}
                      activeSortType={sortBy}
                      onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) =>
                        (<PizzaBlock onClickAddPizza={(obj) => console.log(obj)}
                                     key={obj.id}
                                     isLoading={true}
                                     {...obj}
                            />
                        ))
                    : Array(12).fill(<PizzaLoadingBlock/>)
                }
            </div>
        </div>
    )
}

export default Home;

