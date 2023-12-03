import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ani from "./annivarsary1.jpg";
import bir from "./birthday1.jpg";
import bri from "./wedding1.jpg";
// import Annivarsary from "./Annivarsary/Annivarsary";

const Home = () => {

  return (
    <div>
     
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={ani} class="w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Annivarsary photography</h5>
                <p>Always ready to pick best clicks</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={bir} class="w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Birthday photography</h5>
                <p>Always ready to pick best clicks</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={bri} class="w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Bridal photography</h5>
                <p>Always ready to pick best clicks</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />

      <div>
        <h2 className="text-primary">Welcome To Ali Azman's Photography world</h2>
        <img src="https://cdn.pixabay.com/photo/2018/03/20/22/04/camera-3244872_960_720.jpg" className="img-fluid" alt="" />
        <h4>You Can get many photography services with quality clicks</h4>
        <ul>
          <li className="text-success">Birthday photography</li>
          <li className="text-success">Annivarsary Photography</li>
          <li className="text-success">Bridal Photography</li>
        </ul>
      </div>

      <h1>Ali Azman's services</h1>

      <div className=" d-md-flex">
        <div className="col-md-4 service-design mt-3 w-md-25">
          <img className="img-fluid" src={bri} alt="" />
          <Link className="service-text" to="/home/bridal">
            <h2>Bridal</h2>
          </Link>
          <br />
          <small className="text-success">
            Click bridal to see the bridal packages
          </small>
          <br />
          <p>
            This is bridal photography. This is the most popular and bigger
            platform what Ali Azman can handle most. Any type of bridal event
            can handle and manage photography for many concerns.
          </p>
        </div>
        <div className="col-md-4 service-design mt-3 w-md-25">
          <img className="img-fluid" src={bir} alt="" />
          <Link className="service-text" to="/home/birthday">
            <h2>Birthday</h2>
          </Link>
          <br />
          <small className="text-success">
            Click birthday to see the birthday packages
          </small>
          <p>
            This is birthday photography. This is medium type event. Birthday
            events are organized with suitable photography . This package will
            give best shots for birthday.
          </p>
        </div>
        <div className="col-md-4 service-design mt-3 w-md-25">
          <img className="img-fluid" src={ani} alt="" />
          <Link className="service-text" to="/home/annivarsary">
            <h2>Annivarsary</h2>
          </Link>
          <br />
          <small className="text-success">
            Click annivarsary to see the annivarsary packages
          </small>
          <p>
            This is medium type event. Some may can take it as large event
            depend on persons decoration. This package will provide best shots
            for annivarsary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
