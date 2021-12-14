import React from 'react';
import CvItem from './CvItem';
import uniqid from 'uniqid';

const CvList = ({ data }) => {
  return (
    <div className='cvList-cont'>
      {data.map((elem) => {
        return <CvItem key={uniqid()} dataItem={elem} />;
      })}
    </div>
  );
};

export default CvList;
