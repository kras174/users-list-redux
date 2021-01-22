import React from 'react';

export const FormErrors = ({formErrors}) => (
	<div className='formErrors'>{formErrors ? formErrors : ''}</div>
);
