import React from 'react';
import UserImage from '../UserImage/UserImage';
import InputSearch from '../InputSearch/InputSearch';

import './UserSearch.scss'

function UserSearch() {
    return (
        <div className='user-search'>
            <UserImage />
            <InputSearch />
        </div>
    )
}

export default UserSearch;