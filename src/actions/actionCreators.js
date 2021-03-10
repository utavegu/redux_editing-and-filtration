import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CLEAR_SERVICE, FILTER_SERVICE } from './actionTypes';

export function addService(id, name, price) {
  return {type: ADD_SERVICE, payload: {id, name, price}};
}

export function removeService(removeId) {
  return {type: REMOVE_SERVICE, payload: {removeId}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function editService(editId, editName, editPrice) {
  return {type: EDIT_SERVICE, payload: {editId, editName, editPrice}};
}

export function clearService() {
  return {type: CLEAR_SERVICE};
}

export function filterService(name, value) {
  return {type: FILTER_SERVICE, payload: {name, value}};
}
