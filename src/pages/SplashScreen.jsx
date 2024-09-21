import React, { useEffect } from 'react';
import gsap from 'gsap';

function SplashScreen({ message, onComplete }) {
  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    timeline.fromTo(
      ".splash-screen",
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.6, ease: "power2.out" }
    )
    .to(
      ".splash-screen",
      { duration: 0.2, opacity: 1, delay: 0.2 }
    )
    .to(
      ".splash-screen",
      { y: "-100%", duration: 0.6, ease: "power2.in" }
    );

    // Letter animation with floating effect
    const letters = document.querySelectorAll('.letter');
    const letterTimeline = gsap.timeline();

    letterTimeline.fromTo(
      letters,
      { y: "50%", opacity: 0 },
      { 
        y: "0%", 
        opacity: 1, 
        duration: 0.6, 
        ease: "power2.out", 
        stagger: 0.1
      })
      .to(
        letters,
        { 
          y: "-50%",
          duration: 1,
          ease: "power2.out", 
          stagger: 0.1 
        },
        "<"
      );

  }, [onComplete]);

  return (
    <div className="splash-screen fixed inset-0 bg-black flex items-center justify-center z-50">
      <h1 className="text-white text-9xl">
        {message.split('').map((char, index) => (
          <span key={index} className="letter">{char}</span>
        ))}
      </h1>
    </div>
  );
}

export default SplashScreen;
