import React from 'react';
import { useEffect } from "react";

// Carousel component
export const Carousel = () => {
    const images = [
      { src: "/assets/images/1.jpg", title: "Nexus", description: "Details about Event 1" },
      { src: "/assets/images/2.jpg", title: "Xactitude", description: "Details about Event 2" },
      { src: "/assets/images/3.jpg", title: "KJSDC", description: "Details about Event 3" },
      { src: "/assets/images/me.jpg", title: "Synchronize", description: "Details about Event 4" },
    ];
  
    useEffect(() => {
      let interval;
      const carousel = document.querySelector('.carousel');
      interval = setInterval(() => {
        carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollTo({ left: 0 });
        }
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="carousel w-full h-full flex scroll-smooth overflow-x-hidden ">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative min-w-full h-full flex-shrink-0 hover:pause-carousel"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Event details shown on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold">{image.title}</h2>
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };