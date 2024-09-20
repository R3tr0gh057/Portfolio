import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from "./loadingPage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavBar } from './components/NavBar';
import About from './About'; // Import the About component

function App() {
  useGSAP(() => {
    let t1 = gsap.timeline();
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

    t1.to(".container", {
      rotate: "-405deg",
      scale: 0,
      duration: 1,
    });
    t1.to(".wrapper", {
      opacity: 0,
      duration: 1,
    });

    // Animate navbar in from right to left
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
  });

  return (
    <Router>
      <NavBar /> {/* Navbar will be shown on all pages */}
      <Routes>
        <Route path="/" element={
          <>
            <LoadingPage />
            <div className="h-screen bg-black flex items-center justify-center">
              <h1 className="text-white text-8xl font-bold">Portfolio</h1>
            </div>
          </>
        } />
        <Route path="/about" element={<About />} /> {/* Route to About page */}
      </Routes>
    </Router>
  );
}

export default App;
