import React from "react";
import PizzaBlock from "./PizzaBlock";

function Home({items}) {

    return (
        <div className="content__items">
            {
                items.map(obj => <PizzaBlock key={obj.id} name={obj.name} price={obj.price} image={obj.imageUrl}/>)
            }
        </div>
    )
}

export default Home;