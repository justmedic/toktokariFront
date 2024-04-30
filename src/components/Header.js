import {
  FaCircleInfo,
  FaClockRotateLeft,
  FaMagnifyingGlass,
} from "react-icons/fa6";

import logo from "../static/logo2.jpg";
import Subheader from "./Subheader";
import { useEffect, useRef, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Header = () => {
  const [inputShown, setInputShow] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let toBuf;
    if (inputShown) {
      inputRef.current.style.right = "0";
      toBuf = setTimeout(() => {
        inputRef.current.children[1].focus();
        inputRef.current.style.height = "105%";
        inputRef.current.style.width = "250%";
      }, 100);
    } else toBuf && clearTimeout(toBuf);
  }, [inputShown]);

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-[1280px] h-[80px] flxrow items-center justify-evenly px-[32px]">
          <div className="h-full p-2">
            <img
              src={logo}
              alt="logo"
              className="h-full cursor-pointer"
              onClick={() => {
                navigate("/home");
              }}
            />
          </div>
          <div
            className={`flxrow transition-all duration-200 ${
              inputShown ? "opacity-0" : ""
            }`}
          >
            <div className="flxcol justify-start">
              <div className="flxrow">
                <div className="ft_text-basic">8 999 123-12-12</div>
                <FaCircleInfo className="ml-4 text-secondary" size={15} />
              </div>
              <div className="ft_text-sm">Бесплатный звонок по РФ</div>
            </div>
            <div className="ft_text-sm flex before:content-[''] before:h-full before:border-l before:border-secondary before:mx-4">
              Пн-Чт: с 9:00 до 18:00
              <br />
              Пт: с 9:00 до 17:00
            </div>
          </div>
          <div
            className="border-b-2 border-secondary flxrow items-center min-w-[20%] relative cursor-text"
            onClick={() => setInputShow((prev) => !prev)}
          >
            <FaMagnifyingGlass className=" text-secondary" size={15} />
            <div className="flex outline-none py-1 px-2">Найти товары</div>
            {inputShown && (
              <div
                ref={inputRef}
                className="w-full absolute top-0 transition-all duration-500 bg-[#ffffff] border-b-2 border-secondary flxrow items-center"
              >
                <FaMagnifyingGlass className=" text-secondary" size={15} />
                <input
                  className=" w-full  outline-none py-1 px-2 transition-all duration-500 ease-out"
                  onBlur={() => setInputShow(false)}
                />
              </div>
            )}
          </div>
          <div className="flxrow bg-accent rounded-full text-[#ffffff] px-4 py-2 justify-center items-center myShadow">
            <div>
              <FaClockRotateLeft size={25} className="mr-4" />
            </div>
            <div className="ft_text-md_accent">Авторизация</div>
          </div>
        </div>
      </div>
      <Subheader />
    </div>
  );
};

export default Header;
