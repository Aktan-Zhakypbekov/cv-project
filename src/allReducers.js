import { combineReducers } from 'redux';

function dataReducer(state = [], action) {
  if (action.type === 'ADD_DATA') {
    state = [...state, action.payload];
  } else if (action.type === 'EDIT_DATA') {
    let newArr = state.map((elem) => {
      if (elem.id === action.payload.id) {
        elem = JSON.parse(JSON.stringify(action.payload));
      }
      return elem;
    });
    return newArr;
  }
  return state;
}

let allReducers = combineReducers({
  dataReducer,
});

export default allReducers;
