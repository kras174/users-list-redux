export const SORT_BUTTON_CLICK = 'SORT_BUTTON_CLICK';
export const DIRECTION_BUTTON_CLICK = 'DIRECTION_BUTTON_CLICK';

export const sortAction = (e) => {
	return (dispatch) => {
		dispatch({
			type: SORT_BUTTON_CLICK,
			payload: e.target.id.slice(4)
		});
	};
}

export const directionAction = (e) => {
	return (dispatch) => {
		dispatch({
			type: DIRECTION_BUTTON_CLICK,
			payload: e.target.id.slice(4)
		});
	};
}
