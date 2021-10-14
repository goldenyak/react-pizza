import React from "react";

function Categories({items}) {
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map(name => <li>{name}</li>)}
            </ul>
        </div>
    )
}

export default Categories;