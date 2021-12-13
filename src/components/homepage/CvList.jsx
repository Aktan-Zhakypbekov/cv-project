import React from 'react';
import CvItem from './CvItem';

const CvList = ({ generalInfo, educationInfo, workExperienceInfo }) => {
  return (
    <div className='cvList-cont'>
      {generalInfo.map((elem, index, array) => {
        return (
          <CvItem
            generalInfoItem={array[index]}
            educationInfoItem={educationInfo[index]}
            workExperienceInfoItem={workExperienceInfo[index]}
          />
        );
      })}
    </div>
  );
};

export default CvList;
