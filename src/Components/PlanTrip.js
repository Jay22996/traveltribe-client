import React, { useEffect, useState } from "react";
import "../Css/trip.css";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

window.scrollTo({top:0,left:0,behavior:"smooth"})
const PlanTrip = () => {

  const navigate = useNavigate()

  const id = useLocation();
  var idd = id.state;
  var d_id = idd.state2.name._id;
  var userid = idd.state1.name
  console.log("userid",userid);


  const [place, setplace] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/view_place/${d_id}`)
      .then(function (response) {
        setplace(response.data.place);
        // console.log(response.data.place);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [""]);

  const [addplace,setaddplace] = useState([])
  const placeid = (el) => {
    
    console.log(el._id)
    setaddplace([...addplace,el._id]);
  }
  const submit = ()=>{

    axios
    .post(`http://localhost:5000/users/add_place/${userid}`,{
      place:addplace
    })
    .then(function (response) {
      console.log(response.data.message)
      setplace(response.data.place);
      // console.log(response.data.place);
      if (response.data.message === "Places Added by User") {
        const state1 = { id: 1, name: userid };
        const state2 = { id: 2, name: addplace };
        const state3 = {id:3 , name:d_id}
        navigate("/Hotel", { replace: true, state:{state1,state2,state3} });

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
      <Navbar />

      <div class="dest__wrap sectionn dddd">
        <h2 class="title__text">
          CHOICE{" "}
          <span class="--title__text-underline dest-text">PLACE</span>
        </h2>
      </div>
      <div class="projcard-container">
        {!place ? (
          <h1> </h1>
        ) : (
          place.map((el) => {
            return (
              <>
                <div class="projcard projcard-blue">
                  <div class="projcard-innerbox">
                    <img
                      class="projcard-img"
                      src={`http://localhost:5000/images/${el.image[0]}`}
                    />
                    <div class="projcard-textbox">
                      <div class="projcard-title">{el.name}</div>
                      <div class="projcard-subtitle">DURATION: {el.days} DAYS</div>
                      <div class="projcard-bar"></div>
                      <div class="projcard-description">
                        {el.description}
                      </div>
                  
                        <button onClick={() => placeid(el)} className="jkayasdf">add to cart</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      <div className="rahul">
        <button className="jkayasdf jj" onClick={() => submit()}>Submit</button>
      </div>
      

      <Footer />
    </>
  );
};

export default PlanTrip;
