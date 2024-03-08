import { useState } from "react";
import placeholder from "../static/logo2.jpg";
import { FaAngleRight } from "react-icons/fa6";

const Catalog = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
  ];

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const products = [
    { id: 1, title: "Product 1", category: "Category 1", image: placeholder },
    { id: 2, title: "Product 2", category: "Category 2", image: placeholder },
    { id: 3, title: "Product 3", category: "Category 3", image: placeholder },
    { id: 4, title: "Product 4", category: "Category 4", image: placeholder },
    { id: 5, title: "Product 5", category: "Category 5", image: placeholder },
    { id: 6, title: "Product 6", category: "Category 6", image: placeholder },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedFilter === "All") {
      return true;
    }
    return product.category === selectedFilter;
  });

  return (
    <div className="w-full flxcol px-16 py-8">
      <div className="flxrow items-center text-secondary">
        <div>Главная</div>
        <FaAngleRight size={12} className="mx-2" />
        <div>Католог товаров</div>
      </div>
      <div className="flxrow">
        <div className="mt-4 flxcol">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`bg-gray-100 text-secondary px-4 py-2 rounded-lg mr-2 ${
                selectedFilter === filter ? "bg-secondary text-white" : ""
              }`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="w-full grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded-lg mb-4">
              <img
                className="w-full h-auto"
                src={product.image}
                alt={product.title}
              />
              <h2 className="mt-2 text-center text-xl">{product.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
