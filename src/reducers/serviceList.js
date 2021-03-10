import {ADD_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes'

let i = 1;
const initialState = [
  {id: i++, name: 'Замена стекла', price: 21000},
  {id: i++, name: 'Замена дисплея', price: 25000},
  {id: i++, name: 'Протереть дисплей', price: 4000},
  {id: i++, name: 'Почистить динамик', price: 10000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      let {id, name, price} = action.payload;
      if (id===0) {
        id = i++;
        return [...state, {id, name, price: Number(price)}];
      }
      state.forEach((stateItem) => {
        if (stateItem.id === id) {
          stateItem.name = name;
          stateItem.price = price;
          return [...state];
        } 
      })
    case REMOVE_SERVICE:
      const {removeId} = action.payload;
      return state.filter(service => service.id !== removeId);
    default:
      return state;
  }
}
