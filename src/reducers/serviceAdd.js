import {CHANGE_SERVICE_FIELD, CLEAR_SERVICE, EDIT_SERVICE} from '../actions/actionTypes'

const initialState = {
  id: 0,
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case EDIT_SERVICE:
      const {editId, editName, editPrice} = action.payload;
      return {...state, id: editId, name: editName, price: editPrice};
    case CLEAR_SERVICE:
      return {...state, id: 0, name: '', price: ''};
    default:
      return state;
  }
}
