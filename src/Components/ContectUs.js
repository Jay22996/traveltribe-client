import React from "react";
import "../Css/contactus.css";
import Navbar from "../Components/Navbar"

const ContectUs = () => {
  window.scrollTo({top:0,left:0,behavior:"smooth"})

  return (
    <>
    <Navbar/>
    <div className="body">
      <section>
        <div class="section-header">
          <div class="containerr">
            <h2>Contact Us</h2>
            <p>
            Need assistance or have a query? Our team is here to help. Contact us and we'll get back to you as soon as possible.
            
            </p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-home"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Address</h4>
                  <p>
                    4671 Sugar Camp Road,
                    <br /> Owatonna, Minnesota, <br />
                    55060
                  </p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-phone"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Phone</h4>
                  <p>571-457-2321</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-envelope"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Email</h4>
                  <p>ntamerrwael@mfano.ga</p>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <form action="" id="contact-form">
                <h2>Send Message</h2>
                <div class="input-box">
                  <input type="text" required="true" name="" />
                  <span>Full Name</span>
                </div>

                <div class="input-box">
                  <input type="email" required="true" name="" />
                  <span>Email</span>
                </div>

                <div class="input-box">
                  <textarea required="true" name=""></textarea>
                  <span>Type your Message...</span>
                </div>

                <div class="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ContectUs;
