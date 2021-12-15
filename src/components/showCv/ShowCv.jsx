import React from 'react';
import './ShowCv.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ShowCv = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { generalInfo, educationInfo, workExperienceInfo } = location.state;

  const navigateToEditCv = () => {
    navigate(`/showCv/${location.state.id}/editCv/${location.state.id}`, {
      state: location.state,
    });
  };

  return (
    <div className='show-cv-page'>
      <div className='cv-page'>
        <div>{generalInfo.firstName}</div>
        <div>{generalInfo.lastName}</div>
        <div>{generalInfo.email}</div>
        <div>{generalInfo.city}</div>
        <div>------------------</div>
        <div>{educationInfo[0].university}</div>
        <div>{educationInfo[0].degree}</div>
        <div>{educationInfo[0].major}</div>
        <div>{educationInfo[0].cityEdu}</div>
        <div>------------------</div>
        <div>{workExperienceInfo[0].position}</div>
        <div>{workExperienceInfo[0].company}</div>
        <div>{workExperienceInfo[0].cityWork}</div>
        <div>{workExperienceInfo[0].cityWork}</div>
        <button onClick={navigateToEditCv}>Edit</button>
      </div>
    </div>
  );
};

export default ShowCv;
