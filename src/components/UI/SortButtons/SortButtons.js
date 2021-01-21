import React from 'react';
import PropTypes from 'prop-types';

export const SortButtons = ({ 
    isEnglish, 
    sortType, 
    sortAction, 
    directionAction 
}) => {
	const clickSortHandler = (e) => {
		e.preventDefault();
		sortAction(e);
		document.querySelectorAll('.sort-button').forEach((button) => {
			button.classList.remove('checked');
		});
		document.querySelector(`#${e.target.id}`).classList.add('checked');
	};

	const clickDirectionHandler = (e) => {
		e.preventDefault();
		directionAction(e);
		document.querySelectorAll('.direction-button').forEach((button) => {
			button.classList.remove('checked');
		});
		document.querySelector(`#${e.target.id}`).classList.add('checked');
	};
	return (
		<>
			<div className='sort'>
				<button id='sortId' className='sort-button box' onClick={clickSortHandler}>
					{isEnglish ? 'Id' : 'Идентификатор'}
				</button>
				<button id='sortName' className='sort-button box' onClick={clickSortHandler}>
					{isEnglish ? 'Name' : 'Имя'}
				</button>
				<button id='sortAge' className='sort-button box' onClick={clickSortHandler}>
					{isEnglish ? 'Age' : 'Возраст'}
				</button>
			</div>
			<div className='sort-reverse'>
				<button
					id='sortForward'
					className='direction-button box checked'
					disabled={!sortType}
					onClick={clickDirectionHandler}
				>
					{isEnglish ? 'Sort ascending' : 'По возрастанию'}
				</button>
				<button
					id='sortBackward'
					className='direction-button box'
					disabled={!sortType}
					onClick={clickDirectionHandler}
				>
					{isEnglish ? 'Sort descending' : 'По убыванию'}
				</button>
			</div>
		</>
	);
};

SortButtons.propTypes = {
	sortType: PropTypes.string.isRequired,
	sortAction: PropTypes.func.isRequired,
	directionAction: PropTypes.func.isRequired,
	isEnglish: PropTypes.bool.isRequired
};
