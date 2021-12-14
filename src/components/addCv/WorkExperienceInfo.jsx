import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

const WorkExperienceInfo = () => {
  const dispatch = useDispatch();
  const workExperienceInfo = {
    id: uniqid(),
    position: '',
    company: '',
    city: '',
    yearFrom: '',
    yearTo: '',
    workDescription: '',
  };

  const addWorkExperienceInfo = (values) => {
    dispatch({ type: 'ADD_WORK_EXPERIENCE_INFO', payload: values });
  };

  const validate = Yup.object().shape({
    position: Yup.string()
      .min(2, 'Position should be longer 2 characters')
      .max(40, 'Position should be less than 40 characters')
      .required('Position required'),
    company: Yup.string()
      .min(2, 'Company should be longer 2 characters')
      .max(40, 'Company should be less than 40 characters')
      .required('Company required'),
    city: Yup.string()
      .min(2, 'City should be longer 2 characters')
      .max(50, 'City should be less than 50 characters')
      .required('City required'),
    yearFrom: Yup.string().required('Year from required'),
    yearTo: Yup.string().required('Year to required'),
    workDescription: Yup.string().required('Work description required'),
  });

  return (
    <Formik
      initialValues={workExperienceInfo}
      validationSchema={validate}
      onSubmit={(values) => {
        addWorkExperienceInfo(values);
      }}
    >
      {(formik) => {
        return (
          <Form
            className='work-experience-info form'
            onSubmit={formik.handleSubmit}
          >
            <h2>Work Experience Info Form</h2>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='position'>Position</label>
                <Field name='position' className='field' type='text' />
                <ErrorMessage
                  name='position'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='company'>Company</label>
                <Field name='company' className='field' type='text' />
                <ErrorMessage
                  name='company'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='city'>City</label>
                <Field name='city' className='field' type='text' />
                <ErrorMessage
                  name='city'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='yearFrom'>From</label>
                <Field name='yearFrom' className='field' type='text' />
                <ErrorMessage
                  name='yearFrom'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='yearTo'>To</label>
                <Field name='yearTo' className='field' type='text' />
                <ErrorMessage
                  name='yearTo'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='workDescription'>Work description</label>
                <Field name='workDescription' className='field' type='text' />
                <ErrorMessage
                  name='workDescription'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <button className='submit-btn' type='submit'>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

//export default WorkExperienceInfo;
