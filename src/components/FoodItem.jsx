import React, { useContext } from 'react'
import './FoodItem.css'
import './FoodItemOverrides.css'
import './FoodItemControls.css'
import ratingstars from "../assets/rating_starts.png";
import { StoreContext } from './StoredContext'


const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addtocart, removeFromCart } = useContext(StoreContext);
    const itemcount = cartItems[id] ?? 0;

    return (
        <div className="food-item">
            <div className="food-item-image-container">
                <img className="food-item-image" src={image} alt={name} />
                <div className="food-item-add-controls">
                    {itemcount === 0 ? (
                        <button
                            className="food-item-add-button"
                            type="button"
                            onClick={() => addtocart(id)}
                        >
                            +
                        </button>
                    ) : (
                        <div className="food-item-quantity-controls">
                            <button
                                type="button"
                                onClick={() => removeFromCart(id)}
                            >
                                −
                            </button>
                            <span>{cartItems[id]}</span>
                            <button
                                type="button"
                                onClick={() => addtocart(id)}
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={ratingstars} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">Rs{price}</p>
            </div>


        </div>
    )
}

export default FoodItem