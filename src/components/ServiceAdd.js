import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, clearService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
			evt.preventDefault();
			dispatch(addService(item.id, item.name, item.price));
	}

  const handleClear = () => {
    dispatch(clearService());
  }

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
      <div>Режим: {(item.id === 0) ? 'добавление' : 'редактирование'}</div>
			<button type='submit'>Сохранить</button>
      <button onClick={() => handleClear()} type='button'>Отмена</button>
		</form>
	);
}

export default ServiceAdd;
