import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setCategory} from "../redux/action/filter";


const Categories = React.memo(function Categories({items, activeCategory}) {

    const dispatch = useDispatch();

    const onSelectItem = (index) => {
        dispatch(setCategory(index))
    }

    return (
        <div className="categories">
            <ul>
                {items && items.map((name, index) => <li className={activeCategory === index ? 'active' : ''}
                                                         key={`${name}_${index}`}
                                                         onClick={() => onSelectItem(index)}> {name} </li>)}
            </ul>
        </div>
    )
})

export default Categories;