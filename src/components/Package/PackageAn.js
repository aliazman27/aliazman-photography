import React from 'react';
import { Link } from 'react-router-dom';
import Annivarsary from '../Home/Annivarsary/Annivarsary';

const PackageAn = ({element}) => {
    const {name,img, description, price} = element;
    return (
        <div className=' d-flex justify-content-center mt-4 mb-4'>
          <div class="card w-25">
  {/* <img src="..." class="card-img-top" alt="..."> */}
  <div class="card-body">
    <img className='img-fluid' src={img} alt="" />
    <h3 class="card-title text-primary">{name}</h3>
    <p class="card-text">{description}</p>
    <h4>Price: ${price}</h4>
    <Link className="header-text" to="/checkout">
            Chek Out
          </Link>
  </div>
</div>
        </div>
    );
};

export default PackageAn;