import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Css/Tourdetail.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Tourdetail = () => {
  window.scrollTo({top:0,left:0,behavior:"smooth"})

  const id = useLocation();
  var idd = id.state;
  console.log(idd);
  const [data1, setdata1] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/show_trip/${idd}`)
      .then(function (response) {
        setdata1(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [idd]);
  let dayNumber = 1;
  return (
    <>
      <Navbar />

      <div className="img11">
        <img className="shree" src={data1.photos} alt="" />
        <div className="imgtxt">
          <div class="dest__wrap sectionn fff">
            <div class="feature-img">
              <div class="price">
                <p>₹{data1.price}</p>
              </div>
            </div>
            <div class="feature-details">
              <h4>{data1.destination}</h4>
              <p>
                {data1.tour_name}
              </p>
              <div>
                <span>
                  <i class="fas fa-sun"></i>{data1.duration}
                </span>
              </div>
              Age Group : {data1.age_group} <br />
              Batch Size : {data1.batch_size} <br />
              Tour Type : {data1.tour_type}

            </div>
          </div>
        </div>
      </div>
      <div class="container aa">
        {Object.keys(data1).map((key) => {
          if (key.startsWith("day")) {
            const day = data1[key];
            const dayIndex = dayNumber++;
            return (
              <>
                <ul class="timeline">
                  <li>
                    <div class="timeline-time">
                      <span class="time">Day {dayIndex}</span>
                    </div>
                    <div class="timeline-icon">
                      <a href="javascript:;">&nbsp;</a>
                    </div>
                    <div class="timeline-body">
                      <div class="timeline-header"></div>
                      <div class="timeline-content">
                        <h4 class="template-title">
                          <i class="fa fa-map-marker text-danger fa-fw"></i>
                          {day.mainplace}
                        </h4>

                        <p>{day.description}</p>
                        <h6 class="template-title">
                          <i class="fa fa-map-marker text-danger fa-fw"></i>
                          {day.sub_place}
                        </h6>
                        <p class="m-t-20">
                          <img src={day.image} alt="" />
                        </p>
                        <h5 class="template-title">
                          Other Benifits <br />
                          <span className="jayyy">
                            {`${day.other_benifits}`}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </li>
                </ul>
              </>
              // <div key={day._id}>
              //   <h3>{day.mainplace}</h3>
              //   <p><strong>Sub Places:</strong> {day.sub_place.join(', ')}</p>
              //   <p><strong>Description:</strong> {day.description}</p>
              //   <img src={day.image} alt={day.mainplace} style={{ maxWidth: '400px' }} />
              //   {day.other_benifits[0]}
              //   {day.other_benifits[1]}
              // </div>
            );
          }
          return null;
        })}
      </div>

      <Footer />
    </>
  );
};

export default Tourdetail;
