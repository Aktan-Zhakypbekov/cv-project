import React, { useState, useEffect } from 'react';
import './EditCv.css';
import uniqid from 'uniqid';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const EditCv = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const [data, setData] = useState(location.state);
  const { generalInfo, educationInfo, workExperienceInfo } = data;

  const onChangeGeneral = (e) => {
    setData((prev) => {
      return {
        ...prev,
        generalInfo: {
          ...prev.generalInfo,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  const onChangeEdu = (e, id) => {
    setData((prev) => {
      let newInfo = prev.educationInfo.map((elem) => {
        if (elem.id === id) {
          return { ...elem, [e.target.name]: e.target.value };
        }
        return elem;
      });

      return { ...prev, educationInfo: [...newInfo] };
    });
  };

  const onChangeWork = (e, id) => {
    setData((prev) => {
      let newInfo = prev.workExperienceInfo.map((elem) => {
        if (elem.id === id) {
          return { ...elem, [e.target.name]: e.target.value };
        }
        return elem;
      });

      return {
        ...prev,
        workExperienceInfo: [...newInfo],
      };
    });
  };

  let edu = data.educationInfo.map((elem) => {
    return (
      <div className='form-block' key={elem.id}>
        <div className='input-cont'>
          <label htmlFor='university'>University</label>
          <input
            type='text'
            name='university'
            className='input'
            value={educationInfo[0].university}
            onChange={(e) => onChangeEdu(e, elem.id)}
          />
        </div>
        <div className='input-cont'>
          <label htmlFor='degree'>Degree</label>
          <input
            type='text'
            name='degree'
            className='input'
            value={educationInfo[0].degree}
            onChange={(e) => onChangeEdu(e, elem.id)}
          />
        </div>
        <div className='input-cont'>
          <label htmlFor='major'>major</label>
          <input
            type='text'
            name='major'
            className='input'
            value={educationInfo[0].major}
            onChange={(e) => onChangeEdu(e, elem.id)}
          />
        </div>
        <div className='input-cont'>
          <label htmlFor='cityEdu'>City</label>
          <input
            type='text'
            name='cityEdu'
            className='input'
            value={educationInfo[0].cityEdu}
            onChange={(e) => onChangeEdu(e, elem.id)}
          />
        </div>
        <div className='input-cont'>
          <label htmlFor='yearFromEdu'>Year from</label>
          <input
            type='text'
            name='yearFromEdu'
            className='input'
            value={educationInfo[0].yearFromEdu}
            onChange={(e) => onChangeEdu(e, elem.id)}
          />
        </div>
        <div className='input-cont'>
          <label htmlFor='yearToEdu'>Year to</label>
          <input
            type='text'
            name='yearToEdu'
            className='input'
            value={educationInfo[0].yearToEdu}
            onChange={(e) => onChangeEdu(e, elem.id)}
          />
        </div>
      </div>
    );
  });
  let work = data.workExperienceInfo.map((elem) => {
    return (
      <div className='form-block' key={elem.id}>
        <div className='input-cont'>
          <label htmlFor='position'>Position</label>
          <input
            type='text'
            name='position'
            className='input'
            value={workExperienceInfo[0].position}
            onChange={(e) => onChangeWork(e, elem.id)}
          />
        </div>
        <div className='input-cont'>
          <label htmlFor='company'>Company</label>
          <input
            type='text'
            name='company'
            className='input'
            value={workExperienceInfo[0].company}
            onChange={(e) => onChangeWork(e, elem.id)}
          />
        </div>
        <div className='input-cont'>
          <label htmlFor='cityWork'>City</label>
          <input
            type='text'
            name='cityWork'
            className='input'
            value={workExperienceInfo[0].cityWork}
            onChange={(e) => onChangeWork(e, elem.id)}
          />
        </div>
        <div className='input-cont'>
          <label htmlFor='yearFromWork'>Year from</label>
          <input
            type='text'
            name='yearFromWork'
            className='input'
            value={workExperienceInfo[0].yearFromWork}
            onChange={(e) => onChangeWork(e, elem.id)}
          />
        </div>
        <div className='input-cont'>
          <label htmlFor='yearToWork'>Year to</label>
          <input
            type='text'
            name='yearToWork'
            className='input'
            value={workExperienceInfo[0].yearToWork}
            onChange={(e) => onChangeWork(e, elem.id)}
          />
        </div>
      </div>
    );
  });

  return (
    <div className='edit-cv-form-page'>
      <form
        className='edit-cv-form'
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
                value={generalInfo.firstName}
                onChange={(e) => onChangeGeneral(e)}
              />
            </div>
            <div className='input-cont'>
              <label htmlFor='lastName'>Last name</label>
              <input
                type='text'
                name='lastName'
                className='input'
                value={generalInfo.lastName}
                onChange={(e) => onChangeGeneral(e)}
              />
            </div>
            <div className='input-cont'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                className='input'
                value={generalInfo.email}
                onChange={(e) => onChangeGeneral(e)}
              />
            </div>
            <div className='input-cont'>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                name='city'
                className='input'
                value={generalInfo.city}
                onChange={(e) => onChangeGeneral(e)}
              />
            </div>
            <div className='input-cont'>
              <label htmlFor='phoneNumber'>Phone number</label>
              <input
                type='text'
                name='phoneNumber'
                className='input'
                value={generalInfo.phoneNumber}
                onChange={(e) => onChangeGeneral(e)}
              />
            </div>
          </div>
        </div>
        <div className='lolo'>
          {edu}
          <button
            onClick={(e) => {
              e.preventDefault();
              setData((prev) => {
                return {
                  ...prev,
                  educationInfo: [
                    ...prev.educationInfo,
                    {
                      id: uniqid(),
                      university: '',
                      degree: '',
                      major: '',
                      cityEdu: '',
                      yearFromEdu: '',
                      yearToEdu: '',
                    },
                  ],
                };
              });
            }}
          >
            Add education info
          </button>
        </div>
        <div className='lolo'>
          {work}
          <button
            onClick={(e) => {
              e.preventDefault();
              setData((prev) => {
                return {
                  ...prev,
                  workExperienceInfo: [
                    ...prev.workExperienceInfo,
                    {
                      id: uniqid(),
                      position: '',
                      company: '',
                      cityWork: '',
                      yearFromWork: '',
                      yearToWork: '',
                    },
                  ],
                };
              });
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
export default EditCv;
