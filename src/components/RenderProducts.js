import { FaRubleSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RenderProducts = ({ items }) => {
  return (
    <div className="container mx-auto my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((product) => (
          <div key={product.slug} className="bg-gray-100 rounded-lg shadow-md">
            <Link to={product.product_url}>
              <img
                src="https://via.placeholder.com/176x256"
                alt={product.name}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 flxrow items-center">
                  <FaRubleSign size={10}/> 
                  {product.price}
                </p>
                <p className="text-gray-600">В наличии: {product.stock}</p>
              </div>
            </Link>
            {product.available ? (
              <button
                // onClick={() => addToCart(product.add_to_cart_url)}
                className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-b-lg"
              >
                Добавить в корзину
              </button>
            ) : (
              <p className="text-red-500 font-semibold px-4 pb-4">
                Нет в наличии
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderProducts;
