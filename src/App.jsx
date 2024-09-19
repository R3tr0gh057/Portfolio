import LoadingPage from "./loadingPage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  useGSAP(()=>{
    let t1 = gsap.timeline();
    t1.to(".box", {
      scale:0,
      y:60,
      rotate: 400,
      duration: 1,
      repeat: 1,
      yoyo: true,
      delay: 0.5,
      stagger: {
        amount: 1.5,
        from: "start",
        // axis: "x",
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
      delay: 2,
    })
  });
  return (
    <>
      <LoadingPage />
      <div className="h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-8xl font-bold">Portfolio</h1>
      </div>
    </>
  );
}

export default App