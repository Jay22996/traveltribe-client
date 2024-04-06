import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import "../Css/Packages.css";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Packages = () => {
  window.scrollTo({top:0,left:0,behavior:"smooth"})

  const navigate = useNavigate()

  const [tour1,settour1] = useState("")
  useEffect(() => {
    axios.get('http://localhost:5000/admin/showall_trip')
    .then(function (response) {
      settour1(response.data.data.slice(0,3))
      console.log(response.data.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }, []);

  const [tour11,settour11] = useState("")
  useEffect(() => {
    axios.get('http://localhost:5000/admin/showall_trip')
    .then(function (response) {
      settour11(response.data.data.slice(3,6))
      console.log(response.data.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }, []);

  const vtour = (el) =>{
    var id = el._id
    navigate("/Traveldetail",{replace:true,state:id})
      
  }
  return (
    <>
      <Navbar/>
     
	  <div className="body">
      <section>

        <div class="container">
          <div class="row">
            <div class="contact-info">
			<h1 className="kk">Planing Trip To Anywhere in The World?</h1>
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
                  <input type="email" required="true" name="" />
                  <span>Place</span>
                </div>

				<div class="input-box">
                  <input type="date" required="true" name="" />
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

    <div class="promotion__container sectionn">
        <p class="sub-title__text">PROMOTIONS</p>
        <h2 class="title__text">
          OUR{" "}
          <span class="--title__text-underline promotion-text">POPULER PACKAGES</span>
        </h2>


        <article class="promotion__wrap">
        {!tour1 ? (
            <h1> </h1>
          ) :(
            tour1.map((el)=>{
              return(
                <>
                          <div class="promotion__item">
            <div class="promotion__item-img " style={{
    background: 'no-repeat center/cover',
    backgroundImage: `url(${el.photos})`}} >
              <div class="promotion__item-sticker-1">
                <img
                  class="sticker__img"
                  src="https://leloc90.github.io/loveTravel/assets/images/arch.png"
                  alt=""
                />
              </div>
            </div>
            <div class="promotion__item-info">
              <div class="promotion__item-head">
                <h5>{el.destination}</h5>
                <p>
                  <i class="bx bx-map"></i>{el.duration}
                </p>
              </div>
              <div class="promotion__item-thema">
                <div class="promotion__item-thema-text">
                  <p>PRICE</p>
                </div>
                <div class="promotion__item-thema-price">
                  <span>{el.price} ₹</span>
                </div>
              </div>
              <div class="promotion__item-desc">
                <p>
                  
                  {el.tour_name}
                </p>
              </div>


              <button  onClick={() => {
                            vtour(el);
                          }} class="pri-btn promotion-btn-1">DETAILS</button>
                          
               


              
            </div>
          </div>
                </>
              )
            })
          )
          }
        </article>
        
        <article class="promotion__wrap">
        {!tour11 ? (
            <h1> </h1>
          ) :(
            tour11.map((el)=>{
              return(
                <>
                          <div class="promotion__item">
            <div class="promotion__item-img " style={{
    background: 'no-repeat center/cover',
    backgroundImage: `url(${el.photos})`}} >
              <div class="promotion__item-sticker-1">
                <img
                  class="sticker__img"
                  src="https://leloc90.github.io/loveTravel/assets/images/arch.png"
                  alt=""
                />
              </div>
            </div>
            <div class="promotion__item-info">
              <div class="promotion__item-head">
                <h5>{el.destination}</h5>
                <p>
                  <i class="bx bx-map"></i>{el.duration}
                </p>
              </div>
              <div class="promotion__item-thema">
                <div class="promotion__item-thema-text">
                  <p>PRICE</p>
                </div>
                <div class="promotion__item-thema-price">
                  <span>{el.price} ₹</span>
                </div>
              </div>
              <div class="promotion__item-desc">
                <p>
                  
                  {el.tour_name}
                </p>
              </div>


              <button  onClick={() => {
                            vtour(el);
                          }} class="pri-btn promotion-btn-1">DETAILS</button>
            </div>
          </div>
                </>
              )
            })
          )
          }
        </article>
        
      </div>

      

      <Footer/>
    </>
  );
};

export default Packages;
