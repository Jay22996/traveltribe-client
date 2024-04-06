import React, { useEffect, useState } from "react";
import "../Css/Video.css";
import Video from "../Photos/himachal.mp4";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Videopart = () => {
  const navigate = useNavigate()

  var [data1, setdata1] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/show_destination`)
      .then(function (response) {
        
        setdata1(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const tourr = (el) => {
    console.log(el);
    var id = el
    
  navigate("/Login",{replace:true,state:id})

  };
  return (
    <>
      <div className="main">
        <video class="video" autoPlay muted loop>
          <source src={Video} />
        </video>
      </div>
      <div className="searchpart">
        <div className="searchpartt">
          <h1>Plan your next holiday</h1>
          <p>CHECK OUR BEST PROMOTIONS</p>
          {!data1 ? (
              <h1> </h1>
            ) : (data1.map((el) => {
              return (
                  <><button onClick={() => {tourr(el)}} className="option">{el.name}</button></>
              
              );
            })
          )}
          
          {/* <select
            className="option"
            name
            onChange={(event) => tourr(event.target.value)}
          >
            <option value="" selected>
              Select your Country, City...
            </option>
            {!data1 ? (
              <h1> </h1>
            ) : (
              data1.map((el, index) => {
                return (
                  <option key={index} value={el.name}>
                    {el.name}
                  </option>
                );
              })
            )}
          </select> */}
        </div>
      </div>
    </>
  );
};

export default Videopart;
