import { createContext, useEffect, useState } from "react"
import { food_list } from "../assets/Food";



export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const addtocart = (itemid) => {
        if (!cartItems[itemid]) {
            setCartItems((prev) => ({ ...prev, [itemid]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        }
        window.alert("Item added to cart.");
    }
    const removeFromCart = (itemid) => {
        setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product.id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }

        }
        return totalAmount;
    }
    useEffect(() => {
        console.log(cartItems);

    }, [cartItems])

    const contextvalue = {
        food_list, cartItems,
        setCartItems,
        addtocart,
        removeFromCart,
        getTotalCartAmount

    }
    return (
        < StoreContext.Provider value={contextvalue}>
            {props.children}

        </StoreContext.Provider>

    )
}
export default StoreContextProvider;