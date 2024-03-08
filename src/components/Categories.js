import { FaAngleRight } from "react-icons/fa6";
import placeholder from "../static/logo2.jpg";
import { Link } from "react-router-dom";
import { useG } from "../context/GlobalContext";

const Categories = () => {
  const { cats } = useG();
  

  return (
    <div className="w-full flxcol px-16 py-8">
      <div className="flxrow items-center text-secondary">
        <div>Главная</div>
        <FaAngleRight size={12} className="mx-2" />
        <div>Католог товаров</div>
      </div>
      <div className="text-[2rem] font-bold my-4">Католог товаров</div>
      <div className="grid grid-cols-6 gap-4">
        {cats.map((cat) => (
          <Link
            to={`/category/${cat.id}`}
            key={cat.id}
            className="bg-gray-100 p-4 rounded-lg"
          >
            <img className="w-full h-auto" src={placeholder} alt={cat.name} />
            <h2 className="mt-2 text-center text-xl">{cat.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
