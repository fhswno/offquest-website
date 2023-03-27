"use client";

import React, { useState } from "react";
import {
  FaCodeBranch,
  FaLightbulb,
  FaPaintBrush,
  FaLock,
  FaPoundSign,
  FaUsers,
} from "react-icons/fa";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

interface CardComponentProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const handleIconSelection = (icon: string) => {
  switch (icon) {
    case "code-branch":
      return (
        <FaCodeBranch
          className="text-black dark:text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: "spin 2s linear infinite" }}
        />
      );
    case "lightbulb":
      return (
        <FaLightbulb
          className="text-black dark:text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: "spin 2s linear infinite" }}
        />
      );
    case "paint-brush":
      return (
        <FaPaintBrush
          className="text-black dark:text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: "spin 2s linear infinite" }}
        />
      );
    case "lock":
      return (
        <FaLock
          className="text-black dark:text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: "spin 2s linear infinite" }}
        />
      );
    case "pound-sign":
      return (
        <FaPoundSign
          className="text-black dark:text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: "spin 2s linear infinite" }}
        />
      );
    case "users":
      return (
        <FaUsers
          className="text-black dark:text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: "spin 2s linear infinite" }}
        />
      );
    default:
      return (
        <FaCodeBranch
          className="text-black dark:text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: "spin 2s linear infinite" }}
        />
      );
  }
};

const handleColor = (color: string) => {
  switch (color) {
    case "blue":
      return {
        gradientStart: "#0A1A35",
        gradientEnd: "#0D0E27",
        border: "#232D47",
        shadow: "#2A2B7C",
      };
    case "red":
      return {
        gradientStart: "#3B0D0C",
        gradientEnd: "#200B1C",
        border: "#432D38",
        shadow: "#4F243B",
      };
    case "green":
      return {
        gradientStart: "#0B1215",
        gradientEnd: "#0A1E1A",
        border: "#1F2627",
        shadow: "#153F37",
      };
    case "yellow":
      return {
        gradientStart: "#201E0D",
        gradientEnd: "#151412",
        border: "#2C281F",
        shadow: "#3E3720",
      };
    case "purple":
      return {
        gradientStart: "#1B0A2A",
        gradientEnd: "#0D0E27",
        border: "#2C1F47",
        shadow: "#2A2B7C",
      };
    case "orange":
      return {
        gradientStart: "#2A0D0D",
        gradientEnd: "#1E0A1E",
        border: "#3D2C3D",
        shadow: "#4F243B",
      };
    default:
      return {
        gradientStart: "#0A1A35",
        gradientEnd: "#0D0E27",
        border: "#232D47",
        shadow: "#2A2B7C",
      };
  }
};

const CardComponent = ({
  title,
  description,
  icon,
  color,
}: CardComponentProps) => {
  const [style, setStyle] = useState({});

  const colorSet = handleColor(color);

  const handleDragStart = (e: any) => {
    const cardRect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - cardRect.left;
    const offsetY = e.clientY - cardRect.top;

    const handleMouseMove = (e: any) => {
      const dx = e.clientX - (cardRect.left + offsetX);
      const dy = e.clientY - (cardRect.top + offsetY);

      const skewX = Math.sign(dx) * Math.min(Math.abs(dx) / 20, 10);
      const skewY = Math.sign(dy) * Math.min(Math.abs(dy) / 20, 10);

      setStyle({
        transform: `scale(1.05) skew(${skewY}deg, ${skewX}deg)`,
        transition: "transform 300ms ease-in-out",
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      setStyle({
        transform: "scale(1.05)",
        transition: "transform 300ms ease-in-out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className={`card bg-gradient-to-r from-[${colorSet.gradientStart}] to-[${colorSet.gradientEnd}] p-6 text-white rounded-[20px] desktop:w-1/4 h-fit m-4 tablet:w-2/6 mobile:w-full shadow-sm shadow-[${colorSet.shadow}] border-[1px] border-[${colorSet.border}] hover:cursor-pointer`}
      style={style}
      onMouseDown={handleDragStart}
      onMouseUp={() => setStyle({})}
      onMouseLeave={() => setStyle({})}
    >
      <div className="flex flex-row items-center mb-2">
        {handleIconSelection(icon)}
        <h2
          className={`${sourceCodePro.className} text-2xl font-bold text-black dark:text-white`}
        >
          {title}
        </h2>
      </div>
      <p
        className={`${sourceCodePro.className} text-sm font-normal text-black dark:text-white`}
      >
        {description}
      </p>
    </div>
  );
};

export default CardComponent;
