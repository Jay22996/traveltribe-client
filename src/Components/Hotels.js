import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

window.scrollTo({top:0,left:0,behavior:"smooth"})
const Hotels = () => {
  
  
  const navigate = useNavigate();

  const id = useLocation();
  var did = id.state.state3.name
  var userid = id.state.state1.name;
  var hotel = id.state.state2.name;
console.log(did)
  const [hotell, sethotell] = useState([]);

  useEffect(() => {
    axios
      .post(`http://localhost:5000/admin/view_hotel`, {
        pid: hotel,
      })
      .then(function (response) {
        sethotell(response.data.hotels);
        console.log(response.data.hotels);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [""]);

  const [addhot, setaddhot] = useState([]);
  const placeid = (hotel) => {
    console.log(addhot);
    setaddhot([...addhot, hotel._id]);
  };

  const submit = () => {
    axios
      .post(`http://localhost:5000/users/add_hotel/${userid}`, {
        hotels: addhot,
      })
      .then(function (response) {
        console.log(response.data.message);
        // console.log(response.data.place);
        if (response.data.message === "Hotels Added by User") {
          const state1 = { id: 1, name: userid };
          const state2 = { id: 2, name: hotel };
          const state3 = { id: 3, name: did };

          navigate("/Activitis", { replace: true, state: { state1, state2,state3 } });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  return (
    <>
      <Navbar />

      <div class="dest__wrap sectionn dddd">
        <h2 class="title__text">
          CHOICE <span class="--title__text-underline dest-text">HOTEL</span>
        </h2>
      </div>

      <div class="projcard-container">
        {!hotell ? (
          <h1> </h1>
        ) : (
          hotell.map((item, index) => {
            return (
              <>
                <div class="projcard projcard-blue" key={index}>
                  {item.hotel && (
                    <div>
                      <h3> </h3>
                      {item.hotel.map((hotel, index) => (
                        <div key={index}>
                          <div class="projcard-innerbox">
                            <img
                              class="projcard-img"
                              src={`http://localhost:5000/images/${hotel.image[0]}`}
                            />
                            <div class="projcard-textbox">
                              <div class="projcard-title">{hotel.name}</div>
                              <div class="projcard-subtitle">
                                PRICE: {hotel.price} DAYS
                              </div>
                              <div class="projcard-bar"></div>
                              <div class="projcard-description">
                                {hotel.description}
                              </div>

                              <button
                                onClick={() => placeid(hotel)}
                                className="jkayasdf"
                              >
                                add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            );
          })
        )}
      </div>
      <div className="rahul">
        <button className="jkayasdf jj" onClick={() => submit()}>
          Submit
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Hotels;
