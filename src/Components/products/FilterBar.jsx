const FilterBar = ({ onFilterChange }) => {
    const handleFilterSelect = (type, category = "") => {
        onFilterChange("type", type);
        onFilterChange("category", category);
    };

    /* const handleClearFilters = () => {
        onFilterChange("type", "");
        onFilterChange("category", "");
    }; */

    const baseBtnClass = "btn border-0 hover:border-b-4 hover:border-b-info transition-all duration-200 md:btn-md lg:btn-lg xl:btn-xl w-full outline-none";

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-5 bg-base-200 border-b-2 border-b-base-300 shadow-xl mb-3">
                <div className="dropdown dropdown-hover flex-1 w-full md:w-auto">
                    <div tabIndex={0} role="button" className={baseBtnClass}>All</div>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full">
                        <li><a onClick={() => handleFilterSelect("", "")}>Clear ..</a></li>
                        <li><a onClick={() => handleFilterSelect("", "Skincare")}>Skincare</a></li>
                        <li><a onClick={() => handleFilterSelect("", "Haircare")}>Haircare</a></li>
                        <li><a onClick={() => handleFilterSelect("", "Shaving")}>Shaving & Grooming</a></li>
                        <li><a onClick={() => handleFilterSelect("", "Perfumes")}>Perfumes</a></li>
                        <li><a onClick={() => handleFilterSelect("", "Makeup")}>Makeup</a></li>
                        <li><a onClick={() => handleFilterSelect("", "Body Care")}>Body Care</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-hover flex-1 w-full md:w-auto">
                    <div tabIndex={0} role="button" className={baseBtnClass}>Men</div>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full">
                    <li><a onClick={() => handleFilterSelect("Men", "")}>All Products</a></li>
                        <li><a onClick={() => handleFilterSelect("Men", "Skincare")}>Skincare</a></li>
                        <li><a onClick={() => handleFilterSelect("Men", "Haircare")}>Haircare</a></li>
                        <li><a onClick={() => handleFilterSelect("Men", "Shaving")}>Shaving & Grooming</a></li>
                        <li><a onClick={() => handleFilterSelect("Men", "Perfumes")}>Perfumes</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-hover flex-1 w-full md:w-auto">
                    <div tabIndex={0} role="button" className={baseBtnClass}>Women</div>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full">
                        <li><a onClick={() => handleFilterSelect("Women", "")}>All Products</a></li>
                        <li><a onClick={() => handleFilterSelect("Women", "Skincare")}>Skincare</a></li>
                        <li><a onClick={() => handleFilterSelect("Women", "Makeup")}>Makeup</a></li>
                        <li><a onClick={() => handleFilterSelect("Women", "Haircare")}>Haircare</a></li>
                        <li><a onClick={() => handleFilterSelect("Women", "Perfumes")}>Perfumes</a></li>
                        <li><a onClick={() => handleFilterSelect("Women", "Body Care")}>Body Care</a></li>
                    </ul>
                </div>

                {/* <div className="flex justify-center w-full md:w-auto mt-4 md:mt-0">
                    <button
                        onClick={handleClearFilters}
                        className="btn bg-red-500 text-white hover:bg-red-600 w-full md:w-auto">Clear Filters
                    </button>
                </div> */}
            </div>
        </>
    );
};

export default FilterBar;