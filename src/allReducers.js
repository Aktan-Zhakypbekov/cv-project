import { combineReducers } from 'redux';

function dataReducer(state = [], action) {
  if (action.type === 'ADD_DATA') {
    state = [...state, action.payload];
  }
  return state;
}

let allReducers = combineReducers({
  dataReducer,
});

export default allReducers;
