import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import uniqid from 'uniqid';
import { useDispatch } from 'react-redux';

const GeneralInfo = () => {
  const dispatch = useDispatch();
  const addGeneralInfo = (values) => {
    dispatch({ type: 'ADD_GENERAL_INFO', payload: values });
  };

  const generalInfo = {
    id: uniqid(),
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phoneNumber: '',
    description: '',
  };

  const validate = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'First name should be longer than 2 characters')
      .max(40, 'First name should be less than 40 chracters')
      .required('First name required'),
    lastName: Yup.string()
      .min(2, 'Last name should be longer than 2 characters')
      .max(50, 'Last name should be less than 50 chracters')
      .required('Last name required'),
    email: Yup.string().email('Wrong email format'),
    city: Yup.string()
      .min(2, 'City should be longer than 2 characters')
      .max(50, 'City should be less than 50 chracters')
      .required('City required'),
    phoneNumber: Yup.string().required('Phone number required'),
    description: Yup.string().required('Description required'),
  });

  return (
    <Formik
      initialValues={generalInfo}
      validationSchema={validate}
      onSubmit={(values) => {
        addGeneralInfo(values);
      }}
    >
      {(formik) => {
        return (
          <Form
            className='general-info-form form'
            onSubmit={formik.handleSubmit}
          >
            <h2>General Info Form</h2>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='firstName'>First name</label>
                <Field name='firstName' className='field' type='text' />
                <ErrorMessage
                  name='firstName'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='lastName'>Last name</label>
                <Field name='lastName' className='field' type='text' />
                <ErrorMessage
                  name='lastName'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='email'>Email</label>
                <Field name='email' className='field' type='email' />
                <ErrorMessage
                  name='email'
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
                <label htmlFor='phoneNumber'>Phone number</label>
                <Field name='phoneNumber' className='field' type='text' />
                <ErrorMessage
                  name='phoneNumber'
                  component='div'
                  className='error-msg'
                />
              </div>
            </div>
            <div className='field-cont'>
              <div className='field-cont__inner'>
                <label htmlFor='description'>Description</label>
                <Field name='description' className='field' type='text' />
                <ErrorMessage
                  name='description'
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
//export default GeneralInfo;
