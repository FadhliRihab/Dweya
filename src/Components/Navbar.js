import React from 'react';
import './css/Nav.css';
import img from '../Assets/Dweya-removebg-preview.png';

import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="nav">
    
      <ul>
        <li>
        <img src={img} alt="404" style={{ width: '210px', height: '180px' ,bottom:'99%' }} />
        </li>
        <div className="search-container">
          <li>
            <input type="text" placeholder="search" className="search-input" />
            <FiSearch className='searchi'/>
          </li>
        </div>
        <li>
         
        </li>

        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a href="">Basket</a>
        </li>
        <li>
        <a href=''>Log in</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
