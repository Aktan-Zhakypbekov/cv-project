import React, { useState, useEffect } from 'react';
import './AddCv.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import EducationInfo from './EducationInfo';
import GeneralInfo from './GeneralInfo';
import WorkExperienceInfo from './WorkExperienceInfo';

const AddCv = () => {
  const [educationInfoArr, setEducationInfoArr] = useState(['add']);
  const [workExperienceInfoArr, setWorkExperienceInfoArr] = useState(['add']);

  return (
    <div className='add-cv-form-page'>
      <div className='form-cont'>
        <GeneralInfo />
      </div>
      <div className='form-cont'>
        {educationInfoArr
          ? educationInfoArr.map((elem) => {
              return <EducationInfo />;
            })
          : null}
        <button
          className='add-education-info-form-btn'
          onClick={() => {
            setEducationInfoArr([...educationInfoArr, 'add']);
          }}
        >
          Add education info
        </button>
      </div>
      <div className='form-cont'>
        {workExperienceInfoArr
          ? workExperienceInfoArr.map((elem) => {
              return <WorkExperienceInfo />;
            })
          : null}
        <button
          className='add-work-experience-info-form-btn'
          onClick={() => {
            setWorkExperienceInfoArr([...workExperienceInfoArr, 'add']);
          }}
        >
          Add work experience info
        </button>
      </div>
    </div>
  );
};

export default AddCv;
