import "./Module3.css";
import Logo from "../assets/logo.jpg";
import Pin from "../assets/pin.png";
import Twitter from "../assets/twitter.png";
import Insta from "../assets/insta.png";
import Face from "../assets/face.png";
function Module3() {
  return (
    <>
      <div id="module3Container">
        <div id="module3Content">
          <div id="module3Content1">
            <img id="logo2" src={Logo}></img>
            <div id="module3Content1Div">
              <img id="logo3" src={Pin}></img>
              <p id="module3ContentDivText">
                VERNON HILLS <span className="unBold">|</span> ILLINOIS{" "}
                <span className="unBold">|</span> US
              </p>
            </div>
            <p id="addy" className="underline">
              1260 S. Milwaukee Rd.<br></br>Suite 500<br></br>Vernon Hills, IL.
              60061
            </p>
          </div>
          <div id="module3Content2">
            <p>HOME</p>
            <p>REWARDS</p>
            <p>CARRYOUT</p>
            <p>MENU</p>
            <p>GIFT CARDS</p>
          </div>
          <div id="module3Content3">
            <div id="number">
              <p className="noSelect">
                TEL <span className="unBold">(Parties 5 or more):</span>
              </p>
              <p>
                <span className="unBold underline">847-247-1973</span>
              </p>
            </div>
            <div id="email">
              <p className="noSelect">EMAIL:</p>
              <p>
                <span className="unBold underline">info@yabado.com</span>
              </p>
            </div>
            <div id="social">
              <p>FOLLOW US ON:</p>
              <div id="socialIcons">
                <img className="socially" src={Twitter}></img>
                <img className="socially" src={Insta}></img>
                <img className="socially" src={Face}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Module3;
