import React from "react";
import forWomenImg from "../../assets/images/forWomen.png";
import forMenImg from "../../assets/images/forMen.png";
import accessoryImg from "../../assets/images/accessory.png";
import useTheme from "../../Hooks/useTheme";
function Categories() {
  const { theme } = useTheme();
  const categories = [
    {
      title: "For Women's",
      count: "2500+ items",
      items: [
        "Hydrating Moisturizers",
        "Anti-aging Serums",
        "Brightening Face Masks",
        "Lip Care Products",
        "Makeup Removers",
        "Sunscreens",
        "Eye Creams",
      ],
      className: "md:col-span-3 md:row-span-6 ",
      image: forWomenImg,
    },
    {
      title: "For Men's",
      count: "1500+ items",
      items: [
        "Face Wash & Cleaners",
        "Aftershave & Lotions",
        "Anti-fatigue Eye Rollers",
        "Moisturizers",
      ],
      className: "md:col-span-3 md:row-span-3 md:col-start-4",
      image: forMenImg,
    },
    {
      title: "Accessories",
      count: "200+ items",
      items: [
        "Travel Cosmetic Bags",
        "Facial Cleansing Brushes",
        "Applicators & Sponges",
        "Cotton Pads & Towels",
      ],
      className: "md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-4",
      image: accessoryImg,
    },
  ];
  return (
    <>
      {/* Categories Section */}
      <div className="mx-auto px-4 py-8 max-w-7xl">
      
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-base-content">
        <div className="divider">Our Category</div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-sm ${category.className} ${theme === 'night' ? 'bg-base-200 border-base-300' : 'bg-base-100 border-base-200'}`}
            >
              {/* Cards Image */}
              <div className={`absolute inset-y-0 right-0 z-10 ${theme === 'night' ? 'bg-base-200' : 'bg-sky-50'} w-full sm:w-1/2 lg:w-2/5`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover object-right"
                />
              </div>

              <span className={`absolute top-5 right-5 z-30 px-3 py-1 rounded-full text-sm font-medium ${theme === 'night' ? 'bg-white text-black shadow-sm' : 'bg-primary text-white'}`}>
                {category.count}
              </span>

              {/* Cards Content */}
              <div className="relative z-20 flex flex-col p-6 pr-0 sm:pr-56 lg:pr-64 text-base-content pt-10">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  {category.title}
                </h2>

                <ul className="mt-auto space-y-5 text-sm pl-2 text-base-content/80">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="hover:text-primary transition-colors"
                    >
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Categories;
