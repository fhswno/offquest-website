'use client';

// REACT
import React, { useState, useRef } from 'react';

// ICONS
import {
  FaCodeBranch,
  FaLightbulb,
  FaPaintBrush,
  FaLock,
  FaPoundSign,
  FaUsers,
} from 'react-icons/fa';

// FONTS
import { workSans } from '../../lib/fonts/workSans';

// TYPESCRIPT
interface CardComponentProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const handleIconSelection = (icon: string) => {
  switch (icon) {
    case 'code-branch':
      return (
        <FaCodeBranch
          className="text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: 'spin 2s linear infinite' }}
        />
      );
    case 'lightbulb':
      return (
        <FaLightbulb
          className="text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: 'spin 2s linear infinite' }}
        />
      );
    case 'paint-brush':
      return (
        <FaPaintBrush
          className="text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: 'spin 2s linear infinite' }}
        />
      );
    case 'lock':
      return (
        <FaLock
          className="text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: 'spin 2s linear infinite' }}
        />
      );
    case 'pound-sign':
      return (
        <FaPoundSign
          className="text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: 'spin 2s linear infinite' }}
        />
      );
    case 'users':
      return (
        <FaUsers
          className="text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: 'spin 2s linear infinite' }}
        />
      );
    default:
      return (
        <FaCodeBranch
          className="text-white text-2xl hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2"
          style={{ animation: 'spin 2s linear infinite' }}
        />
      );
  }
};

const handleColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'from-[#18397C] to-[#1F489E] border-[#00A9FF] shadow-[#2A2B7C]';
    case 'red':
      return 'from-[#7A1C1A] to-[#BE2D2D] border-[#E99DC3] shadow-[#4F243B]';
    case 'green':
      return 'from-[#2C5437] to-[#3D744C] border-[#0EA100] shadow-[#153F37]';
    case 'yellow':
      return 'from-[#625C28] to-[#938A3C] border-[#E1C600] shadow-[#3E3720]';
    case 'purple':
      return 'from-[#411B6F] to-[#5A269A] border-[#BA00E1] shadow-[#2A2B7C]';
    case 'orange':
      return 'from-[#704323] to-[#A46334] border-[#FF6D00] shadow-[#4F243B]';
    default:
      return 'from-[#0A1A35] to-[#0D0E27] border-[#00A9FF] shadow-[#2A2B7C]';
  }
};

const Card = ({ title, description, icon, color }: CardComponentProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const colorSet = handleColor(color);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const rect = cardRef.current?.getBoundingClientRect();
    const centerX = rect ? rect.width / 2 : 0;
    const centerY = rect ? rect.height / 2 : 0;
    const angleX = (clientY - rect!.top - centerY) / 40;
    const angleY = -(clientX - rect!.left - centerX) / 20;
    setRotateX(angleX);
    setRotateY(angleY);
  };

  return (
    <div
      ref={cardRef}
      className={`${workSans.className} card bg-gradient-to-r p-6 text-white rounded-[20px] desktop:w-1/4 h-fit m-4 tablet:w-2/6 mobile:w-full drop-shadow-2xl border-[1px] hover:cursor-pointer ${colorSet}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${
          hovered ? rotateX : 0
        }deg) rotateY(${hovered ? rotateY : 0}deg)`,
      }}
    >
      <div className="flex flex-row items-center mb-2">
        {handleIconSelection(icon)}
        <h2 className={`${workSans.className} text-2xl font-bold text-white`}>
          {title}
        </h2>
      </div>
      <p className={`${workSans.className} text-sm font-normal text-white`}>
        {description}
      </p>
    </div>
  );
};

export default Card;
