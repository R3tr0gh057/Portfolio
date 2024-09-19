import React from 'react';
import { NavButton } from './NavButton';

export const NavBar = () => {
  return (
    <nav className="navbar w-[90vw] h-16 z-10 bg-[#697dff00] opacity-0 fixed top-10 left-1/2 -translate-x-1/2 px-10 flex justify-between items-center rounded-2xl">
      <h1 className="dm-sans text-white font-black text-3xl">Portfolio</h1>
      <div className="dm-sans flex gap-8 text-white font-medium text-lg">
        <NavButton>Home</NavButton>
        <NavButton>Projects</NavButton>
        <NavButton>About</NavButton>
      </div>
    </nav>
  );
};
