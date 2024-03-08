import tile1 from "../static/logo2.jpg";
import tile2 from "../static/tile2.jpg";

const Showplace = () => {
  return (
    <div className="w-full px-16 h-[560px] flxrow">
      <div className="px-8 flxcol">
        <div className=" py-8 relative flex items-center justify-center">
          <img alt="tile1" src={tile1} />
          <div className="absolute text-[#ffffff]">PLACEHOLDER</div>
        </div>
        <div className=" py-8 relative flex items-center justify-center">
          <img alt="tile1" src={tile1} />
          <div className="absolute text-[#ffffff]">PLACEHOLDER</div>
        </div>
      </div>
      <div className="p-8">
        <img alt="tile2" src={tile2} />
      </div>
      <div className="p-8"></div>
    </div>
  );
};

export default Showplace;
