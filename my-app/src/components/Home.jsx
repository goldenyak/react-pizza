import React from "react";
import PizzaBlock from "./PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import PizzaLoadingBlock from "./PizzaLoadingBlock";
import {fetchPizzas} from "../redux/action/pizzas";

function Home() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [])

    const {items, isLoaded} = useSelector(({pizzas}) => pizzas)
    const {category, sortBy} = useSelector(({filter}) => filter)

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