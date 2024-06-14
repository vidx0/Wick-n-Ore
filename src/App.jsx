import React from 'react';
import Black from "./components/Black.jsx";
import Navbar from "./components/Navbar.jsx";
import Module1 from "./components/Module1.jsx";
import Module2 from "./components/Module2.jsx";
import Module3 from "./components/Module3.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Black />
        <Navbar />
        <Module1 />
        <Module2 />
        <Module3 />
        <ScrollToTopButton />
      </ParallaxProvider>
    </>
  );
}

export default App;
