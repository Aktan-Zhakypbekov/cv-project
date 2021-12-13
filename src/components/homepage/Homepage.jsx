import React from 'react';
import './Homepage.css';
import { useDispatch, useSelector } from 'react-redux';
import CvList from './CvList';

const Homepage = () => {
  const generalInfo = useSelector((state) => state.generalInfo);
  const educationInfo = useSelector((state) => state.educationInfo);
  const workExperienceInfo = useSelector((state) => state.workExperienceInfo);

  return (
    <div className='homepage-cont'>
      <CvList
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        workExperienceInfo={workExperienceInfo}
      />
    </div>
  );
};

export default Homepage;
