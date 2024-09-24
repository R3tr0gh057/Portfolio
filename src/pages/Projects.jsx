import React from "react";
import gsap from "gsap";
import { NavBar } from "../components/NavBar";

const Projects = () => {
    gsap.fromTo(
        ".navbar",
        {
          x: 100, // Start position off-screen
          opacity: 0,
        },
        {
          x: 0, // End position in place
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );
  
      // Animation on load
      gsap.fromTo(
        ".about-container",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      );
      
    return (
        <>
            
        </>
    )
};

export default Projects;