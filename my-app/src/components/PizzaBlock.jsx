import React from "react";
import classNames from "classnames";
import Button from "./Button";


function PizzaBlock({id, name, price, imageUrl, slimImageUrl, types, sizes, onClickAddPizza}) {

    const availableType = ["тонкое", "традиционное"]
    const availableSize = [26, 30, 40]
    const [activeTypes, setActiveTypes] = React.useState(types[0])
    const [activeSizes, setActiveSizes] = React.useState(0)

    const onSelectTypes = (index) => {
        setActiveTypes(index)
    } // Выбор типа пиццы
    const onSelectSizes = (index) => {
        setActiveSizes(index)
    } // Выбор размера пиццы
    const onAddPizza =  () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: availableSize[activeSizes] + ' см.',
            type: availableType[activeTypes],
        }
        onClickAddPizza(obj)
    } // Добавление пиццы --- Передаем параметры пиццы, которые будем сетать в корзину

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
                <Button onClick={onAddPizza} className="button--add" outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                </Button>
            </div>
        </div>

    )
}

export default PizzaBlock;

