import React from "react";
import PizzaBlock from "./PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import PizzaLoadingBlock from "./PizzaLoadingBlock";
import {fetchPizzas} from "../redux/action/pizzas";
import {setCategory, setSortBy} from "../redux/action/filter";

function Home() {

    const {items, isLoaded} = useSelector(({pizzas}) => pizzas)
    const {category, sortBy} = useSelector(({filter}) => filter)

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])





    return (
        <div className="content__items">
            {isLoaded
                ? items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj}/>)
                : Array(12).fill(<PizzaLoadingBlock/>)
            }
        </div>
    )
}

export default Home;