import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const API = 'https://fakestoreapi.com/products';

export default function ShopContextProvider(props) {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});


    const fetchData = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            setProducts(data);
            setCartItems(getDefaultCart(data));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const getDefaultCart = (products) => {
        let cart = {};
        for (let i = 0; i < products.length; i++) {
            cart[products[i].id] = 0;
        }
        return cart;
    };

    const addToCart = (itemID) => {
        setCartItems((prev) => ({
            ...prev,
            [itemID]: (prev[itemID] || 0) + 1
        }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: Math.max((prev[itemID] || 0) - 1, 0) }));
    };

    const updateCartCount = (newAmount, itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
    };

    const contextValue = {
        products,
        cartItems, 
        addToCart,
        removeFromCart,
        updateCartCount,  
        getTotalCartAmount
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
