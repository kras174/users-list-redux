import React, { useEffect } from 'react';
import Loader from '../../UI/Loader/Loader';
import { num2str, sortList } from '../../../helpers/helpers';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import './Preview.scss';

export const Preview = ({
	inputFilter,
	isEnglish,
	isFetching,
	sortDirection,
	sortType,
	usersList,
	fetchUsers,
	starHandler
}) => {
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	const renderPreview = () => {
		// сортировка
		if (sortType) sortList(sortType, sortDirection, usersList);
		// вывод контента
		return usersList.map((user) => {
			const iconPath = require(`../../../data/images/${user.image}.svg`);
			let videoPath = '';
			if (user.video) videoPath = require(`../../../data/videos/${user.video}.mp4`);
			// фильтрация
			if (inputFilter) {
				if (user.name.toLowerCase().indexOf(inputFilter.toLowerCase()) === -1) {
					return null;
				}
			}
			return (
				<div
					key={user.id}
					className={
						user.video ? 'users-preview-item videoContent' : 'users-preview-item'
					}
				>
					<div className='previrew-item-no-video'>
						<div className='preview-item-row'>
							<img className='preview-item-icon' src={iconPath} alt=''></img>
							<p className='preview-item-name'>{user.name}</p>
							<span className='preview-item-fav'>
								<i
									className={user.favorite ? 'fas fa-star' : 'far fa-star'}
									onClick={starHandler.bind(this, user.id)}
								/>
							</span>
						</div>

						{/*Картинка через img */}
						<p className='preview-item-age'>
							{user.age}
							{isEnglish ? ' years' : num2str(user.age, [' год', ' года', ' лет'])}
						</p>
						<p className='preview-item-phone'>
							<i className='fas fa-phone' /> {user.phone}
						</p>
						<p className='preview-item-phrase'>{user.phrase}</p>
					</div>
					{user.video && (
						<div className='previrew-item-video'>
							<ReactPlayer
								url={videoPath}
								playing
								loop
								wrapper='previrew-item-video'
							/>
						</div>
					)}
				</div>
			);
		});
	};

	return (
		<>
			{isFetching ? (
				<Loader />
			) : usersList.length !== 0 ? (
				<div className='users-preview'>{renderPreview()}</div>
			) : (
				<h2>Список пользователей пуст!</h2>
			)}
		</>
	);
};

Preview.propTypes = {
	usersList: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	starHandler: PropTypes.func.isRequired,
	inputFilter: PropTypes.string.isRequired,
	sortType: PropTypes.string,
	sortDirection: PropTypes.string,
	isEnglish: PropTypes.bool.isRequired
};
