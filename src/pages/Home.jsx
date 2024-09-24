import React, { useEffect } from "react";
import LoadingPage from "./loadingPage";
import gsap from "gsap";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";
import HaloComponent from "../components/HaloComponent";

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
       }
     );

  }, []); // Empty dependency array ensures this runs once after component mounts
  
  useEffect(() => {
    // Select the titles with class 'h_title'
    const titles = document.querySelectorAll('.h_title');
    
    // Create a timeline
    const tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: '.home-content', // Start the animation when '.home-content' comes into view
        start: 'top 80%', // When the top of '.home-content' hits 80% of the viewport height
        end: 'bottom 20%', // Optional: defines the end point of the trigger
        scrub: false, // Controls how the animation behaves in relation to scrolling
        toggleActions: 'play none none none', // Only play the animation once
        markers: false, // Set to true if you want to visualize the trigger points
      },
    });

    // Animate each title span
    titles.forEach((title, index) => {
      const el = title.querySelectorAll('span span');
      const delay = index * 0.08; // Delay for staggered effect

      // Animate the Y position of each span to 0
      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: 'cubic-text',
        },
        delay
      );
    });

    return () => {
      // Cleanup if necessary
      if (tl) tl.kill();
    };
  }, []);

  return (
    <>
      {/* <LoadingPage /> */}
      <div className="flex flex-col items-center min-h-screen bg-black">
        <div className="main-page-content flex justify-center items-center space-x-40">
          <div className="main-content-left text-white">
            <p className="font-bold text-6xl">Joe Sanjo Cijo</p>
            <div className="flex flex-col items-end">
              <p className="mt-6">Based in Kerala, India</p>
              <p> <span class="text-green-400 text-2xl">•</span> Available for part time work</p>
            </div>
          </div>

          {/* <div className="main-content-center">
            <img className="main-content-center-backimg h-10" src="../assets/images/halo.png" alt="" />
            <img className="main-content-center-image h-90 rounded-full" src="../assets/images/e.avif" alt="main-image" />
          </div> */}
          <HaloComponent />

          

          <div className="main-content-right text-white font-bold text-6xl mb-6">
            <p>Pen Tester</p>
            <p>Full Stack Dev</p>
          </div>
        </div>

        <div className="home-content w-[70%] text-white text-4xl">
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nemo beatae quis, eveniet natus illo veniam quibusdam libero totam voluptates nostrum incidunt quaerat hic cumque. Consequuntur et nobis facilis quo!</p> */}
          <h1 className="h_title  relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
              You
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform [&>svg]:w-[11vw] lg:[&>svg]:w-[6.9vw]">
              Bruh
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Can
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Only
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Build
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Brands
            </span>
          </span>
        </h1>
        <h1 className="h_title relative  w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              People
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Love
            </span>
          </span>
        </h1>
        <h1 className="h_title relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="font_aeonik inline-block  translate-y-full pb-1.5  pt-6    font-medium leading-[81%] text-orange will-change-transform ">
              By Loving
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Your
            </span>
          </span>
        </h1>
        <h1 className="h_title relative flex w-full flex-col items-center justify-center text-center text-[15vw]  font-light uppercase leading-[90%] lg:flex-row lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Audience
            </span>
          </span>
        </h1>
        </div>
      </div>

    </>
  );
}

export default Home;
