import { Link, useLocation, useParams } from "react-router-dom";
import { useG } from "../context/GlobalContext";

const Categories = ({ subcats, currCatId }) => {
  const { cats } = useG();
  const location = useLocation();
  const renderCats = (arr) => {
    return arr
      .filter((cat) => !cat.parent || currCatId === cat.parent)
      .map((category) => (
        <div key={category.id} className="bg-gray-100 rounded-lg">
          <Link to={`${location.pathname}/${category.id}`}>
            <img
              src="https://via.placeholder.com/176x256"
              alt="Placeholder"
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{category.name}</h2>
            </div>
          </Link>
        </div>
      ));
  };

  return (
    <div className="container mx-auto my-4">
      <div className="grid grid-cols-6 gap-4">
        {subcats ? renderCats(subcats) : renderCats(cats)}
      </div>
    </div>
  );
};

export default Categories;
