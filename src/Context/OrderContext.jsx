import { createContext, useState, useContext, useEffect } from "react";
import db from "../../db.json";
import { UsersContext } from "./UserContext";
import { CartProvider } from "./CartContext";

export const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const { currentUser } = useContext(UsersContext);
    const { setCart } = useContext(CartProvider);

    useEffect(() => {
        if (currentUser?.id) {
            const userOrders = (db.orders || []).filter(
                (order) => String(order.userId) === String(currentUser.id)
            );
            setOrders(userOrders);
        }
    }, [currentUser]);

    const createOrder = async (orderData) => {
        setOrders((prevOrders) => [...prevOrders, orderData]);
        if (setCart) {
            setCart({});
        }
        localStorage.removeItem("cart");
        return orderData;
    };

    return (
        <OrderContext.Provider value={{ orders, createOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

// Default export the provider
export default OrderProvider;