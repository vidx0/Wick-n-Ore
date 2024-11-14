import "./Navbar.css";
import Logo from "../assets/logo.jpg";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
function Navbar() {
  const handleReserveClick = () => { window.open("https://order.toasttab.com/online/wick-n-ore-kitchen-tap-1260-s-milwaukee-ave-suite-500", "_blank"); };
  const handleGiftClick = () => { window.open("https://www.toasttab.com/wick-n-ore-kitchen-tap-1260-s-milwaukee-ave-suite-500/giftcards", "_blank"); };
  const handleCarryClick = () => { window.open("https://order.toasttab.com/online/wick-n-ore-kitchen-tap-1260-s-milwaukee-ave-suite-500", "_blank"); };
  const handleRewardsClick = () => { window.open("https://www.toasttab.com/wick-n-ore-kitchen-tap-1260-s-milwaukee-ave-suite-500/rewardsSignup", "_blank"); };
  const[isOpen, setIsOpen] = useState(false);
  let lastScrollTop = useState(0);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 980) {
      document.getElementById("navbarContainer").classList.add("lower");
    } else {
      document.getElementById("navbarContainer").classList.remove("lower");
    }
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      document.getElementById("navbarContainer").classList.add("scrolled-down");
    } else {
      // Scrolling up
      document
        .getElementById("navbarContainer")
        .classList.remove("scrolled-down");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }} // initial state: opacity 0 and slightly lower
        animate={{ opacity: 1 }} // animate to: opacity 1 and original position
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        id="navbarContainer"
      >
        <div id="nav1">
  <img id="logo" src={Logo} alt="Logo" />
</div>
<div className="hamburger" onClick={toggleMenu}>
  &#9776;
</div>
<div id="nav2" className={isOpen ? "open" : ""}>
  <h5 onClick={handleRewardsClick}>Rewards</h5>
  <h5 onClick={handleCarryClick}>Carryout</h5>
  <h5 onClick={handleReserveClick}>Menu</h5>
  <h5 onClick={handleGiftClick}>Gift Cards</h5>
</div>

        <div id="nav3">
          <motion.button
            whileHover={{
              backgroundColor: "#FB8290",
              transition: { duration: 0.2 },
              scale: 1.1,
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              color: "#000",
            }}
            id="navButton"
            onClick={handleReserveClick}
          >     

            Reserve
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
export default Navbar;