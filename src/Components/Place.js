import React from "react";
import Navbar from "./Navbar";
import "../Css/Place.css";

const Place = () => {
  return (
    <>
      <Navbar />
      <div className="div5">
        <div class="dest__wrap sectionn">
          <h2 class="title__text">
            Choice <span class="--title__text-underline dest-text">Places</span>
          </h2>
        </div>
      </div>
      <div class="container">
        <main class="grid">
          <article>
            <a href="#popup1">
              <img
                src="https://picsum.photos/600/400?image=1083"
                alt="Sample photo"
              />
            </a>

            <div class="text">
              <h3>Dream Vacation for Couples</h3>
              <p>
                Enjoy sandy beaches and yacht sailing with your loved one for
                unique prices.
              </p>
              <button
                class="btnss"
              >
                Add To Cart
              </button>
            </div>
          </article>

          <article>
            <img
              src="https://picsum.photos/600/400?image=103"
              alt="Sample photo"
            />
            <div class="text">
              <h3>Dream Vacation for Couples</h3>
              <p>
                Enjoy sandy beaches and yacht sailing with your loved one for
                unique prices.
              </p>
              <button
                class="btnss"
              >
                Add To Cart
              </button>
            </div>
          </article>

          <article>
            <img
              src="https://picsum.photos/600/400?image=1084"
              alt="Sample photo"
            />
            <div class="text">
              <h3>Dream Vacation for Couples</h3>
              <p>
                Enjoy sandy beaches and yacht sailing with your loved one for
                unique prices.
              </p>
              <button
                class="btnss"
              >
                Add To Cart
              </button>
            </div>
          </article>

          <article>
            <img
              src="https://picsum.photos/600/400?image=1033"
              alt="Sample photo"
            />
            <div class="text">
              <h3>Dream Vacation for Couples</h3>
              <p>
                Enjoy sandy beaches and yacht sailing with your loved one for
                unique prices.
              </p>
              <a
                href="https://codepen.io/collection/DyENLJ/"
                class="btn btn-primary btn-block"
              >
                Dicover More
              </a>
            </div>
          </article>

          <article>
            <img
              src="https://picsum.photos/600/400?image=1043"
              alt="Sample photo"
            />
            <div class="text">
              <h3>Dream Vacation for Couples</h3>
              <p>
                Enjoy sandy beaches and yacht sailing with your loved one for
                unique prices.
              </p>
              <a
                href="https://codepen.io/collection/DyENLJ/"
                class="btn btn-primary btn-block"
              >
                Dicover More
              </a>
            </div>
          </article>

          <article>
            <img
              src="https://picsum.photos/600/400?image=1045"
              alt="Sample photo"
            />
            <div class="text">
              <h3>Dream Vacation for Couples</h3>
              <p>
                Enjoy sandy beaches and yacht sailing with your loved one for
                unique prices.
              </p>
             
              <button
                href="https://codepen.io/collection/DyENLJ/"
                class="btn btn-primary btn-block"
              >
                Dicover More
              </button>
            </div>
          </article>
        </main>
      </div>
      <button >SUBMIT</button>

      <div id="popup1" class="overlay">
        <div class="popup">
          <div className="container ">
            <div className="row">
              <div className="col-xs-12 col-sm-4 lll">
                <div className="   rounded box">
                  <img
                    className="immp"
                    src="https://i.pinimg.com/564x/8b/84/49/8b8449cf9de2e1880cd774be3157960b.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 lll">
                <div className="   rounded box">
                  <img
                    className="immp"
                    src="https://i.pinimg.com/564x/8b/84/49/8b8449cf9de2e1880cd774be3157960b.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 lll">
                <div className="   rounded box">
                  <img
                    className="immp"
                    src="https://i.pinimg.com/564x/8b/84/49/8b8449cf9de2e1880cd774be3157960b.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <a class="close" href="#">
            &times;
          </a>
        </div>
      </div>
    </>
  );
};

export default Place;
