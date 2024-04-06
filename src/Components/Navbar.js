import "../Css/Navbar.css";
import logo from "../Photos/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const ToggleMenu = () => {
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    // header.div.div.ul.li.div.class.toggle("ll", window.scrollY > 0);
  });
  return (
    <>
      <header>
        <div class="logo">
          <img class="logo1" src={logo} alt="" />
        </div>
        <nav class="navigation">
          <ul>
            <li>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <div class="a dd">HOME</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Packages" style={{ textDecoration: "none" }}>
                <div class="a dd">PACKAGES</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" style={{ textDecoration: "none" }}>
                <div class="a dd">ABOUT US</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contect" style={{ textDecoration: "none" }}>
                <div class="a dd">CONTACT</div>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          class="menuToggle"
          onClick={() => {
            ToggleMenu();
          }}
        ></div>
      </header>
      {/* <video class="video" autoPlay muted loop>
        <source src={Video} />
      </video> */}
    </>
  );
};

export default Navbar;
