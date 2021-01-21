import React, { useEffect } from 'react';
import Loader from '../../UI/Loader/Loader';
import { num2str, sortList } from '../../../helpers/helpers';
import PropTypes from 'prop-types';
import './Table.scss';

export const Table = ({
	inputFilter,
	isEnglish,
	isFetching,
	sortDirection,
	sortType,
	usersList,
    fetchUsers,
    starHandler,
}) => {
    useEffect(() => {
		fetchUsers();
    }, [fetchUsers]);

	const renderTable = () => {
		// сортировка
		if (sortType) sortList(sortType, sortDirection, usersList);
		// вывод списка
		return usersList.map((user, id) => {
			const iconPath = require(`../../../data/images/${user.image}.svg`);
			//фильтрация
			if (inputFilter) {
				if (user.name.toLowerCase().indexOf(inputFilter.toLowerCase()) === -1) {
					return null;
				}
			}

			return (
				<div key={id} className='users-table-item'>
					<div className='table-item-id'>{user.id}</div>
					{/*Картинка через img */}
					<img className='table-item-icon' src={iconPath} alt=''></img>
					<p className='table-item-name'>{user.name}</p>
					<p className='table-item-age'>
						{user.age}
						{isEnglish ? ' years' : num2str(user.age, [' год', ' года', ' лет'])}
					</p>
					<p className='table-item-phone'>{user.phone}</p>
					<span className='table-item-fav'>
						<i
							className={user.favorite ? 'fas fa-star' : 'far fa-star'}
							onClick={starHandler.bind(this, user.id)}
						/>
					</span>
				</div>
			);
		});
	};

	return (
		<>
			{isFetching ? (
				<Loader />
			) : usersList.length !== 0 ? (
				<div className='users-table'>{renderTable()}</div>
			) : (
				<h2>Список пользователей пуст!</h2>
			)}
		</>
	);
};

Table.propTypes = {
	usersList: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	starHandler: PropTypes.func.isRequired,
	inputFilter: PropTypes.string.isRequired,
	sortType: PropTypes.string,
	sortDirection: PropTypes.string,
	isEnglish: PropTypes.bool.isRequired
};
