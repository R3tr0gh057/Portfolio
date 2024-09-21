import React, { useEffect } from "react";
import { NavButton } from './NavButton';
import { Link } from 'react-router-dom'; // Import Link for navigation

export const NavBar = () => {
  return (
    <nav className="navbar w-[90vw] h-16 z-10 bg-[#ffffff00] opacity-0 fixed top-10 left-1/2 -translate-x-1/2 px-10 flex justify-between items-center rounded-2xl">
      <h1 className="dm-sans text-white font-black text-3xl">Portfolio</h1>
      <div className="dm-sans flex gap-8 text-white font-medium text-lg">
        <Link to="/"><NavButton>Home</NavButton></Link>
        <Link to="/projects"><NavButton>Projects</NavButton></Link>
        <Link to="/about"><NavButton>About</NavButton></Link> {/* Link to About */}
      </div>
    </nav>
  );
};
