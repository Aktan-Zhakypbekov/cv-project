import React, { useEffect } from 'react';
import './Homepage.css';
import { useDispatch, useSelector } from 'react-redux';
import CvList from './CvList';

const Homepage = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dataReducer);

  return (
    <div className='homepage-cont'>
      <CvList data={data} />
    </div>
  );
};

export default Homepage;
