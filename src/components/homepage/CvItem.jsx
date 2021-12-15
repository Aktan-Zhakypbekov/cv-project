import React from 'react';

const CvItem = ({ dataItem }) => {
  return (
    <div className='cv-item'>
      <div>{dataItem.generalInfo.firstName}</div>
    </div>
  );
};

export default CvItem;
