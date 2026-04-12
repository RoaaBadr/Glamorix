import { useState, useEffect } from "react";

const useCart = () => {
    const [cart, setCart] = useState({});

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        if (Object.keys(cart).length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (productId, productPrice) => {
        setCart(prev => {
            const current = prev[productId] || { quantity: 0, total: 0 };
            const newQuantity = current.quantity + 1;
            return {
                ...prev,
                [productId]: {
                    quantity: newQuantity,
                    total: newQuantity * productPrice,
                },
            };
        });
    };

    const removeFromCart = (productId, productPrice) => {
        setCart(prev => {
            const current = prev[productId];
            if (!current) return prev;

            const newQuantity = current.quantity - 1;
            if (newQuantity <= 0) {
                const updated = { ...prev };
                delete updated[productId];
                return updated;
            }

            return {
                ...prev,
                [productId]: {
                    quantity: newQuantity,
                    total: newQuantity * productPrice,
                },
            };
        });
    };

    return { cart, addToCart, removeFromCart };
};

export default useCart;
