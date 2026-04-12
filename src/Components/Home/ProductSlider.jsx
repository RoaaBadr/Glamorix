import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProdContext } from "../../Context/ProductContext";
import ProductCard from "../sharedComponent/ProductCard";
import useTheme from "../../Hooks/useTheme";
const ProductSlider = () => {
  const { theme } = useTheme();
  const { products, loading } = useContext(ProdContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); // number of slides to show

  // Handle responsive slides count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter featured products or take first few if no featured flag
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 8);
  const displayProducts =
    featuredProducts.length > 0 ? featuredProducts : products.slice(0, 8);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= displayProducts.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? displayProducts.length - slidesToShow : prevIndex - 1
    );
  };

  if (loading)
    return <div className="text-center py-12">Loading products...</div>;
  if (displayProducts.length === 0)
    return <div className="text-center py-12">No products available</div>;

  return (
    <section className={`py-12 mx-12 `}>
      <div className="container mx-auto px-4">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-base-content">Featured Products</h2>

          <Link
            to="/products"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-103 ${theme === 'night' ? 'bg-primary text-primary-content hover:bg-primary-focus' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            View All Products →
          </Link>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
              }}
            >
              {displayProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2 mb-4"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-12 rounded-full p-2 shadow-md z-10 transition-all duration-200 hover:scale-110 ${theme === 'night' ? 'bg-base-100 hover:bg-base-300' : 'bg-white hover:bg-gray-100'}`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 cursor-pointer ${theme === 'night' ? 'text-base-content' : 'text-blue-900'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-12 rounded-full p-2 shadow-md z-10 transition-all duration-200 hover:scale-110 ${theme === 'night' ? 'bg-base-100 hover:bg-base-300' : 'bg-white hover:bg-gray-100'}`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 cursor-pointer ${theme === 'night' ? 'text-base-content' : 'text-blue-900'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
