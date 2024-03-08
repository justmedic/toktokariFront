import { useState } from "react";
import { FaArrowRight, FaGripLines } from "react-icons/fa6";
import { useG } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import NavCat from "./NavCat";

const Subheader = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { cats } = useG();

  return (
    <div className="w-full flex justify-center h-[56px] bg-[#000000] select-none">
      <div className="w-[1280px] flxrow justify-evenly items-center ft_white-text [&>.std]:ft_hover-nav">
        {/* <Link
          to={"/catigories"}
          className="flxrow items-center bg-accent h-full px-4 hover:bg-[hsla(0,50%,50%,1)] transition-color duration-150 relative"
          onMouseEnter={() => setMenuVisible((prev) => !prev)}
          onMouseLeave={() => setMenuVisible((prev) => !prev)}
        >
          <FaGripLines color="white" size={25} className="mr-3" />
          Каталог товаров
          {menuVisible && (
            <div className=" absolute text-secondary left-0 top-[56px] w-full [&>*]:ft_nav-item px-4 bg-[#ffffff] shadow-2xl z-30">
              {cats}
            </div>
          )}
        </Link> */}
        <NavCat />
        <div className="std">Услуги</div>
        <div className="std">Продажы</div>
        <div className="std">О компании</div>
        <div className="std">Доставка</div>
        <div className="std">Контакты</div>
        <div className="std">Стать клиентом</div>
      </div>
    </div>
  );
};

export default Subheader;
