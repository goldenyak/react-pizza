import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setCategory} from "../redux/action/filter";


function Categories({items}) {

    const dispatch = useDispatch();

    const [activeItem, setActiveItem] = useState(0)

    const onSelectItem = (index) => {
        dispatch(setCategory(index))
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