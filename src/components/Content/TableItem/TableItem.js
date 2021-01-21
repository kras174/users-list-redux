import React, { useState } from 'react';
import { num2str } from '../../../helpers/helpers';
import PropTypes from 'prop-types';
import './TableItem.scss';

const TableItem = ({ user, deleteHandler, starHandler, isEnglish, saveUser }) => {
	const [isEdit, setEdit] = useState(false);
	const [editName, setName] = useState(user.name);
	const [editPhone, setPhone] = useState(user.phone);

	const editHandler = (id) => {
		if (isEdit) {
			setEdit(false);
			saveUser(id, editName, editPhone);
		} else {
			setEdit(true);
		}
	};

	const iconPath = require(`../../../data/images/${user.image}.svg`);

	const renderEditableName = () =>
		!isEdit ? (
			<p>{user.name}</p>
		) : (
			<input
				type='text'
				id='InputName'
				className='col form-control filter-input'
				placeholder={isEnglish ? 'Name' : 'Имя'}
				aria-describedby='addName'
				value={editName}
				onChange={(e) => setName(e.target.value)}
				required
			/>
		);

	const renderEditablePhone = () =>
		!isEdit ? (
			<p>{user.phone}</p>
		) : (
			<input
				type='tel'
				id='InputPhone'
				className='col form-control filter-input'
				placeholder={isEnglish ? 'Phone' : 'Телефон'}
				aria-describedby='addPhone'
				value={editPhone}
				onChange={(e) => setPhone(e.target.value)}
				required
			/>
		);

	const renderFavoriteButton = () => (
		<span className='table-item-fav'>
			<i
				className={user.favorite ? 'fas fa-star' : 'far fa-star'}
				onClick={starHandler.bind(this, user.id)}
			/>
		</span>
	);

	const renderAge = () => (
		<p className='table-item-age'>
			{user.age}
			{isEnglish ? ' years' : num2str(user.age, [' год', ' года', ' лет'])}
		</p>
	);
	return (
		<div className='users-table-item'>
			<div className='table-item-id'>{user.id + 1}</div>
			<img className='table-item-icon' src={iconPath} alt='' />
			<div className='table-item-name'>{renderEditableName()}</div>
			{renderAge()}
			<div className='table-item-phone'>{renderEditablePhone()}</div>
			<button className='btn btn--light' onClick={() => editHandler(user.id)}>
				{isEdit ? 'Save' : 'Edit'}
			</button>
			<button className='btn btn--dark' onClick={() => deleteHandler(user.id)}>
				Delete
			</button>
			{renderFavoriteButton()}
		</div>
	);
};

export default TableItem;

TableItem.propTypes = {
	starHandler: PropTypes.func.isRequired,
	isEnglish: PropTypes.bool.isRequired
};
