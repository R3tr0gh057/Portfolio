import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { NavBar } from './components/NavBar';
import { Carousel } from './components/Carousel';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Animation on load
    gsap.fromTo(
      ".about-container",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".second-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".second-section",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Scroll-triggered animation for the carousel section
    gsap.fromTo(
      ".carousel-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".carousel-section",
          start: "top 90%", // Trigger when the carousel is near the viewport
          end: "bottom top", // End when the bottom of the carousel hits the top of the viewport
          toggleActions: "play none none reverse", // Ensures it doesn't disappear immediately
        },
      }
    );
  }, []);

  return (
    <>
      <div className="about-page h-auto min-h-screen flex flex-col items-center justify-center bg-black">
        <div className="navbar h-40 w-16">
          {/* <NavBar /> */}
        </div>

        {/* First section */}
        <div className="about-container flex items-center justify-center w-[70%] mx-auto my-12">
          <div className="about-photo w-1/3 flex justify-center">
            <img
              src="/assets/images/me.jpg"
              alt="Your Name"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="about-details w-2/3 text-left px-10 text-white">
            <h2 className="name text-4xl font-bold cursor-pointer transition-transform">
              Joe Sanjo Cijo
            </h2>
            <p className="text-xl mt-4">
              I have over four years of both formal and informal experience in the IT industry, specializing in a diverse range of technologies. My expertise spans across various programming languages, including C, C++, Java, Python, JavaScript, Bash, and Ruby. I’m proficient in frameworks such as <span className="react">React</span>, Angular, Svelte, and Flask, as well as pentesting tools like Metasploit and BurpSuite.
            </p>
            <p className="text-xl mt-4">
              I am currently working as an intern at the Kristu Jayanti Software Development Center, where I am implementing a custom kiosk system for a smart library.
            </p>
          </div>
        </div>

        {/* Second section for scrollable content */}
        <div className="second-section w-[70%] mx-auto my-20 flex items-center justify-center text-white">
          <div className="about-photo w-1/3 flex justify-center">
            <img
              src="/assets/images/me.jpg"
              alt="Project Image"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="project-details w-2/3 text-left px-10">
            <h2 className="text-4xl font-bold">Project Kiosk</h2>
            <p className="text-xl mt-4">
              In this project, I’m working on a custom kiosk system that integrates hardware like RFID, ATmega328P, and ESP32 with API-driven software.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel-section carousel-container w-[80%] h-72 relative overflow-hidden my-12">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default About;
