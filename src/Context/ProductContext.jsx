import { createContext, useEffect, useState } from "react";
import db from "../../db.json";

export const ProdContext = createContext();

const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productsData = db.products || [];
        setProducts(productsData);
        setLoading(false);
    }, []);

    return (
        <ProdContext.Provider value={{ products, loading }}>
            {children}
        </ProdContext.Provider>
    );
};

export default ProductContext;
