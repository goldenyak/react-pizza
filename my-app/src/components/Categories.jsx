import React, {useState} from "react";

function Categories({items, onClick}) {

    const [activeItem, setActiveItem] = useState(null)

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((name, index) => <li className={activeItem === index ? 'active' : ''}
                                                key={`${name}_${index}`}
                                                onClick={() => setActiveItem(index)}> {name} </li>)}
            </ul>
        </div>
    )
}

export default Categories;