import React from 'react';
import { NavMenu } from '../UI/NavMenu/NavMenu';
import { Input } from '../UI/InputFilter/InputFilter';
import { SortButtons } from '../UI/SortButtons/SortButtons';
import AddUserFormContainer from '../Content/AddUserForm/AddUserFormContainer';

const Header = ({
    changeLanguage,
    directionAction,
    inputFilter,
    inputFilterAction,
    inputFilterClear,
    isEnglish,
    sortAction,
    sortType,
}) => (
    <div className='header'>
        <div className='header-top'>    
            <div className='header-left'>
                <SortButtons
                    isEnglish={isEnglish}
                    sortType={sortType}
                    sortAction={sortAction}
                    directionAction={directionAction}
                />
                <Input
                    isEnglish={isEnglish}
                    inputFilter={inputFilter}
                    inputFilterAction={inputFilterAction}
                    inputFilterClear={inputFilterClear}
                />
            </div>
            <div className='header-right'>
                <NavMenu isEnglish={isEnglish} changeLanguage={changeLanguage} />
            </div>
        </div>
        <div className="header-bottom">
            <AddUserFormContainer />
        </div>
    </div>
);

export default Header;