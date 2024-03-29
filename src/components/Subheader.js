import NavCat from "./NavCat";

const Subheader = () => {
  return (
    <div className="w-full flex justify-center h-[56px] bg-[#000000] select-none">
      <div className="w-[1280px] flxrow justify-evenly items-center ft_white-text [&>.std]:ft_hover-nav">
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
