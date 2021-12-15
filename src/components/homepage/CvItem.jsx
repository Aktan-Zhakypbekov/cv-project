import React from 'react';
import { useNavigate } from 'react-router-dom';

const CvItem = ({ dataItem }) => {
  const { generalInfo, educationInfo, workExperienceInfo } = dataItem;
  const navigate = useNavigate();

  const navigateToShowCv = () => {
    navigate(`/showCv/${dataItem.id}`, { state: dataItem });
  };

  return (
    <div className='cv-item'>
      <div>{generalInfo.firstName}</div>
      <div>{educationInfo[0].major}</div>
      <div>{workExperienceInfo[0].position}</div>
      <button className='show-btn' onClick={navigateToShowCv}>
        Show
      </button>
    </div>
  );
};

export default CvItem;
