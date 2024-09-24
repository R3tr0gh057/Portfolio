import React from 'react';

export const NavButton = ({ children }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden text-2xl uppercase leading-6 text-[#ff946a]">
      <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 text-[#ffffff] ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
};