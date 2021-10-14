import React, {useState} from "react";

function Categories({items, onClick}) {

    const [activeItem, setActiveItem] = useState(null)

    const onChangeActive = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((name, index) => <li className={activeItem === index ? 'active' : ''} key={`${name}_${index}`} onClick={() => onChangeActive(index)}> {name} </li>)}
            </ul>
        </div>
    )
}

export default Categories;