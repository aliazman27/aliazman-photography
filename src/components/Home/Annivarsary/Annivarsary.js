import React from "react";
import { Link } from "react-router-dom";
import PackageAn from "../../Package/PackageAn";

// import Package from "../../Package/PackageAn";
// import Package from "../../Package/Package";
import "../Home.css";
const Annivarsary = () => {
  const anv = [
    {
      id: "7",
      img:"https://cdn.pixabay.com/photo/2016/07/23/03/56/love-1536226_960_720.jpg",
      description: "Small arrangement with classic customization.",
      name: "Small Annivarsary Package",
      price: "100"
    },
    {
      id: "8",
      img:"https://cdn.pixabay.com/photo/2017/03/02/02/16/place-setting-2110245_960_720.jpg",
      description: "Medium arrangement with nice customization.",
      name: "Medium Annivarsary Package",
      price: "200"
    },
    {
      id: "9",
      img:"https://cdn.pixabay.com/photo/2015/11/30/23/32/champagner-1071356_960_720.jpg",
      description: "Large arrangement with many types of customization.",
      name: "Large Annivarsary Package",
      price: "350"
    }
  ]
  return (
    <div>
      <h3>Annivarsary packages</h3>
      <Link className="service-text" to="/home/bridal">
        Bridal
      </Link>
      <Link className="service-text" to="/home/birthday">
        Birthday
      </Link>
      <div>
      {
          
            anv.map(element => <PackageAn key={element.id} element={element}></PackageAn>)
          
      }
     
      </div>
    </div>
  );
};

export default Annivarsary;
