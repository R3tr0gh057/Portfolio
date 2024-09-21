import React, { useEffect } from "react";
import LoadingPage from "./loadingPage";
import gsap from "gsap";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    let t1 = gsap.timeline();
    // Animate the boxes
    t1.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      duration: 1,
      repeat: 1,
      yoyo: true,
      delay: 0.5,
      stagger: {
        amount: 1.5,
        from: "start",
        grid: [3, 3],
      },
    });

    // Animate the container and wrapper
    t1.to(".container", {
      rotate: "-405deg",
      scale: 0,
      duration: 1,
    });
    t1.to(".wrapper", {
      opacity: 0,
      duration: 1,
    });

    t1.fromTo(
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
         delay: 0.5,
       }
     );

  }, []); // Empty dependency array ensures this runs once after component mounts

  return (
    <>
      <LoadingPage />
      <div className="flex flex-col min-h-screen bg-black">
        
      </div>

    </>
  );
}

export default Home;
