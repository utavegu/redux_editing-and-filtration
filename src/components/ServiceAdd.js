import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, clearService, filterService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
  const filter = useSelector(state => state.serviceFilter);
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

  const handleFilter = evt => {
    const {name, value} = evt.target;
    dispatch(filterService(name, value));
  }

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
      <div>Режим: {(item.id === 0) ? 'добавление' : 'редактирование'}</div>
			<button type='submit'>Сохранить</button>
      <button onClick={() => handleClear()} type='button'>Отмена</button>
      <p>
        <label> 
          Фильтрация <input name='filter' onChange={handleFilter} value={filter.filter}></input>
        </label>
      </p>
		</form>
	);
}

export default ServiceAdd;
