import { FaAngleRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useG } from "../context/GlobalContext";

let russianNames = {
  shop: "Каталог товаров",
  home: "Главная",
  cart: "Корзина",
};

const Breadcrumbs = () => {
  const { catNames } = useG();

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbs = pathnames;

  russianNames = { ...russianNames, ...catNames };

  return (
    <nav className="text-secondary flxrow mt-4 w-full">
      {breadcrumbs.map((name, index) => {
        const routeTo = `/${breadcrumbs.slice(0, index + 1).join("/")}`;
        const isLast = index === breadcrumbs.length - 1;
        return (
          <div key={name} className="flxrow text-center items-center">
            <span className={isLast ? "text-secondary" : ""}>
              {isLast ? (
                russianNames[name]
              ) : (
                <Link to={routeTo}>{russianNames[name]}</Link>
              )}
            </span>
            {!isLast && <FaAngleRight size={12} className="mx-1" />}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
