import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HaloComponent = () => {
  const haloRef = useRef(null);  // Ref for the halo div
  const containerRef = useRef(null); // Ref for the entire structure

  useEffect(() => {
    // Animate the entire structure growing in size on page load
    gsap.fromTo(
      containerRef.current,
      { scale: 0 },
      { scale: 1, duration: 1, ease: 'power2.out' }
    );

    // Add 3D rotation to only the halo (infinite loop)
    gsap.to(haloRef.current, {
      rotateY: 360, // Full 360 degree rotation on the Y axis
      rotateX: 180, // Add a tilt with X axis rotation
      duration: 4,  // Adjust duration for speed
      repeat: -1,   // Infinite loop
      ease: 'none', // Ensure constant speed without easing (important for looping)
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">

    
      {/* Your Image (centered inside both the halo and video) */}
      <div className="absolute top-4 inset-0 flex justify-center items-center">
          <img
            src="../assets/images/3d-model.webp"
            alt="Your Image"
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
      </div>

      <div
        ref={containerRef} // This is the full structure (grows on page load)
        className="relative w-[300px] h-[300px] perspective-1000">

        {/* The Halo (3D effect applied) */}
        <div
          ref={haloRef}
          className="absolute top-0 left-0 w-full h-full border-[10px] border-red-400 rounded-full"
          style={{
            transformStyle: 'preserve-3d', // Enable 3D transforms
            perspective: '1000px',         // Perspective for 3D depth
          }}
        >
          {/* Inner Layer for 3D effect */}
          <div
            className="absolute top-0 left-0 w-full h-full border-[6px] border-purple-500 rounded-full"
            style={{ transform: 'translateZ(20px)' }} // Give it depth by moving it along the Z-axis
          ></div>

          {/* Another Layer for more 3D depth */}
          <div
            className="absolute top-0 left-0 w-full h-full border-[6px] border-blue-200 rounded-full"
            style={{ transform: 'translateZ(-20px)' }} // This one goes behind the first layer
          ></div>
        </div>

        {/* Background Video (inside the halo) */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
      </div>
    </div>
  );
};

export default HaloComponent;
