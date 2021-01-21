import React, { useState } from 'react';
import './AddUserForm.scss';

const AddUserForm = ({ addUser, isEnglish }) => {
	const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
	const submitHandler = (event) => {
        const user = {
            name,
            phone
        }
        event.preventDefault();
        addUser(user);
		setName('');
		setPhone('');
	};

	return (
		<form onSubmit={submitHandler} className='addUserForm'>
            <input
                type='text'
                id='InputName'
                className='col form-control filter-input'
                placeholder={isEnglish ? 'Name' : 'Имя'}
                aria-describedby='addName'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type='tel'
                id='InputPhone'
                className='col form-control'
                placeholder={isEnglish ? 'Phone' : 'Телефон'}
                aria-describedby='addPhone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button type='submit' className='btn btn-primary'>
                Add user
            </button>
		</form>
	);
};

export default AddUserForm;
