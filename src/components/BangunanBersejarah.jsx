import React, { useState } from "react";
import { data } from "./SejarahData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function BangunanBersejarah() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = data[currentIndex].img;
  const currentMap = data[currentIndex].maps;
  const currentTitle = data[currentIndex].title;
  const currentDesc = data[currentIndex].desc;

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="flex">
        <img
          className="w-[1000px] h-[700px] ml-20 object-cover mt-[100px] mb-[20px]"
          src={currentImage}
          alt="index"
        />
        <div>{currentMap}</div>
      </div>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-[1100px] h-[100px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item, index) => (
            <img
              key={index}
              className={`w-[90px] h-[100px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ${
                index === currentIndex ? "active" : ""
              }`}
              src={item.img}
              alt="/"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
      <h1>{currentTitle}</h1>
      <p>{currentDesc}</p>
    </>
  );
}

export default BangunanBersejarah;
