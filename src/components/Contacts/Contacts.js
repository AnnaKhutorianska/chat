import { useState } from 'react';
import Chats from '../Chats/Chats';
import UserSearch from '../UserSearch/UserSearch';

import './Contacts.scss';

function Contacts() {
    const [search, setSearch] = useState('');

    return (
        <div className='contacts'>
            <UserSearch value={search} handleChange={setSearch} />
            <Chats search={search} />
        </div>
    )
}

export default Contacts;
