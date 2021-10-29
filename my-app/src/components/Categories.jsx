import React, {useState} from "react";

function Categories({items}) {

    const [activeItem, setActiveItem] = useState(0)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                {items && items.map((name, index) => <li className={activeItem === index ? 'active' : ''}
                                                key={`${name}_${index}`}
                                                onClick={() => onSelectItem(index)}> {name} </li>)}
            </ul>
        </div>
    )
}

export default Categories;