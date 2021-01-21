import React, { useEffect } from 'react';
import Loader from '../../UI/Loader/Loader';
import { sortList } from '../../../helpers/helpers';
import PropTypes from 'prop-types';
import './Table.scss';
import TableItem from '../TableItem/TableItemContainer';

export const Table = ({
	inputFilter,
	isFetching,
	sortDirection,
	sortType,
	usersList,
    fetchUsers,
    deleteUser,
}) => {
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	const deleteHandler = (id) => {
		deleteUser(id);
	};

	const renderTable = () => {
		// сортировка
		if (sortType) sortList(sortType, sortDirection, usersList);
		// вывод списка
		return usersList.map((user, id) => {
			//фильтрация
			if (inputFilter) {
				if (user.name.toLowerCase().indexOf(inputFilter.toLowerCase()) === -1) {
					return null;
				}
			}

			return <TableItem key={id} user={user} deleteHandler={deleteHandler} />;
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
	deleteUser: PropTypes.func.isRequired,
	usersList: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	inputFilter: PropTypes.string.isRequired,
	sortType: PropTypes.string,
	sortDirection: PropTypes.string
};
