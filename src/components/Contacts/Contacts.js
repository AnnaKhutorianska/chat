import React from 'react';
import Chats from '../Chats/Chats';
import UserSearch from '../UserSearch/UserSearch';

function Contacts() {
    return (
        <div className='contacts'>
            <UserSearch />
            <Chats />
        </div>
    )
}

export default Contacts;
