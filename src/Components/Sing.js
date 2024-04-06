import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from "./Footer";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";


const Sing = () => {
    const navigate = useNavigate();
    window.scrollTo({top:0,left:0,behavior:"smooth"})

    const location = useLocation();
    const useri = location.state.state1.name
    const hotel = location.state.state3.name;
console.log(hotel)
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/admin/show_transport/${hotel}`, {
            pid: hotel,
        })
        .then(function (response) {
            setDestinations(response.data.data);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [hotel]);

    const submit = (el)=>{
        console.log(el)
        axios
        .post(`http://localhost:5000/users/add_place/${useri}`,{
            transport:el
        })
        .then(function (response) {
          console.log(response)
          if (response.data.message === "Places Added by User") {
            
            alert("OUR TEAM CONTACT YOU SHORTY")
            navigate("/");

    
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    
        
      }
  return (
    <>
      <Navbar/>
      <div className="dest__wrap sectionn dddd">
                <h2 className="title__text">
                    CHOICE <span className="--title__text-underline dest-text">TRANSPORT</span>
                </h2>
            </div>

            <div class="projcard-container">
            <div class="projcard projcard-blue">
                  <div class="projcard-innerbox">
                    <img
                      class="projcard-img"
                      src="https://www.freightwaves.com/wp-content/uploads/2017/12/Singaporetrafficshutterstock-1.jpg"
                    />
                    <div class="projcard-textbox">
                      <div class="projcard-title">LOCAL PUBLIC TRANSPORT</div>
                      <div class="projcard-subtitle">COST: {destinations.local}/-Per Day
                        </div>
                      <div class="projcard-bar"></div>
                      <div class="projcard-description">
                      transport of passengers by group travel systems available for use by the general public, typically managed on a schedule, operated on established routes, and that charge a posted fee for each trip.
                      </div>
                  
                        <button onClick={() => submit(destinations.local)} className="jkayasdf">add to cart</button>
                    </div>
                  </div>
                </div>

                <div class="projcard projcard-blue">
                  <div class="projcard-innerbox">
                    <img
                      class="projcard-img"
                      src="https://miro.medium.com/v2/resize:fit:1200/1*tJhQsC6zHb19qndp8rXnkg.jpeg"
                    />
                    <div class="projcard-textbox">
                      <div class="projcard-title">PRIVATE TRANSPORT</div>
                      <div class="projcard-subtitle">COST: {destinations.cab}/-Per Day
                        </div>
                      <div class="projcard-bar"></div>
                      <div class="projcard-description">
                      transport of passengers by group travel systems available for use by the general public, typically managed on a schedule, operated on established routes, and that charge a posted fee for each trip.

                      </div>
                  
                        <button onClick={() => submit(destinations.cab)} className="jkayasdf">add to cart</button>
                    </div>
                  </div>
                </div>
            </div>

    <Footer/>
    </>
  )
}

export default Sing
