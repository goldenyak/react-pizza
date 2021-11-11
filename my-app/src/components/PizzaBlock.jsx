import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import Button from "./Button";


function PizzaBlock({name, price, imageUrl, slimImageUrl, types, sizes, isLoading}) {

    PizzaBlock.propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        slimImageUrl: PropTypes.string.isRequired,
        isLoaded: PropTypes.bool.isRequired,
    }

    // PizzaBlock.defaultProps = {
    //     name: '---',
    //     price: 0,
    //     types: [],
    //     sizes: [],
    //     isLoaded: false,
    // }

    const availableType = ["тонкое", "традиционное"]
    const availableSize = [26, 30, 40]
    const [activeTypes, setActiveTypes] = React.useState(types[0])
    const [activeSizes, setActiveSizes] = React.useState(0)

    const onSelectTypes = (index) => {
        setActiveTypes(index)
    }
    const onSelectSizes = (index) => {
        setActiveSizes(index)
    }


    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={activeTypes === 1 ? imageUrl : slimImageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {availableType.map((type, index) =>
                        (<li
                            className={classNames(
                                {
                                    active: activeTypes === index,
                                    disabled: !types.includes(index)
                                }
                            )}
                            key={`${type}_${index}`}
                            onClick={() => onSelectTypes(index)}>
                            {type}
                        </li>))}
                </ul>
                <ul>
                    {availableSize.map((size, index) =>
                        (<li
                            className={classNames(
                                {
                                    active: activeSizes === index,
                                    disabled: !sizes.includes(size)
                                }
                            )}
                            key={`${size}_${index}`}
                            onClick={() => onSelectSizes(index)}>
                            {size} см.
                        </li>))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
             <Button/>
            </div>
        </div>

    )
}

export default PizzaBlock;

