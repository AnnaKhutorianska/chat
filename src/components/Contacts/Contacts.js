import React from 'react';
import Chats from '../Chats/Chats';
import UserSearch from '../UserSearch/UserSearch';

import './Contacts.scss';

function Contacts() {
    return (
        <div className='contacts'>
            <UserSearch />
            <Chats />
        </div>
    )
}

export default Contacts;
