import { useState, useContext } from "react";
import { ProdContext } from "../Context/ProductContext";
import AllProducts from "../Components/products/AllProducts";
import FilterBar from "../Components/products/FilterBar";
  
const Products = () => {
    const [filteredType, setFilteredType] = useState("");
    const [filteredCategory, setFilteredCategory] = useState("");
    const { products, loading } = useContext(ProdContext);

    const handleFilterChange = (filterType, filterValue) => {
        if (filterType === "type") {
            setFilteredType(filterValue);
        } else if (filterType === "category") {
            setFilteredCategory(filterValue);
        }
    };

    const filteredProducts = products.filter(product => {
        const matchesType = filteredType ? product.type === filteredType : true;
        const matchesCategory = filteredCategory ? product.category === filteredCategory : true;
        return matchesType && matchesCategory;
    });

    return ( 
        <>
            <div>
                <FilterBar onFilterChange={handleFilterChange} />

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <AllProducts products={filteredProducts} />
                )}
            </div>
        </>
    );
};

export default Products;
