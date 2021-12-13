import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import uniqid from 'uniqid';
import { useDispatch } from 'react-redux';

const EducationInfo = () => {
  const dispatch = useDispatch();
  const educationInfo = {
    id: uniqid(),
    university: '',
    degree: '',
    major: '',
    city: '',
    yearFrom: '',
    yearTo: '',
    educationDescription: '',
  };

  const addEducationInfo = (values) => {
    dispatch({ type: 'ADD_EDUCATION_INFO', payload: values });
  };

  const validate = Yup.object().shape({
    university: Yup.string()
      .min(2, 'University should be longer 2 characters')
      .max(40, 'University should be less than 40 characters')
      .required('University required'),
    degree: Yup.string()
      .min(2, 'Degree should be longer 2 characters')
      .max(40, 'Degree should be less than 40 characters')
      .required('Degree required'),
    major: Yup.string()
      .min(2, 'Major should be longer 2 characters')
      .max(40, 'Major should be less than 40 characters')
      .required('Major required'),
    city: Yup.string()
      .min(2, 'City should be longer 2 characters')
      .max(50, 'City should be less than 50 characters')
      .required('City required'),
    yearFrom: Yup.string().required('Year from required'),
    yearTo: Yup.string().required('Year to required'),
    educationDescription: Yup.string().required(
      'Education description required'
    ),
  });

  return (
    <Formik
      validationSchema={validate}
      initialValues={educationInfo}
      onSubmit={(values) => addEducationInfo(values)}
    >
      {(formik) => {
        return (
          <Form className='education-info form' onSubmit={formik.handleSubmit}>
            <h2>Education Info Form</h2>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='university'>University</label>
                <Field name='university' className='field' type='text' />
                <ErrorMessage
                  name='university'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='degree'>Degree</label>
                <Field name='degree' className='field' type='text' />
                <ErrorMessage
                  name='degree'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='major'>Major</label>
                <Field name='major' className='field' type='text' />
                <ErrorMessage
                  name='major'
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
                <label htmlFor='educationDescription'>
                  Education description
                </label>
                <Field
                  name='educationDescription'
                  className='field'
                  type='text'
                />
                <ErrorMessage
                  name='educationDescription'
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

export default EducationInfo;
