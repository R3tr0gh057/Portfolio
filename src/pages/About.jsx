import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Carousel } from '../components/Carousel';
import { NavBar } from '../components/NavBar';
import { Separator } from '../components/SeparatorLine';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {

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
      ".tool-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tool-section",
          start: "top 90%", // Trigger when the carousel is near the viewport
          end: "bottom top", // End when the bottom of the carousel hits the top of the viewport
          toggleActions: "play none none reverse", // Ensures it doesn't disappear immediately
        },
      }
    );

    gsap.fromTo(
      ".skill-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skill-section",
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
          <div className="about-photo w-30 flex justify-center">
            <img
              src="/assets/images/me.jpg"
              alt="my-name"
              className="w-full h-auto rounded-full shadow-lg object-cover"
            />
          </div>

          <div className="about-details w-2/3 text-left px-10 text-white">
            <h2 className="name text-4xl font-bold cursor-pointer transition-transform">
              Making robust <span className="hightligh font-bold bg-white text-black">BACKEND</span> with the best looking <span className="highlight font-bold bg-[#f77b4a] text-white">FRONTEND</span>
            </h2>
            <p className="text-xl mt-4">
              I have over four years of both formal and informal experience in the IT industry, specializing in a diverse range of technologies. My expertise spans across various programming languages, including C, C++, Java, Python, JavaScript, Bash, and Ruby. I’m proficient in frameworks such as <span className="react">React</span>, Angular, Svelte, and Flask, as well as pentesting tools like Metasploit and BurpSuite.
            </p>
            <p className="text-xl mt-4">
              I am currently working as an intern at the Kristu Jayanti Software Development Center, where I am implementing a custom kiosk system for a smart library.
            </p>
          </div>
        </div>

        <div className="linebreak h-30 bg-black"></div>

        {/* Second section for scrollable content */}
        <div className="second-section w-[70%] mx-auto my-20 flex items-center justify-center text-white">

          <div className="project-details w-2/3 text-left px-10">
            <h2 className="text-4xl font-bold">Project Kiosk</h2>
            <p className="text-xl mt-4">
              In this project, I’m working on a custom kiosk system that integrates hardware like RFID, ATmega328P, and ESP32 with API-driven software.
            </p>
          </div>

          <div className="about-photo w-30 flex justify-center">
            <img
              src="/assets/images/me.jpg"
              alt="Project Image"
              className="w-full h-auto rounded-full shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Tool Line */}
        <div class="tool-section w-[70%] text-white">
          <div class="flex items-center mb-8">
            <span class="text-gray-300 font-bold">About</span>
            <div class="flex-grow h-px bg-gray-700 ml-4"></div>
          </div>


          <div className="tool-container w-[92%] flex space-x-80 justify-items-center">
            <h2 class="text-6xl font-bold mb-4">Toolbox</h2>
              <div class="text-4xl leading-loose flex flex-wrap gap-x-4 gap-y-2">
                <span>HTML</span> <span class="text-red-400">•</span>
                <span>CSS</span> <span class="text-red-400">•</span>
                <span>JS</span> <span class="text-red-400">•</span>
                <span>C</span> <span class="text-red-400">•</span>
                <span>C++</span> <span class="text-red-400">•</span>
                <span>PYTHON</span> <span class="text-red-400">•</span>
                <span>JAVA</span><span class="text-red-400">•</span>
                <span>RUBY</span> <span class="text-red-400">•</span>
                <span>BURPSUITE</span> <span class="text-red-400">•</span>
                <span>CANVA</span>
              </div>
          </div>
        </div>

        <div className="line-break h-40"></div>

        {/* Skill Line */}
        <div className="skill-section w-[70%] text-white">
          
          <div class="flex items-center mb-8 text-white">
            <span class="text-gray-300 font-bold">About</span>
            <div class="flex-grow h-px bg-gray-700 ml-4"></div>
          </div>


          <div className="skills-container flex items-center space-x-80 text-white">
            <h2 className="text-6xl font-bold mb-12">Skills</h2>
            <div className="text-xl grid grid-cols-2 gap-1">
              
              <div className="block-1 space-y-10">
                {/* Product Design Block */}
                <div>
                  <h3 className="text-4xl font-bold mb-4">Product Design</h3>
                  <ul className="space-y-2">
                    <li>UX/UI Design</li>
                    <li>Prototyping</li>
                    <li>Design System</li>
                    <li>Developer Handoff</li>
                  </ul>
                </div>

                {/* Brand Design Block */}
                <div>
                  <h3 className="text-4xl font-bold mb-4">Brand Design</h3>
                  <ul className="space-y-2">
                    <li>Logo Design</li>
                    <li>Brand Guidelines</li>
                    <li>Presentations</li>
                    <li>Digital & Print Assets</li>
                  </ul>
                </div>
              </div>

              <div className="block-2 space-y-10">
                {/* Motion Design Block */}
                <div>
                  <h3 className="text-4xl font-bold mb-4">Motion Design</h3>
                  <ul className="space-y-2">
                    <li>UI Animations</li>
                    <li>Logo Animations</li>
                    <li>Illustration Animations</li>
                    <li>Explainer Videos</li>
                  </ul>
                </div>

                {/* Web Development Block */}
                <div>
                  <h3 className="text-4xl font-bold mb-4">Web Development</h3>
                  <ul className="space-y-2">
                    <li>Front-End Development</li>
                    <li>WordPress Theme</li>
                    <li>SEO</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

      <div className="footer-section w-full h-40 bg-black"></div>
    </>
  );
};

export default About;
