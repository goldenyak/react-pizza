import React from "react";
import PizzaBlock from "./PizzaBlock";
import {useSelector} from "react-redux";

function Home() {

    const items = useSelector(({pizzas}) => pizzas.items)

    return (
        <div className="content__items">
            {
                items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
            }
        </div>
    )
}

export default Home;