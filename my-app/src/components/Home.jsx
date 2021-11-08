import React from "react";
import PizzaBlock from "./PizzaBlock";
import {useSelector} from "react-redux";

function Home() {

    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)

    return (
        <div className="content__items">
            {
                isLoaded && items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj}/>)
            }
        </div>
    )
}

export default Home;