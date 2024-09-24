import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NavBar } from "../components/NavBar";
import ImageContainer from "../components/ImageContainer";

const Projects = () => {
  
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
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

    gsap.utils.toArray(".image-container").forEach((container, index) => {
      const q = gsap.utils.selector(container);
      gsap.utils.toArray(q(".image")).forEach((piece, i) => {
        gsap.from(piece, {
          x: (i + 1) * 1200,
          scale: 0.4,
          y: 60,
          duration: 2.5,
          scrollTrigger: {
            trigger: `.image-${index + 1}`,
            start: "top bottom",
            toggleActions: "play none none reverse"
          }
        })
      })
    })
  })

    
    
    return (
        <>
            <div className="flex flex-col gap-20 bg-black py-[15rem] px-20">
                <ImageContainer imgNum = "1" position = "place-self-start"/>
                <div className="blank-space w-40"></div>
                <ImageContainer imgNum = "2" position = "place-self-center"/>
                <div className="blank-space w-40"></div>
                <ImageContainer imgNum = "3" position = "place-self-end"/>
                <div className="blank-space w-40"></div>
                <ImageContainer imgNum = "4" position = "place-self-center"/>
                <div className="blank-space w-40"></div>
                <ImageContainer imgNum = "5" position = "place-self-start"/>
                <div className="blank-space w-40"></div>
                <ImageContainer imgNum = "6" position = "place-self-center"/>
                <div className="blank-space w-40"></div>
                <ImageContainer imgNum = "7" position = "place-self-end"/>
                <div className="blank-space w-40"></div>
            </div>
        </>
    )
};

export default Projects;