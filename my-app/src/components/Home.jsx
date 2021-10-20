import React from "react";
import PizzaBlock from "./PizzaBlock";

function Home({items}) {

    return (
        <div className="content__items">
            {
                items.map(obj => <PizzaBlock key={obj.id} {...obj} items={["тонкое", "традиционное"]}/>)
            }
        </div>
    )
}

export default Home;