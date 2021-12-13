import React from 'react';

const CvItem = ({
  generalInfoItem,
  educationInfoItem,
  workExperienceInfoItem,
}) => {
  return (
    <div className='cv-item'>
      <div>{generalInfoItem.firstName}</div>
      <div>{educationInfoItem.major}</div>
      <div>{workExperienceInfoItem.position}</div>
    </div>
  );
};

export default CvItem;
