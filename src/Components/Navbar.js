import React from 'react';
import './css/Nav.css';
import img from '../Assets/Dweya-removebg-preview.png';
import {IoMdLogIn} from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import {GrBasket} from 'react-icons/gr';

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <img src={img} alt="404" style={{ width: '210px', height: '180px' ,bottom:'99%',marginTop:'-55px',marginLeft:'-20px' }} />
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
          <RiAccountPinCircleLine style={{height:"40px",width:"40px"}} title="Account" className="icon-link"/>
          
        </li>
        <li>
         <GrBasket style={{height:"40px",width:"50px"}} title="Basket" className="icon-link"/>
          
        </li>
        <li>
          <div className="icon-link">
            <IoMdLogIn style={{height:"40px",width:"40px"}} />
            <span>Log in</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
