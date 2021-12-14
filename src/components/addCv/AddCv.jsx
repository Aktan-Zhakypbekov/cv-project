import React, { useState, useEffect } from 'react';
import './AddCv.css';
import uniqid from 'uniqid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddCv = () => {
  const [educationInfoCount, setEducationInfoCount] = useState(['add']);
  const [workExperienceInfoCount, setWorkExperienceInfoCount] = useState([
    'add',
  ]);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phoneNumber: '',
    university: [],
    degree: [],
    major: [],
    cityEdu: [],
    yearFromEdu: [],
    yearToEdu: [],
    position: [],
    company: [],
    cityWork: [],
    yearFromWork: [],
    yearToWork: [],
  });
  const onChangeGeneral = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onChangeAux = (e) => {
    setData({
      ...data,
      [e.target.name]: [...data[e.target.name], e.target.value],
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='add-cv-form-page'>
      <form
        className='add-cv-form'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'ADD_DATA', payload: data });
          navigate('/');
        }}
      >
        <div className='lolo'>
          <div className='form-block'>
            <div className='input-cont'>
              <label htmlFor='firstName'>First name</label>
              <input
                type='text'
                name='firstName'
                className='input'
                onChange={(e) => onChangeGeneral(e)}
              />
            </div>
            <div className='input-cont'>
              <label htmlFor='lastName'>Last name</label>
              <input
                type='text'
                name='lastName'
                className='input'
                onChange={(e) => onChangeGeneral(e)}
              />
            </div>
            <div className='input-cont'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                className='input'
                onChange={(e) => onChangeGeneral(e)}
              />
            </div>
            <div className='input-cont'>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                name='city'
                className='input'
                onChange={(e) => onChangeGeneral(e)}
              />
            </div>
            <div className='input-cont'>
              <label htmlFor='phoneNumber'>Phone number</label>
              <input
                type='text'
                name='phoneNumber'
                className='input'
                onChange={(e) => onChangeGeneral(e)}
              />
            </div>
          </div>
        </div>
        <div className='lolo'>
          {educationInfoCount.map((elem) => {
            return (
              <div className='form-block'>
                <div className='input-cont'>
                  <label htmlFor='university'>University</label>
                  <input
                    type='text'
                    name='university'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
                <div className='input-cont'>
                  <label htmlFor='degree'>Degree</label>
                  <input
                    type='text'
                    name='degree'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
                <div className='input-cont'>
                  <label htmlFor='major'>major</label>
                  <input
                    type='text'
                    name='major'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
                <div className='input-cont'>
                  <label htmlFor='cityEdu'>City</label>
                  <input
                    type='text'
                    name='cityEdu'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
                <div className='input-cont'>
                  <label htmlFor='yearFromEdu'>Year from</label>
                  <input
                    type='text'
                    name='yearFromEdu'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
                <div className='input-cont'>
                  <label htmlFor='yearToEdu'>Year to</label>
                  <input
                    type='text'
                    name='yearToEdu'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
              </div>
            );
          })}
          <button
            onClick={(e) => {
              e.preventDefault();
              setEducationInfoCount([...educationInfoCount, 'add']);
            }}
          >
            Add education info
          </button>
        </div>
        <div className='lolo'>
          {workExperienceInfoCount.map((elem) => {
            return (
              <div className='form-block'>
                <div className='input-cont'>
                  <label htmlFor='position'>Position</label>
                  <input
                    type='text'
                    name='position'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
                <div className='input-cont'>
                  <label htmlFor='company'>Company</label>
                  <input
                    type='text'
                    name='company'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
                <div className='input-cont'>
                  <label htmlFor='cityWork'>City</label>
                  <input
                    type='text'
                    name='cityWork'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
                <div className='input-cont'>
                  <label htmlFor='yearFromWork'>Year from</label>
                  <input
                    type='text'
                    name='yearFromWork'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
                <div className='input-cont'>
                  <label htmlFor='yearToWork'>Year to</label>
                  <input
                    type='text'
                    name='yearToWork'
                    className='input'
                    onChange={(e) => onChangeAux(e)}
                  />
                </div>
              </div>
            );
          })}
          <button
            onClick={(e) => {
              e.preventDefault();
              setWorkExperienceInfoCount([...workExperienceInfoCount, 'add']);
            }}
          >
            Add work experience info
          </button>
        </div>
        <button className='submit-form-btn'>Submit form</button>
      </form>
    </div>
  );
};
export default AddCv;
