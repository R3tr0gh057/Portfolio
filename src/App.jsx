import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import SplashScreen from './pages/SplashScreen';

function App() {
  const location = useLocation();
  const [isSplashVisible, setIsSplashVisible] = useState(false);
  const [splashMessage, setSplashMessage] = useState('');
  const [targetPath, setTargetPath] = useState('');

  useEffect(() => {
    // Set the splash message based on the next route
    if (location.pathname === "/about") {
      setSplashMessage("ABOUT");
      setTargetPath("/about");
    } else if (location.pathname === "/projects"){
      setSplashMessage("PROJECTS");
      setTargetPath("/projects");
    } else {
      setSplashMessage("HOME");
      setTargetPath("/");
    }

    // Trigger the splash screen animation
    setIsSplashVisible(true);
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); // Adjust this duration to match your animation

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isSplashVisible ? (
        <SplashScreen message={splashMessage} onComplete={() => setIsSplashVisible(false)} />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
