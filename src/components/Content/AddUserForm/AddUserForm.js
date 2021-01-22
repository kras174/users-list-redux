import React, { useState } from 'react';
import './AddUserForm.scss';
import { FormErrors } from './FormErrors/FormErrors';

const AddUserForm = ({ addUser, isEnglish }) => {
	const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [formErrors, setFormErrors] = useState('');
    
	const submitHandler = (event) => {
        // const phoneReg = new RegExp("^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$");
        const user = {
            name,
            phone
        }
        event.preventDefault();
        if (name.length > 0 && phone.length > 0) {
            if (phone) {
                addUser(user);
                setName('');
                setPhone('');
    
            } else {
                setFormErrors('В телефоне должны быть только цифры!');
            }
        } else {
            setFormErrors('Поле не должно быть пустым!');
        }
    };
    
    const inputHandler = (e) => {
        setFormErrors('');
        if (e.target.name === 'name') setName(e.target.value);
        if (e.target.name === 'phone') setPhone(e.target.value);
    }

	return (
        <div className='formWrapper'>
            <form onSubmit={submitHandler} className='addUserForm'>
                <input
                    name='name'
                    type='text'
                    id='InputName'
                    className='col form-control filter-input'
                    placeholder={isEnglish ? 'Name' : 'Имя'}
                    value={name}
                    onChange={inputHandler}
                />
                <input
                    name='phone'
                    type='number'
                    id='InputPhone'
                    className='col form-control filter-input'
                    placeholder={isEnglish ? 'Phone' : 'Телефон'}
                    value={phone}
                    onChange={inputHandler}
                />
                <button type='submit' className='btn btn--dark'>
                    {isEnglish ? 'Add user' : 'Добавить пользователя'}
                </button>
            </form>
            <FormErrors formErrors={formErrors} />
        </div>
	);
};

export default AddUserForm;
