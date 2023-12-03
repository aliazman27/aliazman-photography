import React from "react";
import img from "./pp.jpg";
import './AboutMe.css'
const AboutMe = () => {
  return (
    <div>
      <div class="card">
        <h1>
          Photographer Name: <span className="text-primary">Ali Azman</span>
        </h1>
        <div className=" d-flex justify-content-center">
        <img src={img} class="card-img-top my-pic" alt="..." />
        </div>
       
        <div class="card-body">
          <p class="card-text">Target within 5-6 month:</p>
          <br />
          <h3 className="text-success">
            Being a full stack web developer.I want to be a better self learner.
            Want to improve more and achive more. My main purpose is make my
            parents happy about me and try to do something which will make them
            proud.
          </h3>
          <h4>
            I want to achieve my goal by being a hard working person, more
            patience and dedication. I think hard work is the key to success to
            achive it.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
