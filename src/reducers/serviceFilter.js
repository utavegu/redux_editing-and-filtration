import {FILTER_SERVICE} from '../actions/actionTypes'

const initialState = {
  filter: '',
};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    default:
        return state;
    }
  }