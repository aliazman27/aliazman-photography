import React from 'react';
import { Link } from 'react-router-dom';
import PackageBri from '../../Package/PackageBri';

import '../Home.css'
const Bridal = () => {
    const bri = [
        {
          id: "1",
          img: "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
          description: "Small arrangement with classic customization.",
          name: "Small Bridal Package",
          price: "300"
        },
        {
          id: "2",
          img: "https://cdn.pixabay.com/photo/2017/09/25/09/35/wedding-2784455_960_720.jpg",
          description: "Medium arrangement with nice customization.",
          name: "Medium Bridal Package",
          price: "500"
        },
        {
          id: "3",
          img: "https://cdn.pixabay.com/photo/2016/11/18/18/32/wedding-1836315_960_720.jpg",
          description: "Large arrangement with many types of customization.",
          name: "Large Bridal Package",
          price: "750"
        }
      ]
    return (
        <div>
            <h3>Bridal packages</h3>
            <Link className='service-text' to="/home/birthday">Birthday</Link>
      <Link  className='service-text' to="/home/annivarsary">Annivarsary</Link>
      {
          bri.map(element => <PackageBri key={element.id} element={element}></PackageBri>)
      }
        </div>
    );
};

export default Bridal;