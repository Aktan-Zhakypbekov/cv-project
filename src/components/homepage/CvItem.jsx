import React from 'react';

const CvItem = ({ dataItem }) => {
  return (
    <div className='cv-item'>
      <div>{dataItem.firstName}</div>
    </div>
  );
};

export default CvItem;
