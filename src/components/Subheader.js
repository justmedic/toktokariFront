import { useState } from "react";
import { FaArrowRight, FaGripLines } from "react-icons/fa6";

const Subheader = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="w-full flex justify-center h-[56px] bg-[#000000] select-none">
      <div className="w-[1280px] flxrow justify-evenly items-center ft_white-text [&>.std]:ft_hover-nav">
        <div
          className="flxrow items-center bg-accent h-full px-4 hover:bg-[hsla(0,50%,50%,1)] transition-color duration-150 relative"
          onMouseEnter={() => setMenuVisible((prev) => !prev)}
          onMouseLeave={() => setMenuVisible((prev) => !prev)}
        >
          <FaGripLines color="white" size={25} className="mr-3" />
          Каталог товаров
          {menuVisible && (
            <div className=" absolute text-secondary left-0 top-[56px] w-full [&>*]:ft_nav-item px-4 bg-[#ffffff] shadow-2xl">
              <div>
                <FaArrowRight size={25} className="mr-3" /> Раздел
              </div>
              <div>
                <FaArrowRight size={25} className="mr-3" />
                Раздел
              </div>
              <div>
                <FaArrowRight size={25} className="mr-3" />
                Раздел
              </div>
              <div>
                <FaArrowRight size={25} className="mr-3" />
                Раздел
              </div>
              <div>
                <FaArrowRight size={25} className="mr-3" />
                Раздел
              </div>
              <div>
                <FaArrowRight size={25} className="mr-3" />
                Раздел
              </div>
            </div>
          )}
        </div>
        <div className="std">Услуги</div>
        <div className="std">Продаж</div>
        <div className="std">О компании</div>
        <div className="std">Доставка</div>
        <div className="std">Контакты</div>
        <div className="std">Стать клиентом</div>
      </div>
    </div>
  );
};

export default Subheader;
