import { Link } from "react-router-dom";
import useAverageRating from "../../Hooks/useAverageRating";
import CartControls from "./CartControls";
import WishlistButton from "./WishlistButton";
import useTheme from "../../Hooks/useTheme";
 
const ProductCard = ({ product }) => {
    const { theme } = useTheme();
    const averageRating = useAverageRating(product.rates);

    return ( 
        <> 
            <div className={`card relative p-4 shadow-sm rounded-lg h-96 ${theme === 'night' ? 'bg-base-200 border border-base-300' : 'bg-white border border-gray-200'}`}>
                <Link to={`/product/${product.id}`} className="block">
                    <img className="w-full h-48 object-cover rounded-t-lg" src={product.image} alt={product.name} />
                    <div className="flex flex-col items-start mt-2">

                        <div className="flex justify-between items-center w-full">
                            <h3 className={`font-semibold text-xl ${theme === 'night' ? 'text-base-content' : ''}`}>{product.name}</h3>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                                    <path fillRule="evenodd" d="M10 15l-5.5 3 2-6.5L1 7h6.5L10 0l2.5 7H18l-5.5 4.5 2 6.5L10 15z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1">{averageRating.toFixed(1)}</span>
                            </div>
                        </div>

                        <p className={`text-sm mt-2 ${theme === 'night' ? 'text-base-content/70' : 'text-gray-500'}`}>{product.description.length > 60 ? `${product.description.slice(0, 60)}...` : product.description}</p>

                        <div className="flex justify-between items-center w-full mt-3">
                            <p className={`font-semibold text-lg ${theme === 'night' ? 'text-base-content' : ''}`}>{`$${product.price.toFixed(2)}`}</p>
                        </div>
                    </div> 
                </Link>

                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center gap-2">
                    <CartControls
                        productId={product.id}
                        maxQuantity={product.quantity}
                        productPrice={product.price}
                    />

                    <WishlistButton productId={product.id} />
                </div>
            </div>
        </>
    );
};

export default ProductCard;
