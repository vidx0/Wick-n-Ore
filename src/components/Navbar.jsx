import "./Navbar.css";
import Logo from "../assets/logo.jpg";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
function Navbar() {
  const handleReserveClick = () => { window.open("https://www.exploretock.com/wicknorekitchentap/", "_blank"); };
  const handleGiftClick = () => { window.open("https://app.tableup.com/r/3153/home/giftcards", "_blank"); };
  const handleCarryClick = () => { window.open("https://order.tbdine.com/pickup/41432/menu", "_blank"); };
  const handleRewardsClick = () => { window.open("https://tbdine.b2clogin.com/tbdine.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1a_signup_signin&redirect_uri=https%3A%2F%2Fproduction.tableup.com%2Floyalty-service%2Fuser%2Fsso%2Fauthorize&response_type=code&response_mode=query&client_id=07a928ae-677f-4921-85c2-691d33cbd09b&state=YtqHQEtkhjHAM6AgKXUbzokbLFrBXo3Y&nonce=mBrnIhOltfMJj5G1gpD5UbR1NdNdkX7W&scope=openid&x-client-SKU=passport-azure-ad&x-client-Ver=4.3.2", "_blank"); };
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