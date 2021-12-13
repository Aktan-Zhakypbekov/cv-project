import { combineReducers } from 'redux';

function generalInfo(state = [], action) {
  if (action.type === 'ADD_GENERAL_INFO') {
    return [...state, action.payload];
  }
  return state;
}

function workExperienceInfo(state = [], action) {
  if (action.type === 'ADD_EDUCATION_INFO') {
    return [...state, action.payload];
  }
  return state;
}

function educationInfo(state = [], action) {
  if (action.type === 'ADD_WORK_EXPERIENCE_INFO') {
    return [...state, action.payload];
  }
  return state;
}

let allReducers = combineReducers({
  generalInfo,
  workExperienceInfo,
  educationInfo,
});

export default allReducers;
