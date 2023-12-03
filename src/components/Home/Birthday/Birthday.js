import React from 'react';
import { Link } from 'react-router-dom';
import PackageBir from '../../Package/PackageBir';
import '../Home.css'
const Birthday = () => {
    const bir = [
        {
          id: "4",
          img:"https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443_960_720.jpg",
          description: "Small arrangement with classic customization.",
          name: "Small Birthday Package",
          price: "80"
        },
        {
          id: "5",
          img:"https://cdn.pixabay.com/photo/2016/10/31/19/04/balloons-1786430_960_720.jpg",
          description: "Medium arrangement with nice customization.",
          name: "Medium Birthday Package",
          price: "150"
        },
        {
          id: "6",
          img:"https://cdn.pixabay.com/photo/2019/11/29/01/58/wedding-4660419_960_720.jpg",
          description: "Large arrangement with many types of customization.",
          name: "Large Birthday Package",
          price: "250"
        }
      ]
    return (
        <div>
            <h3>Birthday packages</h3>
            
            <Link className="service-text" to="/home/bridal">Bridal</Link>
    
      <Link className="service-text" to="/home/annivarsary">Annivarsary</Link>
      {
          bir.map(element => <PackageBir key={element.key} element={element}></PackageBir>)
      }
        </div>
    );
};

export default Birthday;