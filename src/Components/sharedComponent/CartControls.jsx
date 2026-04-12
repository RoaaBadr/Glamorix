import { useContext } from "react";
import { CartProvider } from "../../Context/CartContext";

import { IoMdAdd, IoMdRemove  } from "react-icons/io";

const CartControls = ({ productId, productPrice, maxQuantity }) => {
    const { cart, addToCart, removeFromCart } = useContext(CartProvider);
    const quantity = cart[productId]?.quantity || 0;

    const handleAdd = () => {
        console.log("Current quantity:", quantity, "Max quantity:", maxQuantity);
        if (maxQuantity === undefined || quantity < maxQuantity) {
            addToCart(productId, productPrice);
        } else {
            console.log("Max quantity reached");
        }
    };

    const handleRemove = () => {
        removeFromCart(productId, productPrice);
    };
 
    return (
        <div className="flex items-center gap-2">
            <button
                onClick={handleRemove}
                disabled={quantity === 0}
                className="bg-gray-200 text-gray-600 cursor-pointer py-2 px-5 rounded-full disabled:opacity-50"
            >
                <IoMdRemove />
            </button>
            <span className="mx-2">{quantity}</span>
            <button
                onClick={handleAdd}
                // check modified
                disabled={maxQuantity !== undefined && quantity >= maxQuantity}
                className="bg-blue-500 text-white cursor-pointer py-2 px-5 hover:bg-blue-700 rounded-full disabled:opacity-50"
            >
                <IoMdAdd />
            </button>
        </div>
    );
};

export default CartControls;