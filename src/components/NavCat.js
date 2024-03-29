import { useG } from "../context/GlobalContext";
import { useRef, useState } from "react";
import { FaGripLines } from "react-icons/fa6";
import convertToNestedObject from "../utils/convertToNested";
import { Link } from "react-router-dom";

const NavCat = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { cats } = useG();
  const nestedCats = convertToNestedObject(cats);
  const [catPath, setCatPath] = useState([]);

  const menuRef = useRef(null);

  const renderCategory = (category, iter) => {
    return (
      <div
        to={`/categories/${category.id}`}
        key={category.id}
        onMouseEnter={() => {
          setCatPath((prev) => {
            let tmp = [...prev];
            tmp[iter] = category.id;
            tmp.splice(iter + 1);
            return tmp;
          });
        }}
        className="px-4 py-2 text-center"
      >
        {category.name}
        {category.children.length > 0 && catPath[iter] === category.id && (
          <div className="absolute left-[100%] top-0 h-full w-full bg-[#ffffff] text-secondary flxcol ">
            {category.children.map((cat) => renderCategory(cat, iter + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Link
      to={"/shop"}
      className="flex items-center bg-accent h-full px-4 hover:bg-[hsla(0,50%,50%,1)] transition-color duration-150 relative"
      onMouseEnter={() => {
        setMenuVisible(true);
      }}
      onMouseLeave={() => {
        setMenuVisible(false);
        setCatPath([]);
      }}
    >
      <FaGripLines color="white" size={25} className="mr-3" />
      Каталог товаров
      {menuVisible && (
        <div
          ref={menuRef}
          className={`absolute flxcol text-secondary left-0 top-[56px] w-full bg-[#ffffff] shadow-2xl z-30 transition-all duration-200 ${
            menuVisible && " top-[56px]"
          }`}
        >
          {nestedCats.map((cat) => renderCategory(cat, 0))}
        </div>
      )}
    </Link>
  );
};

export default NavCat;
