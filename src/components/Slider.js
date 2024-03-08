import { useEffect, useRef, useState } from "react";
import slider1 from "../static/slider1.jpg";
import slider2 from "../static/slider2.jpg";
import slider3 from "../static/slider3.jpg";
import slider4 from "../static/slider4.jpg";
import slider5 from "../static/slider5.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import useInterval from "../hooks/interval.js";

const Slider = () => {
  const images = [slider1, slider2, slider3, slider4, slider5];
  const [currSlider, setCurrSlider] = useState(0);
  const [paginationCircles, setPaginationCircles] = useState([]);

  const imageRef = useRef(null);

  useInterval(() => {
    changeSlider("f");
  }, 5000);

  useEffect(() => {
    const circles = [];
    for (let i = 0; i < images.length; i++) {
      circles.push(
        <div
          key={i}
          className={`w-2 h-4 mx-1 border border-secondary rounded-full hover:bg-secondary ${
            currSlider === i && "bg-basic "
          }`}
          onClick={() => {
            setCurrSlider(i);
          }}
        />
      );
    }
    setPaginationCircles(circles);
  }, [currSlider, images.length]);

  const changeSlider = async (direction) => {
    if (direction === "f") {
      imageRef.current.classList.add(
        "translate-transform",
        "translate-opacity"
      );
      imageRef.current.classList.add("duration-300");
      imageRef.current.style.transform = "translateX(-150%)";
      setTimeout(() => {
        imageRef.current.style.opacity = "0";
        imageRef.current.classList.remove("translate-transform");
        imageRef.current.classList.remove("duration-300");
        imageRef.current.style.transform = "translateX(150%)";
      }, 250);
      setTimeout(() => {
        setCurrSlider((prev) => {
          if (prev === images.length - 1) {
            return 0;
          }
          return prev + 1;
        });
        imageRef.current.style.opacity = "1";
        imageRef.current.classList.add("translate-transform");
        imageRef.current.classList.add("duration-300");
        imageRef.current.style.transform = null;
      }, 350);
    } else if (direction === "b") {
      imageRef.current.classList.add("translate-transform");
      imageRef.current.classList.add("duration-300");
      imageRef.current.style.transform = "translateX(150%)";
      setTimeout(() => {
        imageRef.current.classList.remove("translate-transform");
        imageRef.current.classList.remove("duration-300");
        imageRef.current.style.transform = "translateX(-150%)";
      }, 300);
      setTimeout(() => {
        setCurrSlider((prev) => {
          if (prev === 0) {
            return images.length - 1;
          }
          return prev - 1;
        });
        imageRef.current.classList.add("translate-transform");
        imageRef.current.classList.add("duration-300");
        imageRef.current.style.transform = null;
      }, 350);
    }
  };
  const arrowsRef = useRef(null);

  return (
    <div
      className="w-full flex items-center justify-center relative h-[630px] my-8 overflow-x-hidden"
      onMouseEnter={() => {
        arrowsRef.current.style.display = "flex";
        setTimeout(() => {
          arrowsRef.current.style.opacity = "1";
        }, 300);
      }}
      onMouseLeave={() => {
        arrowsRef.current.style.opacity = "0";
        setTimeout(() => {
          arrowsRef.current.style.display = "none";
        }, 300);
      }}
    >
      <img
        src={images[currSlider]}
        className="h-full select-none"
        alt="slider"
        ref={imageRef}
      />
      <div
        className={`absolute w-full hidden flex-row justify-between px-8 opacity-0 transition-opacity duration-300`}
        ref={arrowsRef}
      >
        <FaAngleLeft
          className=" bg-[#2c2c2c23] hover:bg-[#2c2c2c57] transition-colors duration-300 rounded-full p-2"
          size={60}
          onClick={() => {
            changeSlider("b");
          }}
        />
        <FaAngleRight
          className=" bg-[#2c2c2c23] hover:bg-[#2c2c2c57] transition-colors duration-300 rounded-full p-2"
          size={60}
          onClick={() => {
            changeSlider("f");
          }}
        />
      </div>
      <div className="absolute bottom-0 w-full flex justify-center items-center my-2">
        {paginationCircles}
      </div>
    </div>
  );
};

export default Slider;
