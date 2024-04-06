import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

window.scrollTo({top:0,left:0,behavior:"smooth"})
const Activities = () => {
    const navigate = useNavigate();
    
    const location = useLocation();
    const userId = location.state.state1.name;
    const hotel = location.state.state2.name;
    const des = location.state.state3.name;
    console.log(des)
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.post(`http://localhost:5000/admin/view_activity`, {
            pid: hotel,
        })
        .then(function (response) {
            setDestinations(response.data.activity);

          //  var dess = response.data.activity[0].destination
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [hotel]);

    const [at, setat] = useState([]);
    const placeid = (activity) => {
      console.log(at);
      setat([...at, activity._id]);
    };

    const submit = () => {
        axios
          .post(`http://localhost:5000/users/add_activity/${userId}`, {
            activity: at,
          })
          .then(function (response) {
            
            console.log(response.data);
            if (response.data.message === "Activities Added by User") {
              const state1 = { id: 1, name: userId };
              const state2 = { id: 2, name: hotel };
                const state3 = {id:3, name:des}

              navigate("/Transport", { replace: true, state: { state1, state2,state3 } });
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
            <div className="dest__wrap sectionn dddd">
                <h2 className="title__text">
                    CHOICE <span className="--title__text-underline dest-text">ACTIVITIES</span>
                </h2>
            </div>

            {destinations.map((destination, index) => (
                <div key={index}>
                    {/* <h3>{destination.name}</h3> */}
                    <div className="projcard-container">
                        {destination.activity && destination.activity.map((activity, activityIndex) => (
                            <div className="projcard projcard-blue" key={activityIndex}>
                                <div className="projcard-innerbox">
                                    <img
                                        className="projcard-img"
                                        src={`http://localhost:5000/images/${activity.image}`}
                                        
                                        alt={activity.name}
                                    />
                                    <div className="projcard-textbox">
                                        <div className="projcard-title">{activity.name}</div>
                                        <div className="projcard-subtitle">
                                            PRICE: {activity.price}/-PP
                                        </div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description">
                                            {activity.description}
                                        </div>
                                        <button
                                onClick={() => placeid(activity)}
                                className="jkayasdf"
                              >
                                add to cart
                              </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
 <div className="rahul">
        <button className="jkayasdf jj" onClick={() => submit()}>
          Submit
        </button>
      </div>
            <Footer />
        </>
    );
}

export default Activities;
