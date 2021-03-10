import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService, clearService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const filter = useSelector(state => state.serviceFilter);
  const dispatch = useDispatch();
  
  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(clearService());
  }

  const handleEdit = evt => {
    dispatch(editService(evt.id, evt.name, evt.price));
  }

  return (
    <ul>
      {items.filter(item => item.name.toLowerCase().indexOf(filter.filter.toLowerCase()) > -1).map(o => (
        <li key={o.id}>
          id-{o.id} {o.name} {o.price}
          <button onClick={() => handleEdit(o)} className="button-edit"></button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
