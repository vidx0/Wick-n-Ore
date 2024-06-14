import "./Module1.css";
import TypedText from "./TypedText";
import { motion } from "framer-motion";
import Background from "../assets/background.png";

function Module1() {
  const handleReserveClick = () => {
    window.open("https://www.exploretock.com/wicknorekitchentap/", "_blank");
  };

  return (
    <>
      <img id="module1Background" src={Background} alt="Background"></img>
      <div id="gradientOverlay"></div>
      <div id="module1Container">
        <div id="module1Content">
          <motion.div
            initial={{ opacity: 0, y: 75 }} // initial state: opacity 0 and slightly lower
            animate={{ opacity: 1, y: 0 }} // animate to: opacity 1 and original position
            transition={{ duration: 1, delay: 0.5 }}
            id="typed-text"
          >
            <TypedText />
          </motion.div>
          <motion.h4
            initial={{ opacity: 0, y: 75 }} // initial state: opacity 0 and slightly lower
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 0.75, ease: "easeInOut" },
            }}
            id="module1Text"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.h4>
          <motion.button
            initial={{ opacity: 0, y: 75 }} // initial state: opacity 0 and slightly lower
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 1.25, ease: "easeInOut" },
            }} // animate to: opacity 1 and original position
            whileHover={{
              backgroundColor: "#FB8290",
              transition: { duration: 0.2 },
              scale: 1.1,
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              color: "#000",
            }}
            id="module1Button"
            onClick={handleReserveClick}
          >
            Reserve Now
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Module1;
