import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const TypedText = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Wick 'n Ore Kitchen &amp; Tap"], // Array of strings to type
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 75, // Backspacing speed in milliseconds
      loop: false, // Whether to loop through the strings continuously
    };

    const typed = new Typed(typedTextRef.current, options);

    // Clean up function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedTextRef}></span>;
};

export default TypedText;
