import "./Module2.css";
import Arrow from "../assets/arrow.png";
import Flame from "../assets/flame.png";
import Time from "../assets/time.png";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import { motion } from "framer-motion";
function Module2() {
  window.onscroll = function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 1500) {
      document.getElementById("imageContainer").classList.add("shift");
    } else {
      document.getElementById("imageContainer").classList.remove("shift");
    }
  };
  return (
    <>
      <div id="module2Container">
          <div id="module2Content">
            <motion.div
              id="module2Left"
              className="fixed"
              initial={{ opacity: 0, x: -75 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h4 id="module2Left1">Welcome</h4>
              <h4 id="module2Left2">
                Wick'n Ore<br></br>Kitchen & Tap
              </h4>
              <div id="module2Left3"></div>
              <div id="module2Left4">
                <p id="module2left4Text">Discover Us</p>
                <img id="module2Left4Icon" src={Arrow}></img>
              </div>
              <motion.div
                id="module2Left5"
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div id="imageContainer">
                  <img className="image" src={Image1}></img>
                  <img className="image" src={Image2}></img>
                </div>
              </motion.div>
            </motion.div>

            <div id="module2Right">
              <motion.div
                id="module2Right1"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 50,
                }}
              >
                <h6 className="pg">
                  Brought to you by the owners of the Claim Company. Locally
                  owned and operated and resident of Vernon Hills for over 20
                  years.
                  <br></br>
                  <br></br>
                  We invite you to join us at our new restaurant and enjoy our
                  new vibe.
                </h6>
              </motion.div>
              <motion.div
                id="module2Right2"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 50,
                }}
              >
                <img id="module2Right2Icon" src={Flame}></img>
                <h6 id="module2RightTitle">Wick ‘n Ore Kitchen & Tap!</h6>
                <h6 className="pg" id="module2RightText">
                  We established our new name to honor our mining roots. “Wick”
                  referring to the wick of a mining lantern, and “Ore” being the
                  mineral mined.<br></br>
                  We are eager to share our new menu with similar fare
                  and some new flare. It will include some classics from the
                  past mixed with new additions that we know you will love. We
                  remain passionate about bringing you fabulous food with
                  exceptional service.<br></br>
                  We are excited to share this next chapter with you,
                  Vernon Hills, and we look forward to you visiting us again.
                </h6>
              </motion.div>
              <motion.div
                id="module2Right3"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 50,
                }}
              >
                <img id="module2Right3Icon" src={Time}></img>
                <h6 id="module2Right3Title">Open Hours</h6>
                <h6 className="pg">
                  <span>Monday:</span> 11am – 9:00pm<br></br>
                  <span>Tuesday:</span> 11 am-9:00pm<br></br>
                  <span>Wednesday:</span> 11am – 9:00pm<br></br>
                  <span>Thursday:</span> 11am – 9:00pm
                  <br></br>
                  <span>Friday:</span> 11am – 9:30pm<br></br>
                  <span>Saturday:</span> 11am – 9:30pm
                  <br></br>
                  <span>Sunday:</span> 11am – 8pm
                  <br></br>
                  <span>Lunch Menu- Mon – Sunday:</span> 11am to 3:45pm
                  <br></br> 
                </h6>
              </motion.div>
            </div>
          </div>
        </div>
    </>
  );
}
export default Module2;