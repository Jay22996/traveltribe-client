import React from 'react'
import "../Css/Footer.css";
import logo from "../Photos/logo.png"
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div class="pg-footer">
    <footer class="footer">
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z" ></path>
      </svg>
      <div class="footer-content">
        <div class="footer-content-column">
          <div class="footer-logo">
            <a class="a footer-logo-link" href="#">
             
            </a>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Get Started</h2>
            <ul id="menu-get-started" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="#">Start</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="#">Documentation</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="#">Installation</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div><img class="logo11" src={logo} alt="" /></div>

        
        <div class="footer-content-column ent">
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title"> Let's Chat</h2>
            <p class="footer-call-to-action-description"> Have a support question?</p>
            <NavLink to="/Contect" style={{ textDecoration: 'none' }}>
               <a class="footer-call-to-action-button button" > Get in Touch </a>
               </NavLink>
            
          </div>
          <div class="footer-call-to-action ">
            <h2 class="footer-call-to-action-title"> You Call Us</h2>
            <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 91738 63366 </a></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
    </>
  )
}

export default Footer
