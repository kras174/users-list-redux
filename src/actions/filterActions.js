export const INPUT_FILTER_CHANGE = 'INPUT_FILTER_CHANGE';
export const INPUT_FILTER_CLEAR = 'INPUT_FILTER_CLEAR';

export const inputFilterAction = (e) => {
	return (dispatch) => {
		dispatch({
			type: INPUT_FILTER_CHANGE,
			payload: e.target.value
		});
	};
}

export const inputFilterClear = () => {
	return (dispatch) => {
		dispatch({
			type: INPUT_FILTER_CLEAR
		});
	};
}
