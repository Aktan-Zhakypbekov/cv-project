import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-cont'>
      <div className='nav-title'>CV project</div>
      <Link to='/'>
        <div className='nav-link'>Homepage</div>
      </Link>
      <Link to='/addCv'>
        <div className='nav-link'>Add CV</div>
      </Link>
    </div>
  );
};

export default Nav;
