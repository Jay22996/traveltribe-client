import React, { useEffect, useState } from "react";
import "../Css/Tourcard.css";
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";

const Tourcard = () => {
  
  const navigate = useNavigate()
  const [data,setdata] = useState("")
  useEffect(() => {
  axios.get('http://localhost:5000/admin/show_destination')
  .then(function (response) {
    setdata(response.data.data.slice(0,3))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}, []);

const [tour,settour] = useState("")
useEffect(() => {
  axios.get('http://localhost:5000/admin/show_trip/65f2e0d5d349d80cecadec0f')
  .then(function (response) {
    settour(response.data.data)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}, []);


  const [tour1,settour1] = useState([1,2,3,4,5,6])
useEffect(() => {
  axios.get('http://localhost:5000/admin/showall_trip')
  .then(function (response) {
    settour1(response.data.data.slice(3,6))
  
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
      <div class="dest__wrap sectionn">
        <p class="sub-title__text">OUR PROPOSALS</p>
        <h2 class="title__text">
          OUR{" "}
          <span class="--title__text-underline dest-text">DESTINATIONS</span>
        </h2>
      </div>

      <div className="container ">
        <div className="row">

          {!data ? (
            <h1> </h1>
          ) :(
            data.map((el) =>{
              return(
                <>
                   <div className="col-xs-12 col-sm-4">
            <div className="hover hover-1 text-white rounded box">
              <img
                className="immp"
                src={`http://localhost:5000/images/${el.image[2]}`}
                alt=""
              />
              <div className="hover-overlay"></div>
              <div className="hover-1-content px-4 fontt">
                <h5 className="hover-1-title text-uppercase  mb-0">
                  {el.name}
                </h5>
                <p className="hover-1-description font-weight-light mb-0">
                DIFICULTY({el.dificulty})
                </p>
              </div>
            </div>
          </div>
                </>
              )
            }))
          }

        </div>
      </div>

      <article class="next-holiday">
        <div class="next-holiday__text-wrap">
          <p class="next-holiday__text-1">Your</p>
          <p class="next-holiday__text-2">
            Next{" "}
            <span class="--title__text-underline holiday-text">Holiday</span>
          </p>
        </div>
        <div class="next-holiday__btn-wrap">
          <button class="next-holiday__btn">VIEW ALL PACKAGES</button>
        </div>
      </article>

      <section class="tours__container">

                <article class="tours__beaches">
          <div class="beaches__info">
            <p class="sub-title__text">{tour.destination}</p>
            <h2 class="title__text">
              {tour.tour_type}
            </h2>
            <p class="beaches__desc">
            The Andaman and Nicobar Islands consist of 572 islands, although only around 36 are inhabited. These islands are characterized by their white sandy beaches, crystal-clear turquoise waters, and dense tropical forests. The terrain varies from flat coastal areas to hilly interiors.
            </p>
            <p class="beaches__desc">
            The history of the Andaman and Nicobar Islands is marked by their use as a colonial penal colony by the British. The infamous Cellular Jail in Port Blair, the capital city, stands as a stark reminder of this dark period in history.
            </p>
            <div class="beaches__price">
              <span class="beaches__old-price">31500</span>
              <span class="beaches__new-price">{tour.price}/-</span>
              <span class="beaches__price-person"> FOR PERSON</span>
            </div>
          </div>

          <div class="beaches__wrap">
            <div class="beaches__bullets"></div>
            <div class="beaches__img-container">
              <div
                id="beaches__img-1"
                class="beaches__img-main beaches__img-1"
              ></div>
            </div>
            <div class="beaches__wrap-time">
              <div class="time__block">
                <span class="time__number">6</span>
                <span class="time__text">DAYS</span>
              </div>
              <div class="time__block">
                <span class="time__number">12</span>
                <span class="time__text">HOURS</span>
              </div>
              <div class="time__block">
                <span class="time__number">00</span>
                <span class="time__text">MINUTES</span>
              </div>
            </div>
          </div>
        </article>

      
        

        <article class="tours__list">
          <div class="tours__item">
            <img
              src="https://leloc90.github.io/loveTravel/assets/images/icon-around.png"
              alt=""
            />
            <div class="tours__info">
              <h5>World Tour</h5>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin
                rhonc us urna dictum.
              </p>
            </div>
          </div>

          <div class="tours__item">
            <img
              src="https://leloc90.github.io/loveTravel/assets/images/icon-boat.png"
              alt=""
            />
            <div class="tours__info">
              <h5>Cruises</h5>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin
                rhonc us urna dictum.
              </p>
            </div>
          </div>

          <div class="tours__item">
            <img
              src="https://leloc90.github.io/loveTravel/assets/images/icon-landmark.png"
              alt=""
            />
            <div class="tours__info">
              <h5>Best Tours</h5>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin
                rhonc us urna dictum.
              </p>
            </div>
          </div>
        </article>
      </section>

      <secion class="discover__container">
        <div class="discover__item discover__img-1">
          <p>01. LAST MINUTE</p>
          <h4>Discover Cities</h4>
          {/* <a href="" class="discover__btn-1">
            DETAILS
          </a> */}
        </div>

        <div class="discover__item discover__img-2">
          <p>02. PROMOTIONS</p>
          <h4>Discover Nature</h4>
          {/* <a class="discover__btn-2" >DETAILS</a> */}
        </div>
      </secion>

      <div class="promotion__container sectionn">
        <p class="sub-title__text">PROMOTIONS</p>
        <h2 class="title__text">
          OUR{" "}
          <span class="--title__text-underline promotion-text">PACKAGES</span>
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
        <NavLink to="/Packages" style={{ textDecoration: 'none' }}>
          <button class="pri-btn promotion-btn-1 hhh">VIEW MORE PACKAGES</button>
               </NavLink>
      </div>
    </>
  );
};

export default Tourcard;
